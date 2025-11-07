---
layout: layouts/base.njk
title: Portfolio
class: home
---

# <div class="text-center">Welcome to my portfolio<span class="text-blue-600">.</span></div>

I've studied and implemented algorithmic reasoning and data-driven decision making across both industry and academia. Here are my top projects.

<div class="mt-6"></div>

<div class="grid gap-6 md:grid-cols-2 mt-6">
{% for project in collections.projects %}
  <a href="{{ project.url }}" class="project-card">
    <h3>{{ project.data.title }}</h3>
    <p>{{ project.data.summary }}</p>
  </a>
{% endfor %}
</div>

<div class="mt-12"></div>

## Education

<div class="education-grid">

<div>

### Columbia University
M.Sc. in Operations Research  
*Obtained October 2025, Qualified for Ph.D.*

</div>

<div>

### Brown University
B.Sc. in Applied Math & Computer Science  
*Graduated with honors in May 2023*  

</div>

</div>


## Experience

<div class="experience-entry">

<div class="xp-head">
  <span class="company">Columbia University</span>
  <span class="date">Aug 2024 — now</span>
</div>
<div class="role">PhD Student</div>

*First year:* Accelerated M.Sc. for PhD qualification in PhD-only theoretical stochastic modeling and optimization classes. Qualified with 3.73 GPA, [M.SC. degree](https://www.parchment.com/u/award/4969b3e229be08ec1f594c8fd94f1f39) obtained October 2025.  

*Second year:* Full time researcher under [Prof. Lily Xu](https://lily-x.github.io/), teaching assistant for Machine Learning under [Prof. Christian Kroer](https://www.columbia.edu/~ck2945/).

</div>
