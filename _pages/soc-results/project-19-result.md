---
layout: result
title: Seasons of Code
project: Astronomical Data-modelling and Interpretation


    
permalink: /soc-results/project-19-result
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
    <h4 class="mentors" style="display: inline;">Jai Israni</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Maddi Sanskar, Isha Mukherjee, Mayank Kumar Panda, Ojaswi Jain, Vidit Goel, Anubhav Bhatla, Aditya Kudre, Tanisha Gupta, Yashasvi Bhatt, Aswin Suresh, Saksham Gupta, Aaditya Sakrikar</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1H5eFvjGOjyARGiwHQMJUsXo9cjt5fodc6qw2rm_y358/edit?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/AnubhavBhatla/Data-driven-Astronomy" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://youtu.be/Vw1IsM2Pf4w" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
