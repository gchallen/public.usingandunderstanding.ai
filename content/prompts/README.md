# Using these prompts with any chatbot

The original course ran these through a purpose-built system with a second AI watching the conversation and tracking progress. You do not need that. The group-discussion prompts are self-contained: paste one in and it runs.

The preparation prompts need one more thing: the reading itself, pasted in alongside the prompt. You are already giving students the article, however you do that, so tell them to paste that same text in when the prompt asks for it. This kit does not carry article text, because most of the readings are paywalled and they are not ours to redistribute.

Pasted alone, without the article, a chatbot will hold a fluent and entirely convincing conversation about something nobody has read. The prompts refuse to start until the text appears, which is the guard, but the reason they can refuse is that you supplied the reading in the first place.

Budget the conversation at twenty-five to forty minutes on top of the reading itself.

This is the middle tier of adoption. If your students have a chatbot, use these rather than the paper substitutes—the paper patterns exist for rooms where nobody does.

## Preparation prompts

`preparations/` holds one prompt per discussion meeting. Each is a guided conversation about an assigned reading, done before class.

**To use one:** give the student the prompt body and the reading. They paste both into a chatbot and work through the conversation until they can discuss every topic listed.

**What the frontmatter is for.** The `topics` block lists what the conversation should cover, each with observable criteria. Those criteria are useful three ways:

- as the prompt's own definition of done
- as a printed study guide, though read them first: several name the specifics they are asking about, so handing them out before the reading gives away the article's own examples
- as the reading ticket questions in the paper version

**What you lose without the original system.** It tracked each criterion as not engaged, discussed, or ready, and would not let a student finish early. A plain chatbot will happily agree that a student is ready when they are not. If completion matters to you, collect something written afterward.

## Group discussion prompts

`group-chats/` holds one prompt per in-class discussion. These facilitate a small group rather than an individual.

**To use one:** one student in each group opens a chatbot, pastes the prompt, and the group talks to it together. Two or three students per group.

Read the prompt before assigning it. Most of them instruct the AI to push students toward talking to each other rather than typing at it, and to suggest pausing the chat to talk out loud. That is intended. If your groups end up talking to each other and ignoring the chatbot, the prompt is working.

**What the objectives are for.** The `objectives` block lists what the discussion should reach, with criteria written as observable statements. Print them as a checklist even if you use the chatbot—it gives the group something to steer by.

**What you lose.** The original ran a second AI that watched the transcript, tracked who was talking, and told the facilitator when to intervene. In particular it enforced participation balance: no student above sixty percent of the messages. A single chatbot will not do that. Watch for it yourself, or use the rotating chair role from the Structured Role Discussion pattern, which solves the same problem with a person.

## Adapting a prompt

If you change the reading, rewrite the prompt. The topics and criteria refer to specific claims in specific articles, and a prompt pointed at the wrong reading will confidently discuss something the student did not read.

The `model` field records what the original used. Ignore it unless you are reproducing results.

### What each part is doing, and why

Read this before you rewrite one, and before you build a nicer version of it in
some other form. Most of the structure is doing work that is not
obvious, and every piece of it is there because the obvious version failed.

**The refusal at the top.** The prompt will not start until the reading is in
the conversation. This looks like pedantry and is not. The failure it prevents
is silent: a model with no article in front of it does not say so, it
improvises, and the student comes away fluent about an argument they never met
and sometimes carrying a quotation that does not exist. A conversation that
stops and asks is the only version of this that fails loudly.

**The background section, marked do not relay.** Each prompt carries a summary
of the reading so the model can steer the conversation: know what the good
objections are, notice when a student has missed the central move. That summary
is also, unavoidably, good enough to teach from. If you leave it unmarked the
model will simply deliver it, the student will nod along, and the reading
becomes optional. Keep the summary, keep the instruction that it is background
and not content to hand over.

**Ask before you explain.** On each topic the model asks what the student
remembers before it supplies anything. This is the difference between finding
out what someone understood and telling them what they should have understood.
It is also the only thing that makes the criteria mean anything, because a
criterion met after the model said it first has measured nothing.

**Agreement is not evidence.** Mirroring is what a student does when they have
not read: they hand your own sentence back with "yeah, exactly". The prompt is
told not to accept it and to ask for something it has not said.

**The certification rule.** Never tell a student they are prepared unless they
told you something you had not told them first. One sentence, and it is the
whole test. If you rewrite everything else, keep this.

**The topics and criteria.** Observable statements, not topics to cover. They
are the definition of done for the conversation, the study guide if you drop the
chatbot entirely, and the reading ticket questions in the paper version. Write
them so someone could check them from a transcript.

### If you build something better

The original ran these through purpose-built software with a second AI watching
the transcript, tracking each criterion as not engaged, discussed, or ready, and
refusing to let a student finish early. That is the piece a single chatbot
cannot reproduce, and it is a reasonable thing to want to rebuild -- as a small
app, as a Claude Artifact, as anything that can hold state.

If you do, the thing worth carrying over is not the prompt text. It is the
sequence: withhold until the reading is present, ask before explaining, refuse
to count agreement, and certify only on something the student produced first. A
prompt asks a model to follow that sequence and mostly it does. Software can
enforce it, which is strictly better.

Two cautions from the original, both learned the hard way. Tracking criteria
tempts you toward an interrogation, and the moment it feels like a test students
optimize for finishing rather than understanding -- the prompts say "this is not
an assessment" for that reason, and that instruction is in tension with the
certification rule on purpose. And whatever you build, students at another
institution have to be able to run it. The paper patterns exist because a
dependency you cannot hand on is a dependency that ends the adoption.
