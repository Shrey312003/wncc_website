---
layout: project
title: Seasons of Code
project: Loan Approval Prediction 
topics:
    - Machine Learning
mentors:
    - Utkarsha Patil, Yash Saraogi & Krishna Sirra
    
mentees:
- 15
    
permalink: /soc/projects/2022/project279
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
        This project will use Machine learning algorithms on real-time data to predict loan approval. Students will get introduced to Data science and ML. The project involves learning useful python libraries(NumPy, Pandas, Matplotlib, Seaborn), Data Preprocessing, Exploratory Data Analysis, Variable Sector. It uses different ML models (logistic regression, linear regression, SVM, etc.)
<br>
Prerequisites:
No Prerequisite. Only Enthusiasm for learning!
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
      <td  >Week 1-2</td>
      <td>Basics of python and Getting familiar with python Libraries (NumPy ,Pandas, Matplotlib, Seaborn)</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td> Mathematics for Data Science and Data Preprocessing , EDA & variable selector</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Different models(logistic regression , linear regression, SVM etc)</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Model Selection and Recap </td>
    </tr>
    <tr>
      <td>Week 8-9</td>
      <td> Working on Real time data, building model for the loan prediction</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 