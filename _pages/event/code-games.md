---
layout: eventLayout
title: Events
project: Code Games
    
permalink: /events/event/code-games/
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
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom:450px" >
        <br>
        Hello all,
<br><br>
After a very successful event on Introduction to Competitive Programming, WnCC brought to all beginners an opportunity to compete in a programming contest in an unconventional way. People enjoyed the thrill of battling each other in this game of wits called CodeGames. The only pre-requisites for this contest were logic, C++, problem solving skills and enthusiasm. It was a beginner friendly contest created to help everyone get into the fun world of competitive programming.

<br><br>
You can watch the introductory session for this contest on YouTube
     <a href="https://youtu.be/HwpUQLKPAhg">here.</a>
     </p>
</div>
{% endif %}
{% endfor %}
