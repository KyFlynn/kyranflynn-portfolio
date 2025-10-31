---
layout: base.njk
title: Home
---

Welcome to my portfolio. I work at the intersection of reinforcement learning, optimization, and data-driven decision making.

---

## Projects

<div class="grid gap-6 mt-6 md:grid-cols-2">
  {% for project in collections.projects %}
  <a href="{{ project.url }}" class="block border rounded-xl p-5 hover:shadow-lg transition">
    <h2 class="font-semibold text-lg mb-2">{{ project.data.title }}</h2>
    <p class="text-gray-600">{{ project.data.summary }}</p>
  </a>
  {% endfor %}
</div>