---
layout: project
title: Seasons of Code
project: Video Super Resolution
topics:
    - Machine Learning, Image Processing
mentors:
    - Kartik Gokhale & Hastyn Doshi
    
mentees:
- 4
    
permalink: /soc/projects/2022/project282
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
        Want to watch a movie in 4k ultra HD when it was available only up to 720p? Welcome to Video Super Resolution! Here, we are going to delve into the field of super resolution using deep learning algorithms where we try to create higher resolution videos from lower resolution data. Yes, this seems baffling. You might be confused as to how is this even possible. </p>
 <p class="display3" style = "font-size:22px;" >
Existing video super-resolution (SR) algorithms usually assume that the blur kernels in the degradation process are known and do not model the blur kernels in the restoration. However, this assumption does not hold for blind video Super Resolution and usually leads to over-smoothed super-resolved frames. We will be creating models and developing algorithms which assume an unknown blur kernel and motion fields. 
<br>
Through the course of this project, you will explore Machine Learning and Deep Learning techniques. You will also pick up image processing and implement some state-of-the-art techniques in this field. 
<br>
Needless to say, this project will be rather loaded and requires a lot of time commitment. However, the results you will obtain will be quite satisfying and the skills you will learn will be invaluable.

<br>
Prerequisites:
Desire to see the project to completion and be involved in implementing state-of-the-art techniques.
Loads of Enthusiasm :) (Goes without saying)
Prior coding experience is recommended but not necessary.

The proposal will be in the form of an assignment. Instructions are within the assignment document. Note that this project will have a steep learning curve and will be time-intensive.
Assignment Link: <a target ='_blank' href="https://docs.google.com/document/d/1Ezg29iZ366F7_mTPoBCRQsbg8UTmSezcBiElHYm2SEw/edit?usp=sharing">https://docs.google.com/document/d/1Ezg29iZ366F7_mTPoBCRQsbg8UTmSezcBiElHYm2SEw/edit?usp=sharing</a> 

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
      <td  >Week 1</td>
      <td>Python basics + Data Analysis, Get familiar with version control (Git and Github)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction to Machine Learning and Associated Libraries</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Deep Learning  + Some Image Processing</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implementing Convolutional Neural Networks </td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Catch Up + Super Resolution with Known Blur Kernels</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Video Super Resolution with Unknown Blur Kernels and Motion Fields</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Documenting Results + Finishing Up</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 