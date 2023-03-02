---
layout: project
title: Seasons of Code
project: Physicc - A Simple Physics Engine 
topics:
    - Computer Rendering / Physics 
mentors:
    - Rwitaban Goswami
    - Sanidhya Anand   
    
mentees:
- 8 students   
    
permalink: /soc/projects/2021/project-31
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
        Pre-requisites: Some understanding of Object Oriented Programming, and enthu!
        
        With this project you will get a very good idea of how the Rendering and Physics pipeline of a modern day AAA game works! We will give you an in house Renderer which you will use to render your objects. 
  <br><br>
        You will be required to first build a basic physics engine capable of performing the following tasks: 
        
  <br>
  </p>
<p class="display3 " style = "font-size:22px;" >
        1. Integration of Newton’s Equations of motion (figuring out positions from forces)
        2. Collision Detection
        3. Rigid body dynamics (including forces and torques)
        4. Constrained rigid body motion With these functionalities in place you will already have in your hands a physics engine pretty close to production quality With this finished, if time is left, you will explore more complex and efficient algorithms. You can also explore learning in detail and modifying the implementation of Rendering and our in-house Rendering Engine.
</p>
  <br><br>
        
  <p class= "lead" style = "font-size:30px;">Proposal:</p>
<p class="display3 " style = "font-size:22px;" >
        You need to submit a project proposal. Your proposal should include:

        Motivation to study rendering and physics
        Previous experience in coding
        Previous experience in working in a large codebase, if any (not mandatory)
        Previous experience in using any game engine, if any (not mandatory)
        Ideas for extra functionalities you can add to the Physics engine
        Ideas for other things you can explore once you are done adding functionalities
        Resources:

        Resources to learn about Physics Engines: https://www.toptal.com/game/video-game-physics-part-i-an-introduction-to-rigid-body-dynamics http://buildnewgames.com/broad-phase-collision-detection/

        Resources to learn about Rendering: https://learnopengl.com

        Link to Renderer: https://github.com/sanidhyaanand/Physicc
  </p>
  <br>
</div>
<div class = "d-flex flex-wrap">
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
      <td>Learn about Physics how a Rendering Engine works and the functionalities you would be implementing</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Implement Newton’s Equations of Motion</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Collision Detection</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Rigid Body dynamics</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Constrained motion</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Buffer</td>
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
      <td>Rendering a sphere and a box</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Making an object move</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Forces (Gravity)</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Collision detection</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Reaction Forces</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
