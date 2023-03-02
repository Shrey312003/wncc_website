---
layout: project
title: Seasons of Code
project: threeD (Novel Scripting Language)
topics:
    - Web Development
mentors:
    - Rwitaban Goswami 
    
mentees:
- 4 
    
permalink: /soc/projects/2022/project259
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
        We will be working on implemented a brand new programming language, specifically purposed to be integrated into the scripting engine of the game engine Light

Working on this project will teach you the basics of compiler theory, as well as working in a large scale project
</p>
<p class="display3" style = "font-size:22px;" >
To get an idea of how to implement a programming language: <a href='https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html'>https://llvm.org/docs/tutorial/MyFirstLanguageFrontend/index.html</a><br><br>

To learn compiler theory in depth, read the Dragon Book			
        <br>
Prerequisites:<br>
Basics of C++ and OOP, basics of Game Dev and enthu!!
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
      <td>Week 1</td>
      <td> Learn basics of Lexing, Parsing
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Design the basic syntax and rules of threeD</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Implement lexing in LLVM</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implement parsing in LLVM to form AST</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Convert AST to LLVM IR</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Add loops and conditionals</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Buffer (add more language features)</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
