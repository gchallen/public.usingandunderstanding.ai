# How Do LLMs Work? A First Look

**Student Handout** · 2026-02-24

Hands-on exploration of language model mechanics through interactive demos and collaborative inquiry

Name: ______________________________

---

## Before class

### How Do LLMs Work? A First Look

#### Today's Plan

Today you'll explore how large language models (LLMs) actually work — not by reading about them, but by experimenting with interactive demos. You'll work with a partner to observe patterns, then generate questions and investigate one as a class.

---

## Activity

### Stage 1: Explore: Predictions & Temperature

**Group of 2.** Names: __________  __________  

#### Next-Word Prediction

When you chat with an LLM like ChatGPT, it might look like the model writes a whole response at once. But that's not what's happening. LLMs actually generate text **one word at a time**. For each word, the model looks at everything that's been written so far and asks: "What word is most likely to come next?"

The tool below lets you see this process in action. Type a sentence and the model will show you its predictions for the next word — along with how confident it is in each option. Try different starting phrases and see what patterns you notice.

> **Demos.** Open the tool your instructor names.

#### Temperature

So the model assigns a probability to every possible next word. But when it's time to actually pick one, how does it decide? That's where **temperature** comes in.

At low temperature, the model almost always picks its top prediction — the "safest" choice. At high temperature, it's more willing to pick less likely options, which makes the output more varied and surprising (but also less predictable).

The tool below sends the same prompt to the model at two different temperatures so you can compare the results side by side.

> **Demos.** Open the tool your instructor names.

**Things to notice:**
- Does the model always have one clear "best" prediction, or are there cases where several options seem equally likely?
- How does changing the temperature affect which words get chosen?
- Can you find a prompt where the model is very confident about what comes next? One where it seems uncertain?

### Stage 2: Discussion: Predictions & Temperature

_5m together as a class. Nothing to write._

### Stage 3: Explore: Markov Babbler

**Group of 2.** Names: __________  __________  

#### A Simpler Model

You just saw that an LLM predicts the next word by looking at all the words that came before it. But what if a model only looked at the **last word** to make its prediction? That's what a Markov chain does.

The Markov Babbler below builds a simple model from a piece of text. It reads through the text and counts how often each word is followed by each other word. Then it uses those counts to generate new text — picking the next word based only on the current word, with no memory of anything earlier in the sentence.

The walkthrough will show you exactly how this works step by step. Pay attention to what the model can and can't do — it will help you think about what makes LLMs different.

> **Demos.** Open the tool your instructor names.

**Things to notice:**
- How does the output compare to what the LLM generated? What's similar? What's different?
- The Markov model only looks at one word of context. What kinds of mistakes does it make because of that?
- What would you need to add to this simple model to make the output more coherent?

### Stage 4: Discussion: Markov Babbler

_10m together as a class. Nothing to write._

### Stage 5: Generate Questions

**Group of 2.** Names: __________  __________  

#### What Are You Curious About?

Based on what you explored today, what questions do you have about how LLMs work? Think about what surprised you, what you couldn't explain, or what you want to understand better.

Enter at least 3 questions below. They can be about any aspect of how language models work.

> **Card Sort.** Write each question on its own card, one per card, with your name in the corner. Hand them forward.

**From the board:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 6: Question Review

> **Card Sort.** The questions are going up at the front, stacked where they repeat. Copy the ones you want to work on.

**From the board:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 7: Investigate

**Group of 2.** Names: __________  __________  

> **Card Sort.** One question has been circled at the front. Write it down; it is the one your group is investigating.

**From the board:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Discuss this question with your partner. Use what you observed in the demos to reason about possible answers. You can also use other resources if helpful, but focus on building your own understanding.

**Your group's answer:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 8: Share Out

_8m together as a class. Nothing to write._

### Stage 9: Feedback

**Did today change your mental model of how an LLM produces text? What is still fuzzy? Was the Markov comparison useful or a distraction?**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
