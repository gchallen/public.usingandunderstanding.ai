# Neurons and Networks

**Instructor Guide** · 2026-03-10

Hands-on exploration of artificial neurons and neural networks through interactive visualizations

## Facilitation overview

## Facilitation Notes

**Philosophy:** This is a jigsaw-style exploration session where students build intuitions about artificial neurons and neural networks through interactive visualizations. Three partner rotations prevent groupthink — students explore in one pair, investigate a question in a second, and explain their findings to a third. The visualizations should do the heavy lifting. Resist the urge to lecture.

**Logistics:**
- Stages 1-2 use Partner A (exploration)
- Stage 6 uses Partner B (investigation)
- Stage 7 uses Partner C (explain & learn)
- The QuestionBoard processes submitted questions with GPT to deduplicate and prioritize
- You select which question groups investigate — pick one that's explorable with the demos

**Pacing:**
| # | Stage | Duration | Cumulative |
|---|-------|----------|------------|
| 1 | Explore: Single Neuron | 10m | 10m |
| 2 | Explore: Digit Network | 15m | 25m |
| 3 | Discussion: What Did You Notice? | 5m | 30m |
| 4 | Generate Questions | 5m | 35m |
| 5 | Question Review | 5m | 40m |
| 6 | Investigate | 12m | 52m |
| 7 | Explain & Learn | 12m | 64m |
| 8 | Share Out | 8m | 72m |
| 9 | Wrap-Up | 3m | 75m |
| 10 | Feedback | 5m | 80m |

**Tips:**
- During exploration stages, circulate and note interesting observations — use these in the discussion stage
- The discussion stage (3) is whole-class — keep it brief, just surface a few observations. Don't explain.
- Question Review (5): scan the QuestionBoard, surface 5-6 good questions, group similar ones
- The jigsaw works because each partner rotation gives students a fresh perspective — protect the partner changes

---

## Before class

### Neurons and Networks

#### Today's Plan

Today you'll explore what's happening underneath the AI systems we've been discussing. You've seen how LLMs predict the next token and debated whether that counts as "understanding." Now you'll get hands-on with the building blocks: artificial neurons and neural networks.

Here's one way to think about what you'll see today: neural networks are mathematical functions. They take in numbers and compute an output — nothing more. But they are _extraordinarily_ complicated mathematical functions, and the way they learn to compute the right output is fascinating.

Here's another thing worth knowing: the basic idea of an artificial neuron was inspired by how neurons work in our brains. Researchers studied biological neural networks and built simplified mathematical versions. Now, decades later, artificial neural networks are being used to study the brain itself — helping neuroscientists understand the very biological systems that inspired AI in the first place.

You'll experiment with interactive visualizations, generate questions about what you observe, and investigate those questions with different partners.

---

## Activity

### Stage 1: Explore: Single Neuron

**Timing:** planned 10m · ran 10m

> **Facilitation notes**
>
> Let students explore freely. The NeuronExplorer lets them manipulate inputs, weights, bias, and activation functions. Most students will start by clicking around randomly — that's fine. The preset challenges (AND gate, OR gate) give them a concrete goal. Don't explain how neurons work yet — let them build intuitions through experimentation.

**Grouping:** 2 per group

#### A Single Artificial Neuron

An artificial neuron is the simplest building block in a neural network. It takes some inputs, multiplies each one by a weight, adds them up with a bias, and passes the result through an activation function. That's it — but from this simple operation, surprisingly complex behavior can emerge.

The tool below lets you experiment with a single neuron. Try adjusting the sliders and see what happens.

> **On paper: Demos.** Publicly hosted; link or QR code, with a paper fallback.
>
> _Replaces the `neuron-explorer` step. See the Demos chapter for the full procedure._

**Things to try:**
- Use the preset challenges (AND gate, OR gate) — can you figure out what the neuron needs to do?
- What happens when you change the activation function? How does it change the neuron's behavior?
- Can you make the neuron fire for only specific input combinations?
- Check out the biological analogy — how does this compare to what we know about brain cells?

