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

/** Publicly hosted and usable without an account, per the Demos chapter. */
const OPEN_TOOLS = new Set(["markov-babbler", "neuron-explorer", "digit-network"]);

/** Needs an account on the original course site. */
const LOGIN_TOOLS = new Set(["llm-explorer", "temperature-compare", "embedding-explorer"]);

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
    const needsReading = types.has("reading-link");

    const demoBlocks = [...types].filter((x) => {
      const handling = handlingFor(x as Parameters<typeof handlingFor>[0]);
      return handling?.kind === "substitute" && handling.pattern === "demos";
    });
    // Only the tools an adopter can actually reach count as open. Anything not
    // on the public list is treated as needing an account, because guessing
    // generously is how a meeting gets picked and then cannot be taught.
    const tools =
      demoBlocks.length === 0
        ? "none"
        : demoBlocks.every((d) => OPEN_TOOLS.has(d))
          ? "open"
          : demoBlocks.some((d) => LOGIN_TOOLS.has(d) || !OPEN_TOOLS.has(d))
            ? "**login**"
            : "open";

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

    rows.push(
      `| [${meeting.frontmatter.title}](${slug}/guide.md) | ${kind} | ${
        minutes > 0 ? `${minutes}m` : "--"
      } | ${needsReading ? "yes" : "no"} | ${tools} |`
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
    "**Reading** means the meeting assigns an article you will need to supply.",
    "",
    "**Tools** is what decides whether you can run the hands-on stages. `open`",
    "means publicly hosted and usable by anyone. `login` means the tool needs an",
    "account on the original course site, so that stage does not work for you as",
    "written; the Demos chapter is where to look for what to do instead.",
    "",
    "| Meeting | Kind | Planned | Reading | Tools |",
    "| --- | --- | --- | --- | --- |",
    ...rows,
    "",
  ].join("\n");
}
