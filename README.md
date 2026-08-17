# Using and Understanding AI — course kit

Content and structure for a course on generative AI aimed at students with no technical background and no prerequisites. Originally taught at the University of Illinois, Spring 2026.

This is not the course website. It is the part of the course that transfers: the meetings, the activity patterns, the prompts, the readings' annotations, and what was learned running it. Everything here works without any of the original infrastructure.

## Start here

- **[guide/00-front-matter/01-what-this-is.md](guide/00-front-matter/01-what-this-is.md)** — what is and is not included.
- **[guide/10-patterns/](guide/10-patterns/)** — six classroom procedures that replace what the original's software was doing. Worth reading even if you never use a meeting from this repo.
- **[guide/20-meetings/](guide/20-meetings/)** — every meeting of the semester, each with an instructor guide and a student handout ready to photocopy.

## What you need to teach it

**A photocopier.** Print the handouts. Every activity has a paper procedure, so the room keeps working when software does not.

**A chatbot, for students.** `content/prompts/` holds self-contained system prompts for pre-class reading conversations and in-class group discussion. Paste one into ChatGPT or Claude and it works. See [content/prompts/README.md](content/prompts/README.md).

**An agent, for you.** `AGENTS.md` and `CLAUDE.md` carry the teaching judgment behind these materials, and `.claude/skills/` has procedures for adapting a meeting to your room, regenerating handouts, and planning a new session. Adapting someone else's course is the expensive part, and this is what makes it cheap.

## Regenerating handouts

Handouts are generated from the meeting definitions, never hand-edited, so they cannot drift from the plan.

```bash
cd tools && bun install
bun run handout                 # all meetings
bun run handout <meeting-slug>  # one meeting
```

## What is not here

The vendor arrangement behind the websites lab. That lab used a paid AI site builder with a promo code from a per-institution deal, which cannot be handed on. The kit's version of the lab is tool-agnostic and the External Tool chapter covers choosing one. Everything else about the meeting is intact.

The article text for the readings. Most are paywalled, so this repo carries citations and the course's own annotations, each quoting the phrase it was attached to. See [readings/README.md](readings/README.md).

The conversational assessments, which were AI-conducted oral exams. They were the most unusual part of the course and are the least portable.

The website, database, and deployment. Not recommended, and not the reason the course worked.

## A note on where this came from

The original course was built and is maintained through conversation with an AI assistant — the meetings, the activities, the website, and this kit. The setup in `AGENTS.md` and `.claude/skills/` exists so you can continue that way in your own repository rather than inheriting a frozen document.

## License

Course content and annotations are offered for reuse and adaptation with attribution. The linked articles belong to their publishers.
