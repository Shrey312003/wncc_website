---
layout: project
title: Seasons of Code
project: Musify - Music Composition using AI
topics:
    - Machine Learning
mentors:
    - Abhijit Kumar
    - Amit Joshi
    - Soumya Sharma
    
mentees:
- 10
    
permalink: /soc/projects/2022/project272
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
        "“Where words fail, music speaks.”  
<br><br>
In the revolutionary age of Artificial Intelligence and Machine Learning, let us compose our own original music using Deep Learning without really knowing any music theory. 
<br>
The project is aimed to combine the area of music and Deep Learning to create an automatic music generation model. A variant of Recurrent Neural Networks i.e. LSTM is used to capture the long term dependencies in the input sequence.   
<br>
Who this project is for: 
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">One who is keen to dive in the interesting world of Machine Learning and Artificial Intelligence and want to learn it from scratch. </li>
<li class="display3 mb-2" style = "font-size:20px;">The project is ideal for beginners, as it starts from the fundamentals and gradually builds up your skills in Python, Machine Learning. </li>
</ul>
<br>
<p class="display3 project-desc" style = "font-size:22px;" >
Project Outcomes: 
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">
Introduction to the whole new world of machine Learning and Deep learning </li>
<li class="display3 mb-2" style = "font-size:20px;">Application of Deep Learning in Music Composition </li>
<li class="display3 mb-2" style = "font-size:20px;">Master the Deep Learning package: TensorFlow </li>
<li class="display3 mb-2" style = "font-size:20px;">Last but not the least, apply your coding skills to build an entire Project from scratch </li>
</ul>
 <p class="display3 project-desc" style = "font-size:22px;" >
Resources:<br>
Python Tutorial: <a href='https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7'>https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7</a>
</p>
<p class="display3 project-desc" style = "font-size:22px;" >
       Selection Procedure: </p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">Selection would be based on your SOP. Your SOP should include the motivation behind selection of this project or any particular inclination towards this topic.</li>
<li class="display3 mb-2" style = "font-size:20px;">You are advised to include any previous works done in Python, Machine Learning etc in your SOP, if any (not mandatory).</li>
</ul>
<p class="display3 project-desc" style = "font-size:22px;" >
Pre-requisites: </p>
<ul style = "list-style-type: disc"> 
<li class="display3 mb-2" style = "font-size:20px;">Basic Knowledge of any programming language will be appreciated, but no prior experience is required. We will start from scratch.</li>
<li class="display3 mb-2" style = "font-size:20px;">Your enthusiasm, involvement and interest to learn new things are required. </li>
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
      <td>Learning Python Basics </td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Complete Walkthrough of Numpy and Pandas </td>
    </tr>
    <tr>
      <td><strong>Week 3  </strong></td>
      <td>Explore Neural Networks and Deep Learning </td>
    </tr>
    <tr>
      <td><strong>Week 4 </strong></td>
      <td> Making Basic Models using TensorFlow</td>
    </tr>
    <tr>
      <td><strong>Week 5 </strong></td>
      <td> Development of Deep Learning model using LSTM </td>
    </tr>
    <tr>
      <td><strong>Week 6  </strong></td>
      <td>Model Implementation and Testing </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
