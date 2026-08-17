import type { MeetingDefinition } from "../types";

const meeting: MeetingDefinition = {
  frontmatter: {
    date: "2026-04-28",
    semester: "spring2026",
    title: "Human Flourishing in an Age of AI",
    summary:
      "Pair discussion on what makes us human, what AI changes, and what AGI would change if it arrives",
  },
  intro: [
    {
      type: "markdown",
      content: `# Human Flourishing in an Age of AI

> **Sign up for the End-of-Semester Quiz.** Our first and last CBTF quiz runs **Wednesday April 29 through Friday May 1**. Visit the [Assessments page](/assessments) to enroll on PrairieTest (one-time) and reserve a session.

## Before Class

You should **read all three articles** before today's discussion:`,
    },
    {
      type: "reading-link",
      slug: "the-human-skill-that-eludes-ai-theatlantic-4842",
      newTab: true,
    },
    {
      type: "reading-link",
      slug: "who-cares-if-ai-brings-down-the-economy-theatlantic-dc39",
      newTab: true,
    },
    {
      type: "reading-link",
      slug: "michael-pollan-punctures-the-ai-bubble-theatlantic-a862",
      newTab: true,
    },
    {
      type: "markdown",
      content: `Please complete the preparation conversation below before class.
This is part of attendance for today's meeting.`,
    },
    { type: "preparation-chat", slug: "human-flourishing" },
    {
      type: "markdown",
      content: `---

## Today's Plan

Last Tuesday we explored where AI is heading: mixture of experts, local models, specialization. We closed by flagging the biggest open question (AGI) for today. Three rounds of paired discussion, each with a different partner. The first asks what humans can still do that AI can't. The second asks what flourishing means when the economy is increasingly built around AI. The third pulls those threads together with the AGI question we deferred from last week.

---`,
    },
  ],
  facilitationOverview: `## Facilitation Notes

**Philosophy:** Three rounds of paired discussion that build toward the AGI synthesis cut from Apr 21. Round 1 (Sun) anchors in something concrete and small: writing. Round 2 (Shroff) widens to the economy that AI development is reshaping. Round 3 (Pollan) is the synthesis: he argues that AI's grandest promises rest on misunderstanding consciousness, which connects directly to the AGI question. The semester arc is intentional: students now have the technical foundations (next-token prediction, RLHF, scaling laws, MoE) to evaluate AGI claims rather than just react to them. The goal is not to settle whether AGI is coming but to give students sharper tools to think about flourishing in either case.

**Logistics:**
- Three discussion rounds with new partners each round (same groupKey for partner rotation)
- Each round: 10-minute discussion followed by a 10-minute share-out
- One partner per round captures key points (text-submission in Round 1; group-chat saves the conversation automatically in Rounds 2 and 3)
- Round 2 and Round 3 include agent-guided group chats
- Share-outs are instructor-led: ask 2-3 pairs to share, then bridge to the next round

**Pacing:**
| Stage | Duration | Cumulative |
|-------|----------|------------|
| Round 1: What Eludes AI? | 10m | 10m |
| Round 1: Share Out | 10m | 20m |
| Round 2: The Economy We Want | 10m | 30m |
| Round 2: Share Out | 10m | 40m |
| Round 3: AGI and What Makes Us Human | 10m | 50m |
| Round 3: Share Out + Closing | 10m | 60m |
| Feedback | 5m | 65m |

(65m of content + 5m buffer fits the 70m Tuesday window.)

**Tips:**
- Round 1 (Sun) is the warmest entry point. Most students have used ChatGPT to write something and noticed it sounds off. The Atlantic article gives them language for that intuition: RLHF flattens, the "specificity of a life" can't be faked. Push past "AI can't be creative" into the more interesting question: what would it take? Sun ends with Yu's line, "Maybe you need a model that lives a life, and can almost die." Worth surfacing.
- Round 2 (Shroff) is where the readings get political. The "good bubble" framing will sound reasonable to some students and infuriating to others. The key probe is the article's closing line: "A bubble is good only if you're the one who wins." Push students to identify *who*, specifically, bears the cost of an AI bust. The $35T figure is shocking; so is the comparison of OpenAI's valuation to Toyota + Coca-Cola + Disney combined.
- Round 3 (Pollan) is the synthesis and the AGI loop-closer. Pollan's strongest argument is that the grandest AI claims rest on misunderstanding consciousness: "106 competing hypotheses, comprising 22 physicalist accounts and no fewer than 84 non-physicalist theories... a pretty good indication that the field is flailing." Tie this to the technical foundations students already have: next-token prediction, MoE, RLHF. None of those mechanisms address consciousness. Then push the AGI question both ways: if AGI does arrive, what does flourishing look like? If it doesn't, what is already at stake? The Round 3 share-out is the meeting's wrap-up; close the AGI loop explicitly.
- These articles are politically warmer than they appear. Pollan in particular ties the AI bubble to "the recent marriage of big tech and right-wing politics." Some students will embrace that framing, others will resist it. Keep the focus on the structural argument (what is AI optimized for, and who benefits) rather than partisan positions.
- Forward look at the very end: Thursday is Final Project Workshop 2. Today's question (what does AI change about being human?) sits underneath every project they're shipping.`,
  activity: {
    meetingSlug: "2026-04-28-human-flourishing",
    startTime: "2:00pm",
    stages: [
      // ── Round 1: What Eludes AI? ──
      {
        label: "Round 1: What Eludes AI?",
        estimatedTime: "10m",
        transition: "Partners discuss what humans can still do that AI cannot",
        facilitationNotes: `This round grounds the meeting in something students have all noticed: AI writing sounds off. Sun's article gives them precise language for it. The post-training process that makes models "helpful, honest, harmless" also flattens them. Voice comes from the specificity of a life — and LLMs cannot live, feel, smell, taste, sense.

Students may want to debate whether AI *could* eventually write well. That is fine, but push toward the more concrete question: what would it actually take? Sun closes with the AI start-up co-founder's answer: "Maybe you need a model that lives a life, and can almost die." That line bridges to Round 3, so flag it for the share-out.

Connect back to Apr 7 (RLHF). Students saw that human raters compare outputs and the model learns to prefer what they prefer. Sun shows where that breaks: a contractor was rating fan fiction on its "factuality" and rating responses with three exclamation points higher because the rubric said so. The same machinery that makes AI useful makes it conventional.`,
        content: [],
        group: {
          id: "round-1",
          groupKey: "human-flourishing-2026-04-28",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### What Eludes AI?

Sam Altman has said that future models, even an eventual GPT-6 or GPT-7, might be able to produce only something equivalent to "a real poet's okay poem." That is a strange admission: the same companies that promise AGI within a decade also concede they cannot reliably write well.

Sun's article walks through why. The post-training process that makes AI "helpful, honest, and harmless" — the same RLHF process you saw on Apr 7 — also flattens model outputs into what one researcher called "rule-following teacher's pets." A Scale AI contractor described rating responses with three exclamation points higher because the rubric said so. Another was asked to grade fan fiction on its "factuality." When you optimize a model to avoid mistakes across a thousand criteria, you get prose that sounds like a nervous job applicant, not a person with a voice.

Sun's deeper claim is that voice itself comes from "the specificity of a life." LLMs have read billions of words about sunsets and heartbreak, but they have never felt them. James Yu of Sudowrite tells her: "Maybe you need a model that lives a life, and can almost die."

**Discuss with your partner:** Sun lists writing as the holdout — the human capacity that has resisted AI most stubbornly. What would you put on that list? Be specific. What can humans do that AI cannot, and is that gap durable or just temporary? Push past "AI can't be creative." If a future model could be unhobbled from the strictures of post-training, would Sun's argument still hold? Or is there something about being a body in the world that no amount of compute can substitute for?`,
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
        facilitationNotes: `Ask 2-3 pairs to share. Listen for two things: (1) whether students think the gap Sun identifies is temporary or durable, and (2) what other capacities they put on the "AI-resistant" list. Bridge to Round 2: "Sun's argument is that AI cannot live a life. But the people building AI live in a very specific economy, and the bets they are placing affect everyone else's lives. Let's look at that."`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 2: The Economy We Want ──
      {
        label: "Round 2: The Economy We Want",
        estimatedTime: "10m",
        transition: "New partners discuss the AI bubble and who pays if it bursts",
        facilitationNotes: `This round shifts from "what is AI" to "what is AI doing to the world we live in." Shroff's framing is intentionally provocative: bubble defenders argue that even disasters like the dot-com crash were worth it because they left fiber-optic cables behind. Students who have not thought about this will likely accept the analogy. Push them: data center chips become obsolete in years, not decades like rail or fiber. The "infrastructure left behind" argument is weaker than it looks.

The article's closing line is the strongest probe: "A bubble is good only if you're the one who wins." Ask students who, specifically, wins and loses. The Zuckerberg quote — "If Meta ends up misspending a couple of hundred billion dollars, I think that that is going to be very unfortunate, obviously" — only makes sense if you have a couple of hundred billion to misspend. Most students do not.

The agent-guided chat is here so students can wrestle with the uncomfortable parts: that AI development might genuinely accelerate scientific progress AND wipe out trillions in retirement accounts. Both can be true. The interesting question is who decides the trade is worth it.`,
        content: [],
        group: {
          id: "round-2",
          groupKey: "human-flourishing-2026-04-28",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### The Economy We Want

OpenAI is currently worth more than Toyota, Coca-Cola, and Disney combined. This year, Big Tech plans to spend roughly **$650 billion** on AI infrastructure — about eight times the entire annual budget of the U.S. Department of Education. Bubble defenders argue this is fine: even if the AI bubble bursts and wipes out an estimated $35 trillion in global wealth, the fiber-optic cables and data centers and trained engineers it leaves behind will benefit everyone in the long run. "Stop trying to make bubbles go away," one entrepreneur wrote. "The benefits of innovation outweigh the costs of volatility."

Shroff is not so sure. The dot-com crash *did* leave fiber-optic cables that lasted decades. Computer chips, by contrast, become obsolete fast. And the people losing money in a bust are not the same people who profited from the boom. Mark Zuckerberg can shrug off "misspending a couple of hundred billion dollars." A retiree whose 401(k) gets cut in half cannot. As Shroff puts it: "A bubble is good only if you're the one who wins."

**Discuss with your partner:** Is the "good bubble" argument convincing? Be specific about who benefits and who pays. If the AI build-out continues at this scale and produces real breakthroughs (faster scientific discovery, cheaper medicine, productivity gains), is that worth a financial collapse that hurts people who never benefited from the boom? What does flourishing mean if your job, your savings, or your industry is the one that gets hollowed out for the sake of the long-run upside? Is there a way to capture the upside of AI without the bubble?`,
            },
            {
              type: "group-chat",
              slug: "human-flourishing-economy",
            },
          ],
        },
      },
      // ── Round 2: Share Out ──
      {
        label: "Round 2: Share Out",
        estimatedTime: "10m",
        transition: "Class reconvenes to share observations",
        facilitationNotes: `Ask pairs to share. Listen for whether students engaged with the asymmetry of who profits and who pays, or whether they stayed at the level of "bubbles bad / bubbles good." A useful probe: "Did anyone find themselves persuaded by the bubble defenders? What argument was hardest to dismiss?"

Bridge to Round 3: "Shroff describes what AI is doing to the economy right now. Pollan asks something even bigger: whether the grandest claims about AI — including AGI — rest on a misunderstanding of what humans actually are. That is where we left off last Tuesday."`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Round 3: AGI and What Makes Us Human ──
      {
        label: "Round 3: AGI and What Makes Us Human",
        estimatedTime: "10m",
        transition: "New partners synthesize the readings with the AGI question deferred from Apr 21",
        facilitationNotes: `The synthesis round, and the meeting's payoff. This is where the AGI question deferred from Apr 21 actually gets discussed, alongside what is arguably the strongest skeptical argument students will encounter all semester.

Pollan's claim is sharp: 500 years of science have dethroned humans from the center of the universe (Copernicus), the natural world (Darwin), and the command of our own minds (Freud), but consciousness has resisted every assault. There are 106 competing hypotheses of consciousness — 22 physicalist, 84 non-physicalist — which Pollan dryly calls "a pretty good indication that the field is flailing." He cites the finding that a single cortical neuron can do what an entire deep neural network can do. He notes that "feeling precedes computation" as a condition of consciousness — and that the "higher" capabilities (reason, language) are the ones machines have found *easier* than the "elemental" ones (feeling, emotion).

The AGI bridge: students just spent a semester learning the actual mechanisms behind LLMs. None of them — next-token prediction, RLHF, embeddings, MoE, scaling laws — say anything about consciousness. So when AI executives talk about AGI, what exactly are they promising? And whatever they are promising, is it the thing that would matter for human flourishing?

Push the question both ways. If AGI does arrive (whatever that means), what does flourishing look like? If it does not, what is *already* changing about flourishing because of the bet being placed? Pollan's answer is that AI is "fundamentally" reshaping things either way, because the chieftains of AI "reject humanism not because it is anti-scientific, but because it is anti-business; workers are expensive."

The agent-guided chat is here because this is the hardest synthesis of the semester. Students should leave with sharper tools, not a cleaner answer.`,
        content: [],
        group: {
          id: "round-3",
          groupKey: "human-flourishing-2026-04-28",
          size: 2,
          autoComplete: false,
          content: [
            {
              type: "markdown",
              content: `### AGI and What Makes Us Human

Last Tuesday closed with a flag: efficiency (MoE), access (local models), and focus (specialization) are all directions for *narrow* AI. The biggest question — AGI — got deferred to today.

Pollan helps us ask it sharply. His argument is that 500 years of scientific progress have dethroned humans from the center of the universe, then the natural world, then the command of our own minds — but consciousness has resisted every assault. There are 106 competing hypotheses of consciousness today. Pollan calls that "a pretty good indication that the field is flailing." He notes that **feeling precedes computation**. The "higher" capabilities we used to think of as uniquely human — reason, language — turn out to be the ones machines find *easier*. The "elemental" capacities we share with animals — feeling, emotion — are the ones they cannot touch. He quotes a striking finding: a single cortical neuron can do what an entire deep artificial neural network can do.

Sam Altman says AGI is coming and will fix the climate, establish space colonies, and discover all of physics. Pollan thinks the chieftains of AI are not even close, because they are trying to leap a chasm whose width they have not measured. He also thinks they know this and do not care: "Computing began as a scientific revolution, but these days it is primarily, exhaustingly, an economic one, wrapped in an aura of utopian mysticism."

**Discuss with your partner:** Pull the threads together. Sun says voice comes from the specificity of a life. Shroff says the AI build-out is reshaping the economy whether or not it works. Pollan says the AGI promise rests on a misunderstanding of consciousness. **If AGI does arrive — whatever that means — what does human flourishing look like? If it does not, what is already at stake?** Use what you learned this semester (next-token prediction, RLHF, scaling, MoE): do those mechanisms add up to something like a mind, or is Pollan right that the field is "flailing"? And does it matter? Pollan's claim is that the bet being placed is reshaping our world either way.`,
            },
            {
              type: "group-chat",
              slug: "human-flourishing-agi-synthesis",
            },
          ],
        },
      },
      // ── Round 3: Share Out + Closing ──
      {
        label: "Round 3: Share Out + Closing",
        estimatedTime: "10m",
        transition: "Class reconvenes; Geoff closes the AGI loop and the semester arc",
        facilitationNotes: `The meeting's wrap-up. Ask 2-3 pairs to share what they discussed in the synthesis round, then close the AGI loop explicitly:

"Last Tuesday we ended with three directions in narrow AI — efficiency, access, focus — and a fourth bigger question deferred to today. You now have the answer, sort of: the AGI question is unsettled because consciousness is unsettled. The mechanisms you learned this semester are powerful but they don't reach the thing Pollan is pointing at. That doesn't mean AGI isn't coming — nobody knows. It does mean you should be skeptical of anyone who tells you they know either way.

What you can know: the bet is being placed at a scale that affects every job, every economy, every life in this country, and you are stepping into a workforce shaped by it. The most useful thing this course can give you is sharper tools for thinking about that, not a cleaner answer."

Forward look: "Thursday is Final Project Workshop 2. You'll keep building. Today's question — what does AI change about being human — sits underneath every project you ship. Bring it with you."`,
        content: [
          {
            type: "markdown",
            content: `### Share Out

Geoff will ask a few pairs to share what they discussed. Listen for ideas that challenge or extend your own thinking.`,
          },
        ],
      },
      // ── Feedback ──
      {
        label: "Feedback",
        estimatedTime: "5m",
        transition: "Quick feedback on today's activity",
        content: [
          {
            type: "feedback",
            prompt:
              "Which round generated the most interesting discussion? What would you have wanted more time to explore?",
          },
        ],
      },
    ],
  },
};

export default meeting;
