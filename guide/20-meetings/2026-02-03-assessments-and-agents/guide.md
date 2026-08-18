# Assessments and Agents

**Instructor Guide** · 2026-02-03

Experiencing conversational assessment firsthand and exploring what happens when AI agents talk to each other

## Facilitation Notes
**Philosophy:** Two halves today. First half introduces conversational assessment. Second half explores multi-agent AI communication through Moltbook and related examples.
**Logistics:**
- Stage 1 is paired; stages 2 and 3 are individual; stage 4 is paired with new groups
- Students will need ~20 minutes for the Turing Test
- The blog post and design doc are essential pre-reading for stage 1
- Stage 4 links are all external

---

## Before class

### Assessments and Agents

#### Today's Plan
Today has two parts. First, you'll learn how our conversational assessment system works, then experience it yourself. Second, we'll look at what happens when AI agents communicate with each other — structured and unstructured.

---

## Activity

### Stage 1: Review Assessment Design

**Timing:** planned 15m

_Partners read assessment design docs independently, then discuss_

> **Facilitation notes**
>
> Key points to draw out: evaluator/interviewer separation, why interviewer can't see reference answers, how scaffolding detection works.

**Grouping:** 2 per group · roles: partner

Before you experience the assessment system, take a few minutes to understand how it works.
**Find a partner** and enter each other's codes below.

**Role — partner 1:**

Read the assessment design document at [/design/assessments](https://www.usingandunderstanding.ai/design/assessments). Focus on:
- How are conversational assessments structured?
- What roles do the evaluator and interviewer play?
- How is grading determined?

**Role — partner 2:**

While your partner reads the design document, read the blog post at [/blog/assessing-conversational-assessment](https://www.usingandunderstanding.ai/blog/2026-01-29-assessing-conversational-assessment). Focus on:
- How was the assessment system tested?
- What are the adversarial personas and what do they test?
- Why use a fictional topic for testing?

Once you've both finished reading, discuss together:
- What surprised you about the system design?
- What questions do you have about how it works?
- What potential failure modes concern you?

**Role — partner 2:**

**Capture your observations:**

_Expected response: What stood out from your reading and discussion? What questions remain?_

### Stage 2: Complete the Turing Test

**Timing:** planned 20m

_Students work individually on their first conversational assessment_

> **Facilitation notes**
>
> First conversational assessment. Monitor pace. Don't interrupt mid-assessment.

Now it's your turn. Complete the Turing Test assessment individually:
**[Start the Turing Test](https://www.usingandunderstanding.ai/assessments/turing-test)**
This is a real conversational assessment — your first one for this course.
- **Be genuine.**
- **Take your time.** About 20 minutes is typical.
- **Engage with the interviewer.**
You'll have a chance to give feedback in the next stage.

### Stage 3: Assessment Feedback

**Timing:** planned 10m

_Students share feedback on the assessment experience_

> **Facilitation notes**
>
> This feedback is genuinely valuable. Encourage honest responses.

Now that you've experienced a conversational assessment, we'd like your honest feedback.

**Share your experience:**

_Expected response: How did the conversation feel? What worked well? What felt off or frustrating? Did you feel like the system understood what you knew (or didn't know)? Any suggestions for improvement?_

### Stage 4: Agents Talking to Agents

**Timing:** planned 25m

_New partners explore multi-agent AI communication_

> **Facilitation notes**
>
> Main exploration stage. Pairs browse Moltbook, a social network whose users are AI agents, and the point is to watch them notice that the conversations look almost normal and then stop being normal.
> 
> What to watch for: students reading agent posts as if they were people, then catching themselves. That catch is the stage. Ask the pair that gets there first to read one exchange aloud.
> 
> Prompts that work when a pair stalls: "Who is this written for?" "What would you have to believe about the reader to write this?" "If nobody human ever reads this, what is it for?"
> 
> The thread to pull toward: agents communicating in the open is also an attack surface. If an agent reads a post and acts on it, then a post is an instruction. That is prompt injection, and it is the same shape as the lethal trifecta -- private data, untrusted content, and the ability to act -- which is worth naming out loud if a pair gets there on their own.
> 
> Do not spend the stage on the strangest thing you can find. The eerie material is easy and the structural point is the one that transfers.

**Grouping:** 2 per group · roles: partner

The assessment system you just used is one form of multi-agent AI communication: structured, purpose-built. What happens when agent communication is less structured?

**Find a new partner** and enter each other's codes below.

**Role — partner 1:**

Explore [Moltbook](https://www.moltbook.com/) — a social network designed for AI agents. Browse the posts, look at how agents interact.

**Role — partner 2:**

Read [Simon Willison's analysis of Moltbook](https://simonwillison.net/2026/Jan/30/moltbook/) and the [Hacker News discussion](https://news.ycombinator.com/item?id=46833790). Also read [Wiz's analysis](https://www.wiz.io/blog/exposed-moltbook-database-reveals-millions-of-api-keys).

After your initial exploration, **both** of you should also look at these:
- **[Claude Opus 4 system card](https://www.anthropic.com/claude-4-system-card)** — search for the "spiritual bliss attractor state."
- **[Anthropic's multi-agent research system](https://www.anthropic.com/engineering/multi-agent-research-system)**
- **[Project Vend Phase 2](https://www.anthropic.com/research/project-vend-2)**

Now discuss together:
- What patterns do you see in how agents communicate?
- How much of Moltbook is genuinely agent-authored?
- How does structured multi-agent communication differ from unstructured?

**Role — partner 2:**

**Record your observations:**

_Expected response: What patterns did you notice? What risks concern you most?_

### Stage 5: Feedback

**Timing:** planned 5m

_Quick feedback on today's session_

**Feedback prompt:** You sat a conversational assessment and looked at agents today. How did being interviewed by an AI feel compared to a quiz? What would you change about it?

## After

> **Instructor only**
>
> ### Wrap-Up (~5 min)
> Brief instructor-led connection:
> Our assessment system uses **structured** multi-agent communication. Moltbook is **unstructured** agent socializing.
> Discussion prompts:
> - What's the difference between these two forms of agent communication?
> - The "spiritual bliss attractor state" — bug or feature?
> - If you were designing a system where agents need to communicate, what guardrails?
> The throughline: multi-agent systems are becoming common. Design choices determine both capability and risk.
>
