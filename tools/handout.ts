#!/usr/bin/env bun
/** Regenerate instructor guides and student handouts from the meeting definitions. */
import { existsSync, mkdirSync, readFileSync, readdirSync, rmSync, writeFileSync } from "fs";
import { basename, dirname, join, resolve } from "path";
import { $ } from "bun";
import type { MeetingDefinition } from "../content/types";
import {
  assessmentToOralExam,
  assessmentToWrittenExam,
  buildAssessmentIndex,
} from "./assessment-export";
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
// Every meeting, regardless of what was requested, because the index describes
// all of them.
const allSlugs = readdirSync(meetingsDir)
  .filter((f) => f.endsWith(".ts"))
  .map((f) => basename(f, ".ts"))
  .sort();
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
      },
      new Set(slugs)
    )
  );
}

if (problems.length > 0) {
  console.error(`\nRefusing to generate. ${problems.length} problem(s):\n${formatProblems(problems)}\n`);
  process.exit(1);
}

// The assessments, from the same sources, so editing a criterion and running
// this once updates the oral script, the paper, and the marking scheme together.
const assessmentsDir = join(ROOT, "content/assessments");
const assessmentFiles = existsSync(assessmentsDir)
  ? readdirSync(assessmentsDir)
      .filter((f) => f.endsWith(".md"))
      .sort()
  : [];

// Emit everything before writing anything. The write loop used to be
// unguarded, so a crash partway through left half the tree regenerated and half
// stale -- against a documented promise that a failed run writes nothing.
const pending = [];
for (const file of assessmentFiles) {
  const raw = readFileSync(join(assessmentsDir, file), "utf-8");
  const slug = basename(file, ".md");
  const dir = join(ROOT, "assessments", slug);
  const { paper, marking } = assessmentToWrittenExam(raw);
  pending.push(
    { path: join(dir, "oral.md"), dir, markdown: assessmentToOralExam(raw) },
    { path: join(dir, "written.md"), dir, markdown: paper },
    { path: join(dir, "written-marking.md"), dir, markdown: marking }
  );
}

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

// Both indexes, on every run. Gating the meeting index on a full run meant
// `bun run handout <slug>` -- the form the docs recommend -- produced a guide
// saying 99m beside an index still saying 65m, which is the exact drift the
// index exists to prevent. Regenerating always costs importing every meeting on
// a single-slug run, which is cheap and correct.
const everyMeeting: Record<string, MeetingDefinition> = {};
for (const slug of allSlugs) {
  everyMeeting[slug] = (await import(join(meetingsDir, `${slug}.ts`))).default;
}
pending.push({
  path: join(ROOT, "guide/20-meetings/README.md"),
  dir: join(ROOT, "guide/20-meetings"),
  markdown: buildMeetingIndex(allSlugs, everyMeeting),
});
if (assessmentFiles.length > 0) {
  pending.push({
    path: join(ROOT, "assessments/README.md"),
    dir: join(ROOT, "assessments"),
    markdown: buildAssessmentIndex(
      assessmentFiles.map((f) => ({
        slug: basename(f, ".md"),
        raw: readFileSync(join(assessmentsDir, f), "utf-8"),
      }))
    ),
  });
}

// Keep what each file said before overwriting it, and put it back if any write
// fails. Emitting first only covers a crash while emitting; a read-only file or
// a full disk partway through the write loop still left the tree half
// regenerated, which is the state the promise above is about.
const undo: { path: string; previous: string | null }[] = [];
try {
  for (const { path, dir, markdown } of pending) {
    mkdirSync(dir, { recursive: true });
    undo.push({ path, previous: existsSync(path) ? readFileSync(path, "utf-8") : null });
    writeFileSync(path, markdown);
  }
} catch (error) {
  // The file that failed is the last one pushed, and it was never written, so
  // restoring it is both unnecessary and the thing most likely to fail again --
  // which is how a successful rollback printed "the tree is half regenerated".
  undo.pop();
  for (const { path, previous } of undo.reverse()) {
    try {
      // Remove the directory too when this run created it, or a rollback leaves
      // an empty assessment directory behind that looks like a shipped
      // assessment with its files missing.
      if (previous === null) {
        rmSync(path, { force: true });
        const parent = dirname(path);
        if (existsSync(parent) && readdirSync(parent).length === 0) {
          rmSync(parent, { recursive: true });
        }
      } else {
        writeFileSync(path, previous);
      }
    } catch {
      console.error(`  could not restore ${path}; the tree is half regenerated`);
    }
  }
  console.error(`\nWrite failed, so nothing was regenerated: ${(error as Error).message}`);
  process.exit(1);
}

for (const slug of slugs) console.log(`  ${slug}`);
if (requested.length === 0) {
  console.log("  index");
  if (assessmentFiles.length > 0) console.log(`  ${assessmentFiles.length} assessments`);
}
console.log(`${slugs.length} meetings regenerated`);
