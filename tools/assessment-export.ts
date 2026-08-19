/**
 * Turn a conversational assessment into something a person can run.
 *
 * The original was an AI interviewer with a second AI tracking criteria. The kit
 * excluded these as the least portable part of the course, which was true of the
 * software and not true of the assessment. What makes them work is the rubric,
 * and the rubric is just text.
 *
 * Two outputs, because they are not equivalent:
 *
 * - An **oral exam** keeps everything. A human examiner can do what the AI did,
 *   including the part that matters most: noticing whether a student produced
 *   something before being asked for it.
 * - A **written exam** loses exactly that. On paper nothing is prompted, so the
 *   met / partially-met distinction -- which turns on "without the interviewer
 *   asking specifically" -- has no equivalent. It scales, and it is a weaker
 *   instrument. The written output says so rather than pretending otherwise.
 *
 * Neither format has been run with students. The AI-conversation original was.
 * Every file emitted here carries that label, because the rest of the kit holds
 * itself to it and the newest material is exactly where it is easiest to skip.
 *
 * No dependencies, because this ships in `tools/` and regenerates alongside the
 * handouts. An assessment that could only be rebuilt in the source repo would be
 * frozen text an adopter edits in three places and gets wrong in one.
 */

/** The YAML block at the top of an assessment file. */
function frontmatter(raw: string): AssessmentFrontmatter {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match?.[1]) throw new Error("assessment has no frontmatter");
  return Bun.YAML.parse(match[1]) as AssessmentFrontmatter;
}

interface Portion {
  id: string;
  title: string;
  type?: string;
  goal?: string;
  criteria?: string[];
  evaluatorContext?: string;
}

interface Grade {
  grade: string;
  label: string;
  description: string;
  points?: number;
}

interface AssessmentFrontmatter {
  slug: string;
  title: string;
  description?: string;
  timeLimit?: number | null;
  category?: string;
  testing?: boolean;
  gradingScale?: Grade[];
  portions?: Portion[];
}

/** Minutes to allow per question when the students are writing rather than talking. */
const MINUTES_PER_WRITTEN_QUESTION = 10;
/** Minutes to allow per section with one student in the room. */
const MINUTES_PER_ORAL_SECTION = 5;

const BANNER =
  "_The AI-conversation original ran all semester. Neither the oral nor the written version below has been run with students: they are the same rubric in a form a person can administer, and their timings are derived rather than observed. See [the README](../README.md)._";

// --- Turning the original's third-person notes into something a student reads

/**
 * The criteria and goals are written about the student, for an evaluator to
 * apply: "Identifies a specific concept". A student sitting a paper needs the
 * same thing addressed to them. Everything below does that conversion, and the
 * reason it is mechanical rather than hand-written is that there are five
 * assessments here and an adopter who adds a sixth gets the same treatment.
 */

/** Base forms we are willing to un-conjugate. A wrong guess reads as a typo, so the list is explicit. */
const VERBS = new Set([
  "identify",
  "explain",
  "describe",
  "discuss",
  "engage",
  "name",
  "provide",
  "reflect",
  "support",
  "take",
  "understand",
  "articulate",
  "demonstrate",
  "grapple",
  "connect",
  "apply",
  "compare",
  "evaluate",
  "give",
  "show",
  "use",
  "define",
  "analyze",
  "argue",
  "defend",
  "state",
  "list",
  "cite",
  "relate",
  "distinguish",
  "summarize",
  "consider",
  "address",
  "propose",
  "recognize",
  "note",
  "mention",
  "offer",
  "present",
  "draw",
  "make",
  "point",
  "trace",
  "acknowledge",
  "weigh",
  "question",
  "challenge",
  "test",
]);

/** "Explains" -> "Explain", but only when the result is a verb we know. */
function deconjugate(word: string): string {
  if (/[A-Z]/.test(word.slice(1))) return word; // LLMs, AI, PhDs
  const trailing = word.match(/[^A-Za-z]+$/)?.[0] ?? "";
  const core = trailing ? word.slice(0, -trailing.length) : word;
  let base = core;
  if (/ies$/.test(core)) base = `${core.slice(0, -3)}y`;
  else if (/(ss|sh|ch|x|z|o)es$/.test(core)) base = core.slice(0, -2);
  else if (/s$/.test(core) && !/ss$/.test(core)) base = core.slice(0, -1);
  else return word;
  return VERBS.has(base.toLowerCase()) ? base + trailing : word;
}

/**
 * Clause openings where a second verb can appear: "names X and explains Y", and
 * also the bare comma in "names X, explains Y, and does Z". Breaking on a bare
 * comma is safe because `deconjugate` only fires on a known verb, so a noun in
 * a list is left alone.
 */
const CLAUSE_BREAK = /((?:,\s*)?\b(?:and|or|then)\s+|;\s*|,\s+)/gi;

/** Evaluator phrasing to an instruction, with the pronouns left alone. */
function imperative(text: string): string {
  let out = text.trim();

  // "Can explain why ..." is an evaluator's phrasing. A student is just asked.
  out = out.replace(/^Can\s+/i, "");
  // "Student names ..." likewise.
  out = out.replace(/^(?:The\s+)?[Ss]tudent\s+/, "");

  // Un-conjugate the leading verb of the sentence and of each following clause.
  const parts = out.split(CLAUSE_BREAK);
  out = parts
    .map((part, i) => {
      if (i % 2 === 1) return part; // the separator itself
      const [first, ...rest] = part.split(" ");
      if (!first) return part;
      return [deconjugate(first), ...rest].join(" ");
    })
    .join("");

  return out.charAt(0).toUpperCase() + out.slice(1);
}

