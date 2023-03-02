---
layout: eventLayout
title: Events
project: Blockchain Developers Meet
    
permalink: /events/event/blockchain/
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
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom:520px" >
      <br>
WnCC in collaboration with Polygon organised the Blockchain Developers
Meet to help students become a blockchain developer. 
Polygon is a made-in-India cryptocurrency protocol that crossed a market
capitalization of $10 billion recently.
<br> People who attended
the meet were offered the below-given perks:
<br>
   - E-certificates to all the participants
<br>
   - Exclusive access to a private group with senior developers for
<br>
     blockchain tech discussions

</p>
</div>
{% endif %}
{% endfor %}
