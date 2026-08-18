import type { MeetingDefinition } from "../content/types";
import { handlingFor } from "./substitutions";

/**
 * The index an adopter chooses a session from.
 *
 * Shared by the build and the generator shipped in `tools/`, because when only
 * the build wrote it, an adopter who edited a meeting and regenerated got a
 * stale table with no warning: the guide said 45m and the index still said 65m.
 *
 * Every column is derived. An audit found three of them wrong when they were
 * hand-authored, and a derived column that is wrong is at least wrong the same
 * way for everyone.
 */

/**
 * The Demos chapter sorts the interactive components into three tiers, and this
 * column used to have two values. Anything not on the open list fell through to
 * "login", which marked the training-lifecycle meeting unrunnable when both of
 * its components are tier three -- the tier the chapter says is *better* on
 * paper and needs no account at all. The one meeting an adopter could most
 * safely pick was the one the index warned them off.
 */
/** Tier one: publicly hosted, usable by anyone. */
const OPEN_TOOLS = new Set(["markov-babbler", "neuron-explorer", "digit-network"]);

/** Tier two: makes live model calls, so it needs an account on the original site. */
const LOGIN_TOOLS = new Set(["llm-explorer", "temperature-compare", "embedding-explorer"]);

/** Tier three: a printed version loses nothing, so no account is needed either way. */
const PAPER_TOOLS = new Set(["preference-rater", "training-stage-matcher"]);

/**
 * Components the Demos chapter gives no tier because no meeting here uses one.
 * Without this they fell through to "needs an account on the original site",
 * which for a video player is nonsense: you play it from the front of the room.
 */
const UNTIERED_TOOLS = new Set(["video-player", "training-simulation"]);

function blockTypes(meeting: MeetingDefinition): Set<string> {
  const types = new Set<string>();
  const walk = (blocks: unknown[]): void => {
    for (const b of blocks as { type?: string; content?: unknown[] }[]) {
      if (b.type) types.add(b.type);
      if (Array.isArray(b.content)) walk(b.content);
    }
  };
  walk(meeting.intro);
  for (const s of meeting.activity?.stages ?? []) {
    walk(s.content);
    walk(s.group?.content ?? []);
  }
  walk(meeting.outro ?? []);
  return types;
}

