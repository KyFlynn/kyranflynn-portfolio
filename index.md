---
layout: layouts/base.njk
title: Portfolio
---

<h1 class="text-2xl font-bold mb-4 mt-0">Welcome to my portfolio!</h1>

<p class="leading-relaxed text-gray-300">
I've studied and implemented algorithmic reasoning and data-driven decision making across both industry and academia. I currently work at the intersection of causal learning and artificial intelligence.
</p>

<hr class="my-6 mt-4 border-gray-700">

<h2 class="text-2xl font-semibold mb-4 mt-4">Projects</h2>

<div class="grid gap-6 md:grid-cols-2">
  {% for project in collections.projects %}
  <a href="{{ project.url }}" class="block border border-gray-700 rounded-xl p-6 hover:shadow-lg transition">
    <h3 class="mt-0 mb-3 font-semibold text-xl">{{ project.data.title }}</h3>
    <p class="m-0 text-gray-400">{{ project.data.summary }}</p>
  </a>
  {% endfor %}
</div>