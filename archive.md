---
bg_url: "https://cdn.jsdelivr.net/gh/cheungwoonming/picx_img@main/jpg_BG_img/bg_archive.jpg"
layout: page
permalink: /posts/
title: "归档"
crawlertitle: "心之所向"
summary: "以为说了就能明白，是傲慢的想法<br/>是说者的自我满足，是听者的自以为是<br/>并不是所有事，都能通过解释让人理解"
active: archive
---

{% for tag in site.tags %}
  {% assign t = tag | first %}
  {% assign posts = tag | last %}

  <h2 class="category-key" id="{{ t | downcase }}">{{ t | capitalize }}</h2>

  <ul class="year">
    {% for post in posts %}
      {% if post.tags contains t %}
        <li>
          {% if post.lastmod %}
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span class="date">{{ post.lastmod | date: "%Y-%m-%d"  }}</span>
          {% else %}
            <a href="{{ post.url }}">{{ post.title }}</a>
            <span class="date">{{ post.date | date: "%Y-%m-%d"  }}</span>
          {% endif %}
        </li>
      {% endif %}
    {% endfor %}
  </ul>

{% endfor %}