/** The pronoun half, for text a student reads rather than text about a student. */
function youify(text: string): string {
  return (
    text
      // "Supports position with specific reasoning" carries no pronoun, so the
      // swaps below have nothing to convert and it reads clipped to a student.
      .replace(/\bSupports? position\b/g, "Support your position")
      .replace(/\bsupports? position\b/g, "support your position")
      .replace(/\bthemselves\b/g, "yourself")
      .replace(/\bthey'(d|ll|ve|re)\b/gi, "you'$1")
      .replace(/\btheir\b/gi, "your")
      .replace(/\bthey\b/gi, "you")
      .replace(/\bthem\b/gi, "you")
  );
}

function secondPerson(text: string): string {
  return youify(imperative(text));
}

/**
 * Criteria that only mean something because somebody was there to push. On
 * paper there is nobody, and printing "when challenged" on a question a student
 * answers alone is incoherent.
 */
const NEEDS_AN_INTERVIEWER =
  /when challenged|when prompted|when the interviewer|without (?:being asked|prompting)|follow-?up|interviewer|prob(?:e|es|ing)\b|pushes back|pushes (?:their|your) understanding|counterpressure/i;

/**
 * A criterion that needed somebody in the room, and what a paper can ask for
 * instead. These are not the same measurement, and the marking scheme says so:
 * producing an objection against yourself is a different skill from handling one
 * somebody else raised, and it is usually the harder of the two.
 *
 * Explicit rather than derived, because the alternative was a single template
 * that told students to argue against themselves on every question including
 * "something useful you did with AI". A criterion this table does not recognise
 * is dropped from the paper rather than guessed at, and the marking scheme
 * reports that it went.
 */
const PAPER_EQUIVALENT: [RegExp, string][] = [
  [
    /^Engages thoughtfully with (?:a |the )?counterarguments? when challenged$/i,
    "Give the strongest argument against your own position, and say what you make of it",
  ],
  [
    /^Engages with a probing follow-?up that pushes beyond their initial explanation$/i,
    "Push your own explanation one step past your first answer: add the detail, limit, or qualification you left out",
  ],
  [
    /^Engages with a tension or counterpressure to that practice$/i,
    "Name something that works against that practice, and say how you would handle it",
  ],
];

function paperEquivalent(criterion: string): string | null {
  for (const [pattern, replacement] of PAPER_EQUIVALENT) {
    if (pattern.test(criterion.trim())) return replacement;
  }
  return null;
}

/**
 * Criteria carry parentheticals of two kinds, and only one of them belongs on a
 * student's page.
 *
 * A constraint rules an answer out: "(not a vague generality like 'AI is
 * complicated')". Printing it is fair, and it is most of what makes the
 * criterion mean anything.
 *
 * The other kind IS the answer: "Explains the basic setup (interrogator, two
 * players, text-based communication)". These were written for an evaluator that
 * showed them to nobody. Printing them under the question, above the ruled
 * lines, with the paper saying "use them as a checklist", hands over the mark.
 * An examiner trial caught a bluffing student going from not_started to met on
 * that criterion with nothing about him changed.
 */
/**
 * Student-facing wordings for criteria whose parenthetical carried both the
 * grain and the answer.
 *
 * Stripping "(interrogator, two players, text-based communication)" stops the
 * paper handing over the mark, and leaves "Explain the basic setup" -- of what,
 * at what depth? A student can satisfy three bullets like that with three
 * sentences saying nothing. These say what is wanted without naming it. Written
 * by hand because there is no mechanical way to keep the question and drop the
 * answer, and `tooThinForAStudent` below refuses the build rather than let the
 * next one ship unnoticed.
 */
const STUDENT_WORDING: Record<string, string> = {
  "Explains the basic setup": "Explain the setup: who takes part, and how they communicate",
  // "Explain what Turing was trying to replace, and why" asked a different
  // question from the one it is marked against: a student could answer it
  // correctly, say nothing about testing intelligence through imitation, and
  // the marker had no instruction to accept that.
  "Understands the purpose": "Say what the test is for, and what it is meant to show",
  // The previous wording, "say what the interrogator has to be unable to do",
  // handed over the frame and left the student one verb to supply.
  "Can describe what passing means": "Say what has to happen for the machine to pass",
};

/**
 * A criterion that said something until its parenthetical came off. Short and
 * unparenthesised is fine ("Take a clear position"); short *because* something
 * was removed is the over-correction, and it is invisible unless you diff.
 */
/** The line a student reads for this criterion, or null if the paper drops it. */
function studentWording(criterion: string): string | null {
  if (NEEDS_AN_INTERVIEWER.test(criterion)) return paperEquivalent(criterion);
  const stripped = withoutTheAnswer(withoutTheInterviewer(criterion));
  return STUDENT_WORDING[stripped.trim()] ?? secondPerson(stripped);
}

function tooThinForAStudent(original: string, stripped: string): boolean {
  if (stripped === original) return false;
  return stripped.trim().split(/\s+/).length < 6;
}

function withoutTheAnswer(criterion: string): string {
  return criterion
    .replace(/\s*\(([^)]*)\)/g, (whole, inside: string) =>
      /^not\b|\bnot just\b|\brather than\b|\bnot only\b/i.test(inside.trim()) ? whole : ""
    )
    .replace(/\s{2,}/g, " ")
    .trim();
}

/** Drop the dangling "when challenged" so the criterion still reads as an instruction. */
function withoutTheInterviewer(text: string): string {
  return text
    .replace(/,?\s+when (?:challenged|prompted|pushed|the interviewer[^,.]*)/gi, "")
    .replace(
      /\s+that pushes beyond your initial explanation/gi,
      " that goes beyond your first answer"
    )
    .trim();
}

/**
 * Remove the clauses of a grade description that describe an interviewer, and
 * leave the rest intact. The written marking scheme used to print these
 * verbatim, so its own preamble ("on paper that distinction does not exist")
 * was contradicted eight lines later by the table the marker actually applies.
 */
function scrubGradeForPaper(description: string): string {
  const parts = description.split(/((?:,\s*)?\b(?:or|and)\s+|;\s*|\.\s+)/);
  const kept: string[] = [];
  for (let i = 0; i < parts.length; i += 2) {
    const segment = parts[i] ?? "";
    const separator = parts[i + 1] ?? "";
    if (NEEDS_AN_INTERVIEWER.test(segment)) {
      // Drop this segment and the separator that introduced it.
      if (kept.length > 0) kept.pop();
      continue;
    }
    kept.push(segment, separator);
  }
  let out = kept
    .join("")
    .replace(/[\s,;]+$/, "")
    .trim();
  if (/\.$/.test(description.trim()) && !/[.!?]$/.test(out)) out += ".";
  return out;
}

