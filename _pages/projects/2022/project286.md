---
layout: project
title: Seasons of Code
project: Competitive Coding
topics:
    - Competitive Coding
mentors:
    - Virendra Kabra
    
mentees:
- 6
    
permalink: /soc/projects/2022/project286
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
       Introduction to competitive programming, online judges like codeforces, and data structures and algorithms for the same.
Topics like binary search, sorting, divide-conquer, greedy algos, dynamic programming, graphs and their algos, and C++ STL: stacks, queues, lists, sets, maps. Some time can also be spent on C++ basics.
Reading material: online videos, geeksforgeeks, codeforces problem set.
<br>
Prerequisites:
N/A
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
      <td>: C++ basics and STL (data structures and methods), start on codeforces, build a template</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Sorting, Binary Search</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Graphs and BFS, DFS</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td> Divide-Conquer</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Dynamic Programming</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Greedy Algos</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 