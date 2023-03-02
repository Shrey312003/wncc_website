---
layout: project
title: Seasons of Code
project: Audio Controlled Drone
topics:
    - Machine Learning 
    - Quadcopter dynamics overview
    - Gazebo
mentors:
    - Rishabh Khantwal      
    
mentees:
- 2-3   
    
permalink: /soc/projects/2021/project-8
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
        The project will aim more towards Machine learning on the Audio dataset, and the drone would only be used as an application.
        <br><br>
        Work would start by getting familiar with Px4, Gazebo, and ROS. Students will prepare the audio dataset consisting of 10 most used commands for controlling the drone, such as “take-off,” “hover,” and “land.” The main task would be to implement the most common and effective CNN architectures for audio classification.
        </p>
        <p class = "display3" style = "font-size:22px">
         The model would be continuously tested using a proper validation set. The project could be extended to one of the problems depending on the pace of the project, 1) Getting high accuracy on multiple Indian accents 2) Giving custom commands to drone ( Move up with Medium speed)
        <br><br>
        The mentees should have previous working experience on any deep learning project. The proposal should contain titles of all the machine learning courses or projects you have done before.
        <br>
    </p>
</div>
<div class = "d-flex">
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
      <td  >Week 1</td>
      <td>Basic of gazebo, dataset preparation</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Audio data analysis</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>CNN and RNN based Model testing</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Testing on drone and making proper documentation</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Working on one of extra problems</td>
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
      <td  >1</td>
      <td>Running Gazebo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Running px4</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Dataset preparation</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Model Testing</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Documentation</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
