---
layout: project
title: Seasons of Code
project: Mini-Bloomberg Terminal
topics:
    - Web Development, Fin-Tech
mentors:
    - Tanmay Choudhary & Shaan Shah
    
mentees:
- 4
    
permalink: /soc/projects/2022/project271
---

<h2 class="display1 m-3 p-3 text-center project-title">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}

<div class ="img-soc d-block"> 
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-1">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-2">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-3">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="image-4">
</div>
<div class = "mobile-img-soc">
  <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded">
  </div>
<div >
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center topics">{{topic}}</h4></li>
        {% endfor %}
    </ul>
    <br>
    <h4 class="display3  ">Mentors :</h4> 
    <ul>
        {% for mentor in page.mentors %}
        <li><p class="lead">{{mentor}}</p></li>
        {% endfor %}
    </ul>
    <h4 class="display3  ">Mentees :</h4> 
    <ul>
        {% for mentee in page.mentees %}
        <li><p class="lead">{{mentee}}</p></li>
        {% endfor %}
    </ul>
</div>
<div class = "project-desc" >
    <p class="display3" style = "font-size:22px;" >
        <br>
       The Bloomberg Terminal - it's iconic. The Bloomberg terminal as a whole has got to be the most bloated PoS ever and in this project we will aim to build a mini- Bloomberg terminal.
       Do check out this awesome video to get the feel of what we are aiming for!
       Link- <a href="https://www.youtube.com/watch?v=_juj1MIRJVE">https://www.youtube.com/watch?v=_juj1MIRJVEl</a>
<br>
Prerequisites:
Either of Frontend, Backend development or Data processing/ML
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-2</td>
      <td>Finalizing on features to be included in the terminal
Dividing the mentees into teams
Discussion and finalizing the design doc for backend server and data calling functions
Discussion and finalizing the design doc for frontend server and interface with backend server
</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td> Backend - Technical Indicators
Backend - Make a skeleton backend - microservice based architecture 
Frontend - Make a rough wireframe design 
</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Fundamentals (using scrapers, need to process data) Technicals</td>
    </tr>
    <tr>
      <td>Week 7-10</td>
      <td> Trading bot and Viz tools + Finishing, Debugging and Testing</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 