---
layout: eventLayout
title: Events
project: RattleSnake
    
permalink: /events/event/rattlesnake/
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
        Are you bored of doing the repetitive tasks like digitising your old lab
notes, moving and manipulating your data around for better graphs or
visualisations? Or do you just wish your computer could swipe right on all
those profiles at once? To answer all these questions, ITC
and WnCC organised an intermediate level workshop on Python aimed at
helping the IITB junta to master the capabilities of those
computers/laptops lying in front of you.

<br><br>
    Inspired by the book, 'Automate the
boring stuff with Python', this workshop introduced all the important
libraries such as Selenium, SciPy, OpenCV and more. In the second half of the workshop various tasks were given so that people could implement their knowledge of these libraries.
    </p>
</div>
{% endif %}
{% endfor %}
