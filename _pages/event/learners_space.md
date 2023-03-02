---
layout: eventLayout
title: Events
project: Learners' Space
    
permalink: /events/event/learners-space/
---

<h2 class="display1 m-3 p-3 text-center project-title">{{page.project}}</h2>

{% for project in site.data.settings.events-items %}
{% if project.title == page.project %}
<div class ="img-event d-block"> 
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-1">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-2">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-3">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-4">
</div>
<div class = "mobile-img-soc">
  <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded">
  </div>

<div>
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
       The Institute Technical Council conducted the Technical Summer School under Learners' Space in collaboration with UGAC.
<br><br>
Under this initiative, WnCC started three well-curated courses on the topics - Python, Machine Learning and Web Development.

<br><br>
    These were structured courses with weekly content and assignments for anyone to get started in any of the three fields and get a well rounded experience. 
    </p>
</div>
{% endif %}
{% endfor %}
