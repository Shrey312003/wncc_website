---
layout: project
title: Seasons of Code
project: IITinder 
topics:
    - App Development
mentors:
    - Payal Choudhary
    - Eshwar Rahul Puli       
    
mentees:
- 5 students   
    
permalink: /soc/projects/2021/project-45
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
        
        Okay,then how is it different from Tinder?
        The motive of the app is kind of similar to Bumble BFF/Friender. It should help IITians make new connections within and across institutions with the people(verified because they are your own batchmates) having similar interests.
        Want to make new friends? Need people to collaborate for a project? Need a Salsa/Prom Night Partner?Need a person to go for a walk/library? Wanna try out casual dating?
  <br><br>
        Five Problems, One Solution- IITinder.
 <br><br>
 

        Sounds Interesting? But what about the tech part?
        Keeping in mind the background of most of the people, we will use Android Studio(JAVA). If mentees are open to more challenging work we can work on Flutter as well. Do mention your preference in the proposal!
        For the backend, we will use Firebase to start with. If time permits, we can switch to more advanced frameworks.
</p>
        <p class="display3" style = "font-size:22px;" >
        We want to guide our mentees to create a well sophisticated application(APP) which would probably be in the smart phones of all IITians in the next few months. We have a basic pre idea of features that app should have, but if something creative comes up from our mentees we will be glad to hear and discuss.
<br><br>
        P.S:- Any background in android studio or app development in general will grab a little more attraction(NOT A PREREQUISITE). All we need is lots of enthusiasm and a “not giving up” spirit.
 </p> <br>
</div>
<div class = "d-flex">
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
      <td>Setting up Android Studio, Understanding Git and Version Control, Building your first App</td>
    </tr>
    <tr>
      <td><strong>Week 2-3</strong></td>
      <td>Basic Screens: Splash, Login, Registration, Contact Us</td>
    </tr>
    <tr>
      <td><strong>Week 4-5</strong></td>
      <td>Profile Building, Match Making Algorithms</td>
    </tr>
    <tr>
      <td><strong>Week 6-7</strong></td>
      <td>App Main Page: Feed, Features; Connections</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Buffer Week</td>
    </tr>
    <tr>
      <td><strong>Week 9</strong></td>
      <td>Final Testing and Fixing Bugs</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
