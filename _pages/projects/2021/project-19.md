---
layout: project
title: Astronomical Data-modelling and Interpretation
project: Astronomical Data-modelling and Interpretation
topics:
    - Image Processing
    - Machine Learning
    - Data analysis
mentors:
    - Jai Israni
    
mentees:
- 14 
    
permalink: /soc/projects/2021/project-19
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
        If you wish to get a flavour(yes more or less a flavour) of such techniques, find exoplanets that may support life, estimate galaxy redshifts, classify galaxies based on their visible shapes, do some image processing, then this project is meant for you.
        <br><br>
        Gone are the days when astronomers kept details of the heavens in their palm-sized journals. The Very Large Array Radio Telescope of New Mexico produces observational data at the rate of 1Tb/s or 36000Tb per night. To tackle these numbers, we develop intricate algorithms. 
        </p>
        <p class="display3" style = "font-size:22px;" >
        If you wish to get a flavour(yes more or less a flavour) of such techniques, find exoplanets that may support life, estimate galaxy redshifts, classify galaxies based on their visible shapes, do some image processing, then this project is meant for you. We follow methods that are way beyond conventional numerical techniques (that don’t work efficiently with modern data). The project involves learning for both astrophysics enthusiasts as well as lots of coding for programmers, and needless to mention it’s a mix of both for absolute beginners!
        <br>
    </p>
</div>
<div class = "d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class= "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Brushing up with Python</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Pulsar detection, Cross-matching astronomical catalogues</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Predicting and Classifying exoplanets, learning SQL</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Galaxy classification and estimating galaxy redshifts using regression</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Test of overall understanding</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
