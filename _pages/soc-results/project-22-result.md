---
layout: result
title: Seasons of Code
project: Quantum Computing Algorithms


    
permalink: /soc-results/project-22-result
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
    <h4 class="mentors" style="display: inline;">Pradipta Bora, Harshit Gupta</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Vedang Dhirendra Asgaonkar, Siddhant Midha, Waqar Mirza</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://drive.google.com/file/d/11LWjD-P15u5z0KkYtX1gGMxUbCtyTfz7/view" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/midhasid21/Quantum-Algorithms---SoC-21" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1-nhx4EaYqJtoAaSZh1keWIOHrZxY_Cgq/view" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
