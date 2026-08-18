# How Do LLMs Work? A First Look

**Instructor Guide** · 2026-02-24

Hands-on exploration of language model mechanics through interactive demos and collaborative inquiry

## Facilitation Notes

**Philosophy:** This activity takes an inductive approach — students explore interactive demos first, then generate their own questions about how LLMs work, and finally investigate one together. The goal is to build intuition about next-token prediction, temperature, and the relationship between statistical models and language generation, without lecturing. The question generation section gives students ownership over what they're curious about.

**Logistics:**
- First four stages use the same partners (exploration)
- Stage 5 onwards uses new partners (question generation and investigation)
- The cards get sorted at the front, stacking near-duplicates
- You select which question the class investigates — pick one that's fundamental and discussable
- Seed questions are mixed in silently so there's always something good to choose from

**Pacing:**
| Stage | Duration | Cumulative |
|-------|----------|------------|
| Explore: Predictions & Temperature | 15m | 15m |
| Discussion: Predictions & Temperature | 5m | 20m |
| Explore: Markov Babbler | 15m | 35m |
| Discussion: Markov Babbler | 10m | 45m |
| Generate Questions | 10m | 55m |
| Question Review | 5m | 60m |
| Investigate | 12m | 72m |
| Share Out | 8m | 80m |
| Feedback | 5m | 85m |

**Tips:**
- During the exploration stages, circulate and note interesting observations students make — use these in the discussion stages
- For the question review (stage 6), sort the cards as soon as most of them are in, then take 1-2 minutes to scan the list before selecting
- Pick an investigation question that's concrete enough to explore in 12 minutes but open enough for genuine inquiry
- The seed questions ensure there's always a good option even if student questions are narrow

---

## Before class

### How Do LLMs Work? A First Look

#### Today's Plan

Today you'll explore how large language models (LLMs) actually work — not by reading about them, but by experimenting with interactive demos. You'll work with a partner to observe patterns, then generate questions and investigate one as a class.

---

## Activity

### Stage 1: Explore: Predictions & Temperature

**Timing:** planned 15m

> **Facilitation notes**
>
> Let students explore freely. The LLM Explorer shows real next-token predictions — students should notice that the model has clear "favorites" for what comes next. The Temperature Compare tool shows how temperature affects randomness. Don't explain the mechanism yet — let them build intuitions.

**Grouping:** 2 per group

#### Next-Word Prediction

When you chat with an LLM like ChatGPT, it might look like the model writes a whole response at once. But that's not what's happening. LLMs actually generate text **one word at a time**. For each word, the model looks at everything that's been written so far and asks: "What word is most likely to come next?"

The tool below lets you see this process in action. Type a sentence and the model will show you its predictions for the next word — along with how confident it is in each option. Try different starting phrases and see what patterns you notice.

> **On paper: Demos.** Needs API access. Print the token distributions instead.
>
> _Replaces the `llm-explorer` step. See the Demos chapter for the full procedure._

#### Temperature

So the model assigns a probability to every possible next word. But when it's time to actually pick one, how does it decide? That's where **temperature** comes in.

At low temperature, the model almost always picks its top prediction — the "safest" choice. At high temperature, it's more willing to pick less likely options, which makes the output more varied and surprising (but also less predictable).

The tool below sends the same prompt to the model at two different temperatures so you can compare the results side by side.

> **On paper: Demos.** Needs API access. Print one prompt at three temperatures; the comparison is the point and it is static.
>
> _Replaces the `temperature-compare` step. See the Demos chapter for the full procedure._

**Things to notice:**
- Does the model always have one clear "best" prediction, or are there cases where several options seem equally likely?
- How does changing the temperature affect which words get chosen?
- Can you find a prompt where the model is very confident about what comes next? One where it seems uncertain?

### Stage 2: Discussion: Predictions & Temperature

**Timing:** planned 5m

_Class discusses what they observed about predictions and temperature_

> **Facilitation notes**
>
> Ask 2-3 pairs what patterns they noticed. Key points to draw out: (1) LLMs predict one token at a time, (2) they assign probabilities to every possible next token, (3) temperature controls how "spread out" those probabilities are. Don't go deep into architecture yet — that's what the question generation is for.

> **Instructor only**
>
> **Discussion prompts:**
> - "What did you notice about how confident the model was in its predictions?"
> - "What happened when you changed the temperature?"
> - "Did anything surprise you?"
>

### Stage 3: Explore: Markov Babbler

**Timing:** planned 15m

_Same partners explore a simpler statistical model_

> **Facilitation notes**
>
> The Markov Babbler is a simple statistical model that students can see the internals of. The key insight is that it works the same way as an LLM in principle (predict next token from context) but with much less context and no "understanding." Students should notice it produces grammatically plausible but meaningless text.

**Grouping:** 2 per group

#### A Simpler Model

You just saw that an LLM predicts the next word by looking at all the words that came before it. But what if a model only looked at the **last word** to make its prediction? That's what a Markov chain does.

