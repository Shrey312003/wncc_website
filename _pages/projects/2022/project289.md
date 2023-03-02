---
layout: project
title: Seasons of Code
project: Deep Reinforcement Learning for Equity Trading
topics:
    - Machine Learning
mentors:
    - Sanyam Singhal
    
mentees:
- 4
    
permalink: /soc/projects/2022/project289
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
    We will learn how does deep reinforcement learning works. We will then use it to find best trading strategies to maximize returns. Let us see if we can do better than pro-traders's strategies (aka technical analysis) :) . Some math and python programming background is all that you would need to get started with the project. 
<br>
Prerequisites:
1. Python Programming: Prior exposure to Python is required as we would be using NumPy heavily. You should at least be comfortable with writing functions, loops, and classes.
2. Probability: Over and above the probability knowledge from pre-JEE days, understanding of concepts like expectation, understanding of common distributions like Gaussian, Poisson would be desirable.
3. Vector Calculus: MA109/111 recap is sufficient (mainly understand how gradient works).
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
      <td  >Week 1</td>
      <td>: RL Basics: MDP Formulation, some basic algorithms (theory). Stock market basics.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Implementing the studied algorithms in Python on some toy problem from OpenAI Gym.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Project Problem's MDP formulation+Data Scraping</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td> Implementing studied algorithms for this problem and comparing the performance</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Going Deep: Basics of Deep Learning (theory+python)</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Understanding how to use Deep Learning in RL (theory+python)</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Implementing Deep RL in our project problem</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Benchmarking against rule based methods for trading.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 