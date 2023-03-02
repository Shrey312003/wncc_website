---
layout: project
title: Seasons of Code
project: Goal ICPC
topics:
    - Competitive Coding
mentors:
    - Shubham Anand Jain
    - Shubham Atri   
    
mentees:
- 6
    
permalink: /soc/projects/2021/project-3
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
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        The aim of this project is to train students who aim to do well at ICPC regionals. We will be covering a wide variety of content in Competitive Programming, and we will be asking you to participate in certain competitions in which we will discuss individual performances to understand where you need to improve to take yourself to the next level.
        <br><br>
        We are planning to take a small batch size, so that the content is tailored individually according to your strengths and weaknesses. At the end, we expect a short report of around 3-4 pages detailing what we went through in the entire program. The time requirement for this program will be somewhat high, since ICPC regionals are in May and the goal of this program is to prepare you for that. Bare minimum requirement: Have been 
        <strong>1600+</strong> rating on codeforces before the beginning of the program.
        <br><br>
        To apply for this project, fill this form - <a href = "https://forms.gle/Rm61n5jLmNsw6Y7J9">https://forms.gle/Rm61n5jLmNsw6Y7J9</a> . Also fill the mentee form shared by WnCC.
    </p>
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
      <td  >Week 1</td>
      <td>Discussion on strong and weak topics, what needs to be done for ICPC, setting of individual timelines and projects for each of the mentees.</td>
    </tr>
    <tr>
      <td>Week 2-5</td>
      <td>Discussion of topics that we are working on, discussion of performances on weekly training contests, understanding further roadblocks.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Completing a 3-page report on what topics were covered and what you learnt about your areas in need of improvement from the program.</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >1</td>
      <td>Solving ~20 problems on assigned topics from the instructor. Maintaining a notebook of topics that need to be worked on.</td>
    </tr>
    <tr>
      <td>2-4</td>
      <td>Solving 35, 50, 70 problems on assigned topics. Doing at least 1 contest per week on platforms such as codeforces or atcoder.</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Submission of completed work report.</td>
    </tr>
    <tr>
      <td>6</td>
      <td>(Bonus) Crossing 1900 (CM) or 2100 (Master) depending on the starting rating of the mentee. This is not a strict requirement since our goal is not rating, but if fulfilled this would be an additional bonus.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
