---
layout: project
title: Seasons of Code
project: File Malware Detection System
topics:
    - Network and Cyber Security
mentors:
    - Rahul Bukte 
    - Taufeeque Mohammad 
    - Hitesh Kandala 
    - Anuj Srivastava 
    - Utkarsh Agarwal 
    
mentees:
- 8
    
permalink: /soc/projects/2022/project268
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
<div class = "project-desc" style = "margin-bottom: 140px">
    <p class="display3" style = "font-size:22px;" >
        <br>
We plan to develop a daemon to detect malware on local files.We will be covering the concept from file systems to machine learning models to detect if the file is malware. If time permits we will also make a Linux kernel module that will check for new files automatically.<br>

Prerequisites:
Basic C/C++/python
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:80px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td>Study filesystems</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>study ml models</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Start building filesystem based part of the malware detection system</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Start building model and integrate with filesystem</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
