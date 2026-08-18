---
id: card-sort
title: Card Sort
covers:
  - text-submission-board
  - question-entry
  - question-board
  - selected-question
  - strategy-entry
  - strategy-board
  - strategy-results
---

_The procedure below is a design: the software did this job all semester, the paper version has not been run with students, and its timings are estimates. What the software did, and what it cost, is observed. See [the README](README.md)._

## What the software was doing


Students typed a response, a question, or a list of strategies. The submissions went to a server. An AI read all of them at once and handed the instructor something usable: discussion questions aimed at named students, a deduplicated and ranked question list, or a set of strategies sorted into what groups agreed worked, what they agreed didn't, and where they disagreed.

That last category matters most. The prompt that produced it said so outright: the disputed pile is the pedagogically valuable one.

None of this required a computer. It required someone to read a dozen things quickly and decide which three were worth the room's attention.

## The procedure

You need index cards, a marker, and tape. For the strategies version you need cards in two colors.

**Collect.** One idea per card, name in the corner. Announce the count, and hold the time. Two minutes, not five. Cards rather than paper because you are about to sort them.

**Get them to the front.** Designate a runner per row. Do not let students queue at your desk. This turns an unpredictable trickle into ninety seconds.

**Sort out loud, while the room is busy.** Give the class something to do first: turn to your neighbor and say which of your cards you are least sure about. Then sort in front of them, reading each card aloud as you tape it to the board. Reading aloud is not a flourish. It is the rephrasing step, and it is how the class learns what you consider interesting.

Three piles, and the pile names change with the task:

- *Discussion questions from written responses.* Sort into quotable, colliding, and typical. Tape two or three quotable cards with the name showing, so you can say "[name] wrote this, tell us more." Then tape two or three pairs that contradict each other, side by side. Discard the typical ones. Stop at four minutes and accept a worse sort. Five good cards beat ten mediocre ones.
- *Student questions.* Stack near-duplicates physically. The height of a stack is a frequency signal the AI never had. Tape the top card of the five or six tallest stacks and write the count beside it. Circle one to work on.
- *Strategies.* Three columns: works, doesn't work, disputed. Green cards for effective, red for ineffective, group number rather than name. Any idea that appears on both a green and a red card moves to disputed with both cards stacked. Spend the discussion there.

**Leave them up.** The taped cards stay on the board for the rest of class. A screen shows one thing at a time; a wall shows eight things for seventy-five minutes.

## On the handout

Space to copy their own cards, so they keep a record of what they submitted. Then a "From the board" area of six ruled lines. Without it the sort evaporates when the bell rings.

For the question version, add a boxed line: *the question our group is investigating.* For strategies, a three-column table with four rows.

## What you lose

Speed. A collection point costs four or five minutes, estimated, against roughly fifteen seconds of machine time. Meetings with three collection points, and there are several, lose about a fifth of the period, and the answer is to cut a round rather than to hurry all of them. See the pacing chapter.

You also cannot sort and circulate at once, and the cards go in the recycling at the end of the day. The database kept everything.

## What you gain

You read every card. In the software version the instructor reads the AI's summary, not the submissions, and that is a real loss disguised as a convenience. Sorting by hand puts you back in contact with what your class actually thinks.

The sort is public. Students watch you decide what is interesting and why, which is a demonstration of judgment they otherwise never see.

And stack height beats machine deduplication as a signal, because it is visible to the room. Everyone can see that seven people asked the same question.
