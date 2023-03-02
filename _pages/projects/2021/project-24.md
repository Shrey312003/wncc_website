---
layout: project
title: Anime Club IITB Website using Django
project: Anime Club IITB Website using Django
topics:
    - Web Development
mentors:
    - Kshitiz Udainiya
    - Chirag Garg      
    
mentees:
- 3-4
    
permalink: /soc/projects/2021/project-24
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
        The selected students will work together to build the Anime Club IITB website from scratch using django
        <br><br>
        Pre-requisites: Motivation, Dedication and enthusiasm :)
        <br><br>
        Description: The selected students will work together to build the Anime Club IITB website from scratch using django. We are planning the website to have a news board which will give information about coming events/quizzes, an anonymous chat board, an anime ratings and recommendation page, etc. The students are free to suggest their own ideas. In the proposal the students have to submit their motivation as well as their vision for the project. The students are suggested to read up a bit about HTML/CSS by themselves.
        <br>
    </p>
</div>
<div class ="d-flex">
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
      <td>Learn basic HTML and CSS and use it to create a personal landing page.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Learn Javascript and use it to enhance their page by adding features such as navbar and custom effects.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn Backend using Django.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Start Working on the Final Website.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Buffer Week.</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
