---
layout: project
title: Seasons of Code
project: Child Face Generator
topics:
    - Machine Learning, Image Processing
mentors:
    - Manav Doshi & Kaivaly Daga 
    
mentees:
- 8-10
    
permalink: /soc/projects/2022/project287
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
        Have you ever wondered what you and your (celebrity) crush's kid will look like? Find out now by completing your SoC project.
<br>
Explore different Generative Adversarial Networks (GANs), which have been coined as the most exciting idea in machine learning in the past decade. These networks have limitless applications, from generating new celebrities' images to automated 3D object generation. We will convert parents' images to predict their child's image using FamilyGAN. 
<br>
In this project, we will implement various types of Convolutional Neural Networks(CNNs) for image processing and recognition and finally implement a Generative Adversarial Network(GAN) to predict childrens' faces from their parents. 
</p>
<p class="display3" style = "font-size:22px;" >
This is similar how "FaceApp" works. Our training dataset will consist of images of parents and their offspring. GAN is a kind of neural network that will be perfect for such tasks.<br>
I can surely think of a few applications for this :p. Deploying this on a web app would be a plus point, after all who knows if this website can be a hit on campus?
<br><br>

References:<br>
<a target='_blank' href="https://medium.com/swlh/familygan-generating-a-childs-face-using-his-parents-394d8face6a4">https://medium.com/swlh/familygan-generating-a-childs-face-using-his-parents-394d8face6a4</a><br>

<a target='_blank' href="http://cs230.stanford.edu/projects_fall_2019/reports/26256603.pdf">http://cs230.stanford.edu/projects_fall_2019/reports/26256603.pdf</a><br>

<a target='_blank' href="https://github.com/munozalexander/Child-Face-Generation">https://github.com/munozalexander/Child-Face-Generation</a><br>

<br>
Prerequisites:
Enthusiasm is required. Basics of Python are a bonus. <br>
The project could be a little heavy if you were to explore multiple methods. 
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
      <td  >Week 1</td>
      <td>Learning basics of GitHub and python.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Deep learning course of Coursera </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Building a basic CNN</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td> Literature review and setting up the problem</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Implementation of the model and testing it using the data</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Fix all errors and complete the documentation</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 