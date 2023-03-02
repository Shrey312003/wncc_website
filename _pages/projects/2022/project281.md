---
layout: project
title: Seasons of Code
project: Credit Card Fraud Detection
topics:
    - Machine Learning
mentors:
    - Ramkrishna Kamble, Rishabh Gupta & Raghav Gupta
    
mentees:
- 4-6
    
permalink: /soc/projects/2022/project281
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
        Credit Card Fraud Detection with Machine Learning is a process of data investigation and the development of a model that will provide the best results in revealing and preventing fraudulent transactions. <br>
        </p>
        <p class="display3" style = "font-size:22px;" >
Goals for the project:-<br>
1) Understanding the distribution of data that is provided to us.<br>
2) Understand common mistaked made with imbalanced datasets.<br>
3) Determine the Classifiers we are going to use and decide which one has a higher accuracy.<br>
4) Create a Neural Network and compare the accuracy to our best classifier.<br>
<br>
Simillar project -<a target='_blank' href="https://www.kaggle.com/code/janiobachmann/credit-fraud-dealing-with-imbalanced-datasets/notebook">https://www.kaggle.com/code/janiobachmann/credit-fraud-dealing-with-imbalanced-datasets/notebook </a><br>
        
<br>
Prerequisites:
N/A. Knowledge of basic python is plus.
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
      <td>Reading up on Python and basic of Machine Learning </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td> Understanding Data, Precocessing, EDA</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Dealing with imbalanced data</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td> Testing Classifiers like logistic regression, Randomforest, SVM, Naive bayes, etc.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Final Neural networks testing</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 