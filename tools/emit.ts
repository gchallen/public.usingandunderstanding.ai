import type { ContentBlock, MeetingDefinition, StageDefinition } from "../content/types";
import { handlingFor, type PatternId } from "./substitutions";

export type Variant = "instructor" | "student";

/** Enough of a reading to cite it on paper. */
export interface ReadingCitation {
  title: string;
  source: string;
}

/** One stage as actually run in Spring 2026, from content/timings.json. */
export interface StageTiming {
  index: number;
  label: string;
  plannedSeconds: number | null;
  actualSeconds: number | null;
  medianStudentSeconds: number | null;
  completions: number;
  note: string;
  /** False when the recorded duration reflects when the instructor advanced. */
  reliable: boolean;
}

function formatMinutes(seconds: number): string {
  const m = seconds / 60;
  return m >= 10 ? `${Math.round(m)}m` : `${Math.round(m * 10) / 10}m`;
}

/** Where a printed handout needs writing space, and how much. */
const DEFAULT_SUBMISSION_LINES = 4;
const FEEDBACK_LINES = 4;

/**
 * A ruled line a student writes on: escaped underscores, which render as a
 * literal line to write on in GitHub, an editor preview, and pandoc.
 *
 * This was a `<div class="rule">` for a PDF pipeline that is not shipped here,
 * so every writing space on every handout collapsed to nothing and the pages
 * went out blank where students were meant to write. A bare `___` fixed the
 * invisibility but parses as a thematic break, which is a rule across the page
 * rather than a line under a question.
 */
const RULE = "\\_".repeat(46);

/**
 * Human-facing names for the analog procedures, matching the chapter filenames
 * in `guide/10-patterns/`.
 */
const PATTERN_TITLES: Record<PatternId, string> = {
  "card-sort": "Card Sort",
  "gallery-walk": "Gallery Walk",
  "role-discussion": "Structured Role Discussion",
  "reading-ticket": "Reading Ticket",
  demos: "Demos",
  "external-tool": "External Tools",
};

/**
 * What a student actually does when the software is gone. The instructor-facing
 * note explains why; this is the line on the handout that tells them to act.
 */
const STUDENT_INSTRUCTIONS: Record<PatternId, string> = {
  "card-sort": "Write each idea on its own card, with your name in the corner. Hand them forward.",
  "gallery-walk":
    "Leave your work open on your device. Half the room walks while half explain, then swap.",
  "role-discussion":
    "Your instructor will read out the objectives for this discussion. Whoever holds the chair card keeps everyone in, and it rotates when time is called.",
  "reading-ticket":
    "Bring your reading ticket. Swap with a partner, answer what they did not understand if you can, write down what neither of you could resolve, then hand both in.",
  demos:
    "Open the tool your instructor names. The originals are hosted at usingandunderstanding.ai/resources.",
  "external-tool": "Your instructor will tell you how to get access.",
};

interface EmitContext {
  variant: Variant;
  /** Patterns referenced by this meeting, in first-use order. */
  patternsUsed: Set<PatternId>;
  /** Heading level that markdown block content nests under. */
  headingBase: number;
  /** Stage label, so content does not repeat it as its own heading. */
  stageLabel?: string;
  /** How this meeting actually ran, indexed by stage. */
  timings?: StageTiming[];
  /** Citations for the annotations shipped alongside, keyed by dateless slug. */
  readings: Map<string, ReadingCitation>;
}

/**
 * Meeting prose was written for the original course website, so its links are
 * site-absolute and resolve to nothing here. A handout that tells a student to
 * follow a dead link is the clearest possible sign nobody read the output.
 *
 * A reading becomes a link to the annotation file shipped next to it. A page
 * that is public on the original site becomes an absolute URL, which is still
 * useful to an adopter. Anything that needed a login, or belonged to that one
 * offering, loses the link and keeps its text.
 */
/**
 * The course names its instructor in student-facing prose, which is right for
 * the course and wrong for a kit. An adopter photocopying a handout should not
 * be handing their students a page about someone who is not in the room.
 */
