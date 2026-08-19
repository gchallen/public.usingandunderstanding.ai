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
    | "no-feedback-stage"
    | "unknown-dependency"
    | "undeclared-back-reference"
    | "unlinked-reading"
    | "thin-criterion";
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

/**
 * Phrases that tell students the class was somewhere before. An audit found
 * thirteen of these across eight meetings, nine of them in prose students read,
 * and every one passed validation because the only dependency check was that a
 * declared slug resolves. The field exists to make reordering safe, and a
 * meeting that refers backward without declaring it is the exact case it was
 * added for.
 *
 * Forward-looking sentences use the same words ("on Tuesday we'll explore"), so
 * the patterns require a past-tense subject.
 */
const LOOKS_BACKWARD =
  /\b(?:last (?:week|Tuesday|Thursday|time)|previous session|earlier in the (?:semester|course))\b|\b(?:on|since) (?:Monday|Tuesday|Wednesday|Thursday|Friday) (?:you|we) (?:saw|explored|built|trained|used|ranked|discussed|read)\b|\byou(?:'ve| have) (?:seen|explored|already)\b|\byou already know\b/i;

/**
 * Prose a student reads, where an unexplained back-reference actually lands.
 *
 * Instructor-only content is a block *type*, not an `instructorOnly` flag on a
 * block, so the original filter here matched nothing and the walker descended
 * into instructor-only wrappers anyway. A facilitation note mentioning last
 * week got a hard refusal that called it student-facing, which is worse than no
 * check: it is a check that lies about what it found.
 */
function studentProse(meeting: MeetingDefinition): string {
  const parts: string[] = [];
  const visit = (blocks: unknown[]): void => {
    for (const block of (blocks ?? []) as Record<string, unknown>[]) {
      if (block.type === "instructor-only") continue;
      if (typeof block.content === "string") parts.push(block.content);
      else if (Array.isArray(block.content)) visit(block.content);
    }
  };
  // The summary and every feedback prompt print to the student handout too.
  if (typeof meeting.frontmatter.summary === "string") parts.push(meeting.frontmatter.summary);
  visit(meeting.intro ?? []);
  for (const stage of meeting.activity?.stages ?? []) {
    // facilitationNotes and transition are instructor-side by definition.
    visit(stage.content ?? []);
    visit(stage.group?.content ?? []);
  }
  visit(meeting.outro ?? []);
  for (const block of walk(meeting)) {
    if (block.type === "feedback" && typeof block.prompt === "string") parts.push(block.prompt);
  }
  return parts.join("\n");
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

function hasReadingBlock(meeting: MeetingDefinition): boolean {
  for (const block of walk(meeting)) if (block.type === "reading-link") return true;
  return false;
}

/**
 * Student-facing only, both halves.
 *
 * The first version of this read every string on every block, which meant an
 * expected-response prompt that prints only to the instructor guide could
 * trigger a refusal saying "student prose names a reading", and a link inside
 * an instructor-only block could suppress a real student-facing violation.
 * That is the same mistake the back-reference check made and had fixed.
 */
function linksToAReading(meeting: MeetingDefinition): boolean {
  return /\]\(\/readings\//.test(studentProse(meeting));
}

/**
 * Prose that assigns something to read or watch without linking it.
 *
 * "before today's discussion" used to be one of these. It is a scheduling
 * phrase that names no reading, and it refused a build over "Charge your laptop
 * before today's discussion."
 */
function namesAReading(meeting: MeetingDefinition): boolean {
  return /\b(?:the reading|the article|the documentary|the annotated transcript|complete the reading|assigned reading)\b/i.test(
    studentProse(meeting)
  );
}

export function validateForKit(
  meeting: MeetingDefinition,
  slug: string,
  paths: KitPaths,
  patternFor: (blockType: string) => string | null,
  known: Set<string> = new Set()
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

  for (const dep of meeting.frontmatter.dependsOn ?? []) {
    if (!known.has(dep)) {
      say(
        "unknown-dependency",
        `dependsOn names "${dep}", which is not a meeting in this kit. Either the slug is wrong or the meeting it refers back to was not shipped.`
      );
    }
  }

  // A reading named in prose without a markdown link. The index derives its
  // Reading column by looking for a link, so an edit that drops one silently
  // flips a meeting to "assigns no reading" and the build still exits 0. The
  // AlphaGo meeting is the only one that assigns its reading this way, and its
  // column is right only because its prose happens to carry the link.
  if (!hasReadingBlock(meeting) && !linksToAReading(meeting) && namesAReading(meeting)) {
    say(
      "unlinked-reading",
      "student prose names a reading but does not link to it, so the index will say this meeting assigns none. Link it, or the column an adopter chooses from is wrong."
    );
  }

  if ((meeting.frontmatter.dependsOn ?? []).length === 0) {
    const match = studentProse(meeting).match(LOOKS_BACKWARD);
    if (match) {
      say(
        "undeclared-back-reference",
        `student-facing prose says "${match[0]}" but the meeting declares no dependsOn. Name what it refers back to, so someone reordering the semester finds out what they broke.`
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
