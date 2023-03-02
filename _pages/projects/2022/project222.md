---
layout: project
title: Seasons of Code
project: Object detection using Machine Learning
topics:
    - Web Development
mentors:
    - Aman Bharti     
    
mentees:
- 4-5   
    
permalink: /soc/projects/2022/project222
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
       1) Using Machine learning to detect objects present in an image with the location of the 
     object represented with a boundary on the image<br>
2) Studying the difference between image classification and object detection and 
     implementation of both<br>
3)Exploring various object detection algorithms <br>
4)Training models on predefined datasets for various images
</p>
<p class="display3" style = "font-size:22px;" >
Resources:</p>
 <ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:22px;"> Course on ML by Andrew Ng </li>
<li class="display3 mb-2" style = "font-size:22px;"> Deep learning specialization (CNN Course) by Andrew Ng</li>
</ul>
        <br>
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
      <td>Basics of machine learning</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Implementation of ML on python </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Image classification and object detection</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Various object detection algorithm</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implementation of some basic image classification and object detection algorithm</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Final implementation and debugging</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
