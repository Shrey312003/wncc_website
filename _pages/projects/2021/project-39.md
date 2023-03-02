---
layout: project
title: Seasons of Code
project: Cribbit Cribbit (Open for PGs Only) 
topics:
    - Web Development
mentors:
    - Ashish Pandit  
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-39
---

<h2 class="display1 m-3 p-3 text-center project-title">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div class ="img-soc d-block" style = "width: 300px; height: 300px;"> 
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
    <p class="display3 project-desc" style = "font-size:22px;  margin-bottom: 10em;" >
        <br>
        Design an online secure portal to file and redress exam cribs. Profs and TAs will have the roles of moderator, whereas students can file cribs.
<br>
Goal: Design an online secure portal to file and redress exam cribs. Profs and TAs will have the roles of moderator, whereas students can file cribs.
      </p>  <br>
</div>
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
      <td>List the features of the portal, Set up the Environment and learn the basics of each platform.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Survey of similar apps, teams of different components will start working seperately</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Teams will merge/ integrate the codes of different systems.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Crib of single subject.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Provision to add subjects</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>authenticate users to ensure only valid users file requests.</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>The App will tested for parameters, loopholes, bugs.</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Reviews/ suggestions from Prof.s.</td>
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
      <td><strong>1</strong></td>
      <td>List of features developed</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Architecture is designed</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Component wise readiness</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Integration and testing all features in the project</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Test/bug fix</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
