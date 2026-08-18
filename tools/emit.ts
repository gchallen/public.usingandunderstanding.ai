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
 * What a student does at this particular step. Keyed by block type, because the
 * pattern is too coarse: the guide carries seven distinct Card Sort
 * instructions and the handout was printing one generic line for all of them.
 * In the same stage the guide said "circle a taped card" and the handout said
 * "hand them forward", which is a student being told to do the wrong thing.
 */
const STUDENT_STEP: Partial<Record<ContentBlock["type"], string>> = {
  "question-entry":
    "Write each question on its own card, one per card, with your name in the corner. Hand them forward.",
  "strategy-entry":
    "Write each one on a card. Your instructor will tell you which colour goes with which list.",
  "text-submission-board":
    "Your cards are being sorted at the front. Copy down the ones worth keeping.",
  "question-board":
    "The questions are going up at the front, stacked where they repeat. Copy the ones you want to work on.",
  "selected-question":
    "One question has been circled at the front. Write it down; it is the one your group is investigating.",
  "strategy-board":
    "Both colours are on the board now. The pile where they disagree is the one worth arguing about.",
  "strategy-results":
    "The taped columns stay up for the rest of the session. Copy what you want to keep.",
  "media-submission": "Leave your work open on your device where someone walking past can see it.",
  "media-gallery":
    "Half the room walks while half stay and explain, then swap. Log what you see below.",
  "link-submission": "Nothing to submit. Have your work open and be ready to show it.",
};

/**
 * Fallback when a block type has no step of its own.
 */
const STUDENT_INSTRUCTIONS: Record<PatternId, string> = {
  "card-sort": "Write each idea on its own card, with your name in the corner. Hand them forward.",
  "gallery-walk":
    "Leave your work open on your device. Half the room walks while half explain, then swap.",
  "role-discussion":
    "Your instructor will read out the objectives for this discussion. Whoever holds the chair card keeps everyone in, and it rotates when time is called.",
  "reading-ticket":
    "Bring your reading ticket. Swap with a partner, answer what they did not understand if you can, write down what neither of you could resolve, then hand both in.",
  // The address of the originals used to be here. Most of them need an account
  // on the original site, so printing it on a student handout sends the room to
  // a login screen. The Demos chapter tells the instructor where they are.
  demos: "Open the tool your instructor names.",
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
/**
 * Prose in the meetings names website components an adopter does not have, and
 * usually does so a line above the callout explaining that the step is paper
 * now. Rewritten here rather than in the meeting sources, because `groupKey`
 * and friends are also real field names in that data.
 */
function deJargon(markdown: string): string {
  return (
    markdown
      // Course administration for one institution: a proctoring centre, a
      // scheduling system, and a week in April. None of it travels, and it
      // reached a student handout an adopter would photocopy.
      .replace(
        /> \*\*Sign up for the End-of-Semester Quiz\.\*\*[^\n]*\n/g,
        "> **Sign up for the end-of-semester assessment** however your course does that.\n"
      )
      .replace(
        /Our first and last CBTF quiz runs[^.]*\. Visit the \[Assessments page\]\([^)]*\) to enroll on PrairieTest \(one-time\) and reserve a session\./g,
        ""
      )
      .replace(
        /the QuestionBoard processes submitted questions with GPT to deduplicate and prioritize/gi,
        "the cards get sorted at the front, stacking near-duplicates"
      )
      .replace(/Click "Process Questions"/g, "Sort the cards at the front")
      // Consume a preceding article, or "in the TextSubmission" becomes "in the
      // their written answer" -- which shipped in six guides.
      .replace(/\b(?:the|a)\s+TextSubmissionBoard\b/gi, "the collected cards")
      .replace(/\bTextSubmissionBoard\b/g, "the collected cards")
      .replace(/\b(?:the|a)\s+TextSubmission\b/gi, "their written answer")
      .replace(/\bTextSubmission\b/g, "their written answer")
      .replace(/\b(?:the|a)\s+QuestionBoard\b/gi, "the question cards")
      .replace(/\bQuestionBoard\b/g, "the question cards")
      // Run before the bare rules: the source writes "same `groupKey`", and
      // rewriting the backticked form first produced "same the group label".
      .replace(/\bsame\s+`?groupKey`?/gi, "same group label")
      .replace(/`groupKey`/g, "the group label")
      .replace(/\bgroupKey\b/g, "the group label")
      // The React component names themselves, which survived in seven
      // facilitation overviews describing how a meeting is built.
      .replace(
        /\b(\d+)\s+GroupActivity blocks? with the same `?group`? key\b/g,
        "$1 paired rounds sharing one grouping"
      )
      .replace(/\s+via GroupActivity\b/g, "")
      .replace(/\bGroupActivity blocks?\b/g, "paired rounds")
      .replace(/\bGroupActivity\b/g, "the pairing wrapper")
      .replace(/\bActivityStages\b/g, "the stage sequence")
  );
}

