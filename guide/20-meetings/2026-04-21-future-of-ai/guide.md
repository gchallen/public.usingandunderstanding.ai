# The Future of AI

**Instructor Guide** · 2026-04-21

Exploring where AI is heading beyond 'just make it bigger': mixture of experts, local models, specialization, and AGI

## Facilitation Notes

**Philosophy:** This is an inductive session without interactive components. Each of three discussion rounds introduces a specific direction AI is heading beyond "just make it bigger." Students have the technical foundation from the semester (next-token prediction, RLHF, embeddings, neural networks) to reason about these directions rather than just speculate. The AGI / synthesis question has been moved to the Apr 28 Human Flourishing discussion, where it lands more naturally alongside the readings on AI and what makes us human.

**Logistics:**
- All three rounds use the same the group label for partner rotation (new partner each round)
- Each round uses markdown context + text-submission. No interactive components.
- Share-outs are instructor-led: ask 2-3 pairs to share, then bridge to the next topic

**Pacing:** (trimmed from 90m to 65m for shorter class window, leaves 5m buffer)
| # | Stage | Duration | Cumulative |
|---|-------|----------|------------|
| 1 | Round 1: The Mixture of Experts Bet | 10m | 10m |
| 2 | Round 1: Share Out | 10m | 20m |
| 3 | Round 2: AI in Your Pocket | 10m | 30m |
| 4 | Round 2: Share Out | 10m | 40m |
| 5 | Round 3: The Specialist vs. the Generalist | 10m | 50m |
| 6 | Round 3: Share Out | 10m | 60m |
| 7 | Feedback | 5m | 65m |

**Tips:**
- Round 1 (MoE) is the most technical. The discussion prompt provides enough context, but if students seem lost, the ER doctor / patent lawyer / pastry chef analogy works well. The point is not that students master MoE architecture but that they grasp the principle: organization vs. brute scale.
- Round 2 (local models) often surprises students who haven't thought about privacy. Push past "I have nothing to hide" to specifics: "Your therapy questions? Your medical symptoms? Your relationship problems? All stored on a company server."
- Round 3 (specialization) generates the most natural debate. Let it run. The Swiss Army knife analogy usually sparks disagreement.
- The Round 3 share-out is also the meeting's wrap-up. Connect the three directions: efficiency (MoE), access (local models), focus (specialization). Flag that AGI (the biggest question) is coming next week in the Human Flourishing discussion. Forward look: "Thursday is your first Final Project Workshop. You'll be building something with AI. Keep today's discussion in mind: the tools you're using represent one set of choices about how AI should work. There are others."

---

## Before class

### The Future of AI

#### Today's Plan

You've spent this semester learning how current AI systems work: next-token prediction, massive datasets, human feedback training. The most visible progress in AI over the past few years came from a straightforward strategy: make the model bigger, give it more data, train it longer. But that approach is running into limits, and researchers are pursuing fundamentally different directions.

Today, three rounds of paired discussion, each seeded with a specific direction beyond "just make it bigger": mixture of experts, local models, and specialization. Next week we'll close the loop with the biggest question (AGI) in the Human Flourishing discussion.

---

## Activity

### Stage 1: Round 1: The Mixture of Experts Bet

**Timing:** planned 10m

_Partners discuss how MoE changes the 'bigger is better' assumption_

> **Facilitation notes**
>
> Students may not immediately grasp why MoE is different from "bigger." The key insight is efficiency and organization vs. brute scale. If discussion stalls, ask: "If you had to study for seven final exams, would you rather have one tutor who knows everything, or seven tutors who each specialize? Why?"
> 
> Also push students to think about what MoE implies about knowledge: if different experts activate for different topics, does the model "know" things in a more modular way than we assumed? This connects to the embeddings and neurons sessions earlier in the semester.

**Grouping:** 2 per group

#### The Mixture of Experts Bet

The biggest AI models have hundreds of billions of parameters. But here's something most people don't realize: many frontier models, including GPT-4, don't use all those parameters for every question. Instead, they use a technique called **mixture of experts (MoE)**.

An MoE model contains many smaller "expert" sub-networks. A routing system decides which experts to activate for each input. When you ask about chemistry, different experts fire than when you ask about poetry. A model with hundreds of billions of parameters might only use 20-30 billion for any single question, making it faster and cheaper while maintaining quality.

This is a fundamentally different approach from "just make it bigger." Instead of brute-force scale, MoE is about *organization*: which parts of the model should care about which problems?

**Discuss with your partner:** Does this remind you of anything about how human expertise works? An ER doctor, a patent lawyer, and a pastry chef all have "general intelligence," but they route problems to very different specialized knowledge. Is MoE making AI more like human organizations, where different people handle different problems? What are the implications if AI systems can get better not by growing, but by getting more organized?

**Capture your key points:**

_Expected response: What did you and your partner discuss? What implications of MoE surprised you?_

### Stage 2: Round 1: Share Out

**Timing:** planned 10m

_Class reconvenes to share observations_

> **Facilitation notes**
>
> Ask 2-3 pairs to share. Listen for whether students connected MoE to the neural network sessions earlier in the semester. Bridge to Round 2: "MoE keeps AI in the cloud, on massive servers, but makes it more efficient. What if the goal isn't efficiency at scale, but running AI where no server exists at all?"

