---
layout: project
title: Seasons of Code
project: GANdualf
topics:
    - Machine Learning, Astrophysics
mentors:
    - Ojaswi Jain & Sandeepan Naskar 
    
mentees:
- 6
    
permalink: /soc/projects/2022/project280
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
        Goal: The development of a modified generative adversarial network (GAN) architecture to emulate the process of photometric observations of galaxies. 
This is an area of active research, this paper might help you understand what this is all about: <a href="https://arxiv.org/abs/2012.12825">https://arxiv.org/abs/2012.12825</a>.
</p>
<p class="display3" style = "font-size:22px;">
Naively, we have to develop and train a model to emulate catalogs of deep field and wide field surveys, and thus establish something that we call the transfer function.
Here, either just a single noisy observation is or a noisy observation, and in addition a much more accurate observation is available.
No worries if this seems cumbersome, we will start with small steps :)<br>
Feel free to reach out in case you need relevant clarifications.<br>

<br>
Prerequisites:
Familiarity with Python is a hard pre-requisite.
If you have an idea of how machine learning algorithms work, and if you have worked with PyTorch before, awesome! 
Some intuition of basic astrophysics, though not necessary, would be good.
The project might be a bit fast-paced, so do evaluate your proficiency in all of these first.
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
      <td  >Week 1-3</td>
      <td>Introduction to GANs and some Machine Learning Algorithms</td>
    </tr>
    <tr>
      <td>Week 4-6</td>
      <td> Design individual components of GANdualf, while working in teams of 2.</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td> Integrate all components, and look for possible bugs as a single team.</td>
    </tr>
    <tr>
      <td>Beyong week 8 </td>
      <td> Fine-tune the model on various original and doctored datasets, and compile results. </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 