function deNameInstructor(markdown: string): string {
  return (
    deJargon(markdown)
      // The instructor was patched by name, which left everyone else: a guest
      // lecturer with a departmental profile link, and the institution itself in
      // questions students are asked to answer.
      .replace(
        /\[Professor Zach Biondi\]\([^)]*\) from the Illinois Department of Philosophy will lead today's discussion/g,
        "A guest lecturer from your philosophy department leads today's discussion"
      )
      .replace(/Professor Zach Biondi leads/g, "A guest philosopher leads")
      // The websites lab was de-vendored by substituting one block type. The
      // workshop that refers back to it was prose, so it kept handing students a
      // promo code the README says cannot be handed on.
      .replace(
        /\[Replit\]\(https:\/\/replit\.com\) with the AI agent \(you still have the promo code from the websites lab\)/g,
        "the site builder from the websites lab"
      )
      .replace(/\(you still have the promo code from the websites lab\)/g, "")
      .replace(/\[Replit\]\(https:\/\/replit\.com\)/g, "your site builder")
      // And the bare name, which survived three times in the workshop's
      // facilitation notes because only the linked form was being rewritten.
      // The External Tools chapter names the vendor on purpose; a meeting guide
      // naming it reads as an instruction to use it.
      .replace(/\bReplit\b/g, "your site builder")
      // Institution-specific example data. Useful as a shape, useless as links.
      .replace(
        /##### Illinois & University Datasets/g,
        "##### Local and institutional datasets (the original's, as examples)"
      )
      .replace(
        /\bat Illinois, in your major, or in a campus job\b/g,
        "on this campus, in your major, or in a campus job"
      )
      .replace(/\bhere at Illinois\b/gi, "here")
      .replace(/\bat the University of Illinois\b/gi, "at this university")
      // Week numbers, which map to nothing outside the original schedule and are
      // wrong even inside it: "Week 4" here means the meeting on 24 February,
      // which is week six. The assessment exporter strips these; this file, which
      // produces every guide and handout, had no rule for them at all.
      .replace(/\s*\(Weeks? \d+(?:\s*(?:&|and)\s*\d+)?\)/g, "")
      .replace(/\bin Week \d+\b/gi, "earlier in the course")
      // And literal dates from the original semester, same reason.
      .replace(
        /\bon (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}\b/g,
        "in an earlier meeting"
      )
      .replace(
        /\b(?:the )?final meeting on (?:January|February|March|April|May|June|July|August|September|October|November|December) \d{1,2}\b/g,
        "the final meeting"
      )
      // The original's own chat, on a site the adopter has no login for. Two
      // student handouts sent the room to it, against the README's claim that
      // everything here works without that site.
      .replace(
        /\*\*Tip:\*\* This site has a built-in AI chat at \/chat you can use for the scavenger hunt\. Unlike ChatGPT or other popular chatbots, our chat connects you directly to the AI model without extra features like web search\. That makes it easier to see what the AI actually knows \(and doesn't know\) on its own\./g,
        "**Tip:** Use whatever chatbot your instructor names. A plain one is better here than a search-augmented one: it is easier to see what the model knows on its own."
      )
      .replace(
        /\*\*Reminder:\*\* You can use the built-in AI chat at \/chat for these challenges\./g,
        "**Reminder:** Use the chatbot your instructor named for these challenges."
      )
      // A course number from one catalogue.
      .replace(/\bCS 199 UAI\b/g, "the course")
      // Institution-specific dataset descriptions. The heading above them was
      // relabelled as examples; the bullets kept naming one university.
      .replace(/\bat Illinois\b/g, "at this university")
      .replace(/\bIllinois Open Data\b/g, "State Open Data")
      // Sentences the card substitution left incoherent. "The first meeting using
      // the collected cards" is meaningless when cards are the fallback
      // everywhere, and a stack of index cards does not generate discussion
      // questions -- that was the website, and the Card Sort chapter is explicit
      // that reading them yourself is the point.
      .replace(
        /This is the first meeting using \*\*the collected cards\*\* — during share-outs, you can see all student responses and generate targeted discussion questions from them\./g,
        "This is the first meeting where you collect written answers from everyone. Read them during the share-out and pick the ones worth putting to the room."
      )
      .replace(/use the collected cards to see student responses/gi, "read the cards")
      // Half a de-vendoring: the click target was rewritten and the model it
      // called was left in the same sentence.
      .replace(
        /Sort the cards at the front to have GPT aggregate and prioritize the submitted questions\./g,
        "Sort the cards at the front, stacking near-duplicates, and put the biggest stacks on the board."
      )
      .replace(
        /\bprocess questions immediately when submissions look mostly complete\b/gi,
        "sort the cards as soon as most of them are in"
      )
      // The campus testing centre by its local acronym, in the one meeting that
      // still described the original's proctoring arrangements.
      .replace(/\bDiscuss CBTF assessments\b/g, "Discuss how the quizzes will run")
      // The assessment is in this kit now, so the link to the original site's
      // copy sends an adopter somewhere they cannot grade from.
      .replace(
        /\*\*\[Start the Turing Test\]\(https:\/\/www\.usingandunderstanding\.ai\/assessments\/turing-test\)\*\*/g,
        "**Run the Turing Test assessment** (`assessments/turing-test/`, as an oral exam or on paper)"
      )
      .replace(/\bGeoff will\b/g, "Your instructor will")
      .replace(/\bwhen Geoff signals\b/g, "when your instructor signals")
      .replace(/\bGeoff's\b/g, "your instructor's")
      .replace(/\bGeoff\b/g, "your instructor")
      // The original's own grading policy, asserted to somebody else's students
      // on a page they photocopy. The assessment chapter says plainly that the
      // participation scheme does not travel; these two lines shipped it anyway.
      .replace(/\n?This is part of attendance for today's meeting\.\n?/g, "\n")
      // "the preparation conversation below" is the website's embedded chat.
      // On paper there is nothing below but a callout telling them to bring a
      // ticket, so the sentence pointed at blank space.
      .replace(
        /Please complete the preparation conversation below before class\./g,
        "Come to class having prepared the reading."
      )
      // A code-entry field that exists only on the site. On paper a pair just
      // pairs up.
      .replace(/\s*and enter each other's codes below to form your team\b/g, " to form your team")
      .replace(/\s*and enter each other's codes below/g, "")
      // A name is capitalised wherever it appears; "your instructor" is not, so
      // a rewrite at the start of a sentence left a paragraph beginning with a
      // lowercase word. Restore the capital the substitution took away.
      // Every substitution above swaps a capitalised proper noun or component
      // name for a lowercase common one, so any of them can land at the start of
      // a sentence, a line, or a bullet and leave it lowercase. Restoring the
      // capital once, here, is what stops the next rewrite reintroducing it.
      .replace(
        /(^|\n|\n[-*]\s+|[.!?]\s+)(your instructor|your site builder|a guest philosopher|a guest lecturer|the collected cards|their written answer|the group label|paired rounds|the pairing wrapper|the stage sequence|the cards get sorted)\b/g,
        (_m, lead: string, phrase: string) =>
          `${lead}${phrase.charAt(0).toUpperCase()}${phrase.slice(1)}`
      )
  );
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
    // The chatbot tier was invisible from here. The slug is in the meeting data
    // and was being thrown away, so a guide told a room with AI access to print
    // cards without mentioning the prompt sitting in the repository for that
    // exact stage.
    const promptDir =
      block.type === "preparation-chat"
        ? "preparations"
        : block.type === "group-chat"
          ? "group-chats"
          : null;
    const slug = (block as { slug?: string }).slug;
    const promptLine =
      promptDir && slug
        ? `> _If your students have a chatbot, use [\`content/prompts/${promptDir}/${slug}.md\`](../../../content/prompts/${promptDir}/${slug}.md) instead of the paper procedure. It is usually better._`
        : null;

    return [
      `> **On paper: ${title}.** ${note}`,
      ">",
      `> _Replaces the \`${block.type}\` step. See the ${title} chapter for the full procedure._`,
      ...(promptLine ? [">", promptLine] : []),
    ].join("\n");
  }
  return `> **${title}.** ${STUDENT_STEP[block.type] ?? STUDENT_INSTRUCTIONS[pattern]}`;
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
/**
 * Replace the hand-written pacing table with one derived from the stages.
 *
 * The README says handouts are generated from the meeting definitions and
 * cannot drift from them. The pacing table was the exception nobody noticed: it
 * is prose inside `facilitationOverview`, typed once and never updated. Six of
 * twenty-five guides had drifted, and in every one the row that had gone missing
 * was the mandatory feedback stage -- so the table an instructor plans the
 * period from was five minutes short of the plan, in the one direction the rest
 * of the guide is loudest about.
 *
 * Derived rather than validated, because a validator would only tell somebody to
 * retype it and the retyping is the failure.
 */
function derivePacingTable(overview: string, meeting: MeetingDefinition): string {
  const stages = meeting.activity?.stages ?? [];
  if (stages.length === 0) return overview;
  // The block runs from the bolded label to the end of the markdown table.
  // Two shapes broke the first version of this. One meeting annotates the label
  // -- "**Pacing:** (trimmed from 90m to 65m ...)" -- so the rest of that line
  // has to be allowed. And one meeting's overview *ends* with the table, so
  // after trimming there is no trailing newline and the last row was left
  // behind: a stray four-column row contradicting the derived one directly
  // above it.
  const table = /\*\*Pacing:?\*\*[^\n]*\n(?:\|[^\n]*(?:\n|$))+/;
  if (!table.test(overview)) return overview;

  let cumulative = 0;
  const rows = stages.map((s) => {
    const minutes = Number.parseInt(s.estimatedTime ?? "", 10);
    if (!Number.isNaN(minutes)) cumulative += minutes;
    return `| ${s.label} | ${s.estimatedTime ?? "--"} | ${
      Number.isNaN(minutes) ? "--" : `${cumulative}m`
    } |`;
  });

  // Keep whatever the author wrote after the label. It is usually a note about
  // why the plan was trimmed, which is worth more than the label alone.
  const note = overview.match(/\*\*Pacing:?\*\*([^\n]*)/)?.[1]?.trim() ?? "";
  return overview.replace(
    table,
    [
      `**Pacing:**${note ? ` ${note}` : ""}`,
      "| Stage | Duration | Cumulative |",
      "|-------|----------|------------|",
      ...rows,
      "",
    ].join("\n")
  );
}

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

  // A stage whose blocks are all instructor-only leaves the student a heading
  // with nothing under it, which reads as a page that failed to print. Say what
  // happens instead: the stage is real, it just is not written work.
  // Pair and group work lives in stage.group.content, not stage.content. Checking
  // only the latter printed "Nothing to write" directly above the blanks students
  // write in, on the pair stages that are most of the course.
  const visible = (blocks: readonly ContentBlock[]): boolean =>
    blocks.some((b) => handlingFor(b.type).kind === "substitute" || b.type !== "instructor-only");
  const studentSees =
    ctx.variant === "student" && (visible(stage.content) || visible(stage.group?.content ?? []));
  if (ctx.variant === "student" && !studentSees) {
    out.push(
      `_${stage.estimatedTime ?? "A few minutes"} together as a class. Nothing to write._`,
      ""
    );
  }

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
    deNameInstructor(frontmatter.summary),
    "",
  ];

  if (variant === "student") {
    out.push("Name: ______________________________", "", "---", "");
  }

  // A meeting with no activity stages is not a broken export. Two sessions in
  // the semester genuinely had none -- a first day and a guest lecture -- and a
  // 26-line handout with no structure reads like a generator failure unless it
  // says otherwise.
  if (variant === "instructor" && (meeting.activity?.stages?.length ?? 0) === 0) {
    out.push(
      "> **This meeting has no activity stages.** It ran as a whole-class session rather than through the activity framework, so there is no stage plan, no timings, and no paper substitutions to make. The prose below is the whole of it.",
      ""
    );
  }

  if (variant === "instructor" && meeting.facilitationOverview) {
    // Most overviews open with their own heading, so adding a wrapper produced a
    // duplicated, empty "Facilitation overview" as the first thing in all 24
    // guides. Only add one when the content does not bring its own.
    const overview = derivePacingTable(
      deNameInstructor(meeting.facilitationOverview.trim()),
      meeting
    );
    out.push(
      ...(overview.startsWith("#") ? [] : ["## Facilitation overview", ""]),
      overview,
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
