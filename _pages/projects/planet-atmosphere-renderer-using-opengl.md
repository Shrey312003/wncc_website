---
layout: project
title: Seasons of Code
project: Planet/Atmosphere Renderer using OpenGL
topics:
    - Computer Graphics
mentors:
    - Rwitaban Goswami  
    - Arpit Singh  
mentees:
    - Manan Garg
    - Andrews George
    - Deep Satra
    - Avin Rai
    - Harshit Srivastava
    - Ridayesh Parab
    - Raj Aryan Agrawal
    - Pradipta Parag Bora
    - Nabeel Ahmed
    - Sanidhya Anand
    - Rajvi Savla
    - Sambit Behera
    - Atharva Warhade
    - Dev Pratap Singh
    - Jay Vijay Sonawane
    - Mihir Shashikant Ghumbre
    - Meghna Dixit
    - Abhishek N Bhavsar
    - Ritik Mandal
    - Kaustubh Dighe
    - Shabnam Sahay

permalink: /soc/projects/planet-atmosphere-renderer-using-opengl
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
        Build a real time planet renderer engine.
        <br><br>
        This project is aimed towards people interested in the exciting field of Computer Graphics and Rendering, and would want to get a taste in how cutting edge Game Engines, especially the rendering part, work. The only pre-requisite for this project is some basic knowledge of C++ (very basic, not even OOP required), and of course enthu!
        <br><br>
        The aim of this project will be to ultimately build a real time engine capable of rendering a planet, complete with atmospheric scattering, terrain, light shafts, clouds and any other features that can be thought of.
        <br><br>
        Each mentee will have to first read up and get comfortable with OpenGL in C++
        <br>
        - <a href="https://github.com/paragchaudhuri/cs475-tutorials/tree/master/Tutorial_00">Link to setting up OpenGL</a>
        <br>
        - <a href="https://learnopengl.com/"> Link to OpenGL tutorial</a>
        <br>
        - <a href="https://www.cse.iitb.ac.in/~paragc/teaching/2019/cs475/">Other</a>
        <br><br>
        S/he should get familiar with the graphics pipeline, how to write GLSL shaders, how to write VBO and VAO code in OpenGL (C++), and the Modelling-Viewing-Pipeline. This is expected to take about a month.
        <br><br>
        Next the mentee will be expected to learn the basics of Shading- Gouraud, Phong, Blinn-Phong Shading. This is expected to take a week.
        <br><br>
        Next the mentee will be expected to research and find out how to implement planet specific shaders, eg atmospheric scattering shader, volumetric cloud shader etc. This is expected to take up the latter month of the project.
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
        <td  >Week 0</td>
      <td>Read some basic slides on rasterization, clipping, 2D and 3D transformations</td>
    </tr>
    <tr>
      <td>Week 1</td>
      <td>Setting up OpenGL and the first trivial example</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Understanding Boilerplate code, graphics pipeline and what VAO, VBOs do. Play around</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Understand Modelling-Viewing-Pipeline. Play around. Build a basic interactive movable model</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Understand and implement Blinn-Phong Shading. Introduce this to the interactive model</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Research on Atmospheric Shaders</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Implement Atmospheric Shaders (single/multiple scattering). It is really preferred if multiple scattering could be implemented</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Explore implementing Terrain, clouds, light shafts</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
