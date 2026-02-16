---
title: "Multi-Intervention Sequential Decision Modeling"
summary: "I built an end-to-end experimental pipeline to study reinforcement learning in sequential decision settings where multiple interacting interventions must be selected simultaneously at each timestep."
layout: layouts/project.njk
---

<div class="meta">
  
**Overview** — I built an end-to-end experimental pipeline to study reinforcement learning in sequential decision settings where multiple interacting interventions must be selected simultaneously at each timestep. The pipeline integrates synthetic data generation, model training, controlled experimentation, and evaluation. At its core is a graph-structured reinforcement learning architecture that produces intervention-level value estimates, enabling scalable decision-making without exhaustively evaluating exponentially many intervention combinations.

**Setting** — Columbia [IEOR](https://ieor.columbia.edu/) PhD program, advised by [Prof. Lily Xu](https://lily-x.github.io/).

**Language** — Python.

**Tech Stack** — [PyTorch](https://pytorch.org/), [PyTorch Geometric](https://pyg.org/), [Gymnasium](https://gymnasium.farama.org/index.html), [Optuna](https://optuna.org/), [NetworkX](https://networkx.org/), [scikit-learn](https://scikit-learn.org/stable/), [Gurobi](https://www.gurobi.com).

</div>

{% card %}
## Sequential Decision Model

I built an end-to-end experimental pipeline to improve how reinforcement learning agents make decisions when multiple interventions must be chosen simultaneously at each timestep. The motivation came from clinical-style decision settings: at each step, a combination of treatments (e.g., drug type, intensity, frequency) must be selected, often with limited data and complex interactions between choices.

Standard reinforcement learning struggles in these environments. As the number of intervention options grows, the action space explodes combinatorially, making learning unstable and sample-inefficient.

We can visualize the intervention options and the state variables as nodes in a graph.

![graph-rl-drawing-1](/images/graph-rl-drawing-1.jpg)

The core idea was to exploit structure. First, I estimated a dependency graph between interventions and system state variables using regression-based methods. This produced an approximate map of how individual interventions influence the system.

![graph-rl-drawing-2](/images/graph-rl-drawing-2.jpg)

I then embedded this structure into a graph neural network-based Q-learning architecture. Rather than evaluating every possible intervention combination, the model incrementally constructed decisions, estimating the marginal value of individual interventions conditioned on the current state and prior selections.

![graph-rl-drawing-3](/images/graph-rl-drawing-3.jpg)

We repeat this process until a decision is made on each intervention, and this concludes decision making for one timestep. 

This reframing avoids exhaustive combination evaluation, and allows each partial decision to incorporate structured information about system dynamics. To support this, I built a full experimental pipeline: synthetic data generation, model training, and controlled experimentation to evaluate performance against the standard approach.

{% endcard %}

{% card %}
## Presentation

Department presentation of this project:

<div class="mt-4">
  <iframe
    width="100%"
    height="420"
    src="https://www.youtube.com/embed/M3XRnSD5bx0"
    title="Multi-Intervention Decision Modeling Presentation"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerpolicy="strict-origin-when-cross-origin"
    loading="lazy"
    allowfullscreen
  ></iframe>
</div>
{% endcard %}
