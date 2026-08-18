#!/usr/bin/env bun
/** Regenerate instructor guides and student handouts from the meeting definitions. */
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import { basename, join, resolve } from "path";
import { $ } from "bun";
import type { MeetingDefinition } from "../content/types";
import { emitMeeting, type StageTiming } from "./emit";
import { formatProblems, validateForKit } from "./kit-validate";
import { buildMeetingIndex } from "./meeting-index";
import { handlingFor } from "./substitutions";

const ROOT = resolve(import.meta.dir, "..");
const meetingsDir = join(ROOT, "content/meetings");

let timings: Record<string, StageTiming[]> = {};
try {
  const raw = await import(join(ROOT, "content/timings.json"), { with: { type: "json" } });
  timings = (raw.default?.meetings ?? {}) as Record<string, StageTiming[]>;
} catch {
  // Planned times only.
}

const requested = process.argv.slice(2).filter((a) => !a.startsWith("-"));
const slugs =
  requested.length > 0
    ? requested
    : readdirSync(meetingsDir)
        .filter((f) => f.endsWith(".ts"))
        .map((f) => basename(f, ".ts"))
        // Sorted, or the generated index comes out in directory order and
        // differs from the build's for no reason anyone can see.
        .sort();

// Which annotations exist, so a rewritten reading link points at a real file.
const shipped = new Map();
for (const file of readdirSync(join(ROOT, "readings"))) {
  if (!file.endsWith(".md") || file === "README.md") continue;
  const head = readFileSync(join(ROOT, "readings", file), "utf-8").split("\n").slice(0, 6).join("\n");
  const title = head.match(/^# (.+)$/m)?.[1] ?? basename(file, ".md");
  const source = head.match(/^.+ · (.+?) · /m)?.[1] ?? "";
  shipped.set(basename(file, ".md"), { title, source });
}

const problems = [];
for (const slug of slugs) {
  const meeting = (await import(join(meetingsDir, `${slug}.ts`))).default;
  problems.push(
    ...validateForKit(
      meeting,
      slug,
      {
        readings: join(ROOT, "readings"),
        prompts: join(ROOT, "content/prompts"),
        patterns: join(ROOT, "guide/10-patterns"),
      },
      (blockType) => {
        const handling = handlingFor(blockType as Parameters<typeof handlingFor>[0]);
        return handling?.kind === "substitute" ? handling.pattern : null;
      }
    )
  );
}

if (problems.length > 0) {
  console.error(`\nRefusing to generate. ${problems.length} problem(s):\n${formatProblems(problems)}\n`);
  process.exit(1);
}

// Emit everything before writing anything. The write loop used to be
// unguarded, so a crash partway through left half the tree regenerated and half
// stale -- against a documented promise that a failed run writes nothing.
const pending = [];
for (const slug of slugs) {
  const meeting = (await import(join(meetingsDir, `${slug}.ts`))).default;
  const dir = join(ROOT, "guide/20-meetings", slug);
  for (const variant of ["instructor", "student"] as const) {
    const { markdown } = emitMeeting(meeting, variant, timings[slug], shipped);
    pending.push({
      path: join(dir, variant === "instructor" ? "guide.md" : "handout.md"),
      dir,
      markdown,
    });
  }
}

for (const { path, dir, markdown } of pending) {
  mkdirSync(dir, { recursive: true });
  writeFileSync(path, markdown);
}
for (const slug of slugs) console.log(`  ${slug}`);

// Regenerate the index too, or editing a meeting leaves the table an adopter
// chose from disagreeing with the guide they land on.
if (requested.length === 0) {
  const all: Record<string, MeetingDefinition> = {};
  for (const slug of slugs) all[slug] = (await import(join(meetingsDir, `${slug}.ts`))).default;
  writeFileSync(join(ROOT, "guide/20-meetings/README.md"), buildMeetingIndex(slugs, all));
  console.log("  index");
}
console.log(`${slugs.length} meetings regenerated`);
