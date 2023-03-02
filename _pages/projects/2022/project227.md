---
layout: project
title: Seasons of Code
project: Deoldify Videos
topics:
    - Web Development
mentors:
    - Preet Shah 
    - Yash Shah   
mentees:
    - Upto 5 
    
permalink: /soc/projects/2022/project227
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
            Train a GAN to convert black and white videos to SOTA coloured videos
        <br>
        <br>
        Prequisites: Basic knowledge of statistics and code
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
      <td>Learning about GANs and how computer vision techniques work
</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Finding the best open source dataset for the project, aggregation and cleaning dataset
 </td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Training the chosen model for the purpose and optimize.

</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Create a web page for the project with the model in backend to serve the need of an average user.
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Working on the final model</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
