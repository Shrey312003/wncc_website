---
layout: project
title: Seasons of Code
project: Competitve Coding
topics:
    - Competitve Coding
mentors:
    - Tarush Goyal     
    
mentees:
- <=3 students   
    
permalink: /soc/projects/2021/project-28
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
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom: 100px" >
        <br>
        Initially, mentees would focus on learning new ideas and algorithms. But eventually most of the time would be spent on implementing those algorithms using a suitable platform (preferrably codeforces) as a rating based approach helps to check track progress.
        </p><br>
</div>
<div class ="d-flex">
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
      <td>Learning simple concepts of HTML & CSS</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Learning how to use JavaScript & jQuery</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Intro to php</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Learning Angular and use it design webpages</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Developing a final website with all the concepts learned</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 0</strong></td>
      <td>CPP and CODEFORCES : revising basic cpp, making a basic template, making an account on cf, exploring the platform, making a submission, reading a tutorial</td>
    </tr>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Reading and practising algorithms like search, sort, simple greedy ideas</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>NUMBER THEORY: prime, divisibility, exponentiation, sieve etc.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>ADVANCED DS: vector, map, unordered map, queue, stack, list, dequeue</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>DYNAMIC PROGRAMMING: practising standard cases of dp and getting hands dirty on cf</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>BASIC GRAPHS: trees (dfs, bfs), storing graphs, basic properties, distance algorithms</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}


