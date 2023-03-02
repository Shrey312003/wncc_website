---
layout: project
title: Seasons of Code
project: Light (Rendering) Engine
topics:
    - Web Development
mentors:
    - Rwitaban Goswami
    - Neilabh Banzal   
    
mentees:
- 4 
    
permalink: /soc/projects/2022/project258
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
        <a href='https://github.com/Physicc/Light'>https://github.com/Physicc/Light</a>

Light is a lightweight game engine written in C++17. It is currently in development and is not yet ready for use

You will be working in developing and designing rendering algorithms, and implement the rendering subsystem of the game engine. Some of the systems you will be working on:<br>
1) Material System<br>
2) Blinn-Phong Shading System<br>
3) PBR Shading System<br>
4) Shadows				
        <br><br>
Prerequisites:
OOP knowledge, basic C++ syntax knowledge, basic Game Dev knowledge and enthu!!
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
      <td>Week 1</td>
      <td> Learn basics of rendering from learnopengl.com
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Implement basic rendering system using core opengl</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Setup and walkthrough the Light codebase on system</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Directional Lights, Spot Lights</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Directional Light, Spot Light Shadow Maps</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Material System</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Physically Based Rendering System</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
