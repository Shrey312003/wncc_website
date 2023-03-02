---
layout: project
title: Convolutional Neural Networks and Applications
project: Convolutional Neural Networks and Applications
topics:
    - Image Processing 
    - Machine Learning
mentors:
    - Aadarsh Raj   
    - Gudipaty Aniket    
    - Sibasis Nayak    
    - Sahasra Ranjan      
    
mentees:
- 8  
    
permalink: /soc/projects/2021/project-21
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
        This project aims to introduce use of Convolutional Neural Networks which is the state-of-the-art technique for various image-based machine learning problems.
        <br><br>
        We will cover the basic idea and theory behind the CNNs and implement it for two different projects. We are considering an image classification project and an image processing project for implementation, but the implementation projects are not fixed and can be changed later based on time constraints, mentees’ capabilities and other factors.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        Prior exposure to python is recommended (not much different from C++ you learned in CS101). You will be introduced to various libraries often used for data processing and machine learning. Apart from these tools, we will cover the structure and implementation of CNN from basics and will provide resources related to the topic.
        <br><br>
        We have selected two sub projects based on CNN. You will be assigned to one of them after you are comfortable with the basics of the topic and implementation. As far as the proposal is concerned, you should mention your previous exposure to python and machine learning techniques (if any). Also if you have any prior coding project experiences(any language and domain), you can mention them. We also won’t mind some coding puns in your proposal, although that won’t be associated with your selection :p.
        <br>
        Implementation Projects:
        </p>
        <ul style = "list-style-type:disc">
        <li class="display3 mb-2" style = "font-size:19px">Image Super Resolution Via CNN : For this, we attempt to improve the resolution of low resolution patches in a given image which may have arisen due to faulty imaging hardware or software degradation.</li>
        <li class = "display3 mb-2" style = "font-size:19px">Predicting Genre from Movie Posters: To train and create a model to learn features from movies’ posters and to predict the genre of the movie it represents with high probability.</li>
        </ul>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-2</strong></td>
      <td>Understanding the basics of  ML like Linear Regression, Logistic Regression, Neural Networks, etc..</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learning about Convolutional Neural Networks and their applications</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Getting familiar with implementation of neural networks and CNNs in python using Tensorflow/ Keras</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Understanding the architecture of project models, their implementation and training.</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Testing, Further improvements and Report</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
