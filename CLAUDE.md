# Working on this course

You are helping someone teach a version of *Using and Understanding AI*, a course for students with no technical background and no prerequisites. This file is what the original instructor learned running it, written down so you can act on it rather than rediscover it.

Treat the person you are working with as the instructor. They decide. Your job is to make adapting this material cheap enough that they actually do it, rather than teaching the version that happened to fit someone else's room.

## What this repository is

Course content and structure, not software. Meetings are typed data files. Readings are Markdown. Prompts are Markdown. Handouts are generated from the meetings, so the handout can never drift from the plan.

The original ran on a custom website that collected student writing, used AI to sort it, ran group discussions, and checked reading completion. That website is not here and is not coming. Everything in this repo works without it.

## The first questions to ask

Before adapting anything, find out:

1. **How long is the period?** The original is 75 minutes. Most stage plans assume it.
2. **How many students?** The original had about a dozen, which is smaller than most rooms this will be taught in and smaller than the procedures here assume by default. Scale the collection steps up before you scale anything else. Above 40, the collection patterns change shape and you should say so.
3. **Can students move?** Fixed seats in rows, movable tables, or open floor. This matters more than class size and the original never had to ask it: several meetings are built on partner rotation, and a lecture hall with bolted seats cannot run one. In fixed seating, pair with a neighbour and keep the same pair all session, turn a row into a group of four by having the front pair turn around, and drop the Gallery Walk entirely -- half the room cannot circulate. Say which round you are cutting to buy the time back.
4. **What AI access do students have?** Confirm they have some. See *How an activity can run* below.
5. **Which readings can they actually get?** Most originals are paywalled. Assume they will substitute.
6. **What are they teaching toward?** This is an elective with no downstream course depending on it. If theirs has prerequisites attached, the assessment story changes completely.

Do not start editing until you know 1, 2, 3, and 4.

## What teaching this requires

A photocopier, a chatbot for students, and an agent for you. Confirm all three before planning around them.

## How an activity can run

Every activity exists at three levels. Ask which one a design touches before proposing it.

**Paper.** Cards, a whiteboard, a photocopier. Every meeting works this way, and the six patterns in `guide/10-patterns/` are the procedures. The point is that the classroom never depends on software being up: the original instructor's own AI facilitator was instructed to push students toward talking face to face, so the paper version of a group discussion is often the stated goal with the scaffolding removed.

**Any chatbot.** The prompts in `content/prompts/` run without the original system. A student with ChatGPT or Claude runs a preparation chat by pasting in the prompt and the reading together. The prompt asks the model to quote the reading, so without the text pasted alongside it the model will invent quotations. A group can run a facilitated discussion the same way. It is usually better than paper for preparation work and about equal for in-class discussion.

**Custom infrastructure.** What the original had. Do not recommend building it. It took a semester and it is not the part that made the course work.

Do not hand someone the paper substitute for a stage their students could run with a chatbot.

## What was learned running it

These are expensive lessons. Apply them without being asked.

**Every activity meeting ends with a five-minute feedback stage.** No exceptions. It is the only systematic signal about whether the session worked, and it is the first thing to get cut when the period runs out—which is exactly when you most need it.

**Discussion share-outs expand, and the last round pays.** Plan four rounds and teach three. Put the round you are least attached to last, and tell the class at the start that you may not reach it. A round dropped on purpose costs nothing; a round dropped at the bell costs the ending.

**Whole-class discussion needs a specific question and a named person.** After twenty minutes of paired work, "let's discuss as a class" does not restart the conversation. The Card Sort pattern exists to produce that specific question.

**Disagreement is the target, not consensus.** The handouts ask "where did your group disagree?" rather than "what did you conclude." When sorting student work, the pile worth spending time on is the contradictory one. The original's AI prompt for categorizing study strategies said the disputed category was the most valuable one, and that was right.

**Plans overrun the period.** The three instrumented meetings were each planned at roughly 80 minutes of stages for a 75-minute class, and the meeting index shows the rest range from 40 to 90. Check the total before you teach one, and cut deliberately rather than at the bell.

**The paper version costs four to five minutes per collection point.** A meeting with three collection points does not fit in 75 minutes on paper, and several have three. Say which stage comes out rather than telling the instructor to hurry.

**Gate the stages you want to measure.** If you help someone instrument their own course, know that a recorded stage time is only trustworthy when students could not begin without being advanced. A stage that opens by forming pairs is gated and the timestamp is real. A stage that opens with "now discuss" is not, and the timestamp records when the instructor remembered. Of 26 recorded stages in the original, 2 produced trustworthy durations.

## Structure

A meeting is `frontmatter`, an optional `facilitationOverview`, an `activity` with `stages`, and an optional `outro`.

A stage has a `label`, an `estimatedTime`, an optional `transition` (one line on what changes here—never shown to students), optional `facilitationNotes` (instructor only), `content` blocks, and an optional `group`.

Content blocks are a discriminated union in `content/types.ts`. Blocks fall into two kinds: ones paper carries directly (prose, reading links, writing space, feedback) and ones that need a substitution pattern (anything that collected student work and showed it back to the room). `guide/10-patterns/` has one chapter per pattern.

When you add a block type, `cd tools && bun run check` fails until you decide how paper handles it, because the substitution table is keyed by the full union. That is deliberate. Do not work around it, and do run it -- `bun run handout` does not typecheck.

`bun run handout` validates before it writes anything, and refuses on: a reading link with no annotation in `readings/`, a preparation or group-chat slug with no file in `content/prompts/`, a substitution pattern with no chapter in `guide/10-patterns/`, an `activity.meetingSlug` that disagrees with its filename, and an activity meeting that does not end with a feedback block. It names the meeting and the problem and exits non-zero, so a failed run means nothing was regenerated.

The feedback rule has one recorded exception, in `tools/kit-validate.ts`. If you need another, put it there with a stated reason rather than leaving it implicit.

## Conventions

- Keep `estimatedTime` on every stage even though it will be wrong. It is the instructor's intent, and the plan is more useful than a blank.
- Student-facing prose lives in `markdown` blocks and is what students read verbatim. Write it to them, not about them.
- `facilitationNotes` are for the person running the room. Say what to watch for and what to say, not what the stage is.
- Group sizes default to 2. Larger groups need a reason.
- Do not invent participation data. The original tracked who spoke; paper cannot, and the guide says so.

## Writing style

Short declarative sentences. Em dashes sparingly, and unspaced when used. Prefer periods, commas, and colons. Avoid stock AI phrasing.

Say what is lost as plainly as what is gained. An adopter deciding whether to use a substitution needs the honest version, and every pattern chapter has a "what you lose" section for that reason.

## When you are unsure

Ask the instructor. This material came from one course, one room, and about a dozen students. It is a starting point for their course, not a specification.
