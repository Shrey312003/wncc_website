---
layout: result
title: Seasons of Code
project: Deep reinforcement learning - 2048 AI


    
permalink: /soc-results/project-29-result
---

<h2 class="display1 m-3 p-3 text-center customcol">{{page.project}}</h2>
{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}

<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "60%" height="auto"  alt="{{ project.project}}" class="border rounded" style = "float: left; margin-top: 3%; margin-right: 3%">
</div>


<div class="mentor-mentee-section">
    <br>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
        {% endfor %}
    <br>
    <h4 class="mentor-title" style="display: block; fontWeight: 800">Mentors</h4>   
    <h4 class="mentors" style="display: inline;">P.Mithun Balram, Alwin Tom Jose</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Devakar Pradhan</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://drive.google.com/file/d/1IM6eMc__Ph3bYCUwKMLhMHL17NKgbH0D/view" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/devakar771/Season-of-code" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/12yZlDLaduYwybIqgw4Ntu79wOQPOPuRy/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