### Stage 2: Explore: Digit Network

**Timing:** planned 15m

_Same partners explore a full neural network_

> **Facilitation notes**
>
> Same partners as Stage 1. The DigitNetwork is more complex — students can draw digits, watch the network classify them, train the network, and visualize backpropagation. Some students will focus on drawing tricky digits to fool the network, others will focus on the training process. Both are productive. The key connection is between the single neuron they just explored and the many neurons working together here.

**Grouping:** 2 per group

#### A Network of Neurons

Now let's see what happens when you connect many neurons together. The network below is trained to recognize handwritten digits (0-9). Each neuron does the same basic operation you just explored — weighted sum, bias, activation function — but together they can do something much more impressive.

> **On paper: Demos.** Publicly hosted; link or QR code, with a paper fallback.
>
> _Replaces the `digit-network` step. See the Demos chapter for the full procedure._

**Things to try:**
- Draw a few digits and see if the network classifies them correctly. What digits does it struggle with?
- Try the "Train" mode — watch the connections change color and thickness as the network learns from examples. Notice how the green and orange connections match the single neuron you just explored.
- Stop training partway and switch back to "Classify" — the network now uses your partially-trained model. Does it work? Try training longer and classify again.
- Use "Learning" mode to step through exactly how the network learns from a single example — where do the errors flow?
- Click on individual neurons to see what they're responding to — what patterns have they learned?
- What connections can you see between the single neuron you just explored and this full network?

### Stage 3: Discussion: What Did You Notice?

**Timing:** planned 5m

_Class shares initial observations_

> **Facilitation notes**
>
> Brief whole-class check-in. Ask 3-4 students what surprised them or what they noticed. Listen for observations about: how training changes weights, what individual neurons seem to "look for," when the network fails, the connection between single neurons and the full network. Don't explain — just collect observations and validate curiosity.

#### Quick Check-In

Geoff will ask a few of you to share something you noticed or something that surprised you during the exploration.

### Stage 4: Generate Questions

**Timing:** planned 5m

_Students generate questions individually_

> **Facilitation notes**
>
> Individual work — no partners for this stage. Students should generate questions based on what they observed, not what they already know. If students are stuck, prompt: "What did you see that you couldn't explain?" or "What would you want to understand better about how the network works?"

#### What Are You Curious About?

Based on what you just explored, what questions do you have about how neurons and neural networks work? Think about what surprised you, what you couldn't explain, or what you want to understand better.

Enter at least 2 questions below.

> **On paper: Card Sort.** Students write questions on cards, one per card.
>
> _Replaces the `question-entry` step. See the Card Sort chapter for the full procedure._

### Stage 5: Question Review

**Timing:** planned 5m

_Class reviews and selects questions to investigate_

> **Facilitation notes**
>
> Click "Process Questions" to aggregate and prioritize submissions. Review the list and surface 5-6 good questions. Group similar questions together. Select 3-4 questions for investigation — pairs will choose which one to explore. Pick questions that are explorable with the demos and/or AI conversation. Diversity of questions means richer sharing in Stage 7.

> **On paper: Card Sort.** The AI deduplicated and ranked. Stack near-duplicates by hand; the height of a stack is the frequency signal.
>
> _Replaces the `question-board` step. See the Card Sort chapter for the full procedure._

**Pre-write these on cards before class** (they seed the pile so a thin day still has good questions):

- Why does the network need hidden layers — why can't the inputs connect directly to the outputs?
- What does a single neuron in the hidden layer 'look for' in a digit image?
- How does the network know which weights to change during training, and by how much?
- Why does the network sometimes confidently predict the wrong digit?
- How is what this network does related to the next-token prediction we explored two weeks ago?

### Stage 6: Investigate

**Timing:** planned 12m · ran 13m

_New partners investigate a question using the demos_

> **Facilitation notes**
>
> New partners. Groups choose a question to investigate using the demos. Encourage them to actually experiment — not just discuss abstractly. The TextSubmission captures their findings. During Share Out, look for groups that investigated different questions or arrived at different conclusions about the same question.

