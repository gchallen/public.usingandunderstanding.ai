---
name: plan-session
description: Design a new meeting in the style of this course — exploratory, lab, or discussion. Use when someone wants a session on a topic the repo does not cover, or wants to build their own activity using these patterns.
---

# Planning a new session

The course has three kinds of meeting. Establish which one before designing anything, because they are structured differently and fail differently.

**Exploratory.** Students investigate a concept using tools, then compare what they found. No lecture. The instructor's job is to organize what the room discovered, not to deliver material. Works when the concept is something you can poke at.

**Lab.** Students make something with AI tools and show it to each other. The artifact is the point, and the reflection on how they got it is the learning.

**Discussion.** Students arrive having read something and argue about it. Requires preparation, or the first fifteen minutes go to summarizing the reading for people who did not read it.

## The shape that works

Most meetings here follow the same arc, and it is worth keeping:

1. **Individual first.** Everyone writes or tries something alone. This guarantees quiet students have a position before anyone talks.
2. **Pairs.** Compare, disagree, sharpen. Rotate partners between rounds if there are several — the original does this deliberately so students do not spend a semester with one person.
3. **Collect and surface.** The class sees what the class thinks. On paper this is the Card Sort pattern.
4. **Whole class, on a specific question.** Not "any thoughts?" A named question, ideally one a student wrote.
5. **Feedback.** Five minutes, always.

## Rules to hold

- **End with feedback.** It is the only systematic signal you get, and it is the first casualty when the period runs out.
- **Plan to overrun.** Budget about 80 minutes of stages for 75 and put the most expendable round last.
- **Aim at disagreement.** Design the prompt so reasonable people land in different places. A question everyone answers the same way produces a dead room.
- **Give each stage a transition line.** One sentence on what changes here. It is what makes the plan readable months later.
- **Write facilitation notes as instructions to a person**, not descriptions of the stage. What to watch for, what to say, when to move.

## Budget

On paper, each point where you collect student work costs four to five minutes. Count them before committing to a stage list.

With a chatbot available, aggregation is faster but not free. The original's AI curation step still needed the instructor to read the output and decide what mattered, and that is where the time goes.

## When you are done

Write the meeting into `content/meetings/`, then run the `make-handout` skill. Read the student handout end to end before teaching from it.
