---
layout: project
title: Seasons of Code
project: Stock Market Analysis using basic Machine Learning
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Prashul Vaishnav
    - Goransh Gattani
    
mentees:
- 4
    
permalink: /soc/projects/2022/project294
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
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        Get to know the basics of python and its libraries, and learn how to apply them on real life data of Stock Market
</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Python basics like loop, variables, funcitons, lists, tuples</td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Git, google colab, python libraries like numpy, pandas, matplotlib

 </td>
    </tr>
    <tr>
      <td><strong>Week 3  </strong></td>
      <td>ML basics - supervised learning part 1 : linear regression, gradient descent, loss function, SVMs</td>
    </tr>
    <tr>
      <td><strong>Week 4  </strong></td>
      <td>ML basics- supervised learning part 2: logistic regression,  sgd, regularisation, bias/variance</td>
    </tr>
    <tr>
      <td><strong>Week 5  </strong></td>
      <td>ML basics- unsupervised learning part 1: KMeans clustering,  Hyperparameter tuning,
      </td>
    </tr>
    <tr>
      <td><strong>Week 6  </strong></td>
      <td>ML basics - unsupervised learning part 2: Metrics, error analysis, Classification metrics, regression metrics.</td>
    </tr>
    <tr>
      <td><strong>Week 7  </strong></td>
      <td>Stock market: implementation of the learnt concept in the project, implementation like, preprocessing and applying models</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
