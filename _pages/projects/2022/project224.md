---
layout: project
title: Seasons of Code
project: Text Summarization
topics:
    - Web Development
mentors:
    - Pulkit Jindal
    - Yash Chaudhary
    - Divyansh Agarwal 
    
mentees:
- 5-6   
    
permalink: /soc/projects/2022/project224
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
            Condensing a piece of text into a shorter version, lowering the size of the original text while keeping vital information and the meaning of the material, is known as text summarisation. Because manual text synthesis is a time-consuming and labor-intensive activity, task automation is becoming more common and hence a major motivator for academic study. In this project, I'll walk you through the process of using Natural Language Processing and Machine Learning to summarise text.
<br>
Some Resources =
https://thecleverprogrammer.com/2020/08/24/summarize-text-with-machine-learning/
https://medium.com/luisfredgs/automatic-text-summarization-with-machine-learning-an-overview-68ded5717a25 
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
      <td  >Week 1</td>
      <td>Learn Basic Python + Setup VS code </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction of Machine Learning and Deep Learning </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>SkLearn </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Problem Statement + Possible Solutions Explained</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Code + Final Testing and Further Possibilities</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
