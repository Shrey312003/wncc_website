---
layout: project
title: Seasons of Code
project: Blogified
topics:
    - Web Development
mentors:
    - Shikhar Agrawal & Mayank Jain  
    
mentees:
- 4-5
    
permalink: /soc/projects/2022/project293
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Create a completely functioning and responsive blog post website with backend in Django and PostgreSQL Database. Mentees will be learning about basics of python, Django, HTML, CSS, Bootstrap, Heroku and PostgreSQL database along with concepts such as RESTful APIs and CRUD operations. 
<br>
Prerequisites:
Basic knowledge of python and Linux is appreciated. Enthusiasm and determination to complete the project are musts.
        <br>
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
      <td  >Week 1-2</td>
      <td>Learn basics of Python, Django, Linux, and Version Control using Git/GitHub</td>
    </tr>
    <tr>
      <td>Week 2-4</td>
      <td> Learn basics of PostgreSQL Database, HTML and understand login in Django</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Develop a Signup, Login, and logout pages along with a page to post a new blog</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td> Enable users to view other users' blogs and implement news feed functionality</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Add comments feature, reactions and social media accounts' links of users</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Web Design using CSS, Bootstrap and WhiteNoise. Deploy to Heroku.</td>
    </tr>
    <tr>
      <td>Optional</td>
      <td>Adding following and followers feature!</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 