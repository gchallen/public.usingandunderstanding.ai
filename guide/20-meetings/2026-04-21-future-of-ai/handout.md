# The Future of AI

**Student Handout** · 2026-04-21

Exploring where AI is heading beyond 'just make it bigger': mixture of experts, local models, specialization, and AGI

Name: ______________________________

---

## Before class

### The Future of AI

#### Today's Plan

You've spent this semester learning how current AI systems work: next-token prediction, massive datasets, human feedback training. The most visible progress in AI over the past few years came from a straightforward strategy: make the model bigger, give it more data, train it longer. But that approach is running into limits, and researchers are pursuing fundamentally different directions.

Today, three rounds of paired discussion, each seeded with a specific direction beyond "just make it bigger": mixture of experts, local models, and specialization. Next week we'll close the loop with the biggest question (AGI) in the Human Flourishing discussion.

---

## Activity

### Stage 1: Round 1: The Mixture of Experts Bet

**Group of 2.** Names: __________  __________  

#### The Mixture of Experts Bet

The biggest AI models have hundreds of billions of parameters. But here's something most people don't realize: many frontier models, including GPT-4, don't use all those parameters for every question. Instead, they use a technique called **mixture of experts (MoE)**.

An MoE model contains many smaller "expert" sub-networks. A routing system decides which experts to activate for each input. When you ask about chemistry, different experts fire than when you ask about poetry. A model with hundreds of billions of parameters might only use 20-30 billion for any single question, making it faster and cheaper while maintaining quality.

This is a fundamentally different approach from "just make it bigger." Instead of brute-force scale, MoE is about *organization*: which parts of the model should care about which problems?

**Discuss with your partner:** Does this remind you of anything about how human expertise works? An ER doctor, a patent lawyer, and a pastry chef all have "general intelligence," but they route problems to very different specialized knowledge. Is MoE making AI more like human organizations, where different people handle different problems? What are the implications if AI systems can get better not by growing, but by getting more organized?

**Capture your key points:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 2: Round 1: Share Out

#### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 3: Round 2: AI in Your Pocket

**Group of 2.** Names: __________  __________  

#### AI in Your Pocket

The biggest AI models require data centers full of GPUs. But a parallel effort is pushing AI in the opposite direction: making models small enough to run on your phone. Apple Intelligence runs a ~3 billion parameter model on-device. Google's Gemini Nano runs on Pixel phones. Open-source models like Llama have been compressed to run on laptops. These local models are less capable than cloud models, but they work offline, keep your data on your device, and cost nothing per query.

This changes who has access to AI and who sees your data. Right now, using a frontier model means sending your prompts to OpenAI, Anthropic, or Google. Everything you type is stored on their servers. A local model means nobody else sees your conversations.

It also changes the economics: cloud AI costs money per query, and companies can change their models, raise prices, or shut down. Local AI is free after the initial download and stays the same unless you update it.

**Discuss with your partner:** What would change about how you use AI if it ran entirely on your phone, with no internet connection and no company seeing your prompts? Would you trust it more or less? Think about the privacy implications: every personal question, every medical symptom, every relationship problem you've ever typed into ChatGPT is stored on a company server. Does that matter to you? Who benefits most from local models, and who benefits most from keeping AI in the cloud?

**Capture your key points:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 4: Round 2: Share Out

#### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 5: Round 3: The Specialist vs. the Generalist

**Group of 2.** Names: __________  __________  

#### The Specialist vs. the Generalist

ChatGPT and Claude are generalists: you can ask them about cooking, physics, poetry, or debugging code. They're decent at all of it. But specialized AI systems often outperform generalists in their domain. AlphaFold predicted the 3D structure of nearly every known protein, something no generalist model could do. GitHub Copilot, fine-tuned specifically for code, often outperforms general models at programming tasks. Medical AI systems trained on clinical data can match radiologists at detecting certain cancers.

This raises a question: is the future one AI that does everything, or many AIs that each do one thing well? Think about how other tools work. You don't use a Swiss Army knife to build a house. You use specialized tools. But you also don't carry 50 tools in your pocket. The Swiss Army knife has value precisely because it's "good enough" at many things.

**Discuss with your partner:** Would you rather have one AI assistant that handles everything, or access to 10 specialized AIs that each excel in their domain? Think about this from different perspectives: as a student, would you want a specialized "study AI" for each course, or one general assistant? What about from a doctor's perspective, a lawyer's, a teacher's? Who decides whether AI stays general or gets specialized, and what incentives drive that choice?

**Capture your key points:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 6: Round 3: Share Out

#### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.

### Stage 7: Feedback

**How was today's session? Which discussion round generated the most interesting conversation? What topic would you have liked to explore more?**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
