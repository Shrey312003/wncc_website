---
layout: result
title: Seasons of Code
project: (Un)Clear


    
permalink: /soc-results/project-2-result
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
    <h4 class="mentors" style="display: inline;">Omkar Ghugarkar, Bhuvan Aggarwal  </h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;"> Aayush Kakade, Eknoor Singh, Pranjal Kushwaha, Prathamesh, Jujhaar Singh, Tarun Kumar Gupta</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1t9bxHXBFLaU6jyg0yZks6VyGD-dFGWZDA38KA3QOISk/edit" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/tkg31302/SoC_2021.git" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1BIxlJ7_tPCQYbeZgSKbkB46jDBqwrNg_/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
