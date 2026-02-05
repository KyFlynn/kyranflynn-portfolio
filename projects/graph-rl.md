---
title: "Multi-Intervention Healthcare Decision Modeling"
summary: "Built an end-to-end experimental system for multi-intervention healthcare decision modeling using reinforcement learning and graph neural networks."
layout: layouts/project.njk
---

<div class="meta">
  
**Key Idea** — Built an end-to-end experimental platform for studying decision-making in multi-intervention healthcare settings, integrating synthetic data generation, reinforcement learning, and graph neural networks to enable intervention-level value estimation.

**Setting** — Columbia [Industrial Engineering & Operations Research](https://ieor.columbia.edu/) PhD program, advised by [Prof. Lily Xu](https://lily-x.github.io/).

**Language** — Python.

**Tech Stack** — [PyTorch](https://pytorch.org/), [PyTorch Geometric](https://pyg.org/), [Gymnasium](https://gymnasium.farama.org/index.html), [Optuna](https://optuna.org/), [NetworkX](https://networkx.org/), [scikit-learn](https://scikit-learn.org/stable/), [Gurobi](https://www.gurobi.com).

</div>

<div class="card">
  <h2>Overview</h2>
  <p>
  I built an end-to-end experimental system to study decision-making in healthcare settings where multiple treatment option combinations must be evaluated under limited data. The motivation was to address a common limitation of standard reinforcement learning approaches, which struggle to scale and learn reliably when the number of possible interventions grows.<br><br>

  To do this, I designed and implemented reinforcement learning models that explicitly learn the relationships between interventions and system states, representing those dependencies as graphs and using graph neural networks to estimate intervention-level value functions. I supported this work with a full experimental pipeline for synthetic data generation, model training, and performance evaluation.<br><br>

  The result was a reusable experimental framework that makes complex multi-intervention decision problems tractable to study, enabling systematic evaluation of how structured representations can improve learning behavior in high-dimensional decision settings with limited data.
  </p>
</div>

<!-- <div class="bullet-card">
  <h2>Highlights</h2>
  <p>Developed model architectures, synthetic problems, and testing framework from scratch</p>
  <p>Each intervention (sub-action) and state variable is represented as a node in a bipartite graph</p>
  <p>A graph neural network (GNN) propagates information between state and sub-action nodes to estimate Q-values jointly</p>
  <p>The combinatorial optimization step for selecting the best intervention set is solved via Gurobi using the learned Q-value function</p>
  <p>This approach enables scalable training and decision-making in environments with large binary sub-action spaces</p>
  <p>Integrated GNN message passing into a custom Q-learning loop for multi-action reinforcement learning.</p>
  <p>Designed a modular PyTorch Geometric training pipeline with Gurobi-based optimization for policy selection. </p>
  <p>Demonstrated improved learning stability and faster convergence on synthetic multi-intervention testbeds.</p>
  <p>Applied causal inference tools from the PyWhy framework to improve interpretability of learned dependencies.</p>
</div> -->
