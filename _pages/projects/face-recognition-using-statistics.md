---
layout: project
title: Seasons of Code
project: Face Recognition using Statistics
topics:
    - Machine Learning
mentors:
    - Shreya Pathak
    - Mohammad Ali Rehan       
mentees:
    - Harshit Gupta
    - Vibhav Aggarwal
    - Sanskar Jaiswal

permalink: /soc/projects/face-recognition-using-statistics
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
        This project aims at introducing the student to the use of statistics in machine learning. We will present several tools such as Principle Component Analysis giving them a theoretical and practical understanding of the same. After completing the basics we will apply the learned concepts and build a simple face recognition system and implement some parts of a paper on the same.
        <br><br>
        There are no hard prerequisites. We will start from the very basic. All that is required is an interest in statistics and ML and enthusiasm to work. The reading material and other resources on ML and statistics will be provided as the project advances though an interested student can look at books and online resources.
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
        <td  >Week 1-2</td>
      <td>Learning about PCA from online course provided by us and get a basic understanding of coding in MATLAB</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Solve the problem set to strengthen the concepts and implement a basic version of PCA in MATLAB</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Read and understand the parts of the paper given to them</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Implement the paper and optimise if time permits.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