// --- References only the original course can satisfy -------------------------

/**
 * Course-specific things an adopter's students never touched. The Demos chapter
 * is explicit that the interactive tools are login-gated and cannot be handed
 * on, so an assessment criterion naming one is a question nobody in the room can
 * answer. Detected rather than listed by hand, because the failure is that
 * somebody adds a sixth assessment and nobody re-reads the five.
 */
const COURSE_SPECIFIC: [RegExp, string][] = [
  [/\bEmbedding Explorer\b/, "the Embedding Explorer (a login-gated tool from the original site)"],
  [/\bDigit Network\b/, "the Digit Network (a login-gated tool from the original site)"],
  [
    /\bLLM Probability Explorer\b/,
    "the LLM Probability Explorer (a login-gated tool from the original site)",
  ],
  [/\bBolt(?:\.new)?\b/, "Bolt (a tool the original course used)"],
  [/\bv0\.dev\b/, "v0.dev (a tool the original course used)"],
  [/\bReplit\b/, "Replit (a tool the original course used)"],
  [/\bClaude Artifacts\b/, "Claude Artifacts (a tool the original course used)"],
  [/\bWeek \d+\b/, "a week number from the original schedule"],
];

function findCourseSpecific(text: string): string[] {
  const hits = new Set<string>();
  for (const [pattern, note] of COURSE_SPECIFIC) if (pattern.test(text)) hits.add(note);
  return [...hits];
}

/** The two places a reference can sit, which need different treatment. */
function adaptationNotice(a: AssessmentFrontmatter): string[] {
  const portions = a.portions ?? [];
  const studentFacing = findCourseSpecific(
    portions.map((p) => `${p.title} ${p.goal ?? ""} ${(p.criteria ?? []).join(" ")}`).join(" ")
  );
  // Scan what actually gets printed, not the source. These notes go through
  // deJargon, which strips every week number, so scanning the raw text warned an
  // examiner about "a week number from the original schedule" in a file that no
  // longer contained one.
  const examinerOnly = findCourseSpecific(
    deJargon(portions.map((p) => p.evaluatorContext ?? "").join(" "))
  ).filter((h) => !studentFacing.includes(h));
  if (studentFacing.length === 0 && examinerOnly.length === 0) return [];

  const out = ["## Before you use this", ""];
  if (studentFacing.length > 0) {
    out.push(
      "**These appear in the questions themselves, and you have to replace them.** They name things from the original course that your students did not do:",
      "",
      ...studentFacing.map((h) => `- ${h}`),
      "",
      "Point the question at whatever your students actually did instead. The criterion underneath is usually portable; the example is not.",
      ""
    );
  }
  if (examinerOnly.length > 0) {
    out.push(
      "**These appear only in the notes to you**, as illustrations of the kind of answer that counts. Read them that way rather than as a list of what your students should say:",
      "",
      ...examinerOnly.map((h) => `- ${h}`),
      ""
    );
  }
  return out;
}

// --- Shared pieces -----------------------------------------------------------

/** The rubric block inside evaluatorContext, split from the background prose. */
function splitContext(context: string | undefined): { background: string; rubric: string } {
  if (!context) return { background: "", rubric: "" };
  const at = context.indexOf("Rubric:");
  if (at === -1) return { background: context.trim(), rubric: "" };
  return {
    background: context.slice(0, at).trim(),
    rubric: context.slice(at + "Rubric:".length).trim(),
  };
}

/**
 * Local vocabulary and local schedule, neither of which survives the trip.
 *
 * The week numbers are the worse of the two. They were written while the course
 * was being planned and none of them matches the dates the semester actually
 * ran, so an examiner reading "Week 8 lab" is being told something that was
 * never true of any course. Stripped rather than corrected, because the note is
 * there to tell an examiner what kind of answer counts and the week it happened
 * in is not part of that.
 */
function deJargon(text: string): string {
  return (
    text
      // Whitespace-tolerant: the source wraps these across lines, and an
      // anchored single-space pattern matched the unwrapped occurrences only.
      .replace(/\bproctored\s+quiz\b/gi, "graded quiz")
      .replace(/\bthe\s+proctored\s+version\b/gi, "the graded version")
      .replace(/\bproctored\b/gi, "graded")
      // Literal dates from the original semester. They map to nothing anywhere
      // else and survived the week-number purge because they are not weeks.
      .replace(
        /\s*\((?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}\)/g,
        ""
      )
      .replace(
        /\b(?:on|in)\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d{1,2}\b/g,
        "in class"
      )
      .replace(/\bCBTF\b/g, "the campus testing center")
      // Ordered: the parenthesised forms first, so the bare rule at the end only
      // sees what the specific ones left behind.
      .replace(
        /\s*[\u2014-]\s*Weeks? \d+(?:\s*(?:&|and)\s*\d+)?\s+labs?\)/g,
        ", from one of the labs)"
      )
      .replace(/\(Weeks? \d+\s*(?:&|and)\s*\d+\s+labs?\)/g, "(two of the labs)")
      .replace(/\(Weeks? \d+\s+labs?\)/g, "(one of the labs)")
      .replace(/,\s*Weeks? \d+(?:\s*(?:&|and)\s*\d+)?\)/g, ")")
      .replace(/\(Weeks? \d+\s*\/\s*([^)]+)\)/g, "($1)")
      .replace(/\bWeeks? \d+(?:\s*(?:&|and)\s*\d+)?\s+labs?\b/g, "one of the labs")
      .replace(/\bin Week \d+\b/g, "in class")
      .replace(/\bWeeks? \d+(?:\s*(?:&|and)\s*\d+)?\b/g, "earlier in the course")
  );
}

