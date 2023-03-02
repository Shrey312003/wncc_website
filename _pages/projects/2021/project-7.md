---
layout: project
title: Seasons of Code
project: Machine Learning Based Metropolitan Air Pollution Estimation
topics:
    - Web Development
    - Machine Learning
mentors:
    - Mufaddal Moni    
    - Manan Kumar Garg    
    
mentees:
- 10
    
permalink: /soc/projects/2021/project-7
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
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        The idea is to develop a spatial distribution model for Air Pollution for the city of Delhi using SVR (Support Vector Regression) and the model will be self enhancing using machine learning.
        <br><br>
        Description: The city of Delhi is chosen because of two reasons, first one being that it is one of the most polluted metropolitans in India and world, and secondly it is the city with more highest number of CAAQMS (Continuous Ambient Air Quality Monitoring Stations) in India. The data source for all the data will be website of CPCB (Central Pollution Control Board) and the model would be presented on a python based web interface.
        <br><br></p>
        <p class ="display3" style = "font-size:22px">
        The aim to develop this model is to provide a open source model for Research in this direction and my personal interest to work in the area of Ambient Air Quality Control.
        <br><br>
        This is not a entirely new idea and a lot of models have been made, but no open source model is available for Indian cities. Thus there are lot of research papers available on this topic on Google Scholar. A few of them which I suggest you to read are: <br><a href = "https://ieeexplore.ieee.org/abstract/document/7892954">https://ieeexplore.ieee.org/abstract/document/7892954</a><br> <a href = "https://www.x-mol.com/paper/1252735758843666432">https://www.x-mol.com/paper/1252735758843666432</a>
        <br><br>
        I do not expect much from, your proposal, The only need is enthusiasm to work in Machine Learning or Air Quality and Pollution would suffice. And it would be a fun learning process, where we all can learn together. No prerequisites, but some knowledge of Machine Learning or Python will be icing on the cake!
    </p>
</div>
<div class ="d-flex">
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
      <td>Complete Courses for Python and Pandas</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Theoretical Complete Courses on Machine Learning (being thorough with Support Vector Machines).</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Making Basic Models using TensorFlow</td>
    </tr>
    <tr>
        <td>Week 5-6</td>
        <td>Working On Final Model</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >1</td>
      <td>Completing Python and Pandas</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Completing Theoretical ML</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Basics of Tensor Flow</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Data Scraping and Data Preprocessing</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Completion of Final Model</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
