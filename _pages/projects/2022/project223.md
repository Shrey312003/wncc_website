---
layout: project
title: Seasons of Code
project: Intro to Competitive Programming
topics:
    - Web Development
mentors:
    - Shivang Tiwari
    - Vipul Singh     
    
mentees:
- 5-6   
    
permalink: /soc/projects/2022/project223
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
<div style = "margin-bottom: 140px">
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
            This is meant to be a basic competitive programming project. Participants are required to participate in as many contests as possible on websites like codeforces, codechef, atcoder etc and then discuss it after the contest ends. 
            </p>
             <p class="display3" style = "font-size:22px;" >
            As a part of theory, I plan to cover basic STL and some data structures/Algorithms from my library. Later parts can cover some intermediate topics like square root decomposition, matchings etc.
            <br><br>
            Prerequisites: Basic knowledge of C++ (CS 101) 
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td >Week 1</td>
      <td>Basic syntax revision, C++ refreshing</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction to STL</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Some important data structures not in STL(union find, RMQ etc)</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>First 10 problems of Introductory Problems/CSES</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>First 10 problems of Sorting and Searching/CSES</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Theory on dynamic programming + First 10 problems of Dynamic Programming/CSES</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Theory on graphs + First 5 problems of Graph Algorithms/CSES</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
