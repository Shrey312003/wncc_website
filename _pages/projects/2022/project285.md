---
layout: project
title: Seasons of Code
project: Project Hash
topics:
    - Competitive Coding
mentors:
    - Ashish Patel
    
mentees:
- 5
    
permalink: /soc/projects/2022/project285
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
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
       Hash Code is a team programming competition, organized by Google, for students and professionals around the world. Among the three competitive programming competitions organized by google, namely Kickstart, Code JAM and Hash Code, he difficulty level of Hash Code is the highest. In the duration of this project we will aim at solving as many past year Hash Code problems as possible.
<br>
Prerequisites:
A good background in DSA  
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td> Intro to hash code, discussing few past year problems</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Brush up advanced DSA concepts</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Tackle some interesting CP problems</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>  Solve and provide original solution first Hash Code qualification round problem as a team</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Solve some more qualification round problems </td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Move on to Final round problems</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Solve more problems and document the solutions </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 