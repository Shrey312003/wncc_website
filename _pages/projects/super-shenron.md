---
layout: project
title: Seasons of Code
project: Super Shenron
topics:
    - Web Development
mentors:
    - Aman Bharti   
mentees:
- Aditya Raj Singh Udawa
- Shrey Gupta
- Arjun Deshmukh
permalink: /soc/projects/super-shenron
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
        Super Shenron is an android application that lists all the dragon ball characters in card form with details such as Name, Planet of Origin, Species etc. and these characters are sorted on the basis of no of likes.
        <br><br>
        User can get info of any character, compare any two characters, create a favourite section and set different background of the characters .
        <br><br>
        We will be using Django for backend and React Native for frontend development.
        <br><br>
        <a href="https://www.youtube.com/watch?v=qSRrxpdMpVc&t=3235s">React Native Tutorial</a>
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
      <td>Software installation and learning basics of React Native and Django.</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Ideation and designing the structure of the application.</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>completing the frontend part and starting with backend.</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Completing backend part.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Debugging and adding some particular features to the application.</td>
    </tr>
  </tbody>
    </table>
</div>
{% endif %}
{% endfor %}