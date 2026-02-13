---
layout: layouts/base.njk
title: Portfolio
class: home text-center
---

# Welcome to my portfolio<span class="text-blue-600">.</span>

I've studied data-driven decision making across both industry and academia. Here are my top disclosable projects.

<div class="mt-8"></div>

<div class="grid gap-6 md:grid-cols-2 mt-8">
{% for project in collections.projects %}
  <a href="{{ project.url }}" class="project-card">
    <h3>{{ project.data.title }}</h3>
    <p>{{ project.data.summary }}</p>
  </a>
{% endfor %}
</div>

<div class="mt-8"></div>

## Education

<div class="education-grid mb-10">

<div>

### Columbia University
MS in Operations Research (PhD Coursework)  
*Obtained October 2025, qualified for PhD*

</div>

<div>

### Brown University
BS in Applied Math & Computer Science  
*Graduated with honors in May 2023*  

</div>

</div>


## Experience

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Applied Scientist (Security)</span>
  <span class="date">Jan 2026 — now</span>
</div>
<div class="company">Margin Research</div>

Short-term internship in cybersecurity at [Margin Research](https://margin.re/Margin).

</div>

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Doctoral Applied Machine Learning Scientist</span>
  <span class="date">Aug 2024 — Dec 2025</span>
</div>
<div class="company">Columbia University, IEOR</div>

Completed doctoral coursework and earned an accelerated MS in operations research in the [Industrial Engineering & Operations Research](https://ieor.columbia.edu/) department, qualifying for the PhD. Conducted research under [Prof. Lily Xu](https://lily-x.github.io/) focused on decision-making systems for healthcare applications.<br><br>

Built an end-to-end system for modeling and evaluating multi-intervention healthcare decisions, enabling intervention-level value estimation using reinforcement learning and mentoring a student contributor in its development.<br><br>

Served as Head Teaching Assistant for a graduate machine learning course (70+ students) under [Prof. Christian Kroer](https://www.columbia.edu/~ck2945/), holding office hours and creating the official exams.

</div>

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Software Development Engineer</span>
  <span class="date">Jan 2024 — Jul 2024</span>
</div>
<div class="company">Amazon, PXT</div>

Delivered production-grade full-stack features and built a data validation framework to safely support a 90% load increase for an international hiring software release.

</div>

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Applied Data Scientist</span>
  <span class="date">Jan 2022 — Oct 2023</span>
</div>
<div class="company">Brown University, Applied Math</div>

Built and deployed an end-to-end machine learning demand modeling system for dockless bike-share planning under [Prof. Alice Paul](https://alicepaul.github.io/), translating usage data into actionable guidance for local transportation policy, and received recognition as an [INFORMS Undergraduate Operations Research Prize finalist](https://www.informs.org/Recognizing-Excellence/Award-Recipients/Kyran-Flynn) in 2023 for an honors thesis in the applied math department on this work.

</div>

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Software Development Engineer</span>
  <span class="date">May 2022 — Aug 2022</span>
</div>
<div class="company">Amazon, Alexa</div>

Implemented reinforcement learning-based tuning in Alexa's audio processing pipeline, achieving a 30% reduction in speech-to-text latency and earning a full-time return offer.

</div>

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Head Teaching Assistant</span>
  <span class="date">Mar 2021 — Aug 2021</span>
</div>
<div class="company">Brown University, Computer Science</div>

Restructured the syllabus and built all assignments and exams for the course [Discrete Structures and Probability](https://cs.brown.edu/courses/info/csci0220/) under [Prof. Michael Littman](https://www.littmania.com/), leading a team of teaching assistants to support 100+ students.

</div>

<div class="experience-entry">
<div class="xp-head">
  <span class="role">Software Engineer</span>
  <span class="date">May 2021 — Jul 2021</span>
</div>
<div class="company">Pointz</div>

Translated user needs into a routing optimization roadmap and redesigned the backend routing algorithm for bike navigation startup [Pointz](https://www.bikepointz.com/), reducing their routing time by 50%.

</div>
