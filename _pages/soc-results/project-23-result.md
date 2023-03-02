---
layout: result
title: Seasons of Code
project: Algorithm Visualizer


    
permalink: /soc-results/project-23-result
---

<h2 class="display1 m-3 p-3 text-center customcol">{{page.project}}</h2>
{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}

<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "75%" height="auto"  alt="{{ project.project}}" class="border rounded" style = "float: left; margin-top: 3%; margin-right: 3%">
</div>


<div class="mentor-mentee-section">
    <br>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
        {% endfor %}
    <br>
    <h4 class="mentor-title" style="display: block; fontWeight: 800">Mentors</h4>   
    <h4 class="mentors" style="display: inline;">Shashank Singh</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Manan Kumar Garg, Prajwal Kalpande</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1xPhPSmAmjVSzVrsvoBeOB1aGNlA0u0qpGTtP_xkW3Wk/edit?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/MananKGarg/Algorithm-Visualizer" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1jr885-29TeG8MU1kPlkfHkRy4CZvuFr8/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
