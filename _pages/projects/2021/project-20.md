---
layout: project
title: Visual Perception for Self Driving Cars
project: Visual Perception for Self Driving Cars
topics:
    -  Machine Learning
    -  Image Processing
mentors:
    -  Aaron Jerry Ninan 
    -  Thomas Jacob     
    
mentees:
- 7   
    
permalink: /soc/projects/2021/project-20
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
        Computer Vision. You might’ve heard of this extremely versatile domain and some of you might even be familiar with it. With applications ranging from self-driving cars to say, automated translation, this is a very handy and not to mention, cool thing to know and in this project, we aim to do just that.
        <br><br>
        Pre-requisites: Python programming, and some basic ML experience might be helpful
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        We would implement various vision-based algorithms using machine learning to drive a car autonomously using a single front camera.
        <br><br>
        We would explore both end to end models and Pipeline based models. The Pipeline could contain various smaller models like depth estimation, 3d object detection, lane detection, semantic segmentation, visual odometry etc. Many papers are available online. We can train and test our models on any freely available simulators. We can even self-drive in games like GTA V ;)
        <br><br>
        If time permits, we could also explore Deep Reinforcement Learning algorithms, where the agent (AI) learns to drive through mistakes and reward.
        <br><br>
        Include the following in your proposal:-
        <br></p>
        <ul style = "list-style-type:disc">
        <li class = "display3 mb-2" style = "font-size:20px">Your understanding of the project</li>
        <li class = "display3 mb-2" style = "font-size:20px">Motivation</li>
        <li class = "display3 mb-2" style = "font-size:20px">Background and experience</li>
        <li class = "display3 mb-2" style = "font-size:20px">Weekly timeline based on your efficiency and background</li>
        </ul><br>
        <p class = "display3" style = "font-size:20px">
        Some References:-
        </p>
        <br><ul style = "list-style-type:disc">
         <li class = "display3 mb-2" style = "font-size:20px">End to End model by NVIDIA:- <a href = "https://arxiv.org/pdf/2010.08776.pdf">https://arxiv.org/pdf/2010.08776.pdf</a></li>
         <li class = "display3 mb-2" style = "font-size:20px">Similar Project on GTA V:- <a href="https://github.com/Will-J-Gale/GTA5-Self-Driving-Car">https://github.com/Will-J-Gale/GTA5-Self-Driving-Car</a></li>
         <li class = "display3 mb-2" style = "font-size:20px">Deep Learning Course:- <a href = "https://www.coursera.org/specializations/deep-learning">https://www.coursera.org/specializations/deep-learning</a></li>
         <li class = "display3 mb-2" style = "font-size:20px">Pytorch:- <a href = "https://pytorch.org/tutorials/">https://pytorch.org/tutorials/</a></li>
        </ul>
        <br>
</div>
<div class = 'd-flex'>
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
      <td>Get Exposed to Deep Learning along with coding frameworks like Tensorflow or Pytorch</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn about some advanced CNN architectures and setup of the simulation environment</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Implement the end to end model and train it on your collected Dataset</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Explore models for pipeline approach(Object detection , Depth estimation ,Lane detection)</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Conclude by comparing your results and document your learnings.</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
