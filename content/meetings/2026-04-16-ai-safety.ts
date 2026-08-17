import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-04-16",
    semester: "spring2026",
    title: "AI Safety, Alignment, and Governance",
    summary:
      "Pair discussion of who controls how AI behaves: companies, governments, or something else",
  },
  intro: [
    {
      type: "markdown",
      content: `# AI Safety, Alignment, and Governance

## Before Class

You should **read all four articles** before today's discussion:`,
    },
    {
      type: "reading-link",
      slug: "anthropic-and-donald-trump-s-dangerous-alignment-problem-newyorker-fcb1",
      newTab: true,
    },
    {
      type: "reading-link",
      slug: "the-dissonance-of-anthropic-ceo-dario-amodei-theatlantic-e868",
      newTab: true,
    },
    {
      type: "reading-link",
      slug: "i-m-glad-the-anthropic-fight-is-happening-now-dwarkesh-200f",
      newTab: true,
    },
    {
      type: "reading-link",
      slug: "openai-is-opening-the-door-to-government-spying-theatlantic-4a9d",
      newTab: true,
    },
    {
      type: "markdown",
      content: `Please complete the preparation conversation below before class.
This is part of attendance for today's meeting.`,
    },
    { type: "preparation-chat", slug: "ai-safety" },
    {
      type: "markdown",
      content: `---

## Today's Plan

On Tuesday you explored how human preferences get baked into AI through the training process: RLHF raters rank outputs, and the model learns to produce what humans prefer. Today we ask a harder question: who gets to decide what those preferences should be? The readings show this playing out in real time. Anthropic drew red lines about how Claude could be used. The Pentagon punished them for it. OpenAI signed the deal instead. Four rounds of paired discussion, each with a different partner and a different angle on the alignment problem.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** Four rounds of paired discussion moving from concept (what is alignment?) to case study (the Anthropic dilemma) to policy (government and AI) to synthesis (what would you do?). The readings are unusually timely and politically charged. Students will have strong opinions. The goal is not consensus but clarity: can they articulate the tradeoffs rather than just picking a side? Tuesday's training lifecycle session is the technical foundation. Students now know that the "values" in AI come from specific human choices during RLHF. Today's question: whose choices should those be?

**Logistics:**
- Four discussion rounds with new partners each time (same groupKey for partner rotation)
- Each round has a 10-minute discussion followed by a 10-minute share-out
- No roles. One partner should capture key points in the TextSubmission each round
- Rounds 2 and 4 include agent-guided interaction
- The share-out stages are instructor-led: ask 2-3 pairs to share, then connect to the next round's theme

**Pacing:**
| Stage | Duration | Cumulative |
|-------|----------|------------|
| Round 1: What Is Alignment? | 10m | 10m |
| Round 1: Share Out | 10m | 20m |
| Round 2: The Anthropic Dilemma | 10m | 30m |
| Round 2: Share Out | 10m | 40m |
| Round 3: Government and AI | 10m | 50m |
| Round 3: Share Out | 10m | 60m |
| Round 4: Who Decides? | 10m | 70m |
| Round 4: Share Out | 10m | 80m |

**Tips:**
- Round 1 connects directly to Tuesday's RLHF session. Students already know that AI values come from human rater preferences. Now push: whose preferences? The RLHF raters? The CEO? The government?
- Round 2 is where the readings come alive. Students will likely side with Anthropic. Use Dwarkesh's argument to complicate that: the government can't let a private company have a kill switch on military technology.
- Round 3 is about the OpenAI contract. The key detail: legal experts say the contract language likely allows mass surveillance despite public assurances. Push students to engage with the gap between corporate promises and legal reality.
- Round 4 is the hardest. There is no clean answer to "who should govern AI." Help students sit with that difficulty rather than forcing a resolution. The best outcome is students who can articulate why each option has serious problems.
- These readings are politically charged. Some students may have strong feelings about the current administration. Keep the focus on structural questions (who controls AI?) rather than partisan positions.`,
  activity: {
    meetingSlug: "2026-04-16-ai-safety",
    startTime: "2:00pm",
    stages: [
      // ── Round 1: What Is Alignment? ──
      {
        label: "Round 1: What Is Alignment?",
        estimatedTime: "10m",
        transition: "Partners discuss what alignment means and whose values get encoded",
        facilitationNotes: `This round grounds the concept of alignment in what students already know. On Tuesday they saw how RLHF works: human raters rank outputs, and the model learns to prefer what they prefer. Alignment is the broader version of that question: not just "which output is better?" but "better for whom, by whose standards, and who decides?"

The New Yorker article introduces the "soul doc," Anthropic's internal document describing how Claude should behave. This is alignment in practice: a company writing down values and training a model to follow them. But those values are Anthropic's values. They chose "diplomatically honest rather than dishonestly diplomatic." They chose that Claude shouldn't deny the Holocaust or climate change. Those seem obvious, but someone had to make those decisions. Who should that someone be?`,
        content: [],
        group: {
          id: "round-1",
          groupKey: "ai-safety-2026-04-16",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### What Is Alignment?

On Tuesday you saw how RLHF works: human raters compare model outputs and pick the "better" one. The model learns to produce responses that humans prefer. But who decides what "better" means?

The New Yorker article describes Anthropic's "soul doc," an internal document that lays out how Claude should behave. Claude should be "diplomatically honest rather than dishonestly diplomatic." It should acknowledge the Holocaust and climate change. It should exercise judgment, not just follow orders. These seem like reasonable values. But *someone at Anthropic wrote them down and trained a model to follow them.*

**Discuss with your partner:** What does "alignment" mean? On Tuesday you ranked AI outputs and experienced how subjective "better" is. Now scale that up: a company is deciding the values for an AI used by millions of people. Is that different from what the RLHF raters do, or is it the same problem at a bigger scale? Whose values should AI be aligned with? The company that built it? The government? The users? Some universal standard? Is there such a thing?`,
            },
            {
              type: "text-submission",
              id: "round-1-notes",
              label: "Capture your key points:",
              prompt:
                "What did you and your partner discuss? Where did you agree or disagree?",
            },
          ],
        },
      },
      // ── Round 1: Share Out ──
      {
        label: "Round 1: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask 2-3 pairs to share. Listen for whether students see alignment as a technical problem (how do you train the model?) or a political problem (who gets to decide the values?). The answer is both, and that's the tension the rest of the session explores. Bridge to Round 2: "You've identified the alignment problem in the abstract. Now let's see what happens when it collides with real-world power."`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 2: The Anthropic Dilemma ──
      {
        label: "Round 2: The Anthropic Dilemma",
        estimatedTime: "10m",
        transition: "New partners discuss Anthropic's position and the safety-commerce tension",
        facilitationNotes: `This round centers on the case study at the heart of the readings. Anthropic set red lines. The government punished them. OpenAI took the deal. Students will likely sympathize with Anthropic, and that's fine, but push them to engage with Dwarkesh's argument: the government has a legitimate concern about depending on a private company that can unilaterally restrict military technology.

The Manhattan Project comparison from the Atlantic piece is powerful. Amodei compares himself to nuclear scientists. But those scientists built the bomb and then watched it be used in ways they didn't choose. Is Amodei's story heading the same way?`,
        content: [],
        group: {
          id: "round-2",
          groupKey: "ai-safety-2026-04-16",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### The Anthropic Dilemma

Anthropic put red lines in its Pentagon contract: Claude would not be used for fully autonomous weapons or domestic mass surveillance. The Pentagon accepted those terms initially. Then Defense Secretary Hegseth declared Anthropic a supply chain risk, threatening the company's commercial relationships across the entire defense industry, because Anthropic refused to remove the restrictions.

Meanwhile, Dario Amodei published "Machines of Loving Grace," a 15,000-word utopian vision of AI curing diseases and doubling human lifespans. He also compares AI development to the Manhattan Project and believes it could be more dangerous than nuclear weapons. He thinks the "right people" need to be in control.

Dwarkesh Patel argues both sides have a point: the government can't let a private company hold a kill switch on military technology, but Anthropic can't be forced to abandon its values.

**Discuss with your partner:** Did Anthropic make the right call by refusing to remove its red lines? Did the government overreact, or was declaring a supply chain risk a reasonable response? Amodei compares himself to Manhattan Project scientists. But those scientists lost control of the bomb. What does that parallel suggest about Anthropic's chances of maintaining its principles? Is "responsible scaling" a real strategy or a contradiction in terms?`,
            },
            {
              type: "group-chat",
              slug: "ai-safety-anthropic-dilemma",
            },
          ],
        },
      },
      // ── Round 2: Share Out ──
      {
        label: "Round 2: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask pairs to share where they came down on Anthropic's decision. A good probe: "Did anyone find themselves defending the government's position even though they didn't want to?" Bridge to Round 3: "Anthropic said no. OpenAI said yes. Let's look at what OpenAI actually agreed to."`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 3: Government and AI ──
      {
        label: "Round 3: Government and AI",
        estimatedTime: "10m",
        transition: "New partners discuss government access to AI systems",
        facilitationNotes: `This round shifts from Anthropic's story to the broader policy question. The OpenAI article is the key reading here. The critical detail: legal experts analyzed the contract and found that the "red lines" OpenAI claims to have secured may not actually prevent mass surveillance or autonomous weapons use. The gap between public assurances and legal reality is the teaching moment.

Push students past "the government shouldn't spy on people" to structural questions: who verifies what the government does with AI? What transparency exists? How is this different from other surveillance technologies?`,
        content: [],
        group: {
          id: "round-3",
          groupKey: "ai-safety-2026-04-16",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Government and AI

After Anthropic was sidelined, OpenAI signed the Pentagon deal. Sam Altman said he would seek the same red lines Anthropic demanded: no mass surveillance, no autonomous lethal weapons.

But legal experts who analyzed the contract found the lines are blurry. Several told The Atlantic that, legally, the Pentagon can likely use OpenAI's technology for mass surveillance of Americans. The military also has a pathway to use it in autonomous weapons. One expert said OpenAI appears "okay with using ChatGPT for what ordinary people think of as mass surveillance."

Outside OpenAI's headquarters, protesters wrote on the sidewalk in chalk: "Stand for liberty. Please no legal mass surveillance."

**Discuss with your partner:** Should AI companies be allowed to sell their technology to the military? If yes, what restrictions should apply, and who enforces them? The OpenAI contract shows that "red lines" can be drawn in ways that look protective but legally aren't. How do you solve the transparency problem when the contracts involve classified information? Is there a meaningful difference between the government using AI for surveillance versus using older surveillance technologies?`,
            },
            {
              type: "text-submission",
              id: "round-3-notes",
              label: "Capture your key points:",
              prompt:
                "What did you and your partner discuss? Where did you agree or disagree?",
            },
          ],
        },
      },
      // ── Round 3: Share Out ──
      {
        label: "Round 3: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask pairs to share. Listen for whether students see AI surveillance as categorically different from existing surveillance. Bridge to Round 4: "You've seen the problem: companies can't be trusted to self-regulate, and governments can't be trusted with unchecked access. So who should decide?"`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 4: Who Decides? ──
      {
        label: "Round 4: Who Decides?",
        estimatedTime: "10m",
        transition: "New partners discuss governance structures for AI",
        facilitationNotes: `The synthesis round. Students have seen that companies can't fully self-regulate (OpenAI's blurry red lines) and governments can't be trusted with unchecked power (surveillance concerns). So what's the alternative?

This is intentionally hard. There is no clean answer. The best outcomes are students who can articulate why each option (company self-regulation, government oversight, international bodies, open source, user choice) has serious problems. Push for specifics: not "someone should regulate AI" but "here's what the regulator would actually look like."`,
        content: [],
        group: {
          id: "round-4",
          groupKey: "ai-safety-2026-04-16",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### Who Decides?

You've now seen the alignment problem from multiple angles. Companies like Anthropic try to self-regulate, but they can be overruled by governments. Governments demand access, but they may use AI for surveillance. Contracts are negotiated behind closed doors with limited public transparency.

Dwarkesh argues that within 20 years, most government and military labor could be AI. Who controls that workforce will be one of the most important questions of the century.

**Discuss with your partner:** If you were designing a governance system for AI from scratch, what would it look like? Consider several options: company self-regulation (what we have now), government regulation (which government?), an international body (can it be enforced?), open-source AI (no one controls it), or something else entirely. What are the tradeoffs of each? What would you actually propose? Be specific: who sits on the oversight body? What powers do they have? How do you enforce the rules across borders?`,
            },
            {
              type: "group-chat",
              slug: "ai-safety-who-decides",
            },
          ],
        },
      },
      // ── Round 4: Share Out ──
      {
        label: "Round 4: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Last share-out. Listen for the range of governance proposals. A good closing observation: the readings show alignment isn't a technical problem that engineers solve once. It's an ongoing political negotiation about power, values, and trust. The companies building AI, the governments using it, and the public affected by it all have legitimate but conflicting interests. There may not be a clean solution, and that's exactly why the conversation matters.

Forward look: "Next time we'll shift from who controls AI to where AI itself is heading. You've spent the semester learning how current AI works. On Tuesday we'll explore what comes next."`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on today's activity",
        content: [
          { type: "feedback", prompt: "What worked well today? What would you change?" },
        ],
      },
    ],
  },
};

export default meeting;
