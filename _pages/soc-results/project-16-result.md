---
layout: result
title: Seasons of Code
project: Computational Geometry

    
permalink: /soc-results/project-16-result
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
    <h4 class="mentors" style="display: inline;">Aravind Bharathi </h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Shabnam Sahay, Anmol Saraf, Advait Risbud, Amisha</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://drive.google.com/file/d/1cZMgeDZCzAPvodfMvvkFYGdIUdVwmPzZ/view?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/bolozubaankesari/Comp_Geometry" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1lysaB-L5fultI8iBReQRclmf9Y7QTvrU/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
