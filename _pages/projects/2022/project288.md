---
layout: project
title: Seasons of Code
project: Stock Market Trend Predictor using Deep Learning
topics:
    - Machine Learning, Fintech, Stock Market
mentors:
    - Naman Singh Rana, Dhairya Parekh & Shikhar Mundra
    
mentees:
- 6
    
permalink: /soc/projects/2022/project288
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
        This project allows the mentees to explore their interests in the complex and intriguing aspects of equity trading. This project introduces the mentees to the domain of intersection between stock market and usage of deep learning in this field. Mentees will get a chance to imlpement a paper on short term stock market price trend prediction using comprehensive deep learning system. The solution involves pre-processing of the stock market dataset, utilization of various engineering techniques and a deep learning model for the prediction. 
<br>
Prerequisites:
Enthusiasm to learn about stock market and machine learning
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
      <td>Basics of Python + Basics of Stock Market</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basics of Trading + Python Library(numpy,matplotlib)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Reading Research Paper + Understanding the algorithm</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td> Implementing the code </td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Debugging + Simulation</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 