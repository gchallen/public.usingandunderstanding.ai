# From Simple Parts

**Instructor Guide** · 2026-03-12

How complexity emerges from simple building blocks — connecting neurons, networks, and intelligence

## Facilitation Notes

**Philosophy:** Four discussion rounds exploring emergence — from concrete examples through a surprising reveal about biological neurons, to the implications of scale, to a synthesis reflection. Partners rotate each round. The key thread is "simple parts → complex wholes" connecting Tuesday's digit network to the readings to the bigger picture.

**Logistics:**
- Four discussion rounds with new partners each time (4 GroupActivity blocks with the same `group` key)
- Rounds 1-3 each have a 15-minute discussion followed by a 5-minute share-out
- Round 2 introduces new material (neuron complexity article) — read the key finding aloud before pairs start
- Round 4 is a shorter synthesis round (12 minutes)
- One partner should capture key points in their written answer each round
- Share-out stages are instructor-led: ask 2-3 pairs to share, then connect to the next round's theme

**Pacing:**
| # | Stage | Duration | Cumulative |
|---|-------|----------|------------|
| 1 | Round 1: Emergence Everywhere | 15m | 15m |
| 2 | Round 1: Share Out | 5m | 20m |
| 3 | Round 2: The Neuron Gap | 15m | 35m |
| 4 | Round 2: Share Out | 5m | 40m |
| 5 | Round 3: What Emerges at Scale | 15m | 55m |
| 6 | Round 3: Share Out | 5m | 60m |
| 7 | Round 4: So What? | 12m | 72m |
| 8 | Wrap-Up | 3m | 75m |
| 9 | Feedback | 5m | 80m |

**Tips:**
- Round 2 requires setup — have the neuron complexity article summary ready to read aloud
- If a round runs short, extend the share-out rather than rushing to the next round
- Round 3 tends to generate the most debate (real emergence vs. measurement artifact) — protect its time
- Round 4 is deliberately open-ended — let students go wherever the synthesis takes them
- The wrap-up should be brief — one connecting observation, not a lecture

---

## Before class

### From Simple Parts

#### Before Class

Read both articles before Thursday's class:

