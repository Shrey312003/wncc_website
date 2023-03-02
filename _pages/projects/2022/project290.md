---
layout: project
title: Seasons of Code
project: Numer.AI
topics:
    - Quantitative Modelling, Data Science
mentors:
    - Shubh Kumar, Sankalp Parashar & Ashwin Ramachandran
    
mentees:
- 2-10
    
permalink: /soc/projects/2022/project290
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        Numer.AI is a large and Decentralised Data Science Contest supported by many big names in the field, including Co-founders of Rennaisance Technologies. Proclaimed as the last hedge fund on Earth. Numer.AI is about building generalised Data Science Strategies for the actual market, which the people at the firm use to actually trade in the markets, and pay you back in their own Cryptocurrency.
</p>
 <p class="display3" style = "font-size:22px;" >
This is not a machine learning project, in the sense that we won't actually be using any heavy training requiring models. Instead we'll try to use the advanced versions of basic techniques in Bayesian Analysis for our purposes.
<br>
The Goal of this SoC Project would be to design a model which we could collectively submit, and henceforth participate in the contest.
<br>
We would also be ourselves designing models to participate in the contest and the mentees' models would be complementing ours using the ensemble learning strategies we learn about.
<br>
Prerequisites:
Python, A strong hold on Probability, Having done any course equivalent to CS 215 (Data Analysis and Interpretation) is a plus, so is any prior experience in Data Science or Ensemble Learning.
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
      <td>Go through material on Data Science and light weight Gradient-based Optimization and getting acquainted with Bayesian Learning </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Solve some basic challenges in Data Science and Bayesian Learning</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Explore various papers which seem fit for your purposes in Numer.AI</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td> Start Implementing versions of the paper</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Continue implementation, while at the same time exploring Methods for ensembling the models</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Final Debugging and submission</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 