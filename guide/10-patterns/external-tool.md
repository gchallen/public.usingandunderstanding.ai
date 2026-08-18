---
id: external-tool
title: External Tools
covers:
  - replit-promo-code
---

_What this chapter describes about the original -- the vendor, the promo code, and what happened without them -- is observed. The procedure below is a design: it is how to run the lab on a tool that is not the original's, and nobody has done that. The tool comparison is current as of writing and will go stale; check it yourself. See [the README](README.md) in this directory._

## What the software was doing

One lab sends students to a third-party AI site builder, and the course website
showed enrolled students a promo code that made the paid tier free. That code
came from a per-institution arrangement. It cannot be handed on, and neither can
the assumption behind it, which is that the tool your students use is free,
capable enough, and still exists on the day you teach.

This chapter is the substitute for that block. It is not a procedure so much as
a decision you have to make before the lab can run.

## Choosing a builder

Any tool that turns a natural-language description into a working, publishable
website will carry the lab. The lab is teaching that describing what you want is
enough, so it does not matter whose AI builds it.

| Tool | Publishes a public URL | Notes |
| --- | --- | --- |
| Replit | Yes | What the original course used. Full-featured, and the free tier is the part most likely to move. |
| Lovable | Yes | Strong at single-page sites from one prompt. |
| Bolt | Yes | Fast first result, browser-only, no account needed to start. |
| v0 | Yes | Component-oriented; students may need help getting to a whole page. |
| Claude Artifacts | No, shareable link only | No account cost if students already have access. The gallery works from share links instead of published sites. |

Prices, free tiers, and account requirements on all of these change on a scale
of months. Treat this table as a starting list, not as current fact.

## The procedure

**Pick one tool and have the entire class use it.** This is the part instructors
get wrong. Letting students choose looks generous and costs you the ability to
help anyone from the front of the room, because no two screens match.

**Check the free tier the week before you teach**, not the month before. A tier
that quietly stopped being free is a dead lab, and you find out with thirty
students watching. If it moved, switch tools. Nothing in the lab depends on
which one you picked.

**Have students create accounts before class if the tool requires one.** Account
creation eats ten minutes of a thirty-five minute build stage, and it eats it
unevenly, so half the room is idle.

**Know what "publish" means in your tool** and be able to say it in one
sentence. The gallery stage needs a URL per student. If your tool only produces
share links, that is fine, but decide before class rather than during it.

**Have a fallback for students who cannot make an account.** Some will hit a
verification wall, a school-account restriction, or a country block. Pair them
with someone who got in. The lab works fine with two people at one screen, and
pairing is a better outcome than a student sitting out.

## On the handout

The student handout says "the site builder your instructor named" rather than a
product name, so it does not go stale and does not need reprinting when you
switch tools. Write the name, the URL, and any access instructions on the board
at the start of the lab.

## What you lose

The promo code, and with it the assumption that every student can reach the
paid tier. On a free tier, students may hit generation limits partway through
the build stage. Tell them at the start that they may get a limited number of
attempts, which pushes them toward describing the whole site well the first time
rather than iterating twenty times on a heading. Some instructors will find this
produces better prompting behavior than the unlimited version did.

You also lose the guarantee that the tool behaves the way the guide describes.
The facilitation notes were written against one vendor in one semester.

## What you gain

_Predictions, not observations. The lab has never been run on a second tool; these are what the substitution is designed to buy you._

Independence from a vendor relationship you do not have. The original lab was
one business decision away from breaking, and an adopter inherits that risk
whether or not it is written down. Naming the substitution makes the dependency
visible and gives you a documented way to swap it. Nobody has run the lab on a
second tool, so the swap is untested too.

It also makes the lab honest about its own claim. If the skill being practiced
is describing what you want clearly enough that an AI can build it, then that
skill should survive changing which AI builds it. Running the lab on a different
tool than the one it was designed for proves the claim.