The Markov Babbler below builds a simple model from a piece of text. It reads through the text and counts how often each word is followed by each other word. Then it uses those counts to generate new text — picking the next word based only on the current word, with no memory of anything earlier in the sentence.

The walkthrough will show you exactly how this works step by step. Pay attention to what the model can and can't do — it will help you think about what makes LLMs different.

> **On paper: Demos.** Publicly hosted; link or QR code, with a paper fallback.
>
> _Replaces the `markov-babbler` step. See the Demos chapter for the full procedure._

**Things to notice:**
- How does the output compare to what the LLM generated? What's similar? What's different?
- The Markov model only looks at one word of context. What kinds of mistakes does it make because of that?
- What would you need to add to this simple model to make the output more coherent?

### Stage 4: Discussion: Markov Babbler

**Timing:** planned 10m

_Class discusses how Markov chains compare to LLMs_

> **Facilitation notes**
>
> This is the key bridging discussion. Help students see: (1) both Markov chains and LLMs are next-token predictors, (2) the difference is how much context they use and how they represent it, (3) "understanding" might be an emergent property of using enough context. Push on the question: "If a model that uses 2 words of context produces nonsense, and one that uses thousands produces coherent text, at what point does it 'understand'?"

> **Instructor only**
>
> **Discussion prompts:**
> - "How is the Markov Babbler similar to an LLM? How is it different?"
> - "The Markov model looks at 1-2 previous words. An LLM looks at thousands. Is that a difference in kind, or just in degree?"
> - "What does the Markov Babbler tell us about where 'understanding' might come from?"
>

### Stage 5: Generate Questions

**Timing:** planned 10m

_New partners generate questions from their observations_

> **Facilitation notes**
>
> New partners for this section. Students should generate questions based on what they observed — not what they already know. Encourage genuine curiosity. If students are stuck, prompt: "What did you see that you couldn't explain?"

**Grouping:** 2 per group

#### What Are You Curious About?

Based on what you explored today, what questions do you have about how LLMs work? Think about what surprised you, what you couldn't explain, or what you want to understand better.

Enter at least 3 questions below. They can be about any aspect of how language models work.

> **On paper: Card Sort.** Students write questions on cards, one per card.
>
> _Replaces the `question-entry` step. See the Card Sort chapter for the full procedure._

### Stage 6: Question Review

**Timing:** planned 5m

_Class reviews and selects a question to investigate_

> **Facilitation notes**
>
> Sort the cards at the front, stacking near-duplicates, and put the biggest stacks on the board. Review the list and select a question that is: (1) fundamental to understanding LLMs, (2) explorable through discussion and reasoning, and (3) not easily answered with a quick Google search. The seed questions ensure there's always a strong option.

> **On paper: Card Sort.** The AI deduplicated and ranked. Stack near-duplicates by hand; the height of a stack is the frequency signal.
>
> _Replaces the `question-board` step. See the Card Sort chapter for the full procedure._

**Pre-write these on cards before class** (they seed the pile so a thin day still has good questions):

- How does an LLM decide which word comes next?
- What role does randomness play in LLM output?
- How is training data used to build the model's knowledge?
- How do LLMs work differently from Markov models?
- What does an LLM learn from its training data — rules, or patterns?

### Stage 7: Investigate

**Timing:** planned 12m

_Partners investigate the selected question together_

> **Facilitation notes**
>
> Students investigate the selected question with the same partner from the question generation stage. They should reason from what they observed in the demos, not just look up answers. Their written answer captures their thinking. During share-out, look for groups that arrived at different conclusions.

**Grouping:** 2 per group

> **On paper: Card Sort.** The instructor chose one question to broadcast. Circle a taped card instead.
>
> _Replaces the `selected-question` step. See the Card Sort chapter for the full procedure._

Discuss this question with your partner. Use what you observed in the demos to reason about possible answers. You can also use other resources if helpful, but focus on building your own understanding.

**Your group's answer:**

_Expected response: Write your best answer to the selected question. What do you think, and why?_

### Stage 8: Share Out

**Timing:** planned 8m

_Groups share what they discovered_

> **Facilitation notes**
>
> Call on 3-4 groups to share their answers. Look for different perspectives on the same question. Wrap up by connecting their observations to the core idea: LLMs are statistical models that predict the next token based on patterns learned from massive amounts of text. Their "intelligence" emerges from the scale of those patterns, not from any explicit understanding.

> **Instructor only**
>
> **Share-out approach:**
> - Ask groups with different answers to share
> - After hearing from students, offer a brief synthesis connecting their observations to the key concepts
> - End with a forward look: "We'll keep building on these intuitions throughout the semester"
>

### Stage 9: Feedback

**Timing:** planned 5m

_Quick feedback on today's exploration_

**Feedback prompt:** Did today change your mental model of how an LLM produces text? What is still fuzzy? Was the Markov comparison useful or a distraction?
