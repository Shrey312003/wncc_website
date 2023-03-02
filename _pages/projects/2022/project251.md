---
layout: project
title: Seasons of Code
project: Learn to Cartoonize
mentors:
    - Bhavesh Patil
    - Valay Bundele
    - Vrinda Goyal   
    
mentees:
- 8-10 
    
permalink: /soc/projects/2022/project251
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
        This project aims to introduce you to Deep Learning with the amazing and fun application of Generative Adversarial Networks that is image cartoonization. You will learn how to navigate your way further in the arena of Machine Learning and Artificial Intelligence.
        <br>
        Link to the CartoonGan paper - <a href='https://ieeexplore.ieee.org/document/8579084'>https://ieeexplore.ieee.org/document/8579084</a> 
<br>
Prerequisites:
N/A
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
      <td>Read about the basic ML techniques like linear/logistic regression and neural networks, learn python</td>     
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn about Convolutional Neural Networks(CNNs), various deep learning architectures and PyTorch/TensorFlow</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Understand the working of GANs and the main paper</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Work on the implementation of the paper</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Project documentation + Buffer</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
