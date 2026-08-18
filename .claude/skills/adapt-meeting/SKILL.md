---
name: adapt-meeting
description: Adapt one of the course meetings to a different classroom — period length, room layout, class size, AI access, and available readings. Use when someone wants to teach a meeting from this repo but their context differs from the original, or asks to shorten, lengthen, or resize an activity.
---

# Adapting a meeting

The meetings here were built for a 75-minute period, about a dozen students, no prerequisites, and a custom website. Change any of those and the plan needs rework, not just trimming.

Do not start editing until you have answers to the five questions below. Ask them together, in one message, and offer the original's values as the default so the instructor can accept quickly.

## 1. Ask

**Period length.** The original is 75 minutes and the plans total about 80, so they already overrun. If theirs is shorter, you are cutting stages, not compressing them.

**Room layout.** Fixed seats in rows, movable tables, or open floor. Ask this first; it constrains more than class size does and the original never had to ask it, because it had one room. Several meetings are built on partner rotation between stages, which bolted seating cannot run. In fixed seats: pair with a neighbour and keep that pair, make a four by having the front pair turn around, and drop the Gallery Walk, which needs students circulating. Say which round you cut to buy back the time.

**Class size.** About a dozen, which is small. Most adopters will have more, and the collection steps are the first thing that breaks. Collection patterns change above 40: card sorting stops being feasible in the time available, and you should move to a sampling approach — collect from every student, sort only a subset, and say so out loud.

**AI access.** Three cases, and they lead to different designs:
- Students have a chatbot → use `content/prompts/` directly. Preparation chats and group facilitation work close to the original.
- Instructor only → the instructor can run aggregation with their own chatbot between stages, or project a demo.
- None → the paper patterns in `guide/10-patterns/`.

**Readings.** Most originals are paywalled. Ask what they can actually assign. If they substitute, the preparation prompt and the discussion questions both need rewriting against the new article, not just a slug change.

## 2. Cut before you compress

If the period is shorter, remove whole stages. Do not shave two minutes off each.

Cut in this order:

1. A late discussion round. Rounds are usually parallel in structure, so losing the last one costs the least. Say in the guide that it was cut.
2. A share-out that follows another share-out.
3. Never the feedback stage. Five minutes at the end, always.

If the period is longer, do not add a round and do not stretch the existing
ones. A ten-minute paired discussion given fifteen does not deepen, it dies, and
you will be watching it die from the front of the room.

Spend the surplus in this order. First on the substitutions, which are not free:
budget four to five minutes per paper collection point, and more if you are
swapping in a tool the original did not use, because an unfamiliar interface
costs orientation time the guide does not account for. Then on the exploration
or investigation stage, which is the one stage that rewards more time in almost
every meeting here, because it is the one where students are generating rather
than reporting. Then, and only then, on a fourth round.

Say which stage you extended and why in the guide, so the next person adapting
it knows where the slack went.

## 3. Budget the paper cost

Each collection point costs four to five minutes on paper that the website did not need: collecting cards, sorting them in front of the class, taping them up.

Count the collection points in the meeting. Multiply by four. If the total no longer fits, cut a round and say which.

## 4. Rewrite, then regenerate

Edit the meeting file in `content/meetings/`. Keep `estimatedTime` on every stage even though it will be wrong; it records intent.

Then run the `make-handout` skill so the instructor guide and student handout match what you changed. Never hand-edit a handout — it will drift from the meeting the first time anything changes.

## 5. Tell them what you changed and why

End with a short summary: what was cut, what was resized, what assumptions you made, and what you were not able to preserve. If the adaptation loses something real — a substitution that does not carry the original's point, a reading you could not replace — say so rather than smoothing over it.
