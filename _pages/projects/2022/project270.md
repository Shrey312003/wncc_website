---
layout: project
title: Seasons of Code
project: YARE YARE
topics:
    - Regular Expression Engine
mentors:
    - Shashank Balaji & Tirthankar Mazumder
    
mentees:
- 5-6
    
permalink: /soc/projects/2022/project270
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
    <p class="display3" style = "font-size:22px;" >
        <br>
        We will be writing a blazing fast 🚀 regular expression engine in C++20. We will implement the Thompson NFA algorithm to achieve speeds hitherto undreamt of.<br><br>

If there is time, we can look into benchmarking our engine against the standard library regex engine, and look into implementing ECMAScript compatible regular expressions.<br><br>

Resources:<br>
- <a href="https://swtch.com/~rsc/regexp/regexp1.html">https://swtch.com/~rsc/regexp/regexp1.html</a><br>
- <a href="https://kean.blog/post/lets-build-regex">https://kean.blog/post/lets-build-regex</a><br>
- <a href="https://262.ecma-international.org/12.0/#sec-regexp-regular-expression-objects">https://262.ecma-international.org/12.0/#sec-regexp-regular-expression-objects</a>
<br>
Prerequisites:<br>
Being enthusiastic about C++.

In your proposal, mention the following:<br>
1. Previous experience in programming, apart from CS 101 (in any language, preferably C++).<br>
2. Motivation for studying basic automata theory and parsing.<br>
3. Previous experience in working with medium-sized codebases (if any, not mandatory).<br>
4. Some basic knowledge of regular expressions.<br>
5. Anything else you feel is worth mentioning.<br>
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
      <td>Read up on the relevant theory (basic parsing, basic automata theory, etc.)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Implement the parser and AST.</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Implement the "lego blocks" for the NFA.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td> Construct the NFA from the AST using the "lego blocks".</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Brainstorm the Runner API and implement it.</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Integrate the NFA class with the Runner class.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Integrate the Google Test framework into the project, write tests for the engine and make them pass.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 