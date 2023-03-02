---
layout: project
title: Seasons of Code
project: Personality detection using data from social media
topics:
    - Machine Learning
mentors:
    - Sohom Mandal
    
mentees:
- 8-12
    
permalink: /soc/projects/2022/project267
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
The project is based on the simple ML techniques such as KNN,CNN, logistic regression. It basically classifies the personality into 5 major kinds of personalities. This concept can be used in many social media sites and then usen it to filter their choices and indeed filter their recommedation.<br>

Prerequisites:
N/A, little knowledge about ML is a plus point :)
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
      <td>Intro to ML with linear regression</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Moving onto bayesian naive  method and logistic regression </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Classification, CNN and KNN introduction</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Learn more about the tensorflow library</td>
    </tr>
    <tr>
      <td>Week 5,6</td>
      <td>Learn more about the CNN and KNN algorithm using examples and applying the above learnt techniques in a proper project</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