function gradingTable(scale: Grade[] | undefined, forPaper: boolean): string[] {
  if (!scale?.length) return [];
  return [
    "| Grade | Means |",
    "| --- | --- |",
    ...scale.map((g) => {
      const text = forPaper ? scrubGradeForPaper(g.description) : g.description;
      // Scrubbing a trailing clause can leave a list without its conjunction:
      // "responses are vague, off-topic". Close it rather than shipping the stub.
      const closed =
        forPaper && text !== g.description ? text.replace(/,\s+([a-z-]+)(\.?)$/, " or $1$2") : text;
      return `| **${g.grade}** ${g.label} | ${closed} |`;
    }),
    "",
  ];
}

/**
 * The scoring function. It lived in the original evaluator's prompt and was not
 * exported with the rubrics, which meant the kit shipped six criteria, three
 * levels and four letters with nothing connecting them. An examiner could apply
 * every criterion and still not derive a grade, so every grade was an assertion
 * and none of them would survive an appeal.
 */
function scoringRules(forPaper: boolean, hasOpinion: boolean): string[] {
  const topBand = forPaper
    ? "- Every criterion met, **and** the answer does something the question did not ask for — an example of their own, a qualification, a connection to another part of the course → top grade."
    : "- Every criterion met, **and** the student showed depth or nuance you did not prompt for → top grade.";
  return [
    "## Turning criteria into a grade",
    "",
    "Grade each section first, then the whole assessment.",
    "",
    "**Per section**",
    "",
    "Count the criteria you marked met, and the ones the student did not reach at all. Take the first line that applies:",
    "",
    topBand,
    "- Every criterion met, but nothing beyond an adequate answer → second grade.",
    "- More than half met and none missed entirely → second grade.",
    "- Most criteria not reached at all → lowest.",
    "- Anything else — exactly half met, fewer than half met, or one criterion missed entirely → second-lowest.",
    "",
    'That last line is the catch-all, and it is there because the obvious version of this rule had a hole. With three criteria you can write "fewer than half" and "most not reached" and feel the ground is covered. With two criteria, one met and one missed, neither fires: one of two is not fewer than half, and one of two is not most. That is the commonest outcome on a two-criterion section, and an examiner working from the earlier wording had nothing to apply.',
    "",
    "**Overall**",
    "",
    '- The overall grade is the grade of the student\'s **weakest** section. Not an average, and not a judgment call. "At or near the lower one" used to stand here, and the slack in those three words was a whole grade wide: it let a fluent bluffer who was strong in one section out-rank a quieter student who had actually done the reading, and left the marker nothing to say to an appeal.',
    "- A partly-met criterion is a gap, not a success. Do not round it up.",
    "- The top grade is rare. It needs original thinking, nuance nobody asked for, or a connection you did not suggest.",
    ...(hasOpinion
      ? [
          "- On opinion sections, grade the reasoning and the engagement, not the position. Agreeing with a counterargument, or noting it in a sentence, is not engaging with it: the student has to push back, qualify, or develop.",
        ]
      : []),
    "",
    "This is the rule the original evaluator used, stated in full. It is what makes a grade something you can show a student rather than something you assert.",
    "",
  ];
}

// --- Oral --------------------------------------------------------------------

export function assessmentToOralExam(raw: string): string {
  const a = frontmatter(raw);
  const portions = a.portions ?? [];
  const minutes = (portions.length || 1) * MINUTES_PER_ORAL_SECTION;

  const out: string[] = [
    `# ${a.title} — oral exam`,
    "",
    BANNER,
    "",
    a.description ? `${a.description}` : "",
    "",
    ...adaptationNotice(a),
    "## How to run it",
    "",
    `One student at a time. Allow ${MINUTES_PER_ORAL_SECTION} minutes per section, so about **${minutes} minutes each**${
      a.timeLimit
        ? `. The original gave a student ${a.timeLimit} minutes with the AI, which is not the same number and not comparable: software can ask fifteen follow-ups without getting tired`
        : ""
    }. Multiply by your class size before you commit to this. It is the expensive option and it is the better one.`,
    "",
    "You are doing what the AI interviewer did: ask an opening question, listen, and follow up only where the student has not already covered something.",
    "",
    "**The thing to track is whether they got there on their own.** The rubric below distinguishes a criterion met unprompted from the same criterion met after you asked about it directly, and that distinction is most of what this assessment measures. Write down which questions you had to ask. A student who covers everything after six direct questions has not done the same thing as one who covered it after one.",
    "",
    "Ask open first and specific only as needed. If you find yourself naming the concept you are hoping to hear, you have already given it away, so note that you did.",
    "",
    ...gradingTable(a.gradingScale, false),
  ];

  for (const [i, p] of portions.entries()) {
    const { background, rubric } = splitContext(p.evaluatorContext);
    out.push(
      `## ${i + 1}. ${p.title}`,
      "",
      p.goal ? `**What you are looking for:** ${p.goal}` : "",
      "",
      // Derived from this portion's own goal. A single opener keyed on
      // type produced "what is the strongest argument against your position?"
      // for a question that asks what a student found useful.
      ...openingQuestion(p),
      "",
      ...(p.criteria?.length ? ["**Criteria**", "", ...p.criteria.map((c) => `- ${c}`), ""] : []),
      ...(background
        ? [
            "<details><summary>Background from the original course, if you need it</summary>",
            "",
            deJargon(background),
            "",
            "</details>",
            "",
          ]
        : []),
      ...(rubric ? ["**Rubric**", "", "```", deJargon(rubric), "```", ""] : [])
    );
  }

  out.push(
    ...scoringRules(
      false,
      portions.some((p) => p.type === "opinion")
    ),
    "## Recording the result",
    "",
    "One grade for the whole assessment, plus the note on which criteria needed prompting. The note feeds the top-grade test above, and it tells you what the room did not have when you plan the next session.",
    "",
    "Fill a record sheet per student while you go. Reconstructing it afterward does not work, and an assessment you cannot show is one you cannot defend.",
    "",
    "---",
    "",
    "## Record sheet",
    "",
    `**Student:** ______________________  **Date:** ____________  **Assessment:** ${a.title}`,
    "",
    "| Section | Criterion | Met | Partly | Not reached | Questions I had to ask |",
    "| --- | --- | --- | --- | --- | --- |",
    ...portions.flatMap((p, i) =>
      (p.criteria ?? []).map((c) => `| ${i + 1} | ${c.replace(/\|/g, "/")} |  |  |  |  |`)
    ),
    "",
    "**Anything unprompted worth noting** (this is the top-grade test):",
    "",
    ...blankLines(3),
    "**Section grades:** ______  **Overall (= the weakest section):** ______",
    ""
  );

  return tidy(out);
}