function deNameInstructor(markdown: string): string {
  return markdown
    .replace(/\bGeoff will\b/g, "Your instructor will")
    .replace(/\bwhen Geoff signals\b/g, "when your instructor signals")
    .replace(/\bGeoff's\b/g, "your instructor's")
    .replace(/\bGeoff\b/g, "your instructor");
}

function rewriteSiteLinks(markdown: string, readings: Map<string, ReadingCitation>): string {
  return markdown.replace(/\[([^\]]+)\]\((\/[^)\s]*)\)/g, (_whole, text: string, href: string) => {
    const path = href.split("#")[0] ?? "";

    if (path.startsWith("/readings/")) {
      const slug = path.slice("/readings/".length).replace(/^\d{4}-\d{2}-\d{2}-/, "");
      // Three levels up from guide/20-meetings/<meeting>/ to the repository root.
      return readings.has(slug) ? `[${text}](../../../readings/${slug}.md)` : text;
    }

    // Public on the original site: the assessment demo, its design write-up,
    // and the course blog. Everything else there wants a course login.
    const isPublic =
      path === "/design/assessments" ||
      path.startsWith("/blog/") ||
      (path.startsWith("/assessments/") && path !== "/assessments/");
    return isPublic ? `[${text}](https://www.usingandunderstanding.ai${href})` : text;
  });
}

/**
 * Meeting markdown was authored as a standalone document, so it carries its own
 * `#` and `##` headings. Push them below the level of the section they now sit
 * in, or the guide's structure collapses.
 */
