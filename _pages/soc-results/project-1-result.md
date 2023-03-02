---
layout: result
title: Seasons of Code
project: Introduction to Web Development


    
permalink: /socresults/project-1-result
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
    <h4 class="mentors" style="display: inline;">Sagar Prasad</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;"> Rahul Varma, Jayanth Dosapati, Hemendra Meena, Sainath Vavilapalli, Sandeepan Naskar, Aditya Byju, Riddhi Shah</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1wwFFVE_CoJk0RsP_Re3oUuJilr4lTCKlRGviqY1e2eA/edit?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/Sainath-710/200050125_SoC.git" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/drive/u/2/folders/1yVJPGPGzd51t5fwLobFskgvo0qdHgfB-" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