/**
 * The task this portion sets, in the second person, derived from the portion's
 * own goal. Keying the prompt on `type` alone put a debate opener on every
 * reflective question in the end-of-semester quiz, including one that asks a
 * student to describe something they found useful.
 *
 * Returns null when the goal is too thin to carry a question on its own --
 * "Student articulates and defends a position" -- and the caller falls back to
 * the section title, which in those cases is the question.
 */
function taskFromGoal(p: Portion): string | null {
  const goal = (p.goal ?? "").trim();
  if (!goal) return null;

  // "Student demonstrates understanding of X by explaining Y" is evaluator
  // phrasing wrapped around a real instruction. Unwrap it.
  const demonstrates = goal.match(
    /^(?:The\s+)?Student\s+demonstrates?\s+(?:deeper\s+|a\s+)?understanding of\s+(.+?)(?:\s+by\s+([a-z]+ing\b[\s\S]*))?$/i
  );
  if (demonstrates) {
    const [, subject, by] = demonstrates;
    // Keep the subject. Dropping it turned "demonstrates understanding of
    // embeddings by explaining what the Embedding Explorer reveals" into a
    // question about a tool with the concept nowhere on the page.
    if (by) {
      const task = imperative(by.replace(/^([a-z]+ing)\b/i, (_m, g: string) => baseForm(g)));
      return `Show your understanding of ${subject}: ${task.charAt(0).toLowerCase()}${task.slice(1)}`;
    }
    return `Explain ${subject}`;
  }

  const asked = imperative(goal);
  return asked.length > 40 ? asked : null;
}

/** "explaining" -> "explain", "describing" -> "describe". */
function baseForm(participle: string): string {
  const stem = participle.replace(/ing$/i, "");
  if (VERBS.has(stem.toLowerCase())) return stem;
  if (VERBS.has(`${stem.toLowerCase()}e`)) return `${stem}e`;
  return stem;
}

/** A trailing "Be specific" is noise on a question that already asks for specifics. */
function withEmphasis(task: string): string {
  return /\bspecific/i.test(task) ? `${task}.` : `${task}. Be specific.`;
}

/**
 * An oral opener is one question, not the whole task read aloud. A goal like
 * "names a concept, explains it, and engages with a follow-up" describes the
 * shape of the section; handing all of it over at once tells the student what
 * the follow-up will be, which is the one thing the format is trying to avoid.
 */
function splitTask(task: string): { open: string; then: string[] } {
  // Split on a comma or a bare "and". Commas only meant that "name a concept
  // and explain it in your own words" was handed over whole, which tells the
  // student what the follow-up will be before they have answered the first
  // part -- the one thing an oral is trying to avoid.
  const parts = task.split(/,\s+(?:and\s+)?|\s+and\s+/);
  const open = parts.shift() ?? task;
  const then: string[] = [];
  for (const part of parts) {
    const first = part.split(" ")[0]?.toLowerCase() ?? "";
    // Only a clause that starts with an instruction is a follow-up. "and why"
    // is part of the sentence, not a second question.
    // A trailing fragment like "and why" belongs to the clause before it, so
    // glue it back on rather than abandoning a split that had worked.
    if (VERBS.has(first)) then.push(part);
    else if (then.length > 0) then[then.length - 1] += `, ${part}`;
    else return { open: task, then: [] };
  }
  return { open, then };
}

/**
 * Section titles are Title Case, which is right on a heading and wrong in a
 * sentence somebody says out loud. Acronyms stay as they are, so "Do Current AI
 * Models Pass?" becomes "Do current AI models pass?" rather than losing the AI.
 */
function asSpoken(title: string): string {
  return title
    .split(" ")
    .map((word, i) => (i === 0 || word === word.toUpperCase() ? word : word.toLowerCase()))
    .join(" ");
}

function openingQuestion(p: Portion): string[] {
  const task = taskFromGoal(p);
  const spoken = asSpoken(p.title);
  // A title that is already a question beats the goal read aloud. "Articulate
  // and defend a position on whether AI can be creative" is an evaluator's note
  // handed to an examiner as a line to say; "Can AI be creative?" is the same
  // section opened properly.
  const question = p.title.endsWith("?")
    ? { open: spoken, then: task ? splitTask(task).then : [] }
    : task
      ? splitTask(task)
      : {
          open: p.title.endsWith("?")
            ? spoken
            : `Tell me about ${spoken.charAt(0).toLowerCase()}${spoken.slice(1)}`,
          then: [],
        };
  // Only an actual counterargument criterion earns the pushback line. A bare
  // "push" also matched "probing follow-up", so a factual section on next-token
  // prediction told the examiner to ask what the strongest argument against it
  // was. There is no counterposition to next-token prediction.
  const wantsPushback = (p.criteria ?? []).some((c) =>
    /counter-?argument|objection|opposing view|argue against/i.test(c)
  );
  // ...and not when a clause of the goal already said it, which printed the
  // same instruction twice in a row.
  const alreadyAsks = question.then.some((c) => /counter-?argument|objection/i.test(c));
  const later = [
    // The examiner *is* the follow-up, so "engage with a follow-up" is not
    // something to get out of a student. The paper already dropped these.
    ...question.then
      .filter((c) => !/follow-?up/i.test(c))
      .map((c) => c.charAt(0).toLowerCase() + c.slice(1)),
    ...(wantsPushback && !alreadyAsks
      ? ["say what the strongest thing someone could say against that is, and what they make of it"]
      : []),
  ];
  // The opener is said to the student; the follow-ups are things to get out of
  // them. Mixing the two produced "get them to explain it in your own words".
  const open = youify(question.open).replace(/[.?]$/, "");
  return [
    `**Open with something like:** ${open}${question.open.endsWith("?") ? "?" : "."}`,
    ...(later.length
      ? [
          "",
          `**Then, only where they have not got there on their own, get them to:** ${later.join("; ")}.`,
        ]
      : []),
  ];
}

