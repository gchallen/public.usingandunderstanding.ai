import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-04-23",
    semester: "spring2026",
    title: "Final Project Workshop 1",
    summary:
      "Pitch your final project, get peer feedback, refine your scope, and start building.",
  },
  intro: [
    {
      type: "markdown",
      content: `# Final Project Workshop 1

## Today's Plan

Your final project is an opportunity to build something of your own design using AI. Today and in Workshop 2 (Apr 30) are the class sessions where you'll do that work. You are not expected to work on your project outside class. That means the scope of what you build has to fit into what you can finish in these two sessions.

You'll brainstorm an idea, pitch it to a partner, refine it based on their feedback, and then start building. Workshop 2 continues the build and ends with showing what you made.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** The final project is open-ended by design, which means the main risk is over-scoping. Students will want to build ambitious things; your job is to help them pick something they can actually finish in two in-class sessions. The pitch-feedback step exists specifically to pressure-test scope. Don't let students out of that stage without a concrete, narrowed idea.

The second risk is tool paralysis. Students switching between Replit, ChatGPT, and Claude without committing will lose a full session to setup. During the build stage, push them toward "pick one tool and get something running."

**Logistics:**
- Students may use whatever AI tools fit their project: Replit for code/sites, ChatGPT or Claude for text or research, creative tools for media, etc.
- Pitch partners are paired via groupKey; each person pitches and gets feedback in turn
- Refined pitches and progress links are collected via the normal submission components
- No reading, no preparation

**Pacing:**
| # | Stage | Duration | Cumulative |
|---|-------|----------|------------|
| 1 | Brainstorm Your Project | 10m | 10m |
| 2 | Pitch + Peer Feedback | 20m | 30m |
| 3 | Refine Your Proposal | 10m | 40m |
| 4 | Build / Setup | 35m | 75m |
| 5 | Progress Check-In | 5m | 80m |
| 6 | Feedback | 5m | 85m |

**Tips:**
- In brainstorm, the stuck student says "I don't know what to build." Redirect to: "What's a thing that annoys you that AI could help with?" or "What was your favorite lab this semester? Could you extend it?"
- In pitch-feedback, the key question is scope. Give students this script: "If you had two hours to build this and then had to show it, what's the smallest version that would still be interesting?" Everything else is secondary.
- In refine, make sure the revised proposal is genuinely narrower. A common failure is "I'll add one small thing to my already-too-ambitious idea." Push for cuts, not additions.
- In build, walk the room. When someone is fighting their AI tool, ask "what are you trying to make it do?" and help them re-describe it from scratch.
- In the progress check-in, the question is concrete: what's the next thing you'll do when Workshop 2 starts? Not "finish the project" — a specific next step.
- Remind students: the final project is 10% of the grade. A finished small thing will score better than a half-built big thing.`,
  activity: {
    meetingSlug: "2026-04-23-final-project-workshop-1",
    startTime: "2:00pm",
    stages: [
      // ── Stage 1: Brainstorm Your Project ──
      {
        label: "Brainstorm Your Project",
        estimatedTime: "10m",
        transition: "Pick an idea you can actually finish in two sessions",
        facilitationNotes: `Individual work. The goal is that everyone leaves this stage with *one concrete idea* they can start building. Discourage over-scoping — the best final projects will be focused, not ambitious. Remind students this is in-class only: they have about two hours of build time total across Workshop 1 and Workshop 2.

If a student is stuck, redirect: "What's something that annoys you that AI could help with?" or "Which lab this semester did you enjoy most? What would you extend?" or "If you had to make something for one specific person, who would it be?"`,
        content: [
          {
            type: "markdown",
            content: `### What do you want to build?

You have about two hours of build time across today and Workshop 2. Pick something you can actually finish in that window. A small thing that works beats a big thing that doesn't.

Some starting points:

- **Remix a lab** — take the websites lab, the data analysis lab, the study guide lab, or the creative media lab and push it further. You already know how these tools work.
- **Solve a real problem** — something that annoys you, your roommates, your study group, your club. Small and specific is good.
- **Build a tool for one person** — a personalized study guide, a project tracker, a gift recommender for your sibling, a trivia game for your friends.
- **Make something weird or fun** — a silly generator, a fake business, a tribute site, an interactive story.
- **Experiment with a new AI tool** — a personal assistant, an agent that does something for you, a custom GPT or Claude project.

You are not expected to work on this outside class. Keep the scope small.

**Write down your idea below:**`,
          },
          {
            type: "text-submission",
            id: "fpw1-rough-idea",
            label: "Your project idea:",
            prompt:
              "Briefly: what are you going to build? Who is it for, and what's the core thing it does?",
            minLines: 3,
          },
        ],
      },
      // ── Stage 2: Pitch + Peer Feedback ──
      {
        label: "Pitch + Peer Feedback",
        estimatedTime: "20m",
        transition: "Pitch your idea to your partner and give them feedback",
        facilitationNotes: `Partners take turns pitching (~5m each) and giving feedback (~5m each). The feedback question everyone should be asking is: **can this actually be built in two hours?** If the idea is too big, the partner's job is to help narrow it.

Walk the room. If you hear an over-scoped pitch, jump in: "If you had to cut this in half, what would you cut?" Model the scope question so pairs start asking it themselves.`,
        content: [],
        group: {
          id: "pitch",
          groupKey: "fpw1-pitches-2026-04-23",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Pitch Your Project

Take turns pitching to your partner. Each pitch should cover:

- **What you're building** (one sentence)
- **Who it's for** (yourself, a friend, a group you're part of, nobody in particular)
- **The smallest version that would still be interesting**
- **Which AI tool you plan to use**

Then the listener gives feedback. The main question to ask your partner: **can this actually be built in two hours?** If not, help them narrow it. What could they cut? What's the one core thing that matters most?

**Both people should pitch.** Plan on roughly 5 minutes per direction for pitching, and 5 minutes per direction for feedback.`,
            },
            {
              type: "text-submission",
              id: "fpw1-feedback-notes",
              label: "Feedback you received:",
              prompt:
                "What did your partner suggest? What will you change about your idea based on their feedback?",
              minLines: 3,
            },
          ],
        },
      },
      // ── Stage 3: Refine Your Proposal ──
      {
        label: "Refine Your Proposal",
        estimatedTime: "10m",
        transition: "Write your revised proposal",
        facilitationNotes: `Students should write a revised proposal that reflects their partner's feedback. The common failure is "I'll keep my original idea and add one small thing." Push for genuine narrowing: what got cut? Walk the room and ask students who haven't cut anything: "What's the smallest possible version of this?"`,
        content: [
          {
            type: "markdown",
            content: `### Your Refined Proposal

Based on your partner's feedback, write a revised proposal. It should be narrower than your original idea, not broader.

Cover these four things:

1. **What you're building** (one clear sentence)
2. **Who it's for**
3. **What "done" looks like at the end of Workshop 2** — what you'd show if we did a gallery next Thursday
4. **Which tool you're using** — pick one and commit to it

If your proposal doesn't feel narrower than what you wrote in stage 1, it's probably still too big. Cut more.`,
          },
          {
            type: "text-submission",
            id: "fpw1-refined-proposal",
            label: "Your refined proposal:",
            prompt:
              "What are you building, who is it for, what does 'done' look like, and which tool are you using?",
            minLines: 4,
          },
        ],
      },
      // ── Stage 4: Build / Setup ──
      {
        label: "Build / Setup",
        estimatedTime: "35m",
        softCap: "30m",
        hardCap: "37m",
        transition: "Start building your project",
        facilitationNotes: `Main work stage. Walk the room. The three common failure modes:

1. **Tool paralysis** — switching between Replit, ChatGPT, and Claude without committing. Push toward "pick one and get something working in the next ten minutes."
2. **Fighting the AI on details** — redirect to "describe what you want overall and let it rebuild."
3. **Silent struggle** — some students won't ask for help. Check in with the quiet ones.

Students submit the current state of their work (a link, a doc, a preview URL) so you can see what people are doing and revisit in Workshop 2. Anything linkable is fine — it's a checkpoint, not a finished artifact.`,
        content: [
          {
            type: "markdown",
            content: `### Build

Pick your tool and start building. You have about 35 minutes. The goal is not to finish, but to get far enough that you know exactly what you'll do first when Workshop 2 starts.

**Tool suggestions depending on your project:**

- **Websites, apps, games** — [Replit](https://replit.com) with the AI agent (you still have the promo code from the websites lab)
- **Text, documents, study materials** — [ChatGPT](https://chatgpt.com), [Claude](https://claude.ai), or a Claude Project
- **Data analysis** — ChatGPT or Claude with file upload, same tools as the data analysis lab
- **Images, audio, video** — the tools you used in the creative media lab
- **A custom assistant or agent** — Claude Projects, Custom GPTs, or any of the agent-building platforms

**Tips while you build:**

- **Describe outcomes, not code.** "I want a page that shows my reading list with tags" beats "make a div with a flexbox."
- **Iterate in small steps.** One change at a time.
- **Preview constantly.** Check what the AI actually did before giving the next instruction.
- **Re-describe when stuck.** If a chat is going sideways, stop and start over describing the whole thing fresh.

When you've got something — a link, a working preview, a document — submit it below as a checkpoint. Even if it's rough.`,
          },
          {
            type: "link-submission",
            id: "fpw1-checkpoint",
            kind: "basic",
            label: "Share a link to your work-in-progress:",
          },
        ],
      },
      // ── Stage 5: Progress Check-In ──
      {
        label: "Progress Check-In",
        estimatedTime: "5m",
        transition: "Plan your first move for Workshop 2",
        facilitationNotes: `A short planning stage. Not homework. Students write down what they'll do first when Workshop 2 starts next Thursday — a concrete next step. This is in-class planning, not a commitment to work outside class.

If students write vague things like "keep building" or "finish it," push back: "what's the first five minutes going to look like?"`,
        content: [
          {
            type: "markdown",
            content: `### Where did you get, and what's next?

You're not expected to touch this between now and Workshop 2. So the question is: when you sit down next Thursday, what's the first concrete thing you'll do?

Not "finish the project." Something specific: "add the filter button," "write the intro page," "fix the layout bug," "generate the images for the three events."`,
          },
          {
            type: "text-submission",
            id: "fpw1-next-step",
            label: "Your first move in Workshop 2:",
            prompt:
              "Where did you get today, and what's the first specific thing you'll do when Workshop 2 starts?",
            minLines: 2,
          },
        ],
      },
      // ── Stage 6: Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on today's workshop",
        content: [
          {
            type: "feedback",
            prompt:
              "How was today's workshop? Was the pitch-and-feedback step useful? Did you end up with a project scope you feel good about?",
          },
        ],
      },
    ],
  },
};

export default meeting;
