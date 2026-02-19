---
title: "Demand Estimation for Dockless Bike-Share"
summary: "Built an end-to-end machine learning system to estimate demand for dockless bike-share from censored usage data, supporting city planners on bike-share policy decisions."
layout: layouts/project.njk
homepageOrder: 2
---

<div class="meta">
  
**Overview** — I built and deployed an end-to-end demand estimation system for dockless bike-share networks, spanning probabilistic modeling, optimization, and an interactive visualization interface. The core model reconstructs true user demand from censored trip data, with an implementation designed to scale efficiently to city-level datasets. The result is an interpretable planning tool that allows transportation officials to identify service gaps and make data-driven fleet rebalancing decisions.

**Setting** — Brown [Applied Math-Computer Science](https://bulletin.brown.edu/the-college/concentrations/apmc/), advised by [Prof. Alice Paul](https://alicepaul.github.io/).

**Github** — [shared-mobility-research](https://github.com/KyFlynn/shared-mobility-research).

**Visualization App** — Locally, or on our [website](https://alicejpaul.shinyapps.io/shared-mobility/)!

**Paper** — [ArXiv peprint](https://arxiv.org/abs/2303.09971).

**Languages** — Python, R.

**Tech Stack** — [Pandas](https://pandas.pydata.org/), [NumPy](https://numpy.org/), [SciPy](https://scipy.org/), [Shiny for Python](https://shiny.posit.co/py/), [Folium](https://python-visualization.github.io/folium/).

</div>

<div class="card">
  <h2>Bike-Share Demand Model</h2>
  
  Cities such as Providence, RI rely on bike-share trip data that provides an incomplete signal of true rider demand. If someone opens the app and no bike is nearby, no trip is observed. If a rider walks several blocks before starting a ride, the recorded location only reflects nearby demand.
  
  To plan fleet size, rebalancing strategies, or set equity requirements, a city needs to know where riders are truly coming from.<br><br>

  <h3>Approach</h3>

  Instead of treating observed trips as true demand, we model demand as a hidden spatial and temporal arrival process. We divide the city into grid cells, model how riders most likely behave when they look for a bike (for example, choosing the nearest one), and treat each recorded trip as the result of both user intent and local bike availability.
  
  To infer the most likely arrival rates, I designed and implemented an Expectation–Maximization algorithm. The outcome is an interpretable map of user demand where each gridcell contains its average user arrival rates.

  ![providence-demand](/images/providence-demand.jpg)<br>

  <h3>Result</h3>

  Alongside mathematical derivation, I engineered the full data pipeline from raw trip data pre-processing to demand visualization. I validated the approach with a test suite and synthetic experiments.
  
  To allow planners to visualize demand heatmaps and explore service gaps, I host the model in an interactive Shiny application, which can be run locally or on our website. 

  ![live-app-screenshot](/images/live-app-screenshot.png)

  For my thesis, I optimized the daily bike distribution for the Providence given our estimated demand, hinting at the need to further coverage to explore potentially unobserved demand outside of college hill.

  ![optimized-initial-capacity](/images/optimized-initial-capacity.png)

  I am grateful to have been recognized as a finalist for the INFORMS Undergraduate Operations Research Prize in 2023 for this work!
</div>
