---
layout: project
title: Machine Learning in Browser
project: Machine Learning in Browser
topics:
    - Web Development
    - Image Processing
    - Machine Learning
mentors:
    - Soumya Chatterjee     
    
mentees:
- 10-15 students   
    
permalink: /soc/projects/2021/project-25
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
        Traditionally, machine learning models have required huge amounts of computation power and could only be run on specialized hardware (GPU etc). 
        Thanks to the efforts to many researchers and developers, it is now possible to run these models right in your browser.
        <br><br>
        </p>
         <p class="display3" style = "font-size:22px;" >
        Description:
        <br>
        AI Experiments with Google(<a href = "https://experiments.withgoogle.com/collection/ai">https://experiments.withgoogle.com/collection/ai</a>) have some impressive tools and games which run in the browser. Some examples:
        </p>
        <ul style = "list-style-type:disc">
        <li class = "display3 mb-2" style = "font-size:20px">Teachable Machine (<a href = "https://experiments.withgoogle.com/teachable-machine">https://experiments.withgoogle.com/teachable-machine</a>): A fun tool to train an image classifier using image captured from your webcam.</li>
        <li class = "display3 mb-2" style = "font-size:20px">Emoji Scavenger Hunt (<a href = "https://experiments.withgoogle.com/emoji-scavenger">https://experiments.withgoogle.com/emoji-scavenger</a>): A game where you have to find real-world objects representing a shown emoji.</li>
        </ul>
        <br>
        <p class = "display3" style = "font-size:20px">
        In this project, we will start by deploying pre-trained models in the browser using tensorflow.js. Depending on the interest on the mentee, we can then implement fine-tuning (adapting a pre-trained model to new images) like in Teachable Machines. Or we can develop a gallery app which groups images into different categories (like in Google Photos).
        <br><br>
        Proposal: Mention you familiarity with Machine Learning, Python and JavaScript. Due to the relatively short duration, I expect you to have some knowledge of ML and Python. Knowledge of JS is not a hard requirement and you pick it up as you go along. Also mention your motivation to do the project, which of the two choices above you would want to work on and your familiarity/experience with the topics mentioned. Some web development experience will also be helpful.
        <br>
    </p>
</div>
<div class = "d-flex">
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
      <td>Recap of ML, Python and JS.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Deploy a pretrained MobileNet model in browser. Add support for uploading images and taking images from webcam.</td>
    </tr>
    <tr>
      <td><strong>Week 4-5</strong></td>
      <td>Add machinery for fine-tuning the models. Or make a simple gallery webapp.</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
