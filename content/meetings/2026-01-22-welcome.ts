import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-01-22",
    semester: "spring2026",
    title: "Welcome & AI Perspectives",
    summary: "First day introductions through AI-themed discussions",
  },
  intro: [
    {
      type: "markdown",
      content: `# Welcome to CS 199 UAI`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Schedule:**
| Time | Duration | Activity |
|------|----------|----------|
| 2:05 | 40 min | AI Perspectives Rounds |
| 2:45 | 20 min | Share-out + Course Overview |
| 3:05 | 10 min | Turing Test Teaser + Q&A |
| 3:15 | 5 min | Wrap-up |

**Philosophy:** Minimal presenting. Students discover and discuss.

**Logistics:**
- Signal for transitions (bell, music, verbal cue)
- Encourage finding someone they haven't talked to yet
- Display current question on screen
- Watch for isolated students during rounds`,
  activity: undefined,
  outro: [
    {
      type: "markdown",
      content: `## AI Perspectives Rounds

Find a partner for each question. Introduce yourself (name, major/year) and discuss for about 10 minutes, then find someone new when Geoff signals.

### The Questions

**1. How is AI affecting you personally?**`,
    },
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `*Look for: range of experiences from "I use it daily" to "I've never tried it"*`,
        },
      ],
    },
    {
      type: "markdown",
      content: `Your daily life, habits, how you work or create.

**2. Do you think AI is actually intelligent?**`,
    },
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `*This sets up the Turing test discussion. Note interesting definitions of "intelligence" that come up.*`,
        },
      ],
    },
    {
      type: "markdown",
      content: `What would convince you either way?

**3. What worries you most about AI?**

Or does nothing worry you?

**4. What do you hope to get out of this course?**`,
    },
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `*Always end with this question. Note themes to reference throughout the semester.*`,
        },
      ],
    },
    {
      type: "markdown",
      content: `Why did you sign up? What are you curious about?

---`,
    },
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `## Share-Out (7-10 min)

After rounds, bring everyone back together:
- "What surprised you in your conversations?"
- "Did you hear perspectives very different from your own?"
- "What questions came up that you want to explore this semester?"

This surfaces themes and shows students the diversity in the room.`,
        },
      ],
    },
    {
      type: "markdown",
      content: `## Course Overview

After the rounds, we'll briefly cover:
- Course format: Tuesday = concepts, Thursday = labs/discussions (alternating)
- No technical prerequisites - using AI, not building it
- Assessment: Labs (50%), Quizzes (35%), Final project (10%), Final video (5%)
- AI is part of course operations - this is an experiment
- Ethical complexity acknowledged - using these tools isn't neutral`,
    },
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `**Keep it brief** - they can read the syllabus:
- **Format**: Tuesday = concepts, Thursday = labs/discussions (alternating)
- **No technical prerequisites** - using AI, not building it
- **Assessment**: Labs (50%), Quizzes (35%), Final project (10%), Final video (5%)
- **AI is part of course operations** - this is an experiment
- **Ethical complexity acknowledged** - using these tools isn't neutral

**Discuss CBTF assessments**: Explain the conversational assessment approach we'll be using for quizzes. Students will want to know how this works and what to expect.`,
        },
      ],
    },
    {
      type: "markdown",
      content: `---

## Turing Test Teaser`,
    },
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `Brief framing to set up self-directed learning:

> "One of the first questions in AI is: What is intelligence? How do we know if a machine is intelligent? In 1950, a mathematician named Alan Turing proposed a test. Before next class, I want you to learn about the Turing test - and here's the twist: **use AI to teach you about it.**"
>
> "Ask ChatGPT, Claude, or Gemini to explain who Turing was, what the test is, and why it matters."

This is meta - they're using AI to learn about a test designed to evaluate AI intelligence.

**Preview next Tuesday**: "We'll discuss what you learned and do our first hands-on lab with AI tools - including asking AI whether it passes the Turing test."`,
        },
      ],
    },
    {
      type: "markdown",
      content: `### Before Next Class

Use an AI tool (ChatGPT, Claude, Gemini, etc.) to learn about the **Turing test**:
- Who was Alan Turing?
- What is the Turing test?
- Why does it matter for AI?

We'll discuss what you learned next week. Next Tuesday we'll be doing an AI scavenger hunt as our first activity!`,
    },
  ],
};

export default meeting;
