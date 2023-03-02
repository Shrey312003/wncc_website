---
layout: project
title: Seasons of Code
project: Virtual Keyboard
topics:
    - Augmented Reality
mentors:
    - Manan Kumar Garg    
mentees:
  -  Aanal Sonara
  -  Aashuraj Hassani
  -  Aashwin Agrawal
  -  Aayush Shrivastava
  -  Aditya Vijay Jain
  -  Akshat Vira
  -  ANKIT KUMAR JAIN
  -  Darin Jeff
  -  Devansh Saini
  -  DHANUSH S
  -  Harsh Kumar
  -  Harshavardhan Ragade
  -  Kritin agarwal
  -  Nirmal Shah
  -  Nitin Kumar
  -  Paarth Jain
  -  Pallavi Kochar
  -  Pavithra
  -  Rushil Hari Kopakka
  -  Sharvaree Sinkar
  -  Sudhansh
  -  Tanisha Khandelwal
  -  Vishesh Agarwal
  -  Yash Sharda 
permalink: /soc/projects/virtual-keyboard

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
        The project is about making a virtual keyboard that can be projected on any flat surface like a table and then can be used to type in real-time. To start with, we need to program image processing that senses touch at a certain key on the virtual setting of keyboard. after that we need to fetch programs for individual as well as combination of keys (ex. Shift + any letter = Capital).

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
      <td>Learn basics of image processing and software like unity</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Learn Basics of Augmented Reality</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Basic Program for detecting touches</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Final programming for keyboard</td>
    </tr>
    <tr>
      <td>Week 9-10</td>
      <td>Further advancements</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
