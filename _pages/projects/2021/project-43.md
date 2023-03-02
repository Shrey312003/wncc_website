---
layout: project
title: Seasons of Code
project: Watson (World's smartest assistant in your pocket)
topics:
    - machine Learning
mentors:
    - Anirudh Mittal 
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-43
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
        Description:

        What’s the screen time of your mobile phone? Have you used an app more than you wanted to? Have you faced trouble developing a positive habit using an app? Do you feel addicted to social media and find it difficult to ‘live in the moment’? If any of these questions mean something to you and you’re interested in android development, this project should be worth your attention.
</p>
        <p class="display3" style = "font-size:22px;" >

        I wish to see an app that’s smart enough like an assistant to help me know how I spend my time and then help me manage my time. Basic (and buggy) prototype of this project is available. Mentees will be first asked to get familiarized with the present code and then begin implementing other features.

<br><br>
        These links are from the ideation phase: https://drive.google.com/file/d/1OLidOb9bIo9bhA25xASy0nSClswLPe32/view?usp=sharing

        https://docs.google.com/presentation/d/1Cmshkh15D63yXtKHc0D_XIM1jebpBaJAoKUmxuPVmPA/edit?usp=sharing
<br><br>

Ideal mentees should have basic ideas about android development and should have made a couple of apps. Kindly share these apps while applying. If you have not done android dev before, you should still apply as long as you’re ready to put in the required efforts.
  </p>
  <br>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Basics of Android (Tutorials)</td>
    </tr>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Basics of Android (Hands-on)</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Code deubbging</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Release of Proof of concept (Version 1)</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Implementing feature #1 (User insights)</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Implementing feature #2 (TBD)</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Implementing feature #3 (TBD)</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Release of Protoype (Version 2)</td>
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
      <td><strong>1</strong></td>
      <td>Android basics</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Proof of concept</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Version 1.1</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Version 1.2</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Prototype</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
