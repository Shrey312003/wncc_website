---
layout: result
title: Seasons of Code
project: Goal ICPC


    
permalink: /soc-results/project-3-result
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
    <h4 class="mentors" style="display: inline;">Shubham Anand Jain, Shubham Atri </h4>    
    <br>  <br> 
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;"> Harshvardhan Agarwal, Pulkit Agarwal, Vaibhav Raj</h4>
    </div>
    <br>
<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1xY2SrGLuZLF31NRH0daQgPy3I9jp_tCJU6LXBHmLgFw/edit" role="button">Documentation</a></div>

    <div class="button-res"><a href="https://drive.google.com/file/d/1lnZH1gC8D-2eKPP2imOrKF4xB_d-axwL/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
