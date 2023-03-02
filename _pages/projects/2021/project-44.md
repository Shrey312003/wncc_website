---
layout: project
title: Seasons of Code
project: Introduction to App Development 
topics:
    - App Development
mentors:
    - Rachit Bagga
    - Piyush Raj   
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-44
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

<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
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
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        Description:

        We will be using Flutter Framework to compose user interfaces and implement functionality. Flutter is an extremely trending framework for app development that gives you a rich set of pre-built and pre-styled wireframing widgets. It uses web technologies which are easy to understand. Alibaba recently made their app in Flutter. If it’s good enough for a 25-billion dollar company, it’s worth learning.
<br><br>
        Preferred Skills: 
        
        Some small amount of Coding knowledge would be beneficial along with a working computer onto which you can install Flutter.
  </p>
  <br>
</div>

<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Learn Flutter and Dart from the ground up, step-by-step</td>
    </tr>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Use features like the device camera, authentication and much more!</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn how to upload images and how to send manual and automated push notifications</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Start working on an app and design it’s UI</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Complete the app and documentation.</td>
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
      <td><strong>1</strong></td>
      <td>Android basics</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Proof of concept</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Version 1.1</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Version 1.2</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Prototype</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
