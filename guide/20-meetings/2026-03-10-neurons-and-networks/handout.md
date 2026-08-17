# Neurons and Networks

**Student Handout** · 2026-03-10

Hands-on exploration of artificial neurons and neural networks through interactive visualizations

Name: ______________________________

---

## Before class

### Neurons and Networks

#### Today's Plan

Today you'll explore what's happening underneath the AI systems we've been discussing. You've seen how LLMs predict the next token and debated whether that counts as "understanding." Now you'll get hands-on with the building blocks: artificial neurons and neural networks.

Here's one way to think about what you'll see today: neural networks are mathematical functions. They take in numbers and compute an output — nothing more. But they are _extraordinarily_ complicated mathematical functions, and the way they learn to compute the right output is fascinating.

Here's another thing worth knowing: the basic idea of an artificial neuron was inspired by how neurons work in our brains. Researchers studied biological neural networks and built simplified mathematical versions. Now, decades later, artificial neural networks are being used to study the brain itself — helping neuroscientists understand the very biological systems that inspired AI in the first place.

You'll experiment with interactive visualizations, generate questions about what you observe, and investigate those questions with different partners.

---

## Activity

### Stage 1: Explore: Single Neuron

**Group of 2.** Names: __________  __________  

#### A Single Artificial Neuron

An artificial neuron is the simplest building block in a neural network. It takes some inputs, multiplies each one by a weight, adds them up with a bias, and passes the result through an activation function. That's it — but from this simple operation, surprisingly complex behavior can emerge.

The tool below lets you experiment with a single neuron. Try adjusting the sliders and see what happens.

> **Demos.** Open the tool your instructor names. The originals are hosted at usingandunderstanding.ai/resources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Things to try:**
- Use the preset challenges (AND gate, OR gate) — can you figure out what the neuron needs to do?
- What happens when you change the activation function? How does it change the neuron's behavior?
- Can you make the neuron fire for only specific input combinations?
- Check out the biological analogy — how does this compare to what we know about brain cells?

### Stage 2: Explore: Digit Network

**Group of 2.** Names: __________  __________  

#### A Network of Neurons

Now let's see what happens when you connect many neurons together. The network below is trained to recognize handwritten digits (0-9). Each neuron does the same basic operation you just explored — weighted sum, bias, activation function — but together they can do something much more impressive.

> **Demos.** Open the tool your instructor names. The originals are hosted at usingandunderstanding.ai/resources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Things to try:**
- Draw a few digits and see if the network classifies them correctly. What digits does it struggle with?
- Try the "Train" mode — watch the connections change color and thickness as the network learns from examples. Notice how the green and orange connections match the single neuron you just explored.
- Stop training partway and switch back to "Classify" — the network now uses your partially-trained model. Does it work? Try training longer and classify again.
- Use "Learning" mode to step through exactly how the network learns from a single example — where do the errors flow?
- Click on individual neurons to see what they're responding to — what patterns have they learned?
- What connections can you see between the single neuron you just explored and this full network?

### Stage 3: Discussion: What Did You Notice?

#### Quick Check-In

Geoff will ask a few of you to share something you noticed or something that surprised you during the exploration.

### Stage 4: Generate Questions

#### What Are You Curious About?

Based on what you just explored, what questions do you have about how neurons and neural networks work? Think about what surprised you, what you couldn't explain, or what you want to understand better.

Enter at least 2 questions below.

> **Card Sort.** Write each idea on its own card, with your name in the corner. Hand them forward.

**From the board:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 5: Question Review

> **Card Sort.** Write each idea on its own card, with your name in the corner. Hand them forward.

**From the board:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 6: Investigate

**Group of 2.** Names: __________  __________  

#### Investigate a Question

> **Card Sort.** Write each idea on its own card, with your name in the corner. Hand them forward.

**From the board:**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

With your new partner, pick one of the questions above to investigate. Use the demos below to experiment and gather evidence. You should also feel free to ask an AI — the interactive tools are great for some questions, but others might benefit from a conversation with ChatGPT or Claude. Try to build an answer based on what you can observe and learn, not just what you think you know.

> **Demos.** Open the tool your instructor names. The originals are hosted at usingandunderstanding.ai/resources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

> **Demos.** Open the tool your instructor names. The originals are hosted at usingandunderstanding.ai/resources.

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**What did you find?**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 7: Explain & Learn

**Group of 2.** Names: __________  __________  

You're with a new partner now. Take turns:

1. **Explain** what question you investigated and what you found
2. **Listen** to what your partner investigated and learned
3. **Discuss:**
   - If you investigated **different questions**: how do your findings connect? Did you discover related things?
   - If you investigated the **same question**: did you try different things? Did you reach the same conclusions? What did one of you notice that the other missed?

**What did you learn from your partner?**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

### Stage 8: Share Out

### Stage 9: Wrap-Up

#### Looking Ahead

The artificial neurons and networks you explored today are the building blocks underneath the LLMs we've been discussing all semester. The same fundamental operations — weighted sums, activation functions, backpropagation — power everything from this digit recognizer to ChatGPT.

The difference is scale. The digit network you trained today has about 13,000 connections. A frontier model like GPT-4 or Claude has hundreds of _billions_ of parameters — roughly 10 million times larger. The structure is also different in ways we'll explore later, but the core idea is the same: take in numbers, multiply by weights, add them up, apply a function, repeat.

Next time, we'll look at how these building blocks scale up into the systems you've been using.

**Want to go deeper?** The [3Blue1Brown series on neural networks](https://www.3blue1brown.com/topics/neural-networks) is an excellent visual introduction that goes into much more mathematical detail — including the calculus behind backpropagation.

### Stage 10: Feedback

**What was most interesting about exploring neurons and networks today? What would you change?**

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