function blankLines(n: number): string[] {
  return Array.from({ length: n }, () => "\\_".repeat(46)).flatMap((l) => [l, ""]);
}

function tidy(lines: string[]): string {
  return lines
    .filter((l) => l !== undefined)
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}

// --- Written -----------------------------------------------------------------

export function assessmentToWrittenExam(raw: string): { paper: string; marking: string } {
  const a = frontmatter(raw);
  const portions = a.portions ?? [];
  const minutes = (portions.length || 1) * MINUTES_PER_WRITTEN_QUESTION;

  const studentFacing = findCourseSpecific(
    portions.map((p) => `${p.title} ${p.goal ?? ""} ${(p.criteria ?? []).join(" ")}`).join(" ")
  );

  const paper: string[] = [
    // A page an adopter photocopies, so it carries no adopter instructions --
    // except the one it must, because a question naming a tool the room never
    // had is unanswerable and the warning used to live only in the two files
    // the student never sees.
    ...(studentFacing.length
      ? [
          "> **Instructor: do not photocopy this yet.** This paper names things from",
          "> the original course that your students did not do. Replace them before you",
          "> hand it out, and delete this box.",
          ">",
          ...studentFacing.map((h) => `> - ${h}`),
          "",
        ]
      : []),
    `# ${a.title}`,
    "",
    `**${portions.length} question${portions.length === 1 ? "" : "s"}. ${minutes} minutes.** Answer every one.`,
    "",
    "Under each question is what a complete answer covers. Work through them in prose rather than as a list: the points are what you are marked on, not the form. Covering all of them earns a solid pass; a top grade needs something the question did not ask for.",
    "",
    "If you run out of space, carry on overleaf and say so.",
    "",
  ];

  for (const [i, p] of portions.entries()) {
    // The criteria are the specification. Withholding them from the student and
    // keeping them in the marking scheme meant a paper that said only "The
    // Geometry of Meaning" over eight ruled lines and graded against three
    // things the student was never told.
    // A criterion written for somebody in the room either gets the nearest thing
    // a paper can ask for, or it goes. Printing "engage with a probing follow-up"
    // on a page a student answers alone asks for something the format forbids.
    const asks = (p.criteria ?? [])
      .map((c) => studentWording(c))
      .filter((c): c is string => c !== null);
    paper.push(
      `## ${i + 1}. ${p.title}`,
      "",
      writtenInstruction(p),
      "",
      ...(asks.length
        ? ["You are marked on whether you can:", "", ...asks.map((c) => `- ${c}`), ""]
        : []),
      // Ten lines is about 110 handwritten words. A trial run of these papers
      // came out between 127 and 179 words on every single question, none of
      // them padded, so the layout was setting a standard the layout prevented.
      ...blankLines(Math.min(20, 8 + 3 * Math.max(asks.length, 1)))
    );
  }

  // Deduplicated: three sections repeating one criterion listed it three times.
  const interviewerBound = [
    ...new Set(
      portions.flatMap((p) => (p.criteria ?? []).filter((c) => NEEDS_AN_INTERVIEWER.test(c)))
    ),
  ];
  // Only claim the grade table was scrubbed when something was scrubbed. Three
  // of the five marking schemes asserted it over a table byte-identical to the
  // oral one.
  const scrubbedTable = (a.gradingScale ?? []).some(
    (g) => scrubGradeForPaper(g.description) !== g.description
  );
  // Criteria whose student-facing wording was hand-written. The marker needs to
  // know the student was asked something else, and the scheme said nothing.
  const reworded: [string, string][] = [];
  for (const p of portions) {
    for (const c of p.criteria ?? []) {
      if (NEEDS_AN_INTERVIEWER.test(c)) continue;
      const stripped = withoutTheAnswer(withoutTheInterviewer(c)).trim();
      const hand = STUDENT_WORDING[stripped];
      if (hand) reworded.push([c, hand]);
    }
  }
  const substituted = interviewerBound.filter((c) => paperEquivalent(c) !== null);
  const dropped = interviewerBound.filter((c) => paperEquivalent(c) === null);

  const marking: string[] = [
    `# ${a.title} — marking scheme`,
    "",
    BANNER,
    "",
    `**What this loses.** The original assessed these in conversation, and its rubric turns on whether a student produced something *before being asked for it*. On paper every answer is unprompted, so that distinction does not exist. Expect this to grade more generously than the oral version: a student who would have needed four prompts looks identical to one who needed none.${scrubbedTable ? " The grade table has had its references to interviewer prompting removed for the same reason, because they described something that cannot happen here." : ""}`,
    "",
    '**Partly met still exists.** What it cannot mean here is "got there only after I asked", which is most of what it meant in the original. On paper it means an answer that gestures at the criterion without landing it: names the thing but says nothing about it, or asserts what the criterion asks you to explain. The rubrics below keep that level and you should use it.',
    "",
    ...(reworded.length
      ? [
          "**Criteria the student's page words differently.** These carried their answer inside a parenthetical, so the paper asks for the same thing without naming it. Mark against the original wording below; the student was asked this:",
          "",
          ...reworded.map(([original, asked]) => `- *${original}* → **${asked}**`),
          "",
        ]
      : []),
    ...(substituted.length
      ? [
          "**Criteria the paper asks for differently.** These needed somebody in the room, so the student's page asks for the nearest thing a person can do alone:",
          "",
          ...substituted.map((c) => `- *${c}* → **${paperEquivalent(c)}**`),
          "",
          "**Score these against the paper wording, not the rubric block.** The rubric below still defines `met` as what happens *when the interviewer presents a counterargument*, and no interviewer does. Read it as: **met** — the student produced the objection and then did something with it, adding reasoning, qualifying, or rebutting; **partly met** — they produced an objection and left it there, or only restated their position; **not reached** — no objection appears. Simply naming one is not engaging with it, which is the part of the original wording that does carry over.",
          "",
          "Mark what the paper asked for rather than the original wording, and know what changed. Producing an objection against yourself is not the same skill as handling one somebody else raised, and it is usually the harder of the two. A student who does it is also following an instruction rather than showing initiative, so do not read compliance as strength.",
          "",
        ]
      : []),
    ...(dropped.length
      ? [
          "**Criteria a single-pass paper cannot score.** These are not on the student's page, and you cannot mark them from one sheet:",
          "",
          ...dropped.map((c) => `- ${c}`),
          "",
          "They are what the two-pass version below is for. Run only one pass and this assessment scores fewer criteria than the oral does, so the grade covers less. Say so if a student asks.",
          "",
        ]
      : []),
    "**A two-pass version, untested.** If you want some of that back, collect the answers, hand out a second sheet with one challenge per question, and collect that too. What a student does when pushed is the closest written equivalent to what the interviewer was listening for. Nobody has run this, and it doubles your marking. The same untested label the pattern chapters carry applies here.",
    "",
    ...adaptationNotice(a),
    ...gradingTable(a.gradingScale, true),
  ];

  for (const [i, p] of portions.entries()) {
    const { background, rubric } = splitContext(p.evaluatorContext);
    marking.push(
      `## ${i + 1}. ${p.title}`,
      "",
      // Verbatim, in the evaluator's own phrasing. The student's copy has the
      // same list rewritten to address them; this one has to match the rubric
      // below it word for word or a marker cannot line the two up.
      ...(p.criteria?.length ? ["**Criteria**", "", ...p.criteria.map((c) => `- ${c}`), ""] : []),
      // The background went to the oral examiner and not to the marker, which
      // had it backwards: whoever marks a stack of scripts is the person least
      // likely to have taught the material.
      ...(background
        ? [
            "<details><summary>Background from the original course, if you need it</summary>",
            "",
            deJargon(background),
            "",
            "</details>",
            "",
          ]
        : []),
      ...(rubric
        ? [
            "The original's rubric, for the wording of what counts. Ignore every clause about what the interviewer did or did not ask; none of that applies here, and the preamble says what `partially_met` means once those clauses are gone.",
            "",
            "```",
            deJargon(rubric),
            "```",
            "",
          ]
        : [])
    );
  }

  marking.push(
    ...scoringRules(
      true,
      portions.some((p) => p.type === "opinion")
    ),
    "---",
    "",
    "## Marking sheet",
    "",
    `**Student:** ______________________  **Marker:** ____________  **Assessment:** ${a.title}`,
    "",
    "| Section | Criterion | Met | Partly | Not reached |",
    "| --- | --- | --- | --- | --- |",
    ...portions.flatMap((p, i) =>
      (p.criteria ?? []).map((c) => `| ${i + 1} | ${c.replace(/\|/g, "/")} |  |  |  |`)
    ),
    "",
    "**Anything the question did not ask for** (this is the top-grade test):",
    "",
    ...blankLines(2),
    "**Section grades:** ______  **Overall (= the weakest section):** ______",
    ""
  );

  return { paper: tidy(paper), marking: tidy(marking) };
}

