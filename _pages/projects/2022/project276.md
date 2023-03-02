---
layout: project
title: Seasons of Code
project: CodeWars v3 Development
topics:
    - App Development, Web Development, Game Development
mentors:
    - Shubh Kumar & Karrthik Arya     
    
mentees:
- 4-6   
    
permalink: /soc/projects/2022/project276
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        After the tremendous Successes of the first two iterations of CodeWars. You get the chance to develop the next iteration of the game engine (besides deciding what it should be about!). The next iteration of the event would be for the Freshies of Batch '22.
<br>
The Goal would not just be to postulate a fair game and develop it, but also to package into (hopefully!) an executeable which could be used on all platforms, thereby eliminating the future participants' doubts regarding installation of Python.
<br><br>
</p>
<p class="display3" style = "font-size:22px;" >
Depending on What game you come up with, the learning outcomes of this project may be a subset of : Python Development Libraries (PyGame, Tkinter), Socket Programming, Server Programming, Graphics and Game Development using Unity, Software Packaging, Git, Github
<br>
Successfully completing this may also carry brownie points if you plan to be a WnCC Convener ;) 
<br>
Prerequisites:
Python, C++, Enthusiasm
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
      <td> Posulating a game, alongwith the framework of development : Accounting for ease in installation </td>
    </tr>
    <tr>
      <td>Week 2-4</td>
      <td>Developing the Game Engine</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Testing and Debugging</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Packaging</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
