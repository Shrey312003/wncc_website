---
layout: result
title: Seasons of Code
project: Break free of the matrix, by building one!


    
permalink: /soc-results/project-48-result
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
    <h4 class="mentors" style="display: inline;">Laxman Desai</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Sanskar Narlawar, Aaryan Gupta, Kadoo Aditya Anil, Parth Dwivedi, Ashish Patel</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1t6oM3h3w4NILBOEE9qj9ILv0u2tjn1jhGKQsnVeZZ8g/edit" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/ParthDwivedi1/CPPMatrixLib" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1MQLUz5IxDMuVSVdxKMe_9gvbrJEhQ5g7/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
