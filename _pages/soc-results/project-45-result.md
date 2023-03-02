---
layout: result
title: Seasons of Code
project: IITinder


    
permalink: /soc-results/project-45-result
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
    <h4 class="mentors" style="display: inline;">Payal Choudhary, Eshwar Rahul Puli</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Sai Vardhan, Vinay Kumar, Himanshu Choudhary, Yash Singh, Aniket D Giri, Ved Mangesh Khandekar</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1fEGiQglHfkDlR2NAn-Yrpl3CxYsDbYwijP-JY-IMZ0Q/edit" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/HimanshuC22/notion-painter" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="#" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
