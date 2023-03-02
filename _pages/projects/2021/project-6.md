---
layout: project
title: Seasons of Code
project: Tools for Data Science
topics:
    - Data Science
mentors:
    - Dev Moxaj Desai 
    
mentees:
- 4-6
    
permalink: /soc/projects/2021/project-6
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
        Have you ever wondered what data science is? Or how you should get started with it? This project answers those questions by helping one start off with data science.
        <br><br>
        This project aims at learning basic data science approaches like data transformations and data mining. By the end of the project, you could expect to be comfortable with basic manipulations to data and perform a few data mining techniques. You would also gain basic knowledge of popular python libraries (including but not limited to pandas, numpy, matplotlib and scikit-learn). This project will involve application of these concepts to a project using Python (you are free to choose the project but definitely can get recommendations).
    </p>
</div>
<div class ="d-flex">
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
      <td  >Phase-1</td>
      <td>Basic set up and learning basic data transformations</td>
    </tr>
    <tr>
      <td>Week-1</td>
      <td>Brushing up basics of python and do basic installations</td>
    </tr>
    <tr>
      <td>Week-2</td>
      <td>Learn basic data transformations</td>
    </tr>
    <tr>
      <td>First Goal(Tentatively)</td>
      <td>Apply a few transforms to a given dataset and plot the results</td>
    </tr>
    <tr>
      <td>Phase-2</td>
      <td>Learning data mining with practical examples</td>
    </tr>
    <tr>
      <td>Week-3</td>
      <td>Learn regression and classification and apply the techniques to fit a model</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Learn data mining techniques like clustering, association et al</td>
    </tr>
    <tr>
      <td>Week-6</td>
      <td>Implement the tools learned to make a basic project</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >1</td>
      <td>setup of python, libraries et al.</td>
    </tr>
    <tr>
      <td>2</td>
      <td>learn about transformations</td>
    </tr>
    <tr>
      <td>3</td>
      <td>perform transformation to a given data set</td>
    </tr>
    <tr>
      <td>4</td>
      <td>learning data mining techniques</td>
    </tr>
    <tr>
      <td>5</td>
      <td>applying the techniques to make a project.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
