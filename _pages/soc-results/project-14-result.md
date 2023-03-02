---
layout: result
title: Seasons of Code
project: Gaming meets AI !!!


    
permalink: /soc-results/project-14-result
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
    <h4 class="mentors" style="display: inline;">Silky Kumari, Ankit Kumar Jain </h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Prateek Neema, Aditya Jain, Kalp Vyas, Sharnam Faria</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1hdQerFrrSZ9o2TSMEnTQbABghMCxfz0RQ4L3jOIv0u4/edit?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/adityajain3jan/GamingMeetsAI" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/13tVQlhTwUl2fczRpWfIcF7yZI0okkHF-/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
