---
layout: project
title: Seasons of Code
project: AI Race Cars
mentors:
    - Kritin Agarwal
    - Yash Shah  
    
mentees:
- 6(freshies) + 4(sophies and above) 
    
permalink: /soc/projects/2022/project248
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
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        In this project, we’ll build an AI Race Car bot from scratch, and implement both basic Reinforcement Learning and Deep Reinforcement Learning techniques to achieve high scores.
        </p>
        <br>
        <p class="display3" style = "font-size:22px;" >
        Reinforcement learning (RL) is an area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward. A reinforcement learning agent is capable of learning on its own by exploring its environment to determine the best action to take in a certain situation.
        <br>
        For some cool stuff - <a href='https://www.youtube.com/watch?v=Zeyv1bN9v4A&ab_channel=UZHRoboticsandPerceptionGroup'>https://www.youtube.com/watch?v=Zeyv1bN9v4A&ab_channel=UZHRoboticsandPerceptionGroup</a>

<br>
Prerequisites:
For freshies: Basic knowledge of python and lots of enthusiasm
For sophies: Intermediate knowledge of python and ML 
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
      <td>Week 1</td>
      <td>Introduction to basic Reinforcement learning, MDP, and Dynamic Programming</td>     
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Getting familiarized with Open AI gym environments</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Learning various RL algorithms like DQN, PPO, A3C</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Deploying algorithms on simpler problems and car racing</td>
    </tr>
    <tr>
      <td>Week 8-9</td>
      <td>Further advancements by tuning hyperparameters, improving scores </td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
