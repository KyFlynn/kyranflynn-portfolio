---
layout: base.njk
title: Graph-based RL for Combinatorial MDPs
summary: Using GNN-based Q-learning to handle large binary sub-action spaces.
tags: projects
---

## Graph-based RL for Combinatorial MDPs

This project explores reinforcement learning for combinatorial decision spaces, where the agent selects multiple binary sub-actions simultaneously. 

I use a bipartite graph representation of state variables and sub-actions, processed through a heterogeneous GNN that outputs Q-values for each candidate action. 

- **Tech stack:** PyTorch Geometric, RLlib, Gurobi  
- **Key idea:** two-hop message passing for dynamic sub-action value aggregation.

