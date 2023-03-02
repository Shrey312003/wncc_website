---
layout: project
title: Seasons of Code
project: Moodify
topics:
    - Machine Learning
mentors:
    - Abhishek Pai Angle
    - Divyanshi Kamra    
    
mentees:
- 10-11 students   
    
permalink: /soc/projects/2021/project-40
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
        The project targets to build a music recommender system which takes in your picture and then predicts your mood and accordingly predicts a song for you.
        <br>
        Pre-requisites: Enthusiasm and a positive learning attitude Comfort with the concepts from CS101 and a little of Python is a plus but not mandatory
        <br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        What all will be required to complete this project ? To carry out this project we’ll use Machine Learning, Deep Learning, Computer Vision and maybe some APIs and development tools too if time permits.
        <br>
        

        How do we wish to accomplish it ? We’ll first build a Face Recognition and mood predictor model using Convolutional Neural Networks (CNNs) and later integrate it with a music recommender system. If time permits, we’ll integrate this using the Spotify API to allow more variability in the selection of songs and finally deploy it as a web application.
        <br>
        Selection Procedure: First filter through SoP and later can have an interview or a small assignment
        </p><br>
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
      <td>Go through resources of python, machine learning, image processing</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Run basic ML models and  get introduced to deep learning( ANNs, CNNs)</td>
    </tr>
    <tr>
      <td><strong>Week 4-5</strong></td>
      <td>Get introduced to transfer learning and start implementing research papers</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Build a face recognition model using CNNs</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Build a music recommendation model using ML techniques</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Integration of the face recognition and music recommendation model</td>
    </tr>
    <tr>
      <td><strong>Week 9</strong></td>
      <td>Deployment of the model into a web application</td>
    </tr>
    <tr>
      <td><strong>Week 10</strong></td>
      <td>Buffer Time</td>
    </tr>
  </tbody>
</table>
</div>
</div>

{% endif %}
{% endfor %}
