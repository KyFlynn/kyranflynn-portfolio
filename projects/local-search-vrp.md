---
title: "Disturbance-Based Local Search for VRPs"
summary: "Built a top-performing, large-scale vehicle routing problem solver using a disturbance-based local search approach I designed."
layout: layouts/project.njk
homepageOrder: 3
---

<div class="meta">
  
**Overview** — I built a solver that iteratively constructs greedy solutions and then disturbs them to solve large-scale vehicle routing problems. I designed it such that the solver memorizes local surface information to avoid getting stuck in local minima, and the result was top-performing in a competition in both solving speed and solution quality.

**Setting** — Brown [Computer Science](https://cs.brown.edu/).

**Github** — [vrp-local-search](https://github.com/KyFlynn/vrp-local-search).

**Language** — Java.

**Tech Stack** — [IBM CPLEX](https://www.ibm.com/products/ilog-cplex-optimization-studio).

</div>

<div class="card">
  <h2>VRP Solver</h2>

  The vehicle routing problem (VRP) requires solving for the most cost-effective way of delivering goods using trucks departing from a central depot to a set of customers.

  ![vrp-problem](/images/local-search-vrp-drawing-1.jpg)

  I built a solver for this problem with a classmate for a competition looking at both solving speed and solution quality. If the problem was small enough, we would find an optimal solution using IBM CPLEX modeling. Otherwise, we used a local search approach I designed.
  
  Local search is a method in which you consider improving your solution by looking at its neighbors. The 'neighborhood' is what makes it local. Here, the neighbors I considered are solutions in which a customer is relocated, or in which two customers are swapped, both within any of the current routes.

  There are many ways to go about local search. I chose a simple design, but added one key idea.<br><br>

  <h2>Approach</h2>

  I chose to use greedy local search, where at each step we choose the neighbor that improves the solution the most. Once we get stuck, we disturb the solution with random relocation and swaps. The greedy approach is dangerous — the optimal solution often involves iterating through worse solutions, not the local best. 
  
  However, I figured a greedy approach actually provides useful local information. Suppose we keep getting stuck in the same solutions, say solution (1).

  ![local-search-stuck](/images/local-search-vrp-drawing-2.jpg)

  By keeping track, we can tell we are stuck in a local surface, and can begin increasing solution disturbance. This brings us into new solution spaces, and eventually into much better solutions, such as (4).

  ![local-search-global-min](/images/local-search-vrp-drawing-3.jpg)

  I implemented this idea efficiently by using objective values solution proxies, and turned the simplest local search method into a top perfomer.
</div>