/**
 * What the student is told to do, derived from this portion's goal rather than
 * from its type. Two templates keyed on `type` put "give the strongest argument
 * against yourself" under every reflective question in the end-of-semester
 * quiz, including "Something Useful You Did With AI".
 */
function writtenInstruction(p: Portion): string {
  const task = taskFromGoal(p);
  if (task) {
    // "names a concept, explains it, and engages with a follow-up" describes a
    // conversation. On paper there is no follow-up, and printing the clause
    // told a student to do something the format makes impossible.
    const { open, then } = splitTask(task);
    const onPaper = [open, ...then.filter((c) => !NEEDS_AN_INTERVIEWER.test(c))];
    const joined =
      onPaper.length > 2
        ? onPaper.join(", ").replace(/,([^,]*)$/, ", and$1")
        : onPaper.join(" and ");
    return withEmphasis(youify(joined));
  }
  return p.type === "opinion"
    ? "Take a clear position on the question above and give your reasons. Be specific."
    : "Explain this as if to someone who has not taken the course. Be specific.";
}

/**
 * Criteria whose student-facing form went thin when the answer came out of it,
 * and which have no hand-written replacement.
 */
export function thinCriteria(raw: string): { portion: string; criterion: string }[] {
  const a = frontmatter(raw);
  const found: { portion: string; criterion: string }[] = [];
  for (const p of a.portions ?? []) {
    for (const c of p.criteria ?? []) {
      if (NEEDS_AN_INTERVIEWER.test(c)) continue;
      const stripped = withoutTheAnswer(withoutTheInterviewer(c));
      if (STUDENT_WORDING[stripped.trim()]) continue;
      if (tooThinForAStudent(c, stripped)) found.push({ portion: p.title, criterion: c });
    }
  }
  return found;
}

/** What the index needs to describe an assessment without re-parsing it. */
export function assessmentSummary(raw: string): {
  title: string;
  category: string;
  questions: number;
  oralMinutes: number;
  writtenMinutes: number;
} {
  const a = frontmatter(raw);
  const questions = (a.portions ?? []).length || 1;
  return {
    title: a.title,
    category: a.category ?? "practice",
    questions,
    oralMinutes: questions * MINUTES_PER_ORAL_SECTION,
    writtenMinutes: questions * MINUTES_PER_WRITTEN_QUESTION,
  };
}

