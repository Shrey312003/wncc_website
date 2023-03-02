---
layout: project
title: Seasons of Code
project: Introduction to Web Development
topics:
    - Web Development
mentors:
    - Sagar Prasad     
    
mentees:
- 10-15 students   
    
permalink: /soc/projects/2021/project-1
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
        This will teach you to develop a website using various tools like HTML, CSS , JavaScript, PHP Angular and a few other tools. There are no prerequisites for this, however having basic idea of HTML will help.
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-2</td>
      <td>Learning simple concepts of HTML & CSS</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Learning how to use JavaScript & jQuery</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Intro to php</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Learning Angular and use it design webpages</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Developing a final website with all the concepts learned</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Learning simple concepts of HTML & CSS</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Learning how to use JavaScript & jQuery</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Intro to php</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Learning Angular and use it design webpages</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Developing a final website with all the concepts learned</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
