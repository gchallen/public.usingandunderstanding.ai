import { existsSync } from "fs";
import { join } from "path";
import type { MeetingDefinition } from "../content/types";

/**
 * The checks that need the kit's own directory layout.
 *
 * `validateMeeting` in the web app checks a meeting against itself: ids resolve,
 * boards have entries, structure is sane. It cannot know whether the reading a
 * block names is one the kit actually ships, because that depends on what else
 * got built. Those are the failures an adopter hits, and until now nothing
 * looked for them: the generator had no throw, no error path, and exited 0 on
 * work that was silently wrong.
 *
 * Separate module so the build and the generator shipped in `tools/` run the
 * same checks rather than growing two versions that drift.
 */

export interface KitProblem {
  slug: string;
  kind:
    | "unresolved-reading"
    | "missing-prompt"
    | "missing-pattern-chapter"
    | "slug-mismatch"
    | "no-feedback-stage";
  message: string;
}

interface KitPaths {
  /** Directory holding the annotation files, one per shipped reading. */
  readings: string;
  /** Directory holding `preparations/` and `group-chats/`. */
  prompts: string;
  /** Directory holding one chapter per substitution pattern. */
  patterns: string;
}

const stripDate = (s: string): string => s.replace(/^\d{4}-\d{2}-\d{2}-/, "");

/**
 * Meetings that end without a feedback block on purpose, with the reason. The
 * rule is stated with no exceptions, so an exception has to be written down
 * somewhere a reader will find it rather than inferred from the absence.
 */
const FEEDBACK_EXEMPT: Record<string, string> = {
  "2026-05-05-reflection-and-synthesis":
    "the whole meeting is feedback; rounds 2 and 3 collect it and the round 3 share-out is the close",
};

/** Every block in a meeting, including the ones nested inside wrappers. */
function* walk(meeting: MeetingDefinition): Generator<Record<string, unknown>> {
  const visit = function* (blocks: unknown[]): Generator<Record<string, unknown>> {
    for (const block of blocks as Record<string, unknown>[]) {
      yield block;
      if (Array.isArray(block.content)) yield* visit(block.content);
    }
  };
  yield* visit(meeting.intro ?? []);
  for (const stage of meeting.activity?.stages ?? []) {
    yield* visit(stage.content ?? []);
    yield* visit(stage.group?.content ?? []);
  }
  yield* visit(meeting.outro ?? []);
}

/** True when the meeting runs an activity, which is what the feedback rule is about. */
function hasStages(meeting: MeetingDefinition): boolean {
  return (meeting.activity?.stages?.length ?? 0) > 0;
}

function endsWithFeedback(meeting: MeetingDefinition): boolean {
  const stages = meeting.activity?.stages ?? [];
  const last = stages[stages.length - 1];
  if (!last) return false;
  return (last.content ?? []).some((b) => (b as { type?: string }).type === "feedback");
}

export function validateForKit(
  meeting: MeetingDefinition,
  slug: string,
  paths: KitPaths,
  patternFor: (blockType: string) => string | null
): KitProblem[] {
  const problems: KitProblem[] = [];
  const say = (kind: KitProblem["kind"], message: string) => problems.push({ slug, kind, message });

  if (meeting.activity?.meetingSlug && meeting.activity.meetingSlug !== slug) {
    say(
      "slug-mismatch",
      `activity.meetingSlug is "${meeting.activity.meetingSlug}" but the file is "${slug}". Nothing reads the field, so the mismatch is invisible until someone trusts it.`
    );
  }

  for (const block of walk(meeting)) {
    const type = typeof block.type === "string" ? block.type : "";

    if (type === "reading-link" && typeof block.slug === "string") {
      const reading = stripDate(block.slug);
      if (!existsSync(join(paths.readings, `${reading}.md`))) {
        say(
          "unresolved-reading",
          `reading-link "${reading}" has no annotation in readings/. It emits as a bare title with no link, which looks like a citation and is not one.`
        );
      }
    }

    if (type === "preparation-chat" || type === "group-chat") {
      const dir = type === "preparation-chat" ? "preparations" : "group-chats";
      const name = typeof block.slug === "string" ? block.slug : "";
      if (name && !existsSync(join(paths.prompts, dir, `${name}.md`))) {
        say(
          "missing-prompt",
          `${type} "${name}" has no prompt in prompts/${dir}/. The guide still tells an instructor to print criteria that do not exist.`
        );
      }
    }

    const pattern = patternFor(type);
    if (pattern && !existsSync(join(paths.patterns, `${pattern}.md`))) {
      say(
        "missing-pattern-chapter",
        `${type} substitutes to the "${pattern}" pattern, which has no chapter. The callout tells a reader to look up a procedure that is not there.`
      );
    }
  }

  if (hasStages(meeting) && !endsWithFeedback(meeting) && !(slug in FEEDBACK_EXEMPT)) {
    say(
      "no-feedback-stage",
      "activity meeting does not end with a feedback block. It is the only systematic signal about whether the session worked, and AGENTS.md states the rule with no exceptions."
    );
  }

  return problems;
}

/** One line per problem, grouped by meeting, for a build log. */
export function formatProblems(problems: KitProblem[]): string {
  const bySlug = new Map<string, KitProblem[]>();
  for (const p of problems) bySlug.set(p.slug, [...(bySlug.get(p.slug) ?? []), p]);
  return [...bySlug.entries()]
    .map(([slug, list]) =>
      [`  ${slug}`, ...list.map((p) => `    ${p.kind}: ${p.message}`)].join("\n")
    )
    .join("\n");
}
