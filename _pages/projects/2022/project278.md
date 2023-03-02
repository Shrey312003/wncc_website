---
layout: project
title: Seasons of Code
project: BloggerHead (Intro to MERN)
topics:
    - Web Development
mentors:
    - Dhananjay Kejriwal, Sartaj Islam & Mihika Dhok     
    
mentees:
- 6  
    
permalink: /soc/projects/2022/project278
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Through this project, you will learn all about Full Stack Web Development, right from the basics (HTML, CSS, Bootstrap, JavaScript) to the MERN stack (Mongo DB, ExpressJS, ReactJS and NodeJS frameworks).
Along with these, you will also gain some knowledge on authentication,  CRUD applications and RESTful API.
You will initially be working on a few mini projects, to head on our major project which is creating a blog website named BloggerHead, applying everything you've learnt till then. 
<br>
Prerequisites:

Basic programming techniques (CS101 will suffice)
Some experience in JavaScript or in general Web Development is an add-on (Soft prequisite)
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
      <td>Learn HTML, CSS, JS, Bootstrap </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Mini Project To-Do list</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Start learning ReactJS,NodeJS, ExpressJS, Redux</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Start major project Blog-Post app and connect to MongoDB database</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Get a working authentication process using JWT authentication and article posting</td>
    </tr>
     <tr>
      <td>Week 6</td>
      <td> Add features like edit blog, delete blog and like by users</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Implement react and redux in frontend and design all the pages using react-bootstrap</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Debugging and Final touch</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