/**
 * The index over all the assessments.
 *
 * Shared with the generator in `tools/` for the same reason the meeting index
 * is: when only the build wrote it, adding a question to an assessment
 * regenerated the paper and left the table describing the old one. It is the
 * drift the rest of the kit exists to prevent, in the file that advertises the
 * guarantee.
 */
const NUMBER_WORDS = ["none", "one", "two", "three", "four", "five", "six", "seven", "eight"];
const spellOut = (n: number): string => NUMBER_WORDS[n] ?? String(n);
const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

export function buildAssessmentIndex(entries: { slug: string; raw: string }[]): string {
  // Counted, not asserted. These were hardcoded and had the two numbers the
  // wrong way round, in the file whose whole subject is that this index is
  // derived rather than typed.
  const withNotice = entries.filter(
    ({ raw }) => adaptationNotice(frontmatter(raw)).length > 0
  ).length;
  const withBox = entries.filter(({ raw }) => {
    const a = frontmatter(raw);
    return (
      findCourseSpecific(
        (a.portions ?? [])
          .map((p) => `${p.title} ${p.goal ?? ""} ${(p.criteria ?? []).join(" ")}`)
          .join(" ")
      ).length > 0
    );
  }).length;
  const rows = entries.map(({ slug, raw }) => {
    const s = assessmentSummary(raw);
    return `| ${s.title} | ${s.category === "proctored" ? "graded" : "practice"} | ${
      s.questions
    } | [oral](${slug}/oral.md), ~${s.oralMinutes}m each | [written](${slug}/written.md) · [marking](${slug}/written-marking.md), ${
      s.writtenMinutes
    }m |`;
  });
  return [
    "# Assessments",
    "",
    "_The AI-conversation original ran all semester and the numbers it produced are",
    "real. Neither the oral nor the written version below has been run with students:",
    "they are the same rubrics in a form a person can administer. Their timings are",
    "derived from the number of questions, not measured. The evidence labels the",
    "pattern chapters carry apply here too, and this is the weaker end of the kit._",
    "",
    "The original ran these as conversations: an AI interviewer asked questions",
    "while a second AI tracked criteria, and a student finished when every",
    "criterion was met. That software is not here. What carries is the rubric and",
    "the rule that turns it into a grade, and both are text.",
    "",
    "Each assessment is emitted twice, and the two are not equivalent.",
    "",
    "**Oral** keeps everything, including the thing the format exists for: the",
    "rubric distinguishes a criterion a student reached on their own from the same",
    "criterion reached after being asked directly, and an examiner can see that.",
    "It costs you the time, one student at a time.",
    "",
    "**Written** scales and loses exactly that. On paper nothing is prompted, so",
    "the distinction collapses and the criteria can only be met or not met. It will",
    "grade more generously than the oral version. The marking scheme says so, and",
    "suggests a two-pass version that recovers part of it.",
    "",
    "Both carry the same **grading rule** — how a handful of criteria at three levels become",
    "one letter. It came from the original evaluator and it is the piece that makes",
    "a grade something you can show a student rather than something you assert.",
    "",
    "| Assessment | Kind | Questions | Run it live | Run it on paper |",
    "| --- | --- | --- | --- | --- |",
    ...rows,
    "",
    "## What these actually cost you",
    "",
    "**The two columns above are not comparable, and reading them as though they",
    "were will cost you a week.** The oral figure is your own time, per student.",
    "The written figure is a room booking, shared by the whole class, and it does",
    "not include marking.",
    "",
    "For a class of thirty, the End-of-Semester Quiz works out at roughly:",
    "",
    "| | Oral | Written |",
    "| --- | --- | --- |",
    "| Contact | 25m x 30 = **12.5 hours** | one 50m period |",
    "| Marking | none, if you grade in the room | ~10m per script = **5 hours** |",
    "| Total | **~15 hours** with changeover | **~6 hours** |",
    "",
    "The marking figure is an estimate from one examiner who tried it, not a",
    "measurement. The rest is arithmetic on the per-question numbers: five minutes",
    "per section spoken, ten per question written. The original allowed fifty",
    "minutes with the AI, which is not comparable to either: software can ask",
    "fifteen follow-ups without tiring and has no other students waiting.",
    "",
    "**The practice-then-graded structure is the first thing that breaks at scale.**",
    "Running all five of these orally is about ninety minutes per student, and",
    '"unlimited attempts" cannot be offered one student at a time at all. If you',
    "want the practice half, it has to be written, or a chatbot, or dropped.",
    "",
    "## Practice and graded",
    "",
    "The course used low-stakes practice versions of the same rubric, unlimited",
    "attempts, before the graded one. Only one graded assessment was built this way",
    "(the End-of-Semester Quiz), and its practice version pushes harder than it",
    "does on purpose, on the theory that practicing under more pressure than the",
    "real thing is the point of practicing.",
    "",
    "Quiz 3 Practice has no graded counterpart here. The graded Quiz 3 was not",
    "built as a conversational assessment, so there is nothing to export. Use the",
    "practice version as an assessment in its own right, or as preparation for one",
    "you write.",
    "",
    "## Editing them",
    "",
    "The sources are in `content/assessments/`, one file per assessment, and",
    "`bun run handout` regenerates all three outputs from them. Change a",
    "criterion there rather than in the three files it produces: the oral",
    "script, the paper, and the marking scheme have to agree, and keeping them",
    "in step by hand is how one of them ends up wrong.",
    "",
    "## Before you use any of these",
    "",
    `${capitalize(spellOut(withNotice))} of these name things from the original course that your`,
    "students cannot reach. Where that happens, the oral script and the marking",
    "scheme open with a *Before you use this* section. Where the reference sits in a",
    "question rather than in the notes to you, the student paper also opens with a box",
    `telling you not to photocopy it until you have replaced them: ${spellOut(withBox)} of them.`,
    `The other ${spellOut(entries.length - withNotice)} carry no such section, because they need none.`,
    "",
    "The assessment chapter in [the guide](../guide/00-front-matter/03-assessment.md)",
    "covers what the rest of the grade was, and why most of it was participation.",
    "",
  ].join("\n");
}
