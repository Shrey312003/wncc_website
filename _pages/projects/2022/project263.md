---
layout: project
title: Seasons of Code
project: ParkIn
topics:
    - App Development
mentors:
    - Karrthik Arya
    - Laxman Desai
    
mentees:
- 5-6
    
permalink: /soc/projects/2022/project263
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
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        How many times have you got delayed for events, unable to find a decent parking space? How many time have you returned frustrated after a fun travel owing to parking ptoblems? Do you know  a recent global study of parking in major cities across the world suggests that an average city driver spends  about 18 to 20 minutes searching for a parking space, resulting in stress, wastage of fuel, increased emissions, congestion on streets, and decrease in productivity.
<br>
</p>
<p class="display3" style = "font-size:22px;" >
This project aims to solve these issues. We aim to develop an app to help locate free parking spaces near you. Let's say a user was using a particular parking place and is now leaving he can upload an image of the space on the app. This space would stay up on the app for certain time ( 4-5 mins). During this duration if someone nearby's looking for a parking space Voila! He's got one.This is the basic premise of the project.
<br>
Overall this can be a great way for people to dive in the world of app development. We would be covering basics that would help you out in both web and app development. Though the main focus would be on react-native which is what we would be using for developing our application.
<br>
The only prereq is the enthusiasm towards the project. Though do mention your motivation for working on this project along with your past experience in development or even coding in general. We would be having 2 frontend developers, 2 backend developers and 1 frontend designer for the project, so also mention the role you want to work on. 

</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th></th>
      <th>Tasks to be Completed</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td> The designer would start to work on the basic design for the website</td>
      <td> The developers would brush-up/learn basic HTML, CSS and JS </td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td> The designer would try to finish tmajority of the design for the project </td>
      <td>Frontend developers would move on to basics of front end development with major focus on react-native</td>
       <td>Backend developers would start to learn basics of backend development using neetJS and MongoDB </td>
    </tr>
    <tr>
      <td><strong>Week 3-4 </strong></td>
      <td> Frontend developers would start working on the Login Page and the landing page for the app </td>
      <td> Backend developers would start to implement the basic architecture for the server</td>
      <td></td>
    </tr>
    <tr>
      <td><strong>Week 5-7 </strong></td>
      <td>Frontend developers would work on the pages for uploading and finding spaces(Integrate with Maps)</td>
      <td>Backend developers try to finish the server and work on integrating it with the frontend</td>
      <td> Overall try to integrate all the components and finish off the app</td>
    </tr>
    <tr>
      <td><strong>Week 8 </strong></td>
      <td > Buffer to account for any delays above and finally deploy the app!!!</td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
