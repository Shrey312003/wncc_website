---
layout: project
title: Seasons of Code
project: Mini Motorways Solver
mentors:
    - Aditya Kadoo
    - Prerak Meshram    
    
mentees:
- 2-4   
    
permalink: /soc/projects/2022/project242
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
<div style = "margin-bottom: 140px">
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        Have you ever played the strategy simulation game "Mini Motorways"? If no, then go ahead and checkout it's gameplay. We are here to build the perfect ML based model to ace this game.</p>
        <p class="display3" style = "font-size:22px;" >
        Learn Python from scratch. Go through concepts of Graph Theory and Machine Learning. Code and test a solver on a simulation of the actual game. Innovate ways to extend this to real world traffic congestion problems by working with real world data-sets.
<br>
Prerequisites:
<br>
A good grasp of programming concepts from CS-101 is enough apart from great enthusiasm.
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td>Introduction to Python and git basics</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn about Graph and Heap data structures and implement various Path Finding algorithms.</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Get acquainted with frameworks such as numpy, pandas, sklearn, etc. and build up Machine Learning concepts like different kinds of optimisation problems, regression algorithms, neural networks, etc.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Creating a model for solving the game in Python</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Parameter tuning and testing</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Applying on a real world data-set</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
