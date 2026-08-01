#!/usr/bin/env bun
/** Regenerate instructor guides and student handouts from the meeting definitions. */
import { mkdirSync, readdirSync, writeFileSync } from "fs";
import { basename, join, resolve } from "path";
import { $ } from "bun";
import { emitMeeting, type StageTiming } from "./emit";

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
        .map((f) => basename(f, ".ts"));

for (const slug of slugs) {
  const meeting = (await import(join(meetingsDir, `${slug}.ts`))).default;
  const dir = join(ROOT, "guide/20-meetings", slug);
  mkdirSync(dir, { recursive: true });
  for (const variant of ["instructor", "student"] as const) {
    const { markdown } = emitMeeting(meeting, variant, timings[slug]);
    writeFileSync(join(dir, variant === "instructor" ? "guide.md" : "handout.md"), markdown);
  }
  console.log(`  ${slug}`);
}
console.log(`${slugs.length} meetings regenerated`);
