# Using these prompts with any chatbot

The original course ran these through a purpose-built system with a second AI watching the conversation and tracking progress. You do not need that. The prompts are self-contained, and pasting one into ChatGPT, Claude, or anything comparable gets you most of the value.

This is the middle tier of adoption. If your students have a chatbot, use these rather than the paper substitutes — the paper patterns exist for rooms where nobody does.

## Preparation prompts

`preparations/` holds one prompt per discussion meeting. Each is a guided conversation about an assigned reading, done before class.

**To use one:** give the student the prompt body and the reading. They paste both into a chatbot and work through the conversation until they can discuss every topic listed.

**What the frontmatter is for.** The `topics` block lists what the conversation should cover, each with observable criteria. Those criteria are useful three ways:

- as the prompt's own definition of done
- as a printed study guide, if you would rather not use a chatbot at all
- as the reading ticket questions in the paper version

**What you lose without the original system.** It tracked each criterion as not engaged, discussed, or ready, and would not let a student finish early. A plain chatbot will happily agree that a student is ready when they are not. If completion matters to you, collect something written afterward.

## Group discussion prompts

`group-chats/` holds one prompt per in-class discussion. These facilitate a small group rather than an individual.

**To use one:** one student in each group opens a chatbot, pastes the prompt, and the group talks to it together. Two or three students per group.

Read the prompt before assigning it. Most of them instruct the AI to push students toward talking to each other rather than typing at it, and to suggest pausing the chat to talk out loud. That is intended. If your groups end up talking to each other and ignoring the chatbot, the prompt is working.

**What the objectives are for.** The `objectives` block lists what the discussion should reach, with criteria written as observable statements. Print them as a checklist even if you use the chatbot — it gives the group something to steer by.

**What you lose.** The original ran a second AI that watched the transcript, tracked who was talking, and told the facilitator when to intervene. In particular it enforced participation balance: no student above sixty percent of the messages. A single chatbot will not do that. Watch for it yourself, or use the rotating chair role from the Structured Role Discussion pattern, which solves the same problem with a person.

## Adapting a prompt

If you change the reading, rewrite the prompt. The topics and criteria refer to specific claims in specific articles, and a prompt pointed at the wrong reading will confidently discuss something the student did not read.

The `model` field records what the original used. Ignore it unless you are reproducing results.
