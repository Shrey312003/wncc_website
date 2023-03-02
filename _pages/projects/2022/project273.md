---
layout: project
title: Seasons of Code
project: Remote Sensing and Image Visualization Using Deep Learning( AERIAL IMAGERY SEMANTIC SEGMENTATION)
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Abhishek Mahajan 
    - Isha Mukherjee
    
mentees:
- 7
    
permalink: /soc/projects/2022/project273
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
        In this Project We will be Studying the concept of resolutions in remote sensing, preliminaries for mathematical representation of the digital image, image enhancement, filters and transforms, feature evaluation, image classification, accuracy assessment.</p> 
        <p class="display3" style = "font-size:22px;" >
We will be Working on Aerial Imagery Data obtained by MBRSC Satellite and Segmenting it  Pixel-Wise into various classes/Regions by Researching and studying various Deep Learning Architectures and Algorithms involving Multi-Scale Context information. <br>
Pre-requistes:
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">Python </li>
<li class="display3 mb-2" style = "font-size:20px;">Basic Mathematics</li>
</ul>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>COMPLETION OF BASIC PYTHON TUTORIALS </td>
    </tr>
    <tr>
      <td><strong>Week 2-3 </strong></td>
      <td>UNDERSTANDING some Machine learning model related to the Project  </td>
    </tr>
    <tr>
      <td><strong>Week 4  </strong></td>
      <td>EVERYONE IS Required to do some TensorFlow / Pytorch coding Tutorials </td>
    </tr>
    <tr>
      <td><strong>Week 5-7 </strong></td>
      <td> Development of remote sensing, characteristics of remote sensors and platforms: optical, infrared and microwave sensor systems, recent trends in active remote sensing techniques: lasers and radars, Concept of resolutions in remote sensing, preliminaries for mathematical representation of the digital image, geo-referencing, image enhancement, filters and transforms, indices and color models, feature evaluation, image classification, accuracy assessment, change detection using ML. </td>
    </tr>
    <tr>
      <td><strong>Week 8-10 </strong></td>
      <td> Will train the Mentees to get familiar with the Dataset and learn to code the Data-loading and Data training part </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
