---
layout: project
title: Seasons of Code
project: Rendera
topics:
    - Rendering 
mentors:
    - Divyansh Tiwari & Tirthankar Mazumder
    
mentees:
- 5-6
    
permalink: /soc/projects/2022/project269
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
You will be required to first build a simple raytracing engine which will be able to:</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">Generate a PNG image of a raytraced sphere.</li>
<li class="display3 mb-2" style = "font-size:20px;">Apply anti-aliasing.</li>
<li class="display3 mb-2 w-50" style = "font-size:20px;"> Accurately simulate different types of materials like metals and dielectrics.</li>
<li class="display3 mb-2" style = "font-size:20px;"> Mimic a real life camera and its features.(For example, depth of field).</li>
</ul>
 <p class="display3 project-desc" style = "font-size:22px;" >
If time permits, we can explore more complex features such as multi-threading, adding support for custom lighting, and loading in predefined meshes (.obj files). 
</p>
<p class="display3" style = "font-size:22px;" >
Reference materials:<br>
1) <a href="https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-ray-tracing">https://www.scratchapixel.com/lessons/3d-basic-rendering/introduction-to-ray-tracing</a><br>

2) <a href="https://learnopengl.com/Lighting/Materials">https://learnopengl.com/Lighting/Materials</a><br>

Resources for learning advanced real ideas:<br>
1)<a href="https://www.pbr-book.org/">https://www.pbr-book.org/</a>
<br>

Prerequisites:<br>
Some understanding of Object Oriented Programming in C++, and enthu!!<br>

Raytracing is an up and coming rendering technique which is becoming increasingly more relevant in today's gaming industry with games like Cyberpunk 2077. With this project, you will get a very good idea of how the raytracing pipeline works. <br><br>

You need to submit a project proposal. Your proposal should include: Motivation to study rendering and raytracing. Previous experience in coding. Previous experience in working in a large codebase, if any (not mandatory). Previous experience in using any rendering engine, if any (not mandatory). Ideas for extra functionalities you can add to the rendering engine Ideas for other things you can explore once you are done adding functionalities.<br>
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
      <td>Learn about how raytracing works and the functionalities you would be implementing.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>3D vector class. </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Implementing stb_image for generating PNGs and a basic ray class.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implementing a simple camera class and obtaining a primitive image.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Sphere class and surface normals.</td>
    </tr>
     <tr>
      <td>Week 6-7</td>
      <td>Implement an interface for hittable objects and add support for multiple objects in a scene.</td>
    </tr>
     <tr>
      <td>Week 8</td>
      <td>Antialiasing and materials and implement an advanced camera class.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
