---
layout: project
title: Seasons of Code
project: Resume Script Generator
topics:
    - Web Development
mentors:
    - Vinayak
    - Gaurav Sodhani   
mentees:
    - 6 
    
permalink: /soc/projects/2022/project230
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
        We will be building a one-of-a-kind Resume Script Generator. It will be a web-based platform that will take input as users’ resume points and will generate your resume in a specified format. This way, you will get rid of lengthy LaTeX codes and be able to obtain a hassle free design. We will be using Angular for front end development. The extension of this project will enable user to customize their resume. 
<br>
Prerequisite: Basics of HTML, CSS and python
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
      <td>Introduction to web development
Covering HTML, CSS, JavaScript


</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Introduction to Angular JS
Exploring LaTeX templates and building a database of multiple resumes

 </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Development of frontend webpages using Angular


 </td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Development of frontend webpages using Angular </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