- Reading: [AI Is Nothing Like a Brain, and That's OK](../../../readings/ai-is-nothing-like-a-brain-and-that-s-ok-quanta-magazine-quantamagazine-4c05.md) · Quanta Magazine

— how biological and artificial neurons differ, and what brains can teach AI

- Reading: [The Unpredictable Abilities Emerging From Large AI Models](../../../readings/the-unpredictable-abilities-emerging-from-large-ai-models-quanta-magazine-quantamagazine-c949.md) · Quanta Magazine

— how large language models display surprising abilities at scale

Please complete the preparation conversation below before class.
This is part of attendance for today's meeting.

> **On paper: Reading Ticket.** The topic criteria are already a study guide. Print them, collect at the door, read them before class. Five minutes of pairs first recovers some of what the one-to-one AI conversation was doing.
>
> _Replaces the `preparation-chat` step. See the Reading Ticket chapter for the full procedure._
>
> _If your students have a chatbot, use [`content/prompts/preparations/emergence.md`](../../../content/prompts/preparations/emergence.md) instead of the paper procedure. It is usually better._

---

### Today's Plan

On Tuesday, you built a digit-recognition network from simple artificial neurons — and it worked. Today we'll explore *why* it worked, and what happens when you scale that same idea up by a factor of millions. Four rounds of paired discussion, each with a different partner and a different question.

---

## Activity

### Stage 1: Round 1: Emergence Everywhere

**Timing:** planned 15m

> **Facilitation notes**
>
> This round grounds the discussion in Tuesday's experience. Students may initially describe emergence abstractly — push them to connect it to what they actually saw: adjusting weights, watching outputs change, seeing the network suddenly "get" a digit. If discussion stalls, ask: "Was there a moment Tuesday where the network's behavior surprised you?"

**Grouping:** 2 per group

#### Emergence Everywhere

On Tuesday, you built a network from simple neurons — each one just multiplies inputs by weights, adds them up, and applies an activation function. Nothing fancy. Yet when you connected thousands of them and trained the network, it could recognize handwritten digits. Nobody programmed digit recognition — it *emerged* from training.

The first reading shows this same pattern everywhere in nature: water molecules that don't "know" about ice, ants that don't "know" about bridges, birds that don't "know" about flocking. Simple parts following simple rules → complex collective behavior that seems to come from nowhere.

**Discuss with your partner:** What makes emergence surprising? Is it genuinely surprising that the digit network worked, or does it feel obvious in hindsight? What's the difference between "emergence" and "just a complicated system"?

**Capture your key points:**

_Expected response: What did you and your partner discuss? Where did you agree or disagree?_

### Stage 2: Round 1: Share Out

**Timing:** planned 5m

_Class reconvenes to share observations_

> **Facilitation notes**
>
> Ask 2-3 pairs to share. Listen for whether students distinguish "emergence" from "complicated" — the key insight is that emergent properties are genuinely new and unpredictable from the parts alone. Bridge to Round 2: "So we've established that simple parts can produce complex wholes. But there's something we haven't talked about — how simple are the 'simple parts' in AI compared to biology?"

#### Share Out

Your instructor will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 3: Round 2: The Neuron Gap

**Timing:** planned 15m

_New partners discuss the gap between biological and artificial neurons_

> **Facilitation notes**
>
> **Read this aloud before pairs start discussing:**
> 
> "Tuesday you explored artificial neurons — simple units that multiply inputs by weights and apply an activation function. Here's something we didn't mention: researchers at Hebrew University tried to figure out how complex a *real* biological neuron is. They trained artificial neural networks to mimic a single biological neuron's behavior and found that it takes a deep network of about **1,000 artificial neurons** — five to eight layers deep — to approximate what **one** biological neuron does. The lead researcher said: 'I thought it would be simpler and smaller.' The complexity comes from the branching tree-like structures called dendrites that receive incoming signals."
> 
> "So the building blocks of AI are vastly simpler than the building blocks of brains. The digit network you explored Tuesday had about 13,000 artificial neurons. A single cubic millimeter of brain tissue contains roughly 50,000 biological neurons — each one as complex as a 1,000-node deep network."
> 
> Source: ["How Computationally Complex Is a Single Neuron?"](https://www.quantamagazine.org/how-computationally-complex-is-a-single-neuron-20210902/) — Quanta Magazine, 2021
> 
> Let pairs chew on this. The interesting tension: if biological neurons are so much more complex, why does AI work at all? The emergence reading gives a clue — emergent behavior doesn't always require complex parts.

**Grouping:** 2 per group

#### The Neuron Gap

your instructor just shared a finding that may change how you think about Tuesday's exploration: it takes about **1,000 artificial neurons** to approximate what a **single biological neuron** does. The artificial neurons you explored on Tuesday are radically simpler than their biological counterparts.

Your digit network had ~13,000 artificial neurons. A single cubic millimeter of brain tissue has ~50,000 biological neurons, each one as complex as a 1,000-node deep network. The human brain has roughly 86 billion of them.

**Discuss with your partner:** Does this change how you think about what you built on Tuesday? If AI neurons are so much simpler than biological ones, why does AI work at all? What does this gap mean for the analogy between brains and neural networks?

**Capture your key points:**

_Expected response: What did you and your partner discuss? Where did you agree or disagree?_

### Stage 4: Round 2: Share Out

**Timing:** planned 5m

_Class reconvenes to share observations_

> **Facilitation notes**
>
> Ask 2-3 pairs to share. Look for students grappling with the paradox: AI works despite using vastly simpler building blocks. The emergence reading gives a clue — you don't need complex parts for complex behavior. Bridge to Round 3: "So AI uses simple parts and compensates with sheer scale. Your digit network had 13,000 parameters. What happens when you scale that up to hundreds of billions?"

#### Share Out

Your instructor will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 5: Round 3: What Emerges at Scale

**Timing:** planned 15m

_New partners discuss emergence at scale_

> **Facilitation notes**
>
> This round often generates the most debate. The real-vs-mirage question about emergent abilities is genuinely unresolved in the research community. Push students to take positions and defend them. If discussion stalls, ask: "If you can't predict what a model will be able to do until you build it, what does that mean for AI safety?"

**Grouping:** 2 per group

#### What Emerges at Scale

The digit network has about 13,000 parameters. GPT-4 has hundreds of billions — tens of millions of times more. Same basic building blocks (weighted sums + activation functions), incomprehensibly different scale.

From the second reading: researchers tested 204 tasks and found that some abilities appear suddenly at specific model sizes. Models below a threshold score essentially zero — random guessing. Then at some scale, performance jumps dramatically. Models trained only to predict the next word can suddenly do arithmetic, identify movies from emojis, translate proverbs.

But there's a debate: are these "real" emergent abilities, or are they measurement artifacts — abilities building gradually that our tests miss until they cross a visible threshold?

**Discuss with your partner:** Are emergent abilities in LLMs "real" emergence or measurement artifacts? Does it matter? What does it mean for predicting what future, larger models will be able to do?

**Capture your key points:**

_Expected response: What did you and your partner discuss? Where did you agree or disagree?_

### Stage 6: Round 3: Share Out

**Timing:** planned 5m

_Class reconvenes to share observations_

> **Facilitation notes**
>
> Ask 2-3 pairs to share. The productive tension is between "we can't predict what happens at scale" and "maybe we just need better measurements." Bridge to Round 4: "We've gone from simple neurons to emergent intelligence. Let's step back and ask the big question: so what?"

#### Share Out

Your instructor will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 7: Round 4: So What?

**Timing:** planned 12m

_New partners synthesize the big picture_

> **Facilitation notes**
>
> This is deliberately open-ended. Let students synthesize in whatever direction feels most meaningful to them. Some will go philosophical (what is intelligence?), some practical (what does this mean for AI safety?), some personal (how should I think about the AI I use?). All are productive. Don't steer — listen.

**Grouping:** 2 per group

#### So What?

Here's the thread: simple artificial neurons → digit recognition emerging from training → vastly more complex biological neurons → language models with billions of parameters displaying abilities nobody predicted.

Complex intelligence — whether in brains or in neural networks — emerges from simple mathematical operations repeated at enormous scale. Nobody designed it. Nobody fully understands it. And nobody can reliably predict what will emerge next.

**Discuss with your partner:** If complex intelligence can emerge from simple mathematical operations, what does that imply? For understanding our own minds? For what AI might become? For how we should think about the systems we use every day?

**Capture your key points:**

_Expected response: What's your biggest takeaway from today's discussion?_

### Stage 8: Wrap-Up

**Timing:** planned 3m

_Brief closing reflection_

> **Facilitation notes**
>
> Keep this very brief. The arc of today: emergence is real and everywhere → the building blocks of AI are far simpler than biology → yet scale compensates, producing abilities nobody predicted → and we're left with deep questions about intelligence, prediction, and control. One or two connecting observations, then move to feedback.

#### Closing Reflection

Four questions, four partners. The thread through today: the same simple operation — multiply, add, activate — at different scales produces digit recognition, language understanding, and abilities nobody designed. Whether that's "real" emergence or something else, it connects your hands-on experience on Tuesday to the biggest questions in AI.

We'll keep pulling on this thread. Next time you use ChatGPT or Claude, remember: underneath, it's the same basic operation you explored Tuesday — just repeated hundreds of billions of times.

### Stage 9: Feedback

**Timing:** planned 5m

_Quick feedback on the discussion_

**Feedback prompt:** What worked well today? What could be improved?
