---
layout: project
title: Seasons of Code
project: "Data Structures, Algorithms & CP"
topics:
    - Competitive Coding
mentors:
    - Divyansh Srivastava  
    
mentees:
- 10 
    
permalink: /soc/projects/2022/project264
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
        We will be starting right from the basics of a programming language and dive into different concepts of data structures. We will be thoroughly studying different algorithms that work with data structures and are used to solve real world problems. 
        </p>
        <p class="display3" style = "font-size:22px;" >
        Then we will be heading towards some competitve coding websites to prepare for applications of learnt data structures and algorithms in real world problems. The motive of this project is to make a candidate comfortable with different DSA concepts and prepare them for different DSA competitions/tests.
<br>
Prerequisites:
Basic level knowledge of atleast one programming language (usually if you have done CS 101,  you are good to go).
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>Basics of programming (Learning libraries and functions in c/c++, python)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>data structures & linked algorithms (variables, arrays, sorting)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>data structures & linked algorithms (searching, linked lists, hashing)</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>data structures & linked algorithms (trees, tree traversals, graphs)</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>data structures & linked algorithms (graphs searches, graph traversal)</td>
    </tr>
     <tr>
      <td>Week 6</td>
      <td>advanced algorithms & Competitive programming (dynamic programming, greedy techniques + solving coding questions/contests on websites)</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
