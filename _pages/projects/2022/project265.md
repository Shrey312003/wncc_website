---
layout: project
title: Seasons of Code
project: Full Stack Web Development
topics:
    - Web Development
mentors:
    - Sahil Khan & Prajwal Raut 
    
mentees:
- 8-12
    
permalink: /soc/projects/2022/project265
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
        This project will help mentees gain the basic knowledge of HTML, CSS, JS (frontend) and PHP, Laravel framework (Backend), and at the end will be able to make their own Dynamic Deployable website.
<br>
Prerequisites:
NONE
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:80px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-2</td>
      <td>Getting familiarized with concepts of HTML & CSS</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Learning & Implementing JavaScript to make Dynamic elements of Website</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Learn PHP form Scratch (Backend begins)</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Learning Laravel Framework and using it to make deployable website</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Developing a Dynamic, Deployable website to make Management platform for company</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 