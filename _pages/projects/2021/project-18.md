---
layout: project
title: Si-Phy
project: Si-Phy

topics:
    - Development
mentors:
    - Rajdeep Yadav     
    
mentees:
- 4  
    
permalink: /soc/projects/2021/project-18
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
        Si-Phy is a short form for silicon physics. Physics simulated on a silicon chip.
        <br><br>
        Pre-requisites: Basic knowledge of Object oriented programming, and obviously a bit of mechanics knowledge.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        My goal is to create a light-weight physics engine(particularly for newtonian mechanics), that can be further used to create a lot of interesting simulations (some of which I have mentioned below). Depending on how familiar you guys are with C++ and python, we’ll choose one of these languages to build our engine.
        <br><br>
        Two things need to be developed in this project, first will be the physics engine itself, which will do all our physics calculations. Second will be a renderer, which will display our objects on screen. I plan to make the renderer as simple as possible, in turn we’ll focus on various physics systems.
        <br><br>
        I want to include the following features in the physics engine:
        </p>
        <ul style = "list-style-type: disc">
        <li class="display3 mb-2" style = "font-size:20px;"> Gravity: We’ll start with simulating a ball doing free fall under gravity.</li>
        <li class="display3 mb-2" style = "font-size:20px;">Friction and Normal forces</li>
        <li class="display3 mb-2" style = "font-size:20px;">Strings and springs</li>
        <li class="display3 mb-2" style = "font-size:20px;">Collisions</li>
        <li class="display3 mb-2" style = "font-size:20px;">Torque</li>
        </ul>
        <br>
        <p class="display3" style = "font-size:22px;">We’ll need the following features from the renderer.</p>
        <ul style = "list-style-type: disc">
        <li class="display3 mb-2" style = "font-size:20px;">Ability to display simple 3D shapes.</li>
        <li class="display3 mb-2" style = "font-size:20px;">Basic lighting</li>
        <li class="display3 mb-2" style = "font-size:20px;">races (To track movement of the objects)</li>
        </ul>
        <br>
        <p class="display3" style = "font-size:22px;">
        Depending on circumstances, we’ll also create some interesting simulations with our engine. What you wanna do with it is completely up to you, however just as a starting point I’m mentioning a few things that we can do.
        </p>
        <ul style = "list-style-type:disc">
        <li class="display3 mb-2" style = "font-size:20px;">Simple Harmonic motion.</li>
        <li class="display3 mb-2" style = "font-size:20px;">N-pendulum: Pendulums get extremely interesting when we link them. A very simple example: <a href = "https://www.youtube.com/watch?v=QXf95_EKS6E">https://www.youtube.com/watch?v=QXf95_EKS6E</a></li>
        <li class="display3 mb-2" style = "font-size:20px;">Tensegrity, the “impossible” table: <a href="https://i.pinimg.com/originals/ae/17/f5/ae17f5be987f05a170f6dc84ef54544e.jpg">https://i.pinimg.com/originals/ae/17/f5/ae17f5be987f05a170f6dc84ef54544e.jpg</a></li>
        </ul>
        <br>
        <p class = "display3" style = "font-size:20px">What I expect from the proposal:</p>
        <ul style = "list-style-type: disc">
        <li class = "display3 mb-2" style = "font-size:20px">Your familiarity with c++ and python.</li>
        <li class = "display3 mb-2" style = "font-size:20px">Your motivation to do the project.</li>
        <li class = "display3 mb-2" style = "font-size:20px">An interesting simulation you want to do with the project. This will be the major selection criteria. Describe what you want to do, and what exact components will be needed to build the simulation (For example, to build n-pendulum, you need to model gravity and strings). Also, don’t get over ambitious :P
        It does not need to be a long proposal. Keep it short and to the point. Feel free to contact me if you want help in determining what components are needed for the proposal.</li>
        </ul>
        <br>
</div>
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
      <td>One or two of you will work with me on the renderer, and others will work on implementing a world with (uniform) gravity.</td>
    </tr>
    <tr>
      <td><strong>Week 2-3</strong></td>
      <td>We’ll work on extending the model. Integrate Friction, Normal, strings etc with the systems. The work will be divided, so some of you will work on let’s say friction and normal, while some of you will work on Strings and springs.</td>
    </tr>
    <tr>
      <td><strong>Week 4-5</strong></td>
      <td>Developing your own simulation. You’ll work individually to use the physics engine to build a simulation model of your own, most likely the one you submitted in the proposal.</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
