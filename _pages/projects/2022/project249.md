---
layout: project
title: Seasons of Code
project: Data Encryption program in python
mentors:
    - Sachin Kumar
    - Prabhash Kumar   
    
mentees:
- 6 
    
permalink: /soc/projects/2022/project249
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Humans need to predict the future trends of various sequences in the best possible manner. By the end of this project, we will be able to exchange coded messages using our encrypted program. We will focus on symmetric-key encryption. That is, the same key will be used to encrypt and decrypt the message.
<br>
Prerequisites:
No prerequisites. But having knowledge of basics of web development will be preferred.
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
      <td>Week 1</td>
      <td>Basics of python</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Data security and cryptography</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Web development and Networking</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Matplotlib and Seaborn</td>
    </tr>
    <tr>
      <td>Remaining weeks</td>
      <td>Combining everything for project completion.</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
