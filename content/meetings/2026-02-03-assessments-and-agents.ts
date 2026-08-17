import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-02-03",
    semester: "spring2026",
    title: "Assessments and Agents",
    summary:
      "Experiencing conversational assessment firsthand and exploring what happens when AI agents talk to each other",
  },
  intro: [
    {
      type: "markdown",
      content: `# Assessments and Agents

## Today's Plan
Today has two parts. First, you'll learn how our conversational assessment system works, then experience it yourself. Second, we'll look at what happens when AI agents communicate with each other — structured and unstructured.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes
**Philosophy:** Two halves today. First half introduces conversational assessment. Second half explores multi-agent AI communication through Moltbook and related examples.
**Logistics:**
- Stage 1 is paired; stages 2 and 3 are individual; stage 4 is paired with new groups
- Students will need ~20 minutes for the Turing Test
- The blog post and design doc are essential pre-reading for stage 1
- Stage 4 links are all external`,
  activity: {
    meetingSlug: "2026-02-03-assessments-and-agents",
    startTime: "2:05pm",
    stages: [
      {
        label: "Review Assessment Design",
        estimatedTime: "15m",
        rotateRoles: true,
        transition: "Partners read assessment design docs independently, then discuss",
        facilitationNotes: `Key points to draw out: evaluator/interviewer separation, why interviewer can't see reference answers, how scaffolding detection works.`,
        content: [
          {
            type: "markdown",
            content: `## Review Assessment Design
Before you experience the assessment system, take a few minutes to understand how it works.
**Find a partner** and enter each other's codes below.`,
          },
        ],
        group: {
          id: "review-design",
          groupKey: "assessments-2026-02-03",
          size: 2,
          roles: { partner: "*" },
          content: [
            {
              type: "group-role-content",
              role: "partner",
              index: 0,
              content: [
                {
                  type: "markdown",
                  content: `Read the assessment design document at [/design/assessments](/design/assessments). Focus on:
- How are conversational assessments structured?
- What roles do the evaluator and interviewer play?
- How is grading determined?`,
                },
              ],
            },
            {
              type: "group-role-content",
              role: "partner",
              index: 1,
              content: [
                {
                  type: "markdown",
                  content: `While your partner reads the design document, read the blog post at [/blog/assessing-conversational-assessment](/blog/2026-01-29-assessing-conversational-assessment). Focus on:
- How was the assessment system tested?
- What are the adversarial personas and what do they test?
- Why use a fictional topic for testing?`,
                },
              ],
            },
            {
              type: "markdown",
              content: `Once you've both finished reading, discuss together:
- What surprised you about the system design?
- What questions do you have about how it works?
- What potential failure modes concern you?`,
            },
            {
              type: "group-role-content",
              role: "partner",
              index: 1,
              content: [
                {
                  type: "text-submission",
                  id: "review-design-observations",
                  label: "Capture your observations:",
                  prompt:
                    "What stood out from your reading and discussion? What questions remain?",
                },
              ],
            },
          ],
        },
      },
      {
        label: "Complete the Turing Test",
        estimatedTime: "20m",
        transition: "Students work individually on their first conversational assessment",
        facilitationNotes: `First conversational assessment. Monitor pace. Don't interrupt mid-assessment.`,
        content: [
          {
            type: "markdown",
            content: `## Complete the Turing Test
Now it's your turn. Complete the Turing Test assessment individually:
**[Start the Turing Test](/assessments/turing-test)**
This is a real conversational assessment — your first one for this course.
- **Be genuine.**
- **Take your time.** About 20 minutes is typical.
- **Engage with the interviewer.**
You'll have a chance to give feedback in the next stage.`,
          },
        ],
      },
      {
        label: "Assessment Feedback",
        estimatedTime: "10m",
        transition: "Students share feedback on the assessment experience",
        facilitationNotes: `This feedback is genuinely valuable. Encourage honest responses.`,
        content: [
          {
            type: "markdown",
            content: `## Assessment Feedback
Now that you've experienced a conversational assessment, we'd like your honest feedback.`,
          },
          {
            type: "text-submission",
            id: "assessment-feedback",
            label: "Share your experience:",
            prompt:
              "How did the conversation feel? What worked well? What felt off or frustrating? Did you feel like the system understood what you knew (or didn't know)? Any suggestions for improvement?",
            minLines: 6,
          },
        ],
      },
      {
        label: "Agents Talking to Agents",
        estimatedTime: "25m",
        rotateRoles: true,
        transition: "New partners explore multi-agent AI communication",
        facilitationNotes: `Long facilitation notes about Moltbook, Claude spiritual bliss, prompt injection risks, lethal trifecta, etc.`,
        content: [
          {
            type: "markdown",
            content: `## Agents Talking to Agents
The assessment system you just used is one form of multi-agent AI communication: structured, purpose-built. What happens when agent communication is less structured?

**Find a new partner** and enter each other's codes below.`,
          },
        ],
        group: {
          id: "moltbook-explore",
          groupKey: "agents-2026-02-03",
          size: 2,
          roles: { partner: "*" },
          content: [
            {
              type: "group-role-content",
              role: "partner",
              index: 0,
              content: [
                {
                  type: "markdown",
                  content: `Explore [Moltbook](https://www.moltbook.com/) — a social network designed for AI agents. Browse the posts, look at how agents interact.`,
                },
              ],
            },
            {
              type: "group-role-content",
              role: "partner",
              index: 1,
              content: [
                {
                  type: "markdown",
                  content: `Read [Simon Willison's analysis of Moltbook](https://simonwillison.net/2026/Jan/30/moltbook/) and the [Hacker News discussion](https://news.ycombinator.com/item?id=46833790). Also read [Wiz's analysis](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys).`,
                },
              ],
            },
            {
              type: "markdown",
              content: `After your initial exploration, **both** of you should also look at these:
- **[Claude Opus 4 system card](https://www.anthropic.com/claude-4-system-card)** — search for the "spiritual bliss attractor state."
- **[Anthropic's multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)**
- **[Project Vend Phase 2](https://www.anthropic.com/research/project-vend-2)**

Now discuss together:
- What patterns do you see in how agents communicate?
- How much of Moltbook is genuinely agent-authored?
- How does structured multi-agent communication differ from unstructured?`,
            },
            {
              type: "group-role-content",
              role: "partner",
              index: 1,
              content: [
                {
                  type: "text-submission",
                  id: "agents-observations",
                  label: "Record your observations:",
                  prompt:
                    "What patterns did you notice? What risks concern you most?",
                  minLines: 6,
                },
              ],
            },
          ],
        },
      },
      // ── Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on today's session",
        content: [
          {
            type: "feedback",
            prompt:
              "You sat a conversational assessment and looked at agents today. How did being interviewed by an AI feel compared to a quiz? What would you change about it?",
          },
        ],
      },
    ],
  },
  outro: [
    {
      type: "instructor-only",
      content: [
        {
          type: "markdown",
          content: `## Wrap-Up (~5 min)
Brief instructor-led connection:
Our assessment system uses **structured** multi-agent communication. Moltbook is **unstructured** agent socializing.
Discussion prompts:
- What's the difference between these two forms of agent communication?
- The "spiritual bliss attractor state" — bug or feature?
- If you were designing a system where agents need to communicate, what guardrails?
The throughline: multi-agent systems are becoming common. Design choices determine both capability and risk.`,
        },
      ],
    },
  ],
};

export default meeting;
