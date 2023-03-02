---
layout: project
title: Seasons of Code
project: Deep reinforcement learning - 2048 AI
topics:
    - Machine Learning
mentors:
    - P.Mithun Balram
    - Alwin Tom Jose     
    
mentees:
- 5 students   
    
permalink: /soc/projects/2021/project-29
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
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom: 350px" >
        <br>
            Have a look at CodeBullet YouTube channel There are many interesting games solved by RL or deep RL agents https://youtube.com/c/CodeBullet
            <br>
            Go through the documentation of gym environments.I have implemented a q-learning agent for the Mountain car environment have a look: https://github.com/Mithun691/mountainCar-Qlearning
            <br>
            Reinforcement Learning: An Introduction Book by Andrew Barto and Richard S. Sutton is a great book for RL
            <br>
            Prerequisites: Python programming Calculus, linear algebra and probability theory
</p><br>
</div>
<div class ="d-flex">
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
      <td>Python conecpts revision and programming excercises</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Reinforcement learning concepts and finite state,action space based control algorithms like q-learning,SARSA etc.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Building, training, and fully connected deep neural networks for learning compex non-linear models</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Understanding model based RL techniques with games.Using DNN based models for training games with large state spaces like 2048,Tetris etc.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Buffer week to complete any pending checkpoints</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}


