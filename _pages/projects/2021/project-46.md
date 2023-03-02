---
layout: project
title: Seasons of Code
project: BriefKing
topics:
    - Machine Learning
mentors:
    - Payal Choudhary
    - Abhishek Pai Angle      
    
mentees:
- 5-6 students   
    
permalink: /soc/projects/2021/project-46
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
        
        Did you just sleep while watching a lecture and are too lazy to watch it again? Do you think a 1 hour lecture could be done away in like 10-20 mins? Or you really wanted to attend a webinar but do not have the patience to listen to the speaker for 2-3 hours?
  <br><br>

        Don’t worry! BriefKing has got you covered! Briefking is an attempt to automate the day-to-day stuff that you do. The Input to this application will be “your daily class lectures” and the expected output is a brief but detailed summary of the entire lecture. This is more of a Research and Development Project. You can expect reading a lot of research papers and then implement a suitable model while keeping in mind the accuracy. We will not go deep into the topics rather it will be more of an implementation based project.
  </p><br>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table  class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-2</strong></td>
      <td>Brush Up Python and Tenserflow</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Video to Audio to Text Generator</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Research on related Work</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Collecting the right dataset, preprocessing</td>
    </tr>
    <tr>
      <td><strong>Week 7-8</strong></td>
      <td>Implementing the model</td>
    </tr>
    <tr>
      <td><strong>Week 9-10</strong></td>
      <td>Making the UI and deployment</td>
    </tr>
  </tbody>
</table>
</div>
</div>

{% endif %}
{% endfor %}