/** A markdown link into the readings collection, anywhere in the meeting. */
function linksToAReading(meeting: MeetingDefinition): boolean {
  let found = false;
  const walk = (blocks: unknown[]): void => {
    for (const b of blocks as { content?: unknown[]; [k: string]: unknown }[]) {
      for (const value of Object.values(b)) {
        if (typeof value === "string" && /\]\(\/readings\//.test(value)) found = true;
      }
      if (Array.isArray(b.content)) walk(b.content);
    }
  };
  walk(meeting.intro);
  for (const s of meeting.activity?.stages ?? []) {
    walk(s.content);
    walk(s.group?.content ?? []);
  }
  walk(meeting.outro ?? []);
  return found;
}

export function buildMeetingIndex(
  slugs: string[],
  definitions: Record<string, MeetingDefinition>
): string {
  const rows: string[] = [];

  for (const slug of slugs) {
    const meeting = definitions[slug];
    if (!meeting) continue;

    const stages = meeting.activity?.stages ?? [];
    const minutes = stages
      .map((s) => Number.parseInt(s.estimatedTime ?? "", 10))
      .filter((n) => !Number.isNaN(n))
      .reduce((a, b) => a + b, 0);

    const types = blockTypes(meeting);

    // A reading the adopter must supply. A preparation chat is not evidence of
    // one: the final meeting has a preparation conversation about the course
    // itself and no article, and the index used to mark it "yes".
    //
    // A prose link into readings/ counts too. The AlphaGo meeting assigns a
    // documentary and an annotated transcript entirely in prose, so the block
    // test alone said "no" for a meeting that cannot be taught without it, and
    // its annotation file shipped orphaned.
    const needsReading = types.has("reading-link") || linksToAReading(meeting);

    const demoBlocks = [...types].filter((x) => {
      const handling = handlingFor(x as Parameters<typeof handlingFor>[0]);
      return handling?.kind === "substitute" && handling.pattern === "demos";
    });
    // The worst tier a meeting contains, because that is what decides whether
    // its hands-on stages run. An unrecognised component counts as needing an
    // account: guessing generously is how a meeting gets picked and then cannot
    // be taught.
    const tools =
      demoBlocks.length === 0
        ? "none"
        : demoBlocks.some(
              (d) =>
                LOGIN_TOOLS.has(d) ||
                !(OPEN_TOOLS.has(d) || PAPER_TOOLS.has(d) || UNTIERED_TOOLS.has(d))
            )
          ? "**login**"
          : demoBlocks.every((d) => OPEN_TOOLS.has(d))
            ? "open"
            : "paper";

    // Discussion is built on a reading. Exploratory puts a tool in front of
    // students. A lab produces an artifact. Everything else ran as a
    // whole-class session.
    const producesArtifact =
      types.has("media-submission") || types.has("link-submission") || types.has("media-gallery");
    const kind =
      stages.length === 0
        ? "Session"
        : needsReading
          ? "Discussion"
          : demoBlocks.length > 0
            ? "Exploratory"
            : producesArtifact
              ? "Lab"
              : "Discussion";

    // What this meeting refers back to. Teaching it out of order, or without
    // the meeting it names, means editing prose that assumes the class was
    // there -- and that assumption is invisible until it is printed.
    const deps = (meeting.frontmatter.dependsOn ?? [])
      .map((d) => {
        const title = definitions[d]?.frontmatter.title;
        return title ? `[${title}](${d}/guide.md)` : d;
      })
      .join(", ");

    rows.push(
      `| [${meeting.frontmatter.title}](${slug}/guide.md) | ${kind} | ${
        minutes > 0 ? `${minutes}m` : "--"
      } | ${needsReading ? "yes" : "no"} | ${tools} | ${deps || "--"} |`
    );
  }

  return [
    "# Meetings",
    "",
    `${rows.length} meetings, in the order the semester ran them. Each has an`,
    "instructor guide and a student handout in its own directory.",
    "",
    "Every column here is derived from the meeting definition, so it cannot drift",
    "from what the guides actually say.",
    "",
    "**Planned** is the sum of the stage estimates. Totals range from forty to",
    "ninety minutes against a seventy-five minute period, so check the one you are",
    "teaching rather than assuming it overruns. Read the pacing chapter before",
    "trusting any of these numbers.",
    "",
    "**Kind** is derived from what the meeting contains. `Discussion` means it",
    "assigns a reading. `Exploratory` puts an interactive component in front of",
    "students. `Lab` collects something they made. `Session` runs no activity at",
    "all, and there are two.",
    "",
    "`Discussion` is also the fallback, and that is the column's weak spot: seven",
    "of its fifteen rows assign no reading and landed there because nothing else",
    "matched. The Study Guide Lab is a lab, and Final Project Workshop 2 is a",
    "workshop whose own predecessor is marked `Lab`. Read `Kind` together with",
    "`Reading` and `Tools` rather than on its own.",
    "",
    "**Reading** means the meeting assigns an article, a transcript, or a film",
    "you will need to supply. Some assign one in prose rather than as a link",
    "block, so this column looks for both.",
    "",
    "**Tools** is `none` for most meetings. Where it is not, it says whether you",
    "can run the hands-on stages, using the three tiers from the Demos chapter.",
    "`open` means publicly hosted and usable",
    "by anyone. `paper` means the chapter says a printed version is better, so",
    "you need no account and no substitute hunt. `login` means live model calls",
    "and an account on the original site, so that stage does not work as written",
    "and the Demos chapter has the printed replacement.",
    "",
    "**Refers back to** names meetings this one talks about as though the class",
    "was there. Teach it without them, or out of order, and there is prose in the",
    "handout to rewrite. The dependencies are advisory: the course ran in this",
    "order, and reordering is allowed as long as you fix what refers backward.",
    "",
    "| Meeting | Kind | Planned | Reading | Tools | Refers back to |",
    "| --- | --- | --- | --- | --- | --- |",
    ...rows,
    "",
  ].join("\n");
}
