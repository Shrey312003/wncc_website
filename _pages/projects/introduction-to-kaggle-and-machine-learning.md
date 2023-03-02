---
layout: project
title: Seasons of Code
project: Introduction to Kaggle and Machine Learning
topics:
    - Machine Learning
mentors:
    - Yash Gupta
    - Pratyush Agarwal
    - Vrinda Jindal
mentees:
    - Nishant Abhangi
    - Satdhruti Paul
    - Krushnakant Dilip Bhattad
    - Kartikey Gupta

permalink: /soc/projects/introduction-to-kaggle-and-machine-learning
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded img-soc">
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
        <li><h5 class=" ">{{mentor}}</h5></li>
        {% endfor %}
    </ul>
    <h4 class="display3  ">Mentees :</h4> 
    <ul>
        {% for mentee in page.mentees %}
        <li><h5 class="">{{mentee}}</h5></li>
        {% endfor %}
    </ul>
</div>
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
        Get started with Machine Learning!
        <br><br>
        This project aims to teach basic machine learning using Kaggle competetions as a means. It will be tremendously helpful for one to learn modelling and especially cross validation. It will help you to learn all sort of modelling approaches and will forces you to think critically in the domain of data science.
        <br><br>
        This project will be very rewarding as you will find yourself open to a vast material of research upon grasping the basics. Implementation will be very useful for an indepth understanding.
        <br><br>
        Basic Programming skills is a prerequisite. The following points are a plus: 1) Background in ML/DL (include your previous projects) 2) Experience with Python
    </p>
</div>
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
      <td>Finish Linear Algebra, Vector Calculus, and Statistics refresher</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn/Brush-up Python, Jupyter Notebooks and Kaggle Environment</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn Linear Regression and  Basic Pytorch</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Complete housing price task on Kaggle</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learn Random Forests Classifier</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Complete Titanic Problem on Kaggle</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Learn Neural Networks</td>
    </tr>
    <tr>
      <td>Week 8,9</td>
      <td>Implement a CNN using PyTorch for the same task Digit Recognizer Task on Kaggle</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
