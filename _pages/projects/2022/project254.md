---
layout: project
title: Seasons of Code
project: CNN-lytical
topics:
    - Web Development
mentors:
    - Akshat Kumar
    - Vaibhav Raj 
    - Ashwin Ramachandran    
    
mentees:
- 15
    
permalink: /soc/projects/2022/project254
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
        The goal of this project is to make you well-versed with CNNs, enough that you can write an entire network in PyTorch from scratch. It will kickstart your journey into Deep Learning.				
        <br>
Prerequisite:
Well-versed with Python and Selection Assignment: <a href='https://docs.google.com/document/d/13QSgl5aUxiG2sLNOjez2j3q8GR0gzEoppl17ORRSSWQ/edit?usp=sharing' target="_blank">https://docs.google.com/document/d/13QSgl5aUxiG2sLNOjez2j3q8GR0gzEoppl17ORRSSWQ/edit?usp=sharing</a>
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
      <td>Week 1-2</td>
      <td>Introduction to Neural Nets, code up Multi-Layer Perceptron from scratch in Numpy (in a modular fashion) - Lectures 4, 5, 6
  </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>	Introduction to PyTorch, training NN for MNIST classifier.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Convolutional Neural Networks in PyTorch - Watch lecture (CS231n Lecture 7) and learn PyTorch implementation.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>YOLO (YOLO paper) implementation.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>UNet for Segmentation - Watch implementation at U-Net from scratch using PyTorch, read the paper at U-Net paper</td>
    </tr>
    <tr>
      <td>Week 7-12</td>
      <td>(i) GradCAM
        (ii) Self-Driving Cars Simulation
        and more....</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
