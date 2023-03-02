---
layout: project
title: Seasons of Code
project: Developing E-commerce Website Using Django
topics:
    - Web Development
mentors:
    - Balbir Yadav   
mentees:
    - 4 
    
permalink: /soc/projects/2022/project228
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
        In this project, We are going to build E-commerce website using python web framework Django. 
Reading Material are as follows: 
 https://www.djangoproject.com/start/
https://www.w3schools.com/python/
https://www.w3schools.com/html/default.asp
https://www.w3schools.com/css/default.asp
<br>
It would be good if mentees go through above reading materials. But this is not the pre-requisite 
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
      <td>HTML Basics + CSS Basics + Python Basics
</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Git & Github + Django Intro
 </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Project Setup, Basic Structure and Git Setup

</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Populate Homepage & Store Page
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Single Product view Page + small features</td>
    </tr>
    <tr>
        <td>Week 6</td>
        <td>Cart Functionality, Additional Features</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
