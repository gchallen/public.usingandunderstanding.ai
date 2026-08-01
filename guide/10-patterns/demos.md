---
id: demos
title: Demos
covers:
  - markov-babbler
  - neuron-explorer
  - digit-network
  - llm-explorer
  - temperature-compare
  - embedding-explorer
  - training-stage-matcher
  - preference-rater
  - training-simulation
  - video-player
---

## What the software was doing

Nine interactive components let students manipulate a concept rather than hear about it: adjust the weights on a single neuron, watch a small network learn to read handwriting, generate text from a word-frequency table, see the actual probabilities behind a model's next word, compare the same prompt at different temperatures, do arithmetic on word meanings.

These are the exploratory meetings. The whole argument for them is that a student can try something you did not anticipate.

They fall into three groups, and only one of them is a real problem.

## Tier one: still available, no substitute needed

Three of them run entirely in the browser and are published without a login:

- Markov Babbler
- Neuron Explorer
- Digit Recognition Network

Point your students at **usingandunderstanding.ai/resources** and name the tool. Print that one address rather than a per-tool link: addresses in a printed handout are permanent, and a single stable entry point can be repointed later without invalidating anything already photocopied.

This covers the Neurons and Networks meeting almost completely.

## Tier two: needs an account

The LLM Probability Explorer, Temperature Compare, and Embedding Explorer make live model calls, so they cannot be opened to the world.

**Print the artifact instead.** This works better than it sounds, because for two of the three the comparison is the lesson and the comparison is static. One prompt at three temperatures, printed side by side, delivers most of what Temperature Compare delivers. For the probability explorer, print the top ten next words for five prompts, including one where the model is confident and one where it is not.

There is a real gain hiding here. In the live version twenty-five students look at twenty-five different screens, and the share-out turns to mush. With one printed page everyone is arguing about the same evidence.

If you have an account of your own, projecting it and taking requests from the room is the next best thing.

## Tier three: better on paper

Two of these lose nothing at all.

**Preference Rater.** Print six prompt-and-response pairs. Students circle the better response. Tally the votes on the board. Then tell them that the tally they just produced is what reinforcement learning from human feedback does. The board is the demonstration.

**Training Stage Matcher.** It is already a matching game. Print the outputs and have students sort them into base model, instruction-tuned, and preference-trained.

## On the handout

For tier one, the address and the "things to try" list already written into the meeting. For tiers two and three, the printed tables, with the same list rewritten as "things to notice."

## What you lose

Manipulation, in tier two. A student reading a printed temperature comparison never gets to ask what happens at 2.0, and that question is the reason the exploratory meetings exist. Tier one loses nothing, tier three loses nothing, tier two loses a lot.

## What you gain

Shared evidence. A printed artifact is the same for everyone in the room, which makes the discussion afterward much easier to run.
