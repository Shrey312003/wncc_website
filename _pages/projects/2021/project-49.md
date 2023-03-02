---
layout: project
title: Seasons of Code
project: Procedurally Generated Infinite Open World
topics:
    - Graphics
mentors:
    - Raj Aryan Agarwal    
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-49
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
        
        This project is for people interested in the field of Computer Graphics and Rendering and this project will give a very good idea of the rendering pipeline used in modern game engines. The implementation will be using the OpenGL framework in C++. The engine should be capable of the following -
  <br><br>
  </p>
        <p class="display3" style = "font-size:22px;" >

        1.Procedural generation of landmass (https://en.wikipedia.org/wiki/Procedural_generation for more details) - It is upto you to make it voxel or continuous
  <br>
        2.3D cave systems
        <br>
        
        3.Level of Detail implementation with real time access to change detail of terrain
   <br></p>
<p class= "lead" style = "font-size:30px;">
        Reading Material: 
        </p>
        <p class="display3" style = "font-size:22px;" >
Set up openGL: https://github.com/paragchaudhuri/cs475-tutorials/tree/master/Tutorial_00 https://www.youtube.com/watch?v=4zjCqjfjcPs&list=PLRtjMdoYXLf4yTkXgyRBy5LXTFhdU7LWq
<br><br>
        Getting Started with openGL: https://learnopengl.com/ https://www.cse.iitb.ac.in/~paragc/teaching/2019/cs475/
<br><br>
        Noise generation for terrain: https://en.wikipedia.org/wiki/Perlin_noise https://en.wikipedia.org/wiki/Worley_noise
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
      <td>Set up OpenGL. Learn basics of how objects are displayed - rasterization and clipping. Render a simple triangle on screen</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Understand functionality of VAO and VBO. Build a single terrain patch (procedural not necessary at the moment)</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn perlin noise and generate procedural terrain patch. Add light system - Blinn Phong shading</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Add camera to allow for movement in game. Extend terrain to give an infinite landmass generating around view of player</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Add shading based on height and biome locations. Preferably add some good textures</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Add water bodies with reflection maps</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>(Bonus) Add cave systems, clouds and other ideas if you have the time</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
