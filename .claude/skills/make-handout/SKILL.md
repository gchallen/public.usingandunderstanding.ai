---
name: make-handout
description: Regenerate the instructor guide and student handout for a meeting from its definition. Use after editing a meeting, or when someone asks for printable materials, a handout, or a guide for a session.
---

# Making handouts

Handouts are generated from the meeting definition, never written by hand. The moment a handout is edited directly it starts drifting from the plan, and the drift is invisible until someone teaches from the wrong one.

## Run it

```bash
cd tools && bun install          # first time only
bun run handout                  # every meeting
bun run handout <meeting-slug>   # one meeting
```

The scripts live in `tools/`, not at the repository root. Running `bun run
handout` from the root fails with `Script not found`.

Output lands in `guide/20-meetings/<slug>/`:

- `guide.md` — the instructor version: facilitation notes, stage timings, expected responses, and a callout naming the paper procedure wherever the original relied on the website.
- `handout.md` — the student version: the same prose, with ruled writing space, group-name blanks, and a place to record what the class produced.

## What the two variants differ on

The student handout omits anything marked instructor-only, omits facilitation notes, omits stage timings, and turns every submission prompt into writing space. The instructor guide keeps all of it and shows the expected response instead of blank lines.

If you find yourself wanting to put something in the student handout that is not in the meeting definition, put it in the meeting definition.

## What the generator checks

It validates before it writes and refuses rather than emitting something wrong:

- a `reading-link` slug with no annotation in `readings/`
- a `preparation-chat` or `group-chat` slug with no file in `content/prompts/`
- a substitution pattern with no chapter in `guide/10-patterns/`
- an `activity.meetingSlug` that disagrees with its filename
- a `dependsOn` naming a meeting that is not in this kit
- student-facing prose that refers backward while the meeting declares no `dependsOn`
- a reading named in prose but never linked, which would make the index say the meeting assigns none
- an activity meeting that does not end with a feedback block

It names the meeting and the problem and exits non-zero.

It emits every file before writing any of them, and keeps what each file said so
it can put it back if a write fails partway through. A failed run leaves the tree
as it was.

It also regenerates the exams in `assessments/` from `content/assessments/`, so
editing a criterion updates the oral script, the paper, and the marking scheme
together. Do not hand-edit those files; they are output.

What it does not catch: `group.size` above 4 prints only four name blanks. And
it does not typecheck -- run `bun run check` for that, which is what enforces
that every block type has a paper handling decided for it.

## Printing

Markdown is the source, and the kit ships no PDF step. Render it with whatever
Markdown-to-PDF tool the instructor already uses, or paste into a document and
print from there. Writing space is escaped underscores, so it survives any
renderer.

Do not add a cover page; class time is short and a cover page costs a page per
student.

## After generating

Skim the student handout before handing it over. The two things worth checking every time: that no instructor-only content leaked in, and that every place where the website used to show the class something now has either a procedure or a space to write it down.
