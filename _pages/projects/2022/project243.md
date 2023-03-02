---
layout: project
title: Seasons of Code
project: (De)Noise
mentors:
    - Omkar Ghugarkar
    - Bhuvan Aggarwal   
    
mentees:
- 10   
    
permalink: /soc/projects/2022/project243
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
        Imagine waiting for your flight at the airport. Suddenly, an important call lights up your phone. Tons of background noise clutters up the soundscape around you — background chatter, airplanes taking off, maybe a flight announcement. You have to take the call and you want to sound clear. We all have been in this awkward, non-ideal situation. It’s just part of modern business. Background noise is everywhere. And it’s annoying. 
        <br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        In this project, we would do Speech Enhancement. Speech enhancement is the task of taking a noisy speech input and producing an enhanced speech output. 
        <br>
        How are we going to do?
        <br>
        We would be using focusing on deep learning techniques. Initially we will use autoencoders then move onto implement SEGAN (1703.09452)
        <br>
        Selection Procedure
        <br>
        Your selection would be based on your SOP and a small coding test in Python (If you are good with CS101 and have an intro to python, it should be a cake-walk)
        <br>
        Caution
        <br>
        This project would require good amount of commitment. But believe me, you would enjoy the journey and learn lots of Cool stuff.
        <br>
        Perks
        <br>
        Introduction to the whole new world of machine Learning and Deep learning
        Master the Deep learning packages like Tensor Flow, keras
        Apply the hottest technique in Deep Learning – GANs
        Get acquainted to various techniques in speech processing
        Last but not the least, apply your coding skills to build an entire Project from scratch
        <br>
        Resources
        <br>
        Python Tutorial - <a href='https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7'>https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7</a>
        <br>
        Speech Enhancement - <a href='https://medium.com/analytics-vidhya/noise-suppression-using-deep-learning-6ead8c8a1839'> https://medium.com/analytics-vidhya/noise-suppression-using-deep-learning-6ead8c8a1839</a>
<br>
Prerequisites:
A good understanding of concepts of CS – 101 is always good. It would be preferable if you have an introduction to Python. Don’t worry if you are not very comfortable with Python. Please go through the small Python tutorial attached in the resources section. Along with this, interest to learn new things and enthusiasm is must.
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
      <td>Week 1</td>
      <td>Introduction to Linear Regression and Logistic regression</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Get acquainted with Neural Networks and Deep learning</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Get acquainted with CNN's and RNN's and Resnet architecture</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implement the autoencoder model</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Read, understand and start implementing the GAN model of the Project using Tensor-Flow</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Buffer</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
