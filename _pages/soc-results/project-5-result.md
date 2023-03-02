---
layout: result
title: Seasons of Code
project: PyRated


    
permalink: /soc-results/project-5-result
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
    <h4 class="mentors" style="display: inline;">Vibhav Aggarwal, Tulip Pandey  </h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Roshan Jangid, Vipin Ochiramani, Shiven Barbare, Rehmat Singh Chawla, Sandeep Saurav</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/146Hrbl5qcjx6Rr3uuqSimjE3Emh22gu69EVHmhe9cE0/edit?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/Team-PyRated/PyRated" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/drive/folders/1c-n3Ow6nX6MmvXKhw8w523Sz8yiPO59f?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
