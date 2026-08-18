import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-03-10",
    semester: "spring2026",
    title: "Neurons and Networks",
    summary:
      "Hands-on exploration of artificial neurons and neural networks through interactive visualizations",
    dependsOn: ["2026-02-24-how-llms-work", "2026-03-05-does-ai-understand"],
  },
  intro: [
    {
      type: "markdown",
      content: `# Neurons and Networks

## Today's Plan

Today you'll explore what's happening underneath the AI systems we've been discussing. You've seen how LLMs predict the next token and debated whether that counts as "understanding." Now you'll get hands-on with the building blocks: artificial neurons and neural networks.

Here's one way to think about what you'll see today: neural networks are mathematical functions. They take in numbers and compute an output — nothing more. But they are _extraordinarily_ complicated mathematical functions, and the way they learn to compute the right output is fascinating.

Here's another thing worth knowing: the basic idea of an artificial neuron was inspired by how neurons work in our brains. Researchers studied biological neural networks and built simplified mathematical versions. Now, decades later, artificial neural networks are being used to study the brain itself — helping neuroscientists understand the very biological systems that inspired AI in the first place.

You'll experiment with interactive visualizations, generate questions about what you observe, and investigate those questions with different partners.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

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
- The jigsaw works because each partner rotation gives students a fresh perspective — protect the partner changes`,
  activity: {
    meetingSlug: "2026-03-10-neurons-and-networks",
    startTime: "2:00pm",
    stages: [
      // ── Stage 1: Explore: Single Neuron ──
      {
        label: "Explore: Single Neuron",
        estimatedTime: "10m",
        facilitationNotes: `Let students explore freely. The NeuronExplorer lets them manipulate inputs, weights, bias, and activation functions. Most students will start by clicking around randomly — that's fine. The preset challenges (AND gate, OR gate) give them a concrete goal. Don't explain how neurons work yet — let them build intuitions through experimentation.`,
        content: [],
        group: {
          id: "explore-neuron",
          groupKey: "neuron-explore-2026-03-10",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### A Single Artificial Neuron

An artificial neuron is the simplest building block in a neural network. It takes some inputs, multiplies each one by a weight, adds them up with a bias, and passes the result through an activation function. That's it — but from this simple operation, surprisingly complex behavior can emerge.

The tool below lets you experiment with a single neuron. Try adjusting the sliders and see what happens.`,
            },
            { type: "neuron-explorer" },
            {
              type: "markdown",
              content: `**Things to try:**
- Use the preset challenges (AND gate, OR gate) — can you figure out what the neuron needs to do?
- What happens when you change the activation function? How does it change the neuron's behavior?
- Can you make the neuron fire for only specific input combinations?
- Check out the biological analogy — how does this compare to what we know about brain cells?`,
            },
          ],
        },
      },
      // ── Stage 2: Explore: Digit Network ──
      {
        label: "Explore: Digit Network",
        estimatedTime: "15m",
        transition: "Same partners explore a full neural network",
        facilitationNotes: `Same partners as Stage 1. The DigitNetwork is more complex — students can draw digits, watch the network classify them, train the network, and visualize backpropagation. Some students will focus on drawing tricky digits to fool the network, others will focus on the training process. Both are productive. The key connection is between the single neuron they just explored and the many neurons working together here.`,
        content: [],
        group: {
          id: "explore-digits",
          groupKey: "neuron-explore-2026-03-10",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### A Network of Neurons

Now let's see what happens when you connect many neurons together. The network below is trained to recognize handwritten digits (0-9). Each neuron does the same basic operation you just explored — weighted sum, bias, activation function — but together they can do something much more impressive.`,
            },
            { type: "digit-network" },
            {
              type: "markdown",
              content: `**Things to try:**
- Draw a few digits and see if the network classifies them correctly. What digits does it struggle with?
- Try the "Train" mode — watch the connections change color and thickness as the network learns from examples. Notice how the green and orange connections match the single neuron you just explored.
- Stop training partway and switch back to "Classify" — the network now uses your partially-trained model. Does it work? Try training longer and classify again.
- Use "Learning" mode to step through exactly how the network learns from a single example — where do the errors flow?
- Click on individual neurons to see what they're responding to — what patterns have they learned?
- What connections can you see between the single neuron you just explored and this full network?`,
            },
          ],
        },
      },
      // ── Stage 3: Discussion: What Did You Notice? ──
      {
        label: "Discussion: What Did You Notice?",
        estimatedTime: "5m",
        transition: "Class shares initial observations",
        facilitationNotes: `Brief whole-class check-in. Ask 3-4 students what surprised them or what they noticed. Listen for observations about: how training changes weights, what individual neurons seem to "look for," when the network fails, the connection between single neurons and the full network. Don't explain — just collect observations and validate curiosity.`,
        content: [
          {
            type: "markdown",
            content: `### Quick Check-In

Geoff will ask a few of you to share something you noticed or something that surprised you during the exploration.`,
          },
        ],
      },
      // ── Stage 4: Generate Questions ──
      {
        label: "Generate Questions",
        estimatedTime: "5m",
        transition: "Students generate questions individually",
        facilitationNotes: `Individual work — no partners for this stage. Students should generate questions based on what they observed, not what they already know. If students are stuck, prompt: "What did you see that you couldn't explain?" or "What would you want to understand better about how the network works?"`,
        content: [
          {
            type: "markdown",
            content: `### What Are You Curious About?

Based on what you just explored, what questions do you have about how neurons and neural networks work? Think about what surprised you, what you couldn't explain, or what you want to understand better.

Enter at least 2 questions below.`,
          },
          { type: "question-entry", id: "neuron-questions", min: 2 },
        ],
      },
      // ── Stage 5: Question Review ──
      {
        label: "Question Review",
        estimatedTime: "5m",
        transition: "Class reviews and selects questions to investigate",
        facilitationNotes: `Click "Process Questions" to aggregate and prioritize submissions. Review the list and surface 5-6 good questions. Group similar questions together. Select 3-4 questions for investigation — pairs will choose which one to explore. Pick questions that are explorable with the demos and/or AI conversation. Diversity of questions means richer sharing in Stage 7.`,
        content: [
          {
            type: "question-board",
            id: "neuron-questions",
            select: "multiple",
            seedQuestions: [
              "Why does the network need hidden layers — why can't the inputs connect directly to the outputs?",
              "What does a single neuron in the hidden layer 'look for' in a digit image?",
              "How does the network know which weights to change during training, and by how much?",
              "Why does the network sometimes confidently predict the wrong digit?",
              "How is what this network does related to the next-token prediction we explored two weeks ago?",
            ],
          },
        ],
      },
      // ── Stage 6: Investigate ──
      {
        label: "Investigate",
        estimatedTime: "12m",
        transition: "New partners investigate a question using the demos",
        facilitationNotes: `New partners. Groups choose a question to investigate using the demos. Encourage them to actually experiment — not just discuss abstractly. The TextSubmission captures their findings. During Share Out, look for groups that investigated different questions or arrived at different conclusions about the same question.`,
        content: [],
        group: {
          id: "investigate",
          groupKey: "neuron-investigate-2026-03-10",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Investigate a Question`,
            },
            {
              type: "selected-question",
              id: "neuron-questions",
              select: "multiple",
            },
            {
              type: "markdown",
              content: `With your new partner, pick one of the questions above to investigate. Use the demos below to experiment and gather evidence. You should also feel free to ask an AI — the interactive tools are great for some questions, but others might benefit from a conversation with ChatGPT or Claude. Try to build an answer based on what you can observe and learn, not just what you think you know.`,
            },
            { type: "neuron-explorer" },
            { type: "digit-network" },
            {
              type: "text-submission",
              id: "neuron-investigation",
              label: "What did you find?",
              prompt:
                "What question did you investigate? What did you try, and what did you discover?",
            },
          ],
        },
      },
      // ── Stage 7: Explain & Learn ──
      {
        label: "Explain & Learn",
        estimatedTime: "12m",
        transition: "New partners explain findings to each other",
        facilitationNotes: `Third partner rotation. Each student explains what they investigated and what they found to someone who investigated something different. This is the jigsaw payoff — students learn from each other's investigations. The TextSubmission captures what they learned from their new partner, not what they already knew.`,
        content: [],
        group: {
          id: "explain-learn",
          groupKey: "neuron-explain-2026-03-10",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Explain & Learn

You're with a new partner now. Take turns:

1. **Explain** what question you investigated and what you found
2. **Listen** to what your partner investigated and learned
3. **Discuss:**
   - If you investigated **different questions**: how do your findings connect? Did you discover related things?
   - If you investigated the **same question**: did you try different things? Did you reach the same conclusions? What did one of you notice that the other missed?`,
            },
            {
              type: "text-submission",
              id: "neuron-explain",
              label: "What did you learn from your partner?",
              prompt:
                "What question did your partner investigate? What did they find? If you investigated the same question, what did they notice that you didn't?",
            },
          ],
        },
      },
      // ── Stage 8: Share Out ──
      {
        label: "Share Out",
        estimatedTime: "8m",
        transition: "Groups share what they discovered",
        facilitationNotes: `Call on 3-4 groups. Ask what question they investigated and what they found. Try to call on groups that investigated different questions so the class hears a range of findings. Connect findings across groups — "That's interesting because the group before you found something related..." Look for opportunities to connect observations about single neurons to the full network, and training to backpropagation.`,
        content: [
          {
            type: "instructor-only",
            content: [
              {
                type: "markdown",
                content: `**Share-out approach:**
- Ask groups what they investigated, not just what they found
- Look for groups that investigated different questions
- Connect findings across groups when you can
- Don't lecture — amplify what students discovered`,
              },
            ],
          },
        ],
      },
      // ── Stage 9: Wrap-Up ──
      {
        label: "Wrap-Up",
        estimatedTime: "3m",
        transition: "Brief connection to LLMs and what comes next",
        facilitationNotes: `Keep this very brief. The key connection: the artificial neurons and networks you explored today are the building blocks underneath the LLMs we've been discussing. Modern LLMs use the same fundamental operations — weighted sums, activation functions, backpropagation — but at a massive scale. A digit recognition network has hundreds of neurons. GPT-4 has hundreds of billions. Next time we'll look at how these building blocks scale up.`,
        content: [
          {
            type: "markdown",
            content: `### Looking Ahead

The artificial neurons and networks you explored today are the building blocks underneath the LLMs we've been discussing all semester. The same fundamental operations — weighted sums, activation functions, backpropagation — power everything from this digit recognizer to ChatGPT.

The difference is scale. The digit network you trained today has about 13,000 connections. A frontier model like GPT-4 or Claude has hundreds of _billions_ of parameters — roughly 10 million times larger. The structure is also different in ways we'll explore later, but the core idea is the same: take in numbers, multiply by weights, add them up, apply a function, repeat.

Next time, we'll look at how these building blocks scale up into the systems you've been using.

**Want to go deeper?** The [3Blue1Brown series on neural networks](https://www.3blue1brown.com/topics/neural-networks) is an excellent visual introduction that goes into much more mathematical detail — including the calculus behind backpropagation.`,
          },
        ],
      },
      // ── Stage 10: Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on the session",
        content: [
          {
            type: "feedback",
            prompt:
              "What was most interesting about exploring neurons and networks today? What would you change?",
          },
        ],
      },
    ],
  },
};

export default meeting;
