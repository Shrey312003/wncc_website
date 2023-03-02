---
layout: project
title: Seasons of Code
project: Book Tracker
topics:
    - Web Development
mentors:
    - Saket Kumar
    - Sachin Kumar      
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-37
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
        Prerequisite : Basic knowledge of website and app development, must be familiar with one or more coding languages. Should be familiar with the terms like frontend and backend. Knowledge of any of the tools mentioned below will be given priority. All you need is a lot of dedication and enthusiasm, need to be calm and patient while your code gives an error, and have a learning attitude.
  <br><br>
  </p>
<p class= "lead" style = "font-size:30px;"> 


Description:
</p>
        <p class="display3" style = "font-size:22px;" >

 We will be building an app that gives the status or track of books that someone has already issued; this is to help those who are looking for that particular book, this help in the manner that he/she can approach the person directly for temporary help or either wait for the person to return that book to the library so that he/she can issue that book immediately. This will help the required person immediately as well as make the book of it’s best use. This idea can indeed be extended to many things and ease the book issuing system in the library.
<br>
</p>
<p class= "lead" style = "font-size:30px;"> 

Procedure: 
</p>
        <p class="display3" style = "font-size:22px;" >
If a person issues a book, he/she will update or add to the app and mention the book’s name; by filtering this book, anyone (with the app installed and registered/authenticated) can know about the book. The idea is to resolve real-life problems.

<br><br>
Resources can find the link : < https://docs.google.com/document/d/1X18AAu01-kwY4c62lV7HUnKA6qsXp56TDkSWJjQ3fGY/edit?usp=sharing >
<br><br>
Proposal expectation: The proposal must not exceed 150 words. Your motivation. Why this project? Your expectation from this project. Describe your previous experience related to the tool mention(if not experienced, describe your coding skills).
  </p>
  <br>
</div>
<div class="d-flex">
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
      <td>It is expected from all the mentees to go through all the resources provided and learn the basics of all the tools that are required for the project. Setting up firebase authentication»flutter»Api. Structure for app backend should be completed. Authentication system must be completed(backend + app screen), Testing should also be completed. </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>All api(6 or 7) should be finished.(2-3 mentees). All different screens should also get finished.(2-3 mentees)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>API Integration. Bug solving</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Final testing. Deployment</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
