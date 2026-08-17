import type { ContentBlock } from "../content/types";

/**
 * Every content block is either something paper can carry directly, or something
 * the website was doing on the class's behalf that a paper course has to do some
 * other way.
 *
 * The six patterns are the analog procedures. They are written by hand in
 * `guide/10-patterns/`; this file only says which block maps to
 * which, so a guide can link a stage to the procedure that replaces it.
 */
export type PatternId =
  /** Collect on cards, sort in front of the class, tape the winners to the board. */
  | "card-sort"
  /** Artifacts stay on desks; the class walks and votes with sticky notes. */
  | "gallery-walk"
  /** Printed objectives checklist plus a rotating chair role. */
  | "role-discussion"
  /** A one-page reading ticket handed in at the door. */
  | "reading-ticket"
  /** A hosted demo, a printed artifact, or a paper analogue. */
  | "demos"
  /** A third-party tool, with its cost and its alternatives. */
  | "external-tool";

export type BlockHandling =
  /** Paper carries this as-is; the emitter renders it. */
  | { kind: "direct" }
  /** Paper cannot carry this; the guide points at the analog procedure. */
  | { kind: "substitute"; pattern: PatternId; note: string };

const direct: BlockHandling = { kind: "direct" };
const sub = (pattern: PatternId, note: string): BlockHandling => ({
  kind: "substitute",
  pattern,
  note,
});

/**
 * Exhaustive by construction: `Record<ContentBlock["type"], …>` means adding a
 * block type to `@repo/types` fails this file to compile until someone decides
 * how paper handles it. That is deliberately the same guarantee the web print
 * renderer gets from its `never` check, moved to build time.
 */
export const BLOCK_HANDLING: Record<ContentBlock["type"], BlockHandling> = {
  // Prose and structure travel unchanged.
  markdown: direct,
  "reading-link": direct,

  // Visibility wrappers become the instructor/student split.
  "instructor-only": direct,
  "student-only": direct,
  "enrolled-only": direct,
  "logged-in-only": direct,
  "group-role-content": direct,

  // Writing space on the handout.
  "text-submission": direct,
  feedback: direct,

  // Collect, aggregate, display. One physical mechanism covers all three of the
  // AI transforms; the differences are in how the cards get sorted.
  "text-submission-board": sub(
    "card-sort",
    "The AI read every response and proposed discussion questions. Sort the cards and pick the ones worth reading aloud."
  ),
  "question-entry": sub("card-sort", "Students write questions on cards, one per card."),
  "question-board": sub(
    "card-sort",
    "The AI deduplicated and ranked. Stack near-duplicates by hand; the height of a stack is the frequency signal."
  ),
  "selected-question": sub(
    "card-sort",
    "The instructor chose one question to broadcast. Circle a taped card instead."
  ),
  "strategy-entry": sub("card-sort", "Two lists per group, on two colors of card."),
  "strategy-board": sub(
    "card-sort",
    "The AI found where groups disagreed. Any idea appearing on both colors is the disputed pile, and that pile is the discussion."
  ),
  "strategy-results": sub("card-sort", "The taped columns are the results; they stay up."),

  // Artifacts that need to be seen.
  "media-submission": sub("gallery-walk", "Artifact stays open on the student's own device."),
  "media-gallery": sub(
    "gallery-walk",
    "Half the class walks while half act as docents, then swap."
  ),
  "link-submission": sub("gallery-walk", "No URL to collect; the work is shown in person."),

  // The largest substitution: 13 uses across 7 meetings.
  "group-chat": sub(
    "role-discussion",
    "The facilitator's own instructions say its goal is getting students talking to each other. Print the objectives as a checklist and rotate a chair."
  ),

  // Pre-class readiness, in all ten discussion meetings.
  "preparation-chat": sub(
    "reading-ticket",
    "The topic criteria are already a study guide. Print them, collect at the door, read them before class. Five minutes of pairs first recovers some of what the one-to-one AI conversation was doing."
  ),

  // Interactive components. Three of these are public and need no substitute.
  "markov-babbler": sub("demos", "Publicly hosted; link or QR code, with a paper fallback."),
  "neuron-explorer": sub("demos", "Publicly hosted; link or QR code, with a paper fallback."),
  "digit-network": sub("demos", "Publicly hosted; link or QR code, with a paper fallback."),
  "llm-explorer": sub("demos", "Needs API access. Print the token distributions instead."),
  "temperature-compare": sub(
    "demos",
    "Needs API access. Print one prompt at three temperatures; the comparison is the point and it is static."
  ),
  "embedding-explorer": sub("demos", "Needs API access. Print the neighbor lists and analogies."),
  "preference-rater": sub(
    "demos",
    "Works better on paper: circle the better response, tally on the board, then reveal that the tally is what RLHF does."
  ),
  "training-stage-matcher": sub(
    "demos",
    "Already a matching game. Print the outputs and sort them into base, instruction-tuned, and RLHF'd."
  ),
  "training-simulation": sub("demos", "Instructor-facing demo; used only in staff training."),
  "video-player": sub("demos", "Play it from the front of the room."),

  // Third-party dependencies.
  "replit-promo-code": sub(
    "external-tool",
    "The original showed enrolled students a promo code for a paid site builder, from a deal that cannot be handed on. Pick a builder for the whole class and check its free tier the week you teach."
  ),
};

export function handlingFor(type: ContentBlock["type"]): BlockHandling {
  // Safe: the record is keyed by the full union, so the compiler has already
  // proved every block type is present. noUncheckedIndexedAccess widens the
  // lookup anyway.
  return BLOCK_HANDLING[type] as BlockHandling;
}

/** Block types that paper cannot carry, grouped by the pattern that replaces them. */
export function blocksByPattern(): Record<PatternId, string[]> {
  const grouped = {} as Record<PatternId, string[]>;
  for (const [type, handling] of Object.entries(BLOCK_HANDLING)) {
    if (handling.kind !== "substitute") continue;
    (grouped[handling.pattern] ??= []).push(type);
  }
  return grouped;
}
