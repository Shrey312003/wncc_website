---
layout: project
title: Seasons of Code
project: Traffic congestion modelling and rendering
topics:
    - Development
    - Graphics
mentors:
    -Debrata Mandal  
    
mentees:
- 2
    
permalink: /soc/projects/2021/project-4
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
        This is a continuation of the project “3D road network rendering” completed in the last SoC. The next aim is to build a traffic flow modelling tool and visualize the congestion at various parts of the road network.
        <br><br>
        More details can be found on the project’s repository - <a href = "https://github.com/codejaeger/road-network-renderer">https://github.com/codejaeger/road-network-renderer</a>
        <br>
    </p>
</div>
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
      <td  >Week 1-2</td>
      <td>Get acquainted with the resources and existing code</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Prepare a draft plan for the next 3 weeks</td>
    </tr>
    <tr>
      <td>Week 4-6</td>
      <td>Work on the topics listed in order in the plan</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
