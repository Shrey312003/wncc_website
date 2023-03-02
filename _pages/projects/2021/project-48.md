---
layout: project
title: Seasons of Code
project: Break free of the matrix, by building one!
topics:
    - Competative Coding
mentors:
    - Laxman Desai     
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-48
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
        
        From background removal to Google’s PageRank algorithm! Matrices form the backbone of today Computer Science! As the title says, this project will give you a whole new perspective on what you’ve been learning from school (matrices) and probably life too! This project aims to give you a good understanding of some of the algorithms that make all this possible. We will build a matrix library, and then see it’s applications in solving linear recurrences, specifically for competitive programming (Project Euler 25, 258 and more possibly)

        Our library would be lightweight, optimised and templated with functionality similar to how matrices work in MATLAB or NumPy. It would also support Matrix factorizations (LU, QR, SVD and Spectral Decomposition) and would only depend on the standard library.

        We will then use all the knowledge gained to build a linear equation solver.
  </p>
  <br>
</div>
<div class="d-flex">
<div>
    <h4 class="display3 " style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
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
      <td>Brush up on Linear Algebra Concepts, and learning new things such as QR, LU, SVD</td>
    </tr>
    <tr>
      <td>decompositions.</td>
      <td>&nbsp;</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Brush up on C++, with high focus on OOP concepts. Understanding a few DSA topics (complexity analysis, std::vectors)</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Building a base matrix template class, and implementing a simple QR decomposition to test it.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Adding various factorisations to help solve linear equations. Stress testing our code and writing docs.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Understanding Linear Recurrences, starting with basic stuff like Fibonacci calculations using matrices and end by solving <a target="_blank" href="https://projecteuler.net/problem=258">PE258!</a></td>
    </tr>
  </tbody>
</table>
</div>
</div>

{% endif %}
{% endfor %}
