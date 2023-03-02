---
layout: project
title: Seasons of Code
project: Gestures for 3D space
topics:
    - Machine Learning
    - Image Processing
    - Development
mentors:
    - Pranav Pagar
    - Siddhesh Pawar

mentees:
- Kshitij
- Abhinav Gupta
- Ankit Kumar Misra
- ANUPAM NAYAK
- Jai Israni
- Jash Shah
- Atharva mete
- Tejas Pagare
- Meeta Malviya
- Senthil Vikram Vodapalli
- Manan Goyal
- Richeek Das
- Rishab Khantwal
- Rohit Vartak
- Shrey Singal 
    
permalink: /soc/projects/gestures-for-3d-space
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
        Have you ever wondered what will be the future of interaction with computers or smart devices. Well here is a clue, its going to be touch less.This project will contain the research part as well as the development (front end and back end) part of the technology.
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
      <td>Research on the type of hand gestures and the possible ways of doing them</td>
    </tr><tr>
      <td>Week 2</td>
      <td>Exploring existing modules for hand recognition and using them in different applications</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Creating your own module on the basis of the previous problems you faced.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Creating a problem statement for an application (for front end design)</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Body tracking and monitoring</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Creating 2nd problem statement for an application (based on body tracking)</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Front end development.</td>
    </tr>
    <tr>
      <td>Week 9-10</td>
      <td>Refining and final presentation</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
