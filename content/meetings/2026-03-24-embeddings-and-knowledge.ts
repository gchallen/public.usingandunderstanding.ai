import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-03-24",
    semester: "spring2026",
    title: "Embeddings and Knowledge",
    summary:
      "How does AI represent meaning? Exploring word embeddings, vector similarity, and the geometry of knowledge",
    dependsOn: ["2026-02-24-how-llms-work", "2026-03-10-neurons-and-networks"],
  },
  intro: [
    {
      type: "markdown",
      content: `# Embeddings and Knowledge

## How Does AI Represent Meaning?

When you type a word into ChatGPT, the model doesn't see letters. It sees a point in a high-dimensional space, a list of hundreds or thousands of numbers that encode what that word *means* based on every context the model has seen it in.

Words that appear in similar contexts end up near each other in this space. "King" is near "queen." "Dog" is near "cat." But the relationships go deeper than simple similarity: the direction from "king" to "queen" is roughly the same as the direction from "man" to "woman." The geometry of the space encodes relationships, not just categories.

Today you'll explore this space directly, discover relationships that surprise you, and think about what it means for AI to represent human knowledge as geometry.

---

## Today's Plan

1. **Guided exploration** (individual): Experiment with an embedding explorer to discover how AI organizes meaning
2. **Question generation** (individual): Write down what surprises you and what questions it raises
3. **Group discussion** (pairs): Share discoveries with a partner
4. **Agent-guided interaction** (small groups): Discuss your observations with an AI facilitator to deepen your understanding
5. **Class synthesis**: Geoff connects themes from across the room

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** This is an inductive session. Students explore embedding space hands-on, generate their own observations and questions, then discuss in progressively larger groups. The key pedagogical move is that students encounter the material before hearing any explanation. Their observations drive the class discussion, not a predetermined lecture plan.

The session uses **agent-guided interaction** for the group discussion stage. Instead of submitting written notes, groups complete this stage by demonstrating to an AI facilitator that they've engaged meaningfully with what they discovered. This is the first use of agent-guided interaction in the course.

**Logistics:**
- Individual exploration with embedding tools (15 min)
- Individual question generation via text submission (5 min)
- Paired sharing (10 min)
- Group agent-guided interaction with AI facilitator (15 min)
- Instructor-led class synthesis using themes from group conversations (15 min)
- Wrap-up and feedback (10 min)

**Pacing:**
| Stage | Duration | Cumulative |
|-------|----------|------------|
| Guided Exploration | 15m | 15m |
| Question Generation | 5m | 20m |
| Paired Sharing | 10m | 30m |
| Agent-Guided Interaction | 15m | 45m |
| Class Synthesis | 15m | 60m |
| Wrap-Up | 5m | 65m |
| Feedback | 5m | 70m |

**Tips:**
- During the exploration stage, walk around and note interesting discoveries students are making. You can call on these during synthesis.
- The question generation stage is short on purpose. Students should write what's top of mind, not craft perfect questions.
- During agent-guided interaction, monitor the group chat dashboard for groups that finish early or get stuck.
- For class synthesis, use the group chat transcripts and text submissions to identify common themes and surprising observations. The AI can help summarize across groups.
- Resist the urge to "explain" embeddings during the exploration. Let students build intuitions first.`,
  activity: {
    meetingSlug: "2026-03-24-embeddings-and-knowledge",
    startTime: "2:00pm",
    stages: [
      // ── Guided Exploration ──
      {
        label: "Guided Exploration",
        estimatedTime: "15m",
        facilitationNotes: `Students explore embedding space individually. Walk around and observe what they're trying. Common discoveries: gendered associations, cultural biases in proximity, professional terms clustering by field. Don't explain yet. If a student asks "why is X near Y?" turn it back: "Why do you think? What would the training data look like?"`,
        content: [
          {
            type: "markdown",
            content: `### Explore Embedding Space

Use the embedding explorer below to investigate how AI represents meaning. Try things like:

- **Similar words**: Pick a word and see what's nearby. Are the neighbors what you expected?
- **Analogies**: If "king" minus "man" plus "woman" gives you "queen," what other analogies work? What breaks?
- **Categories**: Do words from the same domain cluster together? How tight are the clusters?
- **Surprises**: Find a relationship that doesn't make sense to you. Why might the model have learned it?
- **Bias**: Look for gendered, racial, or cultural associations. What do they reveal about the training data?

Don't worry about understanding the math. Focus on building intuitions: what patterns do you notice in how the model organizes meaning?`,
          },
          {
            type: "embedding-explorer",
          },
        ],
      },
      // ── Question Generation ──
      {
        label: "What Surprised You?",
        estimatedTime: "5m",
        transition: "Capture your observations before discussing",
        facilitationNotes: `Keep this short. Students should write what's fresh, not polish their thoughts. The text submissions will be visible during synthesis.`,
        content: [
          {
            type: "markdown",
            content: `### Capture Your Observations

Write down one or two things that surprised you during the exploration. What did you expect to find, and what did you actually find?`,
          },
          {
            type: "text-submission",
            id: "embedding-observations",
            label: "What surprised you?",
            prompt:
              "Describe something unexpected you discovered about how AI represents meaning. What did you expect, and what did you find instead?",
          },
        ],
      },
      // ── Paired Sharing ──
      {
        label: "Paired Sharing",
        estimatedTime: "10m",
        transition: "Share your discoveries with a partner",
        facilitationNotes: `Pairs share what they found. This is a warm-up for the group discussion. Students who explored different aspects of embedding space will have complementary observations.`,
        content: [],
        group: {
          id: "pair-share",
          groupKey: "embeddings-pairs-2026-03-24",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Share With Your Partner

Take turns sharing what you discovered during the exploration:

- What surprised you most?
- Did you find any relationships that seem wrong or biased?
- What do you think this reveals about how AI "knows" things?

Listen for observations that are different from your own. Your partner may have explored a completely different part of the space.`,
            },
          ],
        },
      },
      // ── Agent-Guided Interaction ──
      {
        label: "Group Discussion",
        estimatedTime: "15m",
        transition: "Join a small group to discuss with an AI facilitator",
        facilitationNotes: `This is the first use of agent-guided interaction. Pairs discuss their observations with an AI facilitator. The facilitator will push them to connect their observations to bigger ideas (what can embeddings represent well? What can't they capture? How does this connect to their experience using LLMs?). Groups complete the stage when the facilitator determines they've engaged meaningfully. Monitor the dashboard for groups that are stuck or finishing early.`,
        content: [],
        group: {
          id: "group-discuss",
          groupKey: "embeddings-groups-2026-03-24",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Group Discussion

Discuss your embedding discoveries with your group. An AI facilitator will guide the conversation, asking follow-up questions and connecting your observations.

This stage uses **agent-guided interaction**: instead of writing a summary, your group completes this stage by demonstrating to the facilitator that you've engaged meaningfully with what you discovered. The facilitator will let you know when you're done.`,
            },
            {
              type: "group-chat",
              slug: "embeddings-exploration",
            },
          ],
        },
      },
      // ── Class Synthesis ──
      {
        label: "Class Synthesis",
        estimatedTime: "15m",
        transition: "Class reconvenes for instructor-led discussion",
        facilitationNotes: `Use the text submissions and group chat transcripts to identify 3-4 themes. Common ones: (1) embeddings encode cultural biases from training data, (2) proximity captures usage patterns, not "meaning" in a philosophical sense, (3) analogies work surprisingly well for some relationships and fail for others, (4) this is how the RAG system on the course website works. Connect to the bigger arc: we've seen how LLMs predict the next token (Week 4), how neural networks learn from data (Week 5), and now how meaning gets encoded geometrically. These are layers of the same system.

**High-dimensionality insight**: If students noticed that different words share many neighbors, surface the dimensionality point. In 1,536 dimensions, "king" can be near "queen" (royalty), "ruler" (authority), AND "chess" (games) simultaneously — each relationship in a different direction. In 2D or 3D this would be impossible. The abundance of dimensions is what makes embeddings work: there's room for thousands of independent meaning directions without interference. This is why the 2D scatter plot is a lossy projection — the real structure lives in a space we can't visualize.`,
        content: [
          {
            type: "markdown",
            content: `### Class Discussion

Geoff will draw on your observations and group conversations to connect themes across the room.

Some questions to consider:
- If AI represents meaning as geometry, is that "understanding" or just pattern storage?
- The same embedding space powers the course assistant on this website. When it answers your questions, it's finding content that's geometrically "near" your question. Does knowing that change how you think about AI assistants?
- What kinds of knowledge can't be represented as proximity in a vector space?`,
          },
          { type: "text-submission-board", id: "embedding-observations" },
        ],
      },
      // ── Wrap-Up ──
      {
        label: "Wrap-Up",
        estimatedTime: "5m",
        transition: "Brief closing reflection",
        facilitationNotes: `Brief close. The key takeaway: AI represents meaning as geometry, and that representation is both powerful (analogies, similarity, search) and limited (it encodes the biases of its training data, and proximity in vector space doesn't always correspond to meaningful relationships). Next session we'll look at where that training data comes from and what it costs.`,
        content: [
          {
            type: "markdown",
            content: `### Looking Ahead

Today you explored how AI turns meaning into geometry. Words become points in space, and relationships become directions. This is powerful enough to find relevant documents, answer questions, and generate coherent text. But it also encodes every bias and pattern in the training data.

Next time, we'll look at where that training data comes from and what it costs.`,
          },
        ],
      },
      // ── Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback",
        content: [
          {
            type: "feedback",
            prompt:
              "What worked well about today's session? What would you change? This is the first time we've used agent-guided interaction — how did that feel compared to writing in a text box?",
          },
        ],
      },
    ],
  },
};

export default meeting;