function demoteHeadings(markdown: string, base: number): string {
  const levels = [...markdown.matchAll(/^(#{1,6}) /gm)].map((m) => (m[1] ?? "").length);
  if (levels.length === 0) return markdown;

  // Shift by the block's own shallowest heading rather than absolutely, so a
  // block authored at `###` lands at `base` instead of being buried at h6.
  const shallowest = Math.min(...levels);
  return markdown.replace(/^(#{1,6}) /gm, (_match, hashes: string) => {
    const level = Math.min(hashes.length - shallowest + base, 6);
    return `${"#".repeat(level)} `;
  });
}

/**
 * Stage content usually opens with a heading repeating the stage label, which is
 * redundant once the stage itself is a heading.
 */
function dropDuplicateHeading(markdown: string, label: string | undefined): string {
  if (!label) return markdown;
  const match = markdown.match(/^#{1,6}\s+(.+?)\s*$/m);
  if (!match || match.index !== 0) return markdown;
  if ((match[1] ?? "").trim().toLowerCase() !== label.trim().toLowerCase()) return markdown;
  return markdown.slice(match[0].length).trimStart();
}

function lines(count: number): string {
  // Blank-line separated so each break parses on its own rather than merging.
  return Array.from({ length: count }, () => RULE).join("\n\n");
}

/**
 * A block the website used to handle. Instead of the silence the web print route
 * emits, say what is missing and which procedure replaces it. The instructor gets
 * the full explanation; the student gets only what they need to act on.
 */
function substitutionCallout(
  block: ContentBlock,
  pattern: PatternId,
  note: string,
  ctx: EmitContext
): string {
  ctx.patternsUsed.add(pattern);
  const title = PATTERN_TITLES[pattern];

  if (ctx.variant === "instructor") {
    return [
      `> **On paper: ${title}.** ${note}`,
      ">",
      `> _Replaces the \`${block.type}\` step. See the ${title} chapter for the full procedure._`,
    ].join("\n");
  }
  return `> **${title}.** ${STUDENT_INSTRUCTIONS[pattern]}`;
}

/** Space for the things the website used to track: who you worked with, what the class decided. */
function studentCapture(block: ContentBlock, pattern: PatternId): string {
  switch (pattern) {
    case "card-sort":
      return ["**From the board:**", "", lines(6)].join("\n");
    case "gallery-walk":
      return [
        "**Gallery log**",
        "",
        "| Whose | What it was | One thing I'd steal |",
        "| --- | --- | --- |",
        "|  |  |  |",
        "|  |  |  |",
        "|  |  |  |",
      ].join("\n");
    case "role-discussion":
      return ["**Where did your group disagree?**", "", lines(5)].join("\n");
    // Demos and external tools are not collection points. A student opens
    // something; nothing is handed in, and ruled lines under them read as a
    // question that has been missed.
    case "demos":
    case "external-tool":
      return "";
    default:
      return block.type === "preparation-chat" ? "" : lines(3);
  }
}

/**
 * Emit a block and guarantee a blank line after it. Without the separator,
 * markdown lazy continuation pulls whatever follows into the previous
 * construct: student prose ended up rendered inside "Instructor only"
 * blockquotes, and bold labels glued themselves onto the last bullet.
 */
function emitBlockSpaced(block: ContentBlock, ctx: EmitContext): string[] {
  const out = emitBlock(block, ctx);
  if (out.length === 0) return out;
  return out[out.length - 1] === "" ? out : [...out, ""];
}

function emitBlock(block: ContentBlock, ctx: EmitContext): string[] {
  const handling = handlingFor(block.type);

  if (handling.kind === "substitute") {
    const out = [substitutionCallout(block, handling.pattern, handling.note, ctx)];

    // Seed questions exist so a thin day still has good questions on the board.
    // On paper they become pre-written cards, so they belong in the guide.
    if (block.type === "question-board" && ctx.variant === "instructor") {
      const seeds = block.seedQuestions ?? [];
      if (seeds.length > 0) {
        out.push(
          "",
          "**Pre-write these on cards before class** (they seed the pile so a thin day still has good questions):",
          "",
          ...seeds.map((q) => `- ${q}`)
        );
      }
    }

    if (ctx.variant === "student") {
      const capture = studentCapture(block, handling.pattern);
      if (capture) out.push("", capture);
    }
    return out;
  }

  switch (block.type) {
    case "markdown":
      return [
        deNameInstructor(
          rewriteSiteLinks(
            demoteHeadings(
              dropDuplicateHeading(block.content.trim(), ctx.stageLabel),
              ctx.headingBase
            ),
            ctx.readings
          )
        ),
      ];

    case "reading-link": {
      // A bare slug tells a student nothing. Use the citation from the shipped
      // annotation when there is one, and link to it.
      const slug = block.slug.replace(/^\d{4}-\d{2}-\d{2}-/, "");
      const citation = ctx.readings.get(slug);
      if (!citation) return [`- Reading: ${slug.replace(/-/g, " ")}`];
      return [
        `- Reading: [${citation.title}](../../../readings/${slug}.md)${
          citation.source ? ` · ${citation.source}` : ""
        }`,
      ];
    }

    case "instructor-only":
      if (ctx.variant !== "instructor") return [];
      return [
        "> **Instructor only**",
        ">",
        // Split on newlines first: an emitted element is often several lines,
        // and marking only its first one let the rest escape the callout.
        ...block.content
          .flatMap((b) => emitBlockSpaced(b, ctx))
          .join("\n")
          .split("\n")
          .map((l) => (l.trim() === "" ? ">" : `> ${l}`)),
      ];

    case "student-only":
      return block.content.flatMap((b) => emitBlockSpaced(b, ctx));

    case "enrolled-only":
    case "logged-in-only":
      // Gating is meaningless on paper; the content itself still matters.
      return block.content.flatMap((b) => emitBlockSpaced(b, ctx));

    case "group-role-content": {
      const label = block.index === undefined ? block.role : `${block.role} ${block.index + 1}`;
      return [`**Role — ${label}:**`, "", ...block.content.flatMap((b) => emitBlockSpaced(b, ctx))];
    }

    case "text-submission": {
      const heading = block.label ? `**${block.label}**` : "**Your response**";
      if (ctx.variant === "student") {
        return [heading, "", lines(block.minLines ?? DEFAULT_SUBMISSION_LINES)];
      }
      return block.prompt
        ? [heading, "", `_Expected response: ${block.prompt}_`]
        : [heading, "", "_Students write here._"];
    }

    case "feedback": {
      const prompt = block.prompt ?? "What worked well today? What could be improved?";
      if (ctx.variant === "student") {
        return [`**${prompt}**`, "", lines(FEEDBACK_LINES)];
      }
      return [`**Feedback prompt:** ${prompt}`];
    }

    default:
      return [];
  }
}

function emitStage(stage: StageDefinition, index: number, ctx: EmitContext): string[] {
  const out: string[] = [];
  const stageCtx: EmitContext = { ...ctx, headingBase: 4, stageLabel: stage.label };
  out.push(`### Stage ${index + 1}: ${stage.label}`, "");

  // Only report what was actually measured. A stage start is trustworthy only
  // where a partnering step gated it, forcing the instructor to advance before
  // students could begin; elsewhere discussion started first and the timestamp
  // records when the instructor remembered. A duration needs both ends gated,
  // which almost none have, so most stages show the plan alone.
  if (ctx.variant === "instructor") {
    const run = ctx.timings?.find((t) => t.index === index);
    const parts = [stage.estimatedTime ? `planned ${stage.estimatedTime}` : null];
    if (run?.reliable && run.actualSeconds != null) {
      parts.push(`ran ${formatMinutes(run.actualSeconds)}`);
    }
    const timing = parts.filter(Boolean).join(" · ");
    if (timing) {
      out.push(`**Timing:** ${timing}`, "");
    }
  }

  // `transition` is never shown to students on the web; it is a one-line summary
  // of what changes here, which is exactly what a paper stage header wants.
  if (ctx.variant === "instructor" && stage.transition) {
    out.push(`_${deNameInstructor(stage.transition)}_`, "");
  }

  if (ctx.variant === "instructor" && stage.facilitationNotes) {
    out.push(
      "> **Facilitation notes**",
      ">",
      ...deNameInstructor(stage.facilitationNotes)
        .trim()
        .split("\n")
        .map((l) => `> ${l}`),
      ""
    );
  }

  if (stage.group) {
    const size = stage.group.size ?? 2;
    const roles = stage.group.roles ? ` · roles: ${Object.keys(stage.group.roles).join(", ")}` : "";
    out.push(
      ctx.variant === "student"
        ? `**Group of ${size}.** Names: ${"__________  ".repeat(Math.min(size, 4))}`
        : `**Grouping:** ${size} per group${roles}`,
      ""
    );
  }

  for (const block of stage.content) {
    const emitted = emitBlock(block, stageCtx);
    if (emitted.length > 0) out.push(...emitted, "");
  }

  for (const block of stage.group?.content ?? []) {
    const emitted = emitBlock(block, stageCtx);
    if (emitted.length > 0) out.push(...emitted, "");
  }

  return out;
}

export interface EmitResult {
  markdown: string;
  patternsUsed: PatternId[];
}

export function emitMeeting(
  meeting: MeetingDefinition,
  variant: Variant,
  timings?: StageTiming[],
  readings: Map<string, ReadingCitation> = new Map()
): EmitResult {
  const ctx: EmitContext = {
    variant,
    patternsUsed: new Set(),
    headingBase: 3,
    timings,
    readings,
  };
  const { frontmatter } = meeting;
  const label = variant === "instructor" ? "Instructor Guide" : "Student Handout";

  const out: string[] = [
    `# ${frontmatter.title}`,
    "",
    `**${label}** · ${frontmatter.date}`,
    "",
    frontmatter.summary,
    "",
  ];

  if (variant === "student") {
    out.push("Name: ______________________________", "", "---", "");
  }

  if (variant === "instructor" && meeting.facilitationOverview) {
    out.push(
      "## Facilitation overview",
      "",
      deNameInstructor(meeting.facilitationOverview.trim()),
      "",
      "---",
      ""
    );
  }

  const intro = meeting.intro.flatMap((b) => emitBlockSpaced(b, ctx));
  if (intro.length > 0) out.push("## Before class", "", ...intro, "");

  const stages = meeting.activity?.stages ?? [];
  if (stages.length > 0) {
    out.push("## Activity", "");
    for (const [i, stage] of stages.entries()) {
      out.push(...emitStage(stage, i, ctx), "");
    }
  }

  const outro = (meeting.outro ?? []).flatMap((b) => emitBlockSpaced(b, ctx));
  if (outro.length > 0) out.push("## After", "", ...outro, "");

  const markdown = `${out
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()}\n`;
  return { markdown, patternsUsed: [...ctx.patternsUsed] };
}
