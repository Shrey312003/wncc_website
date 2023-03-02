---
layout: project
title: Seasons of Code
project: Introduction to Web Development(Project Portal)
topics:
    - Web Development
mentors:
    - Goransh Gattani, Mohit Sharma & Yash Saraogi  
    
mentees:
- 10-12
    
permalink: /soc/projects/2022/project266
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
        Getting mentees a hand on experience of web development and collaborate to form the institute project portal.
<br>
Prerequisites:<br>
None(Brownie points for basic HTML and CSS )
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
      <td> Basic HTML, CSS, Git</td>
    </tr>
    <tr>
      <td>Week 2,3</td>
      <td>Javascript to be learnt and practiced by the mentees </td>
    </tr>
    <tr>
      <td>Week 4,5</td>
      <td>Working with a basic angular/react app, clarify frontend and typescript working of the app</td>
    </tr>
    <tr>
      <td>Week 6,7</td>
      <td>Learning basic backend development with Django/node and how to connect it with frontend</td>
    </tr>
    <tr>
      <td>Week 8,9 + Post SOC</td>
      <td>Mentees who have cleared the first three checkpoints will collaborate to form the institute project portal. </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
