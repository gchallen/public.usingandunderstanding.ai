# How AI Learns to Be Helpful

**Student Handout** · 2026-04-07

Hands-on exploration of the AI training lifecycle: pretraining, instruction tuning, and RLHF

Name: ______________________________

---

## Before class

### How AI Learns to Be Helpful

#### Today's Plan

You've explored how LLMs predict the next word, how temperature affects their output, and how embeddings represent meaning. But there's a gap between a model that predicts text and a model that *helps* you. Today you'll discover how that gap gets closed: through a multi-stage training process that bakes in human preferences about what "good" AI behavior looks like.

You'll work with a partner to identify how model behavior changes at each training stage, then practice the preference ranking that shapes modern AI assistants.

---

## Activity

### Stage 1: Explore: Match the Training Stage

**Group of 2.** Names: __________  __________  

#### The Three Training Stages

Modern AI assistants aren't trained all at once. They go through three distinct stages, and each stage changes how the model behaves:

1. **Pretraining (Base model):** The model reads billions of words from the internet and learns to predict the next token. It learns language, facts, and patterns, but it has no concept of "answering a question" or "being helpful."

2. **Instruction tuning:** The model is trained on examples of questions paired with good answers. It learns to follow directions and produce the kind of output a user would expect.

3. **RLHF (Reinforcement Learning from Human Feedback):** Human raters compare pairs of model outputs and pick the "better" one. The model learns to produce responses that humans prefer: warmer, more careful, more nuanced.

#### Match the Response to the Training Stage

The tool below generates a real response from each training stage for the same prompt. You'll see **one response** and guess which stage produced it. After guessing, all three responses are revealed so you can compare. Try a few rounds with your partner.

> **Demos.** Open the tool your instructor names from usingandunderstanding.ai/resources

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>

### Stage 2: Discussion: What Did You Notice?

### Stage 3: Explore: Be the Preference Rater

**Group of 2.** Names: __________  __________  

#### Be the Preference Rater

Companies like OpenAI and Anthropic train their AI assistants using **human feedback**. Real people read pairs of model outputs and decide which one is "better." The model then learns to produce more outputs like the preferred ones.

Now it's your turn. The tool below generates two responses to the same prompt, each optimized for a different value. Pick which response you think is better, then see what value each was optimized for. Try several rounds with your partner and discuss where you agree and disagree.

> **Demos.** Open the tool your instructor names from usingandunderstanding.ai/resources

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>

### Stage 4: Discussion: What Is 'Good' AI?

### Stage 5: Generate Questions

**Group of 2.** Names: __________  __________  

#### What Are You Curious About?

You've now seen how models change through training, and you've experienced the preference ranking process yourself. Based on what you observed and discussed, what questions do you have about how AI gets trained?

Enter at least 3 questions below.

> **Card Sort.** Write each idea on its own card, with your name in the corner. Hand them forward.

**From the board:**

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>

### Stage 6: Question Review

> **Card Sort.** Write each idea on its own card, with your name in the corner. Hand them forward.

**From the board:**

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>

### Stage 7: Investigate

**Group of 2.** Names: __________  __________  

> **Card Sort.** Write each idea on its own card, with your name in the corner. Hand them forward.

**From the board:**

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>

Discuss this question with your partner. Use what you observed in the examples and the ranking exercise to reason about possible answers. You can also use other resources if helpful, but focus on building your own understanding.

**Your group's answer:**

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>

### Stage 8: Share Out

### Stage 9: Feedback

**How was today's activity? Did the interactive tools (training stage matcher, preference rater) help you understand the training process? What would you change?**

<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
<div class="rule"></div>
