---
layout: project
title: Seasons of Code
project: Applications of Machine Learning in Astronomy
mentors:
    - Vikhyat Agrawal
    - Yashasvi Bhatt   
    
mentees:
- 4 
    
permalink: /soc/projects/2022/project245
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
        In this project, the mentees will apply machine learning in the field of radio astronomy. A specific dataset will be provided upon which analysis will be performed and insights will be extracted. The starting weeks will be focussed on familiarising the mentees with the basics of machine learning algorithms and python tools after which the dataset will be provided. We are looking for mentees who are enthusiastic and are ready to devote time for this project (reason for taking only 4 mentees). In this project, the mentees will apply machine learning in the field of radio astronomy. A specific dataset will be provided upon which analysis will be performed and insights will be extracted. The starting weeks will be focussed on familiarising the mentees with the basics of machine learning algorithms and python tools after which the dataset will be provided. We are looking for mentees who are enthusiastic and are ready to devote time for this project (reason for taking only 4 mentees). 
<br>
Prerequisites:
Basics of Python
    </p>
</div>
<div class = "d-flex flex-wrap">
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
      <td>Week 1-2</td>
      <td>Complete basics of common machine learning algorithms</td>     
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learning how to use different python libraries used in astronomy and machine learning</td>
    </tr>
    <tr>
      <td>Week 4-7</td>
      <td>Analysis of a specific dataset to be provided at the end of week 2. </td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
