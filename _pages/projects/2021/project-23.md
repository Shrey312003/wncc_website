---
layout: project
title: Algorithm Visualizer
project: Algorithm Visualizer
topics:
    - Web Development
    - Data Structures
mentors:
    - Shashank Singh    
    
mentees:
- 2
  
permalink: /soc/projects/2021/project-23
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
    <p class="display3 project-desc"  style = "font-size:22px;" >
        <br>
        This project is for the people interested in exploring front-end web development and learning Data Structures and Algorithms.
        <br><br>
        Pre-requisites: Object oriented programming, Enthusiasm
        <br><br>
        Description: This project is for the people interested in exploring front-end web development and learning Data Structures and Algorithms. 
        </p>
         <p class="display3" style = "font-size:22px;" >
        The final goal of this project is to build a webpage for visualizing different pathfinding(e.g. A*, Dijkstra, BFS and DFS) and sorting algorithms. This would be done using HTML, CSS and JS. The source of this idea is the given project <a href = "https://github.com/clementmihailescu/Pathfinding-Visualizer">https://github.com/clementmihailescu/Pathfinding-Visualizer</a>.
        <br><br>
        The first 3-4 weeks of the project phase would be a learning phase, wherein the students would learn the basic data structures and algorithms and learn how to create dynamic webpages is built using HTML, CSS and JS. During this learning phase, the students have to complete certain regular checkpoints.
        <br><br>
        The last 1-2 weeks would focus solely on the the ideation and implementation of the webpage.
        <br><br>
        Students applying of this project should know the basics of programming especially object-oriented programming and of course enthu!
        <br>
    </p>
</div>
<div class ="d-flex">
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
      <td>DSA: Sorting algorithms, ADTs and linked lists WD: Building static pages using HTML alone.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>DSA: Stacks, queues and Trees WD: Building static pages using HTML and CSS</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>DSA: Graphs and Its implementation WD: Building basic dynamic pages using JS</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>DSA: Path finding algorithms WD: Extending more building dynamic pages using JS</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Ideation and implementation of the webpage</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
