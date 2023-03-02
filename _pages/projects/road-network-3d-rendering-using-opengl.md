---
layout: project
title: Seasons of Code
project: Road Network 3D Rendering using OpenGL
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Debabrata Mandal    
mentees:
- Aman Yadav 
- Devansh Jain 

permalink: /soc/projects/road-network-3d-rendering-using-opengl

---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded img-soc">
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
        <li><h5 class=" ">{{mentor}}</h5></li>
        {% endfor %}
    </ul>
    <h4 class="display3  ">Mentees :</h4> 
    <ul>
        {% for mentee in page.mentees %}
        <li><h5 class="">{{mentee}}</h5></li>
        {% endfor %}
    </ul>
</div>
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
        This project focuses on the task of creating a UI for visualizing traffic flow in a city(a road network) using OpenGL. The problem of traffic congestion has seen different types of approaches from using simple heuristics to complex machine learning based approaches to predict correct traffic signals in a road network. This project does not aim to solve the traffic congestion problem! It will merely serve as a tool to help solving the aforementioned problem.
        <br><br>
<b>Details of Project :</b>
<br>
We will be using OpenGL to render a city and its various components. Elaborating the previous line , we will be creating models in C++ using OpenGL to simulate objects like roads, cars, traffic signals, road junctions etc (UI should be able to read object meshes provided by user for models). All this can be modeled in OpenGL without significant efforts , but the important part is to integrate the UI with the visual platform for e.g. rendering turns on roads as realistically as possible(using curve interpolations). The UI must be as simplistic as possible . This means user should be able to provide the road network in the form of a road network file or graphical description for simpler models like spheres etc. The major part of the project would be on improving a crude UI developed at first and adding extra features(as proposed by mentees). For example possible additions could be -
<br>
1. Allowing widely varying dimensions of vehicle models
<br>
2. Check for collisions and abort with proper messaging or feedback
<br><br>
<b>Project Requirements -</b>
<br>
Good level of experience with C++ , beginners level experience using OpenGL libraries in C++ is desirable. Note: This would be a coding intensive project and ability to debug your own code is a must.
<br><br>
<b>Reading Material:</b>
    <br><a href='https://ieeexplore.ieee.org/document/7312683'>Research Paper</a>
    <br><a href='http://www.opengl-tutorial.org/'>OpenGL</a>
    <br>Other resources are widely available online


</p>
</div>
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
      <td>Learn using OpenGL in C++ , i.e. start with view transformations, window creation, hierarchical modeling , GLSL Shading, camera positioning etc.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Start coding simple models like spheres, cubes, cylinders, surfaces.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn texture mapping for complex figures and add define basic prototypes for users like vehicles</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Design a basic UI in C++ to read in obj files and initialize objects correspondingly in the renderer.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learn Bezier curve(or any other) interpolation to determine trajectories and store in proper file formats.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Learning basics of animation in OpenGL and render the first road network animation.</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Modify UI to let user switch between multiple traffic light junctions to visualize performance.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Testing for collisions, add multiple vehicle models to 3D renderer.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
