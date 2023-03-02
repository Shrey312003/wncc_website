---
layout: result
title: Seasons of Code
project: Convolutional Neural Networks and Applications

    
permalink: /soc-results/project-21-result
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
    <h4 class="mentors" style="display: inline;">Aadarsh Raj, Gudipaty Aniket, Sibasis Nayak, Sahasra Ranjan  </h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Arpon Basu, Harsh Shah, Sankalp Parashar, Prakhar Bansal, Pulkit Adil, Akshat Kumar, Jash Kabra, Subarno Nath Roy, Bhavya Kohli</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1yuiDUQjN5pPEFGlUkuxO0b3OBo7tOiCN7-fgbgY1BlU/edit" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/sankalppar/Genre_From_Poster_SoC" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1AIuRVGR954HVUxuCy1FqnC4Xazl6idGi/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
