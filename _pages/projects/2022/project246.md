---
layout: project
title: Seasons of Code
project: RELIV(Learning and social platform for elderly)
mentors:
    - Akshat Agarwal
    - Dr. Anoop Shaji   
    
mentees:
- 5 
    
permalink: /soc/projects/2022/project246
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
<div >
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center topics">{{topic}}</h4></li>
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
        Relive will be a simple, engaging, user-friendly web and app-based platform offering affordable premium service where people above the age of 50 years can physically and ‘e-meet’ with like-minded people and socialize with them over similar interests. 
        </p>
        <p class="display3" style = "font-size:22px;" >
        They can participate in group activities like Antakshari, Open Mic, Karaoke, etc. as well as do learning-based expert sessions like Musical instruments, Gardening, Yoga, Meditation, Dance therapy, Crafts, Foreign languages & so on which can be fun and a fresh enjoyable experience for them.  
<br>
Prerequisites:
Some knowledge of web development (html, css) or app development
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1</td>
      <td>UX/UI design</td>     
    </tr>
    <tr>
      <td>Week 2-4</td>
      <td>Frontend web development</td>
    </tr>
    <tr>
      <td>Week 5-7</td>
      <td>Backend web developer</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>QA Testing</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