#### Share Out

Your instructor will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 3: Round 2: AI in Your Pocket

**Timing:** planned 10m

_New partners discuss local and on-device AI_

> **Facilitation notes**
>
> This round shifts direction entirely. Instead of making models more efficient at scale, local models ask: how small can we make a model while keeping it useful? Students often haven't considered the privacy angle. Push them: "Every conversation you've had with ChatGPT or Claude is stored on a company server. Every prompt, every personal detail. Does that change how you use it?"
> 
> The access question is also important: cloud AI requires internet and often a subscription. Local AI could work in places with no connectivity. But local models are weaker. Is "good enough AI for everyone" better than "great AI for paying customers"?

**Grouping:** 2 per group

#### AI in Your Pocket

The biggest AI models require data centers full of GPUs. But a parallel effort is pushing AI in the opposite direction: making models small enough to run on your phone. Apple Intelligence runs a ~3 billion parameter model on-device. Google's Gemini Nano runs on Pixel phones. Open-source models like Llama have been compressed to run on laptops. These local models are less capable than cloud models, but they work offline, keep your data on your device, and cost nothing per query.

This changes who has access to AI and who sees your data. Right now, using a frontier model means sending your prompts to OpenAI, Anthropic, or Google. Everything you type is stored on their servers. A local model means nobody else sees your conversations.

It also changes the economics: cloud AI costs money per query, and companies can change their models, raise prices, or shut down. Local AI is free after the initial download and stays the same unless you update it.

**Discuss with your partner:** What would change about how you use AI if it ran entirely on your phone, with no internet connection and no company seeing your prompts? Would you trust it more or less? Think about the privacy implications: every personal question, every medical symptom, every relationship problem you've ever typed into ChatGPT is stored on a company server. Does that matter to you? Who benefits most from local models, and who benefits most from keeping AI in the cloud?

**Capture your key points:**

_Expected response: What did you and your partner discuss? Did the privacy angle change your thinking?_

### Stage 4: Round 2: Share Out

**Timing:** planned 10m

_Class reconvenes to share observations_

> **Facilitation notes**
>
> Ask 2-3 pairs to share. Bridge to Round 3: "Local models are generalists that happen to be small. But what if instead of making one model do everything, you had different models for different jobs?"

#### Share Out

Your instructor will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 5: Round 3: The Specialist vs. the Generalist

**Timing:** planned 10m

_New partners discuss specialized vs. general-purpose AI_

> **Facilitation notes**
>
> The Swiss Army knife analogy usually generates debate. Some students will argue for specialization (you want the best possible medical AI for health decisions). Others will argue for generalists (coordination costs between 10 tools are high, and generalists can spot cross-domain connections specialists miss).
> 
> Push toward the structural question: companies like OpenAI are incentivized to build one dominant general model (winner-take-all market). Specialized models fragment that market. Who benefits from each structure?

**Grouping:** 2 per group

#### The Specialist vs. the Generalist

ChatGPT and Claude are generalists: you can ask them about cooking, physics, poetry, or debugging code. They're decent at all of it. But specialized AI systems often outperform generalists in their domain. AlphaFold predicted the 3D structure of nearly every known protein, something no generalist model could do. GitHub Copilot, fine-tuned specifically for code, often outperforms general models at programming tasks. Medical AI systems trained on clinical data can match radiologists at detecting certain cancers.

This raises a question: is the future one AI that does everything, or many AIs that each do one thing well? Think about how other tools work. You don't use a Swiss Army knife to build a house. You use specialized tools. But you also don't carry 50 tools in your pocket. The Swiss Army knife has value precisely because it's "good enough" at many things.

**Discuss with your partner:** Would you rather have one AI assistant that handles everything, or access to 10 specialized AIs that each excel in their domain? Think about this from different perspectives: as a student, would you want a specialized "study AI" for each course, or one general assistant? What about from a doctor's perspective, a lawyer's, a teacher's? Who decides whether AI stays general or gets specialized, and what incentives drive that choice?

**Capture your key points:**

_Expected response: What did you and your partner discuss? Generalist or specialist: where did you land?_

### Stage 6: Round 3: Share Out

**Timing:** planned 10m

_Class reconvenes; your instructor wraps the meeting_

> **Facilitation notes**
>
> This share-out is the meeting's wrap-up. Ask 2-3 pairs to share what they discussed in Round 3, then your instructor synthesizes across all three directions: "You started with efficiency (MoE), moved to access (local models), then to focus (specialization). All three are still narrow AI: systems that do specific things well. But some companies are pursuing something bigger: AGI. We'll close the loop on that next week in the Human Flourishing discussion, where it lands alongside the biggest question of all: what does it mean for humans to flourish in a world with increasingly capable AI?"
> 
> Forward look: "Thursday is your first Final Project Workshop. You'll be building something with AI. Keep today's discussion in mind: the tools you're using represent one set of choices about how AI should work. There are others."

#### Share Out

Your instructor will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 7: Feedback

**Timing:** planned 5m

_Quick feedback on the session_

**Feedback prompt:** How was today's session? Which discussion round generated the most interesting conversation? What topic would you have liked to explore more?
