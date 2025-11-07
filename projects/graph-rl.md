---
title: "Causal Structure-Informed Reinforcement Learning"
summary: "Built graph neural network-based reinforcement learning models leveraging causal structure for improved data-efficiency in multi-intervention environments."
layout: layouts/project.njk
---

<div class="meta">
  
**Key Idea** — Built graph neural network-based reinforcement learning models leveraging causal structure for improved data-efficiency in multi-intervention environments.

**Program** — [Columbia IEOR](https://ieor.columbia.edu/), advised by [Prof. Lily Xu](https://lily-x.github.io/).

**Tech Stack** — [PyTorch](https://pytorch.org/), [PyG](https://pyg.org/), [GurobiPy](https://www.gurobi.com/faqs/gurobipy/), [Gurobi-ML](https://www.gurobi.com/features/gurobi-machine-learning/), [PyWhy](https://www.pywhy.org/), [NetworkX](https://networkx.org/).

</div>

<div class="card">

## Overview
We experimented with graph neural network (GNN)–based reinforcement learning (RL) frameworks to improve model data-efficiency in data-limited environments with multiple intervention options. Standard RL algorithms often overlook the causal relationships between interventions and system states, so we focused on learning these dependencies and leveraging the resulting graph structure through GNNs. Our goal was to explore whether this approach could reduce data needs, and scale effectively to high-dimensional settings.

</div>

<div class="card">

## Implementation
Developed a **graph-based Q-learning architecture** where:

- Each intervention (sub-action) and state variable is represented as a node in a bipartite graph.  
- A graph neural network (GNN) propagates information between state and sub-action nodes to estimate Q-values jointly.  
- The combinatorial optimization step for selecting the best intervention set is solved via Gurobi using the learned Q-value function.  
- This approach enables scalable training and decision-making in environments with large binary sub-action spaces.

</div>

<div class="card">

## Highlights
- Integrated GNN message passing into a custom Q-learning loop for multi-action reinforcement learning.  
- Designed a modular PyTorch Geometric training pipeline with Gurobi-based optimization for policy selection.  
- Demonstrated improved learning stability and faster convergence on synthetic multi-intervention testbeds.  
- Applied causal inference tools from the PyWhy framework to improve interpretability of learned dependencies.

</div>