**Grouping:** 2 per group

#### Investigate a Question

> **On paper: Card Sort.** The instructor chose one question to broadcast. Circle a taped card instead.
>
> _Replaces the `selected-question` step. See the Card Sort chapter for the full procedure._

With your new partner, pick one of the questions above to investigate. Use the demos below to experiment and gather evidence. You should also feel free to ask an AI — the interactive tools are great for some questions, but others might benefit from a conversation with ChatGPT or Claude. Try to build an answer based on what you can observe and learn, not just what you think you know.

> **On paper: Demos.** Publicly hosted; link or QR code, with a paper fallback.
>
> _Replaces the `neuron-explorer` step. See the Demos chapter for the full procedure._

> **On paper: Demos.** Publicly hosted; link or QR code, with a paper fallback.
>
> _Replaces the `digit-network` step. See the Demos chapter for the full procedure._

**What did you find?**

_Expected response: What question did you investigate? What did you try, and what did you discover?_

### Stage 7: Explain & Learn

**Timing:** planned 12m

_New partners explain findings to each other_

> **Facilitation notes**
>
> Third partner rotation. Each student explains what they investigated and what they found to someone who investigated something different. This is the jigsaw payoff — students learn from each other's investigations. The TextSubmission captures what they learned from their new partner, not what they already knew.

**Grouping:** 2 per group

You're with a new partner now. Take turns:

1. **Explain** what question you investigated and what you found
2. **Listen** to what your partner investigated and learned
3. **Discuss:**
   - If you investigated **different questions**: how do your findings connect? Did you discover related things?
   - If you investigated the **same question**: did you try different things? Did you reach the same conclusions? What did one of you notice that the other missed?

**What did you learn from your partner?**

_Expected response: What question did your partner investigate? What did they find? If you investigated the same question, what did they notice that you didn't?_

### Stage 8: Share Out

**Timing:** planned 8m

_Groups share what they discovered_

> **Facilitation notes**
>
> Call on 3-4 groups. Ask what question they investigated and what they found. Try to call on groups that investigated different questions so the class hears a range of findings. Connect findings across groups — "That's interesting because the group before you found something related..." Look for opportunities to connect observations about single neurons to the full network, and training to backpropagation.

> **Instructor only**
>
> **Share-out approach:**
- Ask groups what they investigated, not just what they found
- Look for groups that investigated different questions
- Connect findings across groups when you can
- Don't lecture — amplify what students discovered

### Stage 9: Wrap-Up

**Timing:** planned 3m

_Brief connection to LLMs and what comes next_

> **Facilitation notes**
>
> Keep this very brief. The key connection: the artificial neurons and networks you explored today are the building blocks underneath the LLMs we've been discussing. Modern LLMs use the same fundamental operations — weighted sums, activation functions, backpropagation — but at a massive scale. A digit recognition network has hundreds of neurons. GPT-4 has hundreds of billions. Next time we'll look at how these building blocks scale up.

#### Looking Ahead

The artificial neurons and networks you explored today are the building blocks underneath the LLMs we've been discussing all semester. The same fundamental operations — weighted sums, activation functions, backpropagation — power everything from this digit recognizer to ChatGPT.

The difference is scale. The digit network you trained today has about 13,000 connections. A frontier model like GPT-4 or Claude has hundreds of _billions_ of parameters — roughly 10 million times larger. The structure is also different in ways we'll explore later, but the core idea is the same: take in numbers, multiply by weights, add them up, apply a function, repeat.

Next time, we'll look at how these building blocks scale up into the systems you've been using.

**Want to go deeper?** The [3Blue1Brown series on neural networks](https://www.3blue1brown.com/topics/neural-networks) is an excellent visual introduction that goes into much more mathematical detail — including the calculus behind backpropagation.

### Stage 10: Feedback

**Timing:** planned 5m

_Quick feedback on the session_

**Feedback prompt:** What was most interesting about exploring neurons and networks today? What would you change?
