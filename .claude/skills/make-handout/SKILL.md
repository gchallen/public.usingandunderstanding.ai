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

## What the generator does not check

It checks nothing. There is no validation and no error path, so it exits 0 on
work that is silently wrong. Verify these yourself after generating:

- **A `reading-link` slug with no matching file in `readings/`** emits the slug
  with its hyphens turned into spaces and no link. It looks like a citation and
  is not one.
- **A `preparation-chat` or `group-chat` slug with no prompt file** still emits
  the full paper callout, telling an instructor to print criteria that do not
  exist.
- **A substitution pattern with no chapter** in `guide/10-patterns/` still emits
  "See the X chapter for the full procedure." Nothing reads that directory.
- **A `question-board` whose id matches no `question-entry`** emits a card-sort
  callout for a collection that never happened.
- **`group.size` above 4** prints only four name blanks.

An earlier version of this file claimed the generator refused the third of
these. It does not.

## Printing

Markdown is the source, and the kit ships no PDF step. Render it with whatever
Markdown-to-PDF tool the instructor already uses, or paste into a document and
print from there. Writing space is escaped underscores, so it survives any
renderer.

Do not add a cover page; class time is short and a cover page costs a page per
student.

## After generating

Skim the student handout before handing it over. The two things worth checking every time: that no instructor-only content leaked in, and that every place where the website used to show the class something now has either a procedure or a space to write it down.
