---
layout: project
title: Seasons of Code
project: Website for tracking stock market 
topics:
    - Web Development
mentors:
    - Pratik Nimje 
    - Wankhayday Harsshh Promoad  
    
mentees:
- 6-8 
    
permalink: /soc/projects/2022/project255
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
<div class = "project-desc" >
    <p class="display3" style = "font-size:22px;" >
        <br>
        "This project will help the mentees to gain the basic knowledge of web development. Towards the end of the project mentees have to develop their own stock market static website for completing the project.<br>
Technical skills/ languages: <br>
1)HTML<br>
2)CSS<br>
3)JavaScript<br>
4)Bootstrap (if they get proficient in above three).<br>
5)Git/GitHub<br>
1) Introduction to React.js <br>
2) PHP<br>
        <br>
Prerequisite:
N/A 
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
      <td>Week 1</td>
      <td>Introduction to HTML and CSS
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>	Learning javascript and Bootstrap</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Introduction to react js framework</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Introduction to PHP, MySQL.</td>
    </tr>
    <tr>
    <td>Week 6</td>
      <td>Introduction to Git/Github And APIs</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Full stack Development of stock market tracking website.</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
