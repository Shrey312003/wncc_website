---
layout: eventLayout
title: Events
project: Algorithms Simplified
    
permalink: /events/event/algorithms-simplified/
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
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom:580px" >
        <br>
        Hello all,
<br><br>
WnCC organised Algorithms Simplified which was a series where actual coding was not required. Several short videos were released every friday, where something cool was trivially explained in just 15 minutes! Some optional tasks were also released in the Dive Deep section where people could actually implement what they learned. 
    </p>
</div>
{% endif %}
{% endfor %}
