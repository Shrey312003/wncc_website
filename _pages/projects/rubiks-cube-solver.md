---
layout: project
title: Seasons of Code
project: Rubik's cube solver
topics:
    - Development
    - Image Processing
    - Machine Learning
mentors:
    - Chaithanya Naik Mude    
mentees:
    - Amol Girish Shah
    - Manas Jain
    - Rohinee Joshi

permalink: /soc/projects/rubiks-cube-solver
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
        Rubik’s cube is one of the most fascinating 3-D combination puzzles we encounter. It is simple to understand the game, given a permutation we need to reduce the cube to a single goal state by rotating it. In this project, we will accomplish solving this cube with as minimum rotations as possible using the ideas of reinforcement learning.
        <br><br>
        <b>There will be three modules that need to be completed.</b>
        <br>
        1. Given the details about the faces of the cube, solve the puzzle in the back-end
        <br>
        2. Given an image, extract the details about the faces of the cube using various image processing and possibly ML techniques
        <br>
        3. Develop an user interface for the above solution
        <br><br>
        References:
        <br>
        <a href="https://www.nature.com/articles/s42256-019-0070-z">https://www.nature.com/articles/s42256-019-0070-z</a>
        <br>
        <a href="https://arxiv.org/abs/1805.07470">https://arxiv.org/abs/1805.07470</a>
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
      <td>Learn python and python-on-android, play with Rubik’s cubes to get a clear grasp about the problem. Try pycuber, a python package for dealing with Rubik’s cubes, which helps in creating graphical user interface.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Go through the available literature on the problem. Understand basic algorithms and concepts of Reinforcement learning pertaining to the problem.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Try out various Q-learning, Deep Q-learning examples and MCTS.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implement Deep Q-learning and MCTS for our problem.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Measure performance against benchmark and hyper-parameter tuning.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Buffer week to finish up with documentation</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Given an image taken from a good viewpoint, extract the details.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Create a graphical user interface to upload the images of the cubes and return with an animation of the solution.</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Buffer week to finish up with presentation and documentation</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
