---
layout: project
title: Seasons of Code
project: Canteen food rating system 
topics:
    - Web Development
mentors:
    - Aditi Gupta
    - Ishita Gupta
    
mentees:
- 4-6
    
permalink: /soc/projects/2022/project260
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
<div class = "project-desc" style = "margin-bottom: 140px">
    <p class="display3" style = "font-size:22px;" >
        <br>
        "Create an app to list the food menus of various IITB Canteens, rate the food items and give food reviews, a working model for fun."			
        <br>
Prerequisite:
N/A
<br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:110px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1-2</td>
      <td> Reading up on content/ following tutorials (flutter as well)
Next two weeks- continuation of the first two weeks and starting with our project code
Week 5/6- working on aesthetics and continuing the coding part
Week 7/8- coding/ understanding 
Week 9,10- cleaning, refining dealing with bugs "
  </td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>continuation of the first two weeks and starting with our project code</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>working on aesthetics and continuing the coding part</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>coding/ understanding </td>
    </tr>
    <tr>
      <td>Week 9-10</td>
      <td>cleaning, refining dealing with bugs</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
