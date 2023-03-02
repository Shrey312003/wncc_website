---
layout: project
title: Seasons of Code
project: Neural Style Transfer for Text and Chats
topics:
    - Machine Learning, NLP 
mentors:
    - Abhinav Raghuvanshi & Siddhesh Pawar
    
mentees:
- 6-8
    
permalink: /soc/projects/2022/project283
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
        Text Style Transfer (TST) is an important task in natural language generation, which aims to control certain attributes in the generated text, such as politeness, emotion, humor, and many others while preserving the context. As a use case for the TST algorithms, we would be making a simple Shakespearean paraphraser (See here, it's fine if you don't get the technical terms at the start, that’s what the mentors are here for !)</p>

<p class="display3" style = "font-size:22px;" >
Stage 1<br>
We aim to build a Machine Learning Model (a model is nothing more than a program that is backed by complex mathematical algos) that could manipulate the way you feel after reading a chunk of text. In simpler words you would be working on and learning how to make a program that could change the sentiment carried by that text without changing the content carried by the text.
<br><br>
Stage 2<br>
In this project, we would be working on neural networks as well as the recently introduced transformer models for text style transfer (starting with classical methods).
Towards the end, we would also be looking for application of style transfer algorithms to chatbots (this depends on individual progress at the end). <br>

<br>
Soft Prerequisites (Desired but not necessary):<br>
This project can be a great fit for you if you enjoy reading various genres of literature along with creative writing (Of Course enthusiasm for programming is a must ). We would also be considering a use case of author style transfer using neural networks. You should have working knowledge or some basic experience in python/C++ before applying (this needs to be mentioned in the SoP).
It is advised to send your SoP ASAP with commenting access so that we can add feedback and also get an idea if you're fit for the project.

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
      <td  >Week 1-2</td>
      <td>Revisiting Python and Introduction to the transformer library and pytorch</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Implementing RNNs and LSTMs in pytorch </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Basics of Neural Style transfer and implementing a RNN based TST model</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td> Implementing transformer based NST models</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Use case: Style transfer on Chats</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 