---
name: make-handout
description: Regenerate the instructor guide and student handout for a meeting from its definition. Use after editing a meeting, or when someone asks for printable materials, a handout, or a guide for a session.
---

# Making handouts

Handouts are generated from the meeting definition, never written by hand. The moment a handout is edited directly it starts drifting from the plan, and the drift is invisible until someone teaches from the wrong one.

## Run it

```bash
bun run handout                  # every meeting
bun run handout <meeting-slug>   # one meeting
```

Output lands in `guide/20-meetings/<slug>/`:

- `guide.md` — the instructor version: facilitation notes, stage timings, expected responses, and a callout naming the paper procedure wherever the original relied on the website.
- `handout.md` — the student version: the same prose, with ruled writing space, group-name blanks, and a place to record what the class produced.

## What the two variants differ on

The student handout omits anything marked instructor-only, omits facilitation notes, omits stage timings, and turns every submission prompt into writing space. The instructor guide keeps all of it and shows the expected response instead of blank lines.

If you find yourself wanting to put something in the student handout that is not in the meeting definition, put it in the meeting definition.

## If the build fails

The generator refuses to emit a meeting that references a substitution pattern with no chapter written for it. This is intentional: a handout that points a reader at a procedure they cannot look up is worse than one that says nothing.

Either write the chapter in `content/patterns/`, or change the block so it maps to an existing pattern.

## Printing

Markdown is the source. For paper, either render it with whatever Markdown-to-PDF tool the instructor already uses, or run:

```bash
bun run handout:pdf
```

Handouts are designed to photocopy as-is. Do not add a cover page; class time is short and a cover page costs a page per student.

## After generating

Skim the student handout before handing it over. The two things worth checking every time: that no instructor-only content leaked in, and that every place where the website used to show the class something now has either a procedure or a space to write it down.
