---
layout: project
title: Seasons of Code
project: Tools for Web Development
topics:
    - Web Development
mentors:
    - Vishal Kaushal 
mentees:
    - Ashutosh Yadav
    - Ginjala Varshini
    - Gurnoor Singh Khurana
    - Jos katiyare
    - Nikhil Kumar
    - Prapti Kumar
    - Prathmesh Namdeo
    - Sagar Prasad
    - Sahil Suman
    - Shivani Bagri
    - Danish Angural
permalink: /soc/projects/tools-for-web-dev
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
        Basic focus on learning coding related to different tools such as HTML, CSS, JavaScript, PHP, Angular and others required to develop a responsible Website.
        <br><br>
        <b>Reading Resourses</b><br>
          1) <a href="https://www.w3schools.com/">W3Schools</a> <br>
          2) <a href="https://www.sololearn.com/">SoloLearn</a><br>
          3) <a href="https://www.geeksforgeeks.org/">GeeksForGeeks</a><br>
          along with video references from internet platforms(YouTube, CourseEra, Udemy, etc) and others based on work required<br>
          4) <a href="https://www.tutorialspoint.com/codingground.htm">Online Editor</a><br>  
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
        <td>Learning HTML and CSS and implementing it in webpages</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Learning JavaScript and jQuery and implementing it in webpages</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Learning PHP and implementing it in webpages</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Learning Angular and Django(if time permits) and designing a webpages using it.</td>
    </tr>
    <tr>
      <td>Week 9-10</td>
      <td>Develop a final Website using all the tools learned.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}