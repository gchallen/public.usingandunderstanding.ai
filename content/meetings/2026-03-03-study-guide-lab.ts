import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-03-03",
    semester: "spring2026",
    title: "Study Guide Lab",
    summary:
      "Use AI to build study materials for your other courses while learning evidence-based study techniques",
  },
  intro: [
    {
      type: "markdown",
      content: `# Study Guide Lab

## Today's Plan

Midterms are coming — today you'll spend class time studying for your other courses, using AI as a study partner. But first, we'll think about *how* to use AI effectively for learning. Then you'll put those ideas into practice with two rounds of study techniques backed by learning science research.

Have your materials ready (notes, slides, textbook) for another course you need to study for.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** Students get real study value for their midterms while learning when and how AI helps (and doesn't help) with studying. The session opens with a discussion about effective and ineffective AI learning strategies, then two rounds introduce study techniques backed by learning science research. Partners give students someone to talk through their plans with before working with AI, and someone to share what they learned afterward.

**Logistics:**
- Ask students to bring course materials (notes, slides, textbooks) for another class — announce this ahead of time if possible
- Enforced pairing via GroupActivity (no roles) — pairing is for kickoff discussion and share-out, studying is individual
- Students use external AI tools (ChatGPT, Claude, or Gemini) — not the course chat
- Students must create share links for their AI conversations and include them in their reflections
- Share link instructions: ChatGPT (share button → "Create link"), Claude (share button → "Create link"), Gemini (share button → "Share")

**Pacing:**
| # | Stage | Duration | Cumulative |
|---|-------|----------|------------|
| 1 | AI Learning Strategies | 15m | 15m |
| 2 | Strategy Review | 5m | 20m |
| 3 | Class Discussion | 5m | 25m |
| 4 | Practice Testing | 15m | 40m |
| 5 | Practice Testing: Share Out | 10m | 50m |
| 6 | Build a Study Aid | 15m | 65m |
| 7 | Build a Study Aid: Share Out | 10m | 75m |
| 8 | Feedback | 5m | 80m |`,
  activity: {
    meetingSlug: "2026-03-03-study-guide-lab",
    startTime: "2:00pm",
    stages: [
      // ── Stage 1: AI Learning Strategies ──
      {
        label: "AI Learning Strategies",
        estimatedTime: "15m",
        facilitationNotes: `This opening stage gets students thinking critically about AI as a learning tool before they start using it. The goal is to surface both good and bad patterns so the class can discuss them. Pairs submit 3 effective + 3 ineffective strategies.`,
        content: [],
        group: {
          id: "ai-strategies",
          groupKey: "study-guide-2026-03-03",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### AI Learning Strategies

Before diving into studying, let's think about how to use AI well for learning. With your partner, discuss: what are effective ways to use AI that lead to *genuine learning*? What are ineffective ways — approaches that feel productive but don't actually help you learn?

**Discussion (~5 min):** Brainstorm with your partner. Think about your own experiences and what you've observed.

**Submit (~10 min):** Together, submit at least 3 effective strategies and 3 ineffective strategies.`,
            },
            { type: "strategy-entry", id: "ai-learning-strategies" },
          ],
        },
      },
      // ── Stage 2: Strategy Review ──
      {
        label: "Strategy Review",
        estimatedTime: "5m",
        transition: "Class reviews all submitted strategies",
        facilitationNotes: `Trigger processing to combine all group submissions. The AI will categorize strategies as effective, ineffective, or mixed (where groups disagreed). The mixed category is the most interesting for discussion.`,
        content: [{ type: "strategy-board", id: "ai-learning-strategies" }],
      },
      // ── Stage 3: Class Discussion ──
      {
        label: "Class Discussion",
        estimatedTime: "5m",
        transition: "Discussion of strategies where groups disagreed",
        facilitationNotes: `Focus on the "mixed" items — strategies where groups disagreed about whether they're effective or ineffective. These are the most pedagogically valuable because they reveal nuance. Good prompts: "Why might this strategy be effective in some situations but not others?" "What would make the difference between this being helpful vs. harmful for learning?"`,
        content: [
          {
            type: "markdown",
            content: `Let's look at what you came up with — especially the strategies where groups disagreed.`,
          },
          { type: "strategy-results", id: "ai-learning-strategies" },
        ],
      },
      // ── Stage 4: Practice Testing ──
      {
        label: "Practice Testing",
        estimatedTime: "15m",
        transition: "Same partners; individual study with AI practice testing",
        facilitationNotes: `This round introduces the illusion of competence — the gap between feeling like you know something and actually being able to produce an answer. Many students will discover their confidence exceeds their actual performance. Make sure students are answering practice questions before checking the answers.`,
        content: [],
        group: {
          id: "practice-testing",
          groupKey: "study-guide-2026-03-03",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Practice Testing

Self-testing is the gold standard of study techniques. Students who test themselves consistently outperform those who spend the same time re-reading material — even when the re-readers feel _more_ prepared. That false sense of readiness is called the *illusion of competence*: material feels familiar when you read it, but familiarity isn't the same as being able to produce an answer on an exam.

**Pair kickoff (~3 min):** Tell your partner what course and topic you're studying for. How are you planning to use AI for practice testing? Think about the strategies we just discussed.

**Solo study (~12 min):** Work individually with AI using practice testing. Use [ChatGPT](https://chatgpt.com), [Claude](https://claude.ai), or [Gemini](https://gemini.google.com) — not the course chat. You'll need to create a share link to your conversation afterward, so start a fresh conversation for this round.

**Suggested approach:** Share your course materials with AI. Ask it to generate practice exam questions at the level your professor would ask. Answer them without looking at your notes or AI. Then check yourself. Focus on the questions you got wrong — those are your study priorities.

**But you could also:** ask AI to generate questions in different formats (multiple choice, short answer, explain-a-concept, true/false with justification); have AI role-play as a strict professor giving an oral exam; ask AI to generate questions that target common misconceptions; or try any other approach centered on testing yourself.`,
            },
          ],
        },
      },
      // ── Stage 5: Practice Testing: Share Out ──
      {
        label: "Practice Testing: Share Out",
        estimatedTime: "10m",
        transition: "Share reflections on practice testing",
        facilitationNotes: `Prompts: "Were AI-generated questions good? Too easy, too hard, or about right?" "How did your confidence compare to your actual performance?" "Did anyone find that AI was bad at writing certain kinds of questions?" This is a good moment to reinforce the illusion of competence — many students will report feeling like they knew the material but struggling on specific questions.`,
        content: [
          {
            type: "markdown",
            content: `Before moving on, create a share link to your AI conversation. In ChatGPT, click the share button and "Create link". In Claude, click the share button and "Create link". In Gemini, click the share button and "Share".`,
          },
          {
            type: "text-submission",
            id: "study-practice-testing-reflection",
            label: "Practice Testing reflection:",
            prompt:
              "What study technique did you use? What did you learn about your own confidence vs. actual understanding? Paste your AI conversation share link below.",
            minLines: 4,
          },
        ],
      },
      // ── Stage 6: Build a Study Aid ──
      {
        label: "Build a Study Aid",
        estimatedTime: "15m",
        transition: "Same partners; individual study building a study aid",
        facilitationNotes: `This round is about the trap of outsourcing cognitive work to AI. The key insight: if AI creates a beautiful study guide for you, you've skipped the thinking that makes study guides valuable. Push students to do their own organizing and use AI for checking and polishing.`,
        content: [],
        group: {
          id: "study-aid",
          groupKey: "study-guide-2026-03-03",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Build a Study Aid

Creating organized study materials — concept maps, cheat sheets, summary notes — forces you to make decisions about what matters most and how ideas connect. This deep processing strengthens understanding. But there's a trap: if AI creates the study aid _for_ you, you skip the cognitive work that makes it valuable. A beautiful, clear AI-generated summary can make you feel like you understand the material when you've really just _read_ something that's easy to follow.

**Pair kickoff (~3 min):** What are your weakest areas from the practice testing round? What kind of study aid would be most useful? How do you plan to keep yourself doing the thinking rather than outsourcing it to AI?

**Solo study (~12 min):** Work individually with AI to build a study aid for your weakest area. Again, use [ChatGPT](https://chatgpt.com), [Claude](https://claude.ai), or [Gemini](https://gemini.google.com) and start a fresh conversation so you can share it afterward.

**Suggested approach:** Pick your weakest area (revealed by practice testing). Start by outlining the key concepts yourself, then use AI to help you fill in details, check accuracy, and improve the organization. The goal: a study aid where _you_ did the thinking and AI helped with the polish.

**But you could also:** ask AI to explain a concept three different ways and pick the one that clicks; have AI generate analogies for difficult concepts; create a "misconception sheet" (common wrong answers with corrections); build practice problems with worked solutions; or try any other approach that produces something you'll use to study later.`,
            },
          ],
        },
      },
      // ── Stage 7: Build a Study Aid: Share Out ──
      {
        label: "Build a Study Aid: Share Out",
        estimatedTime: "10m",
        transition: "Share reflections on study aid creation",
        facilitationNotes: `Prompts: "Show your partner your study aid. Can they quiz you on it — and can you answer without looking?" "How much of the study aid came from your understanding vs. AI's generation?" "Which of the two study rounds helped you learn the most? Why?" Use this final share-out to connect both rounds back to the key theme: AI is a powerful study tool, but only if you use it in ways that make your brain do the work.`,
        content: [
          {
            type: "markdown",
            content: `Create a share link to this conversation too.`,
          },
          {
            type: "text-submission",
            id: "study-aid-reflection",
            label: "Study Aid reflection:",
            prompt:
              "What study technique did you use? Across both rounds, which approach helped you learn the most and why? Paste your AI conversation share link below.",
            minLines: 4,
          },
        ],
      },
      // ── Stage 8: Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on the session",
        content: [
          {
            type: "feedback",
            prompt: "What worked well about today's study session? What would you change?",
          },
        ],
      },
    ],
  },
};

export default meeting;
