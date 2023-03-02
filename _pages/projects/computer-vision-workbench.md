---
layout: project
title: Seasons of Code
project: Computer Vision Workbench
topics:
    - Machine Learning
    - Image Processing
    - Development
    - Deep Learning
mentors:
    - Vishal Kaushal 
mentees:
    - Aniket Sadashiva
    
permalink: /soc/projects/computer-vision-workbench
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded img-soc">
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
        <li><h5 class=" ">{{mentor}}</h5></li>
        {% endfor %}
    </ul>
    <h4 class="display3  ">Mentees :</h4> 
    <ul>
        {% for mentee in page.mentees %}
        <li><h5 class="">{{mentee}}</h5></li>
        {% endfor %}
    </ul>
</div>
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
        Extracting potentially useful information from videos, like presence of faces, humans, specific objects, motion, tracking etc. is an indispensable part of video analysis.
        <br><br>
        Recent advancements in deep learning have demonstrated good accuracies on many of these tasks, however these models do not yet generalize well to the unseen real-world deployments.
        <br><br>
        Though the accuracy numbers for these off the shelf models have been reported and can be computed on standard existing datasets, there is currently no way to estimate how would these models perform when challenged in real-world deployments. This makes it necessary to have at least a qualitative comparison of different models against each other on such challenging, unlabelled videos.
        <br><br>
        To enable this, we envision a workbench tool (Python GUI) which will make it easy to compare any two models on a given video for a given task and “see” how they perform. It will be released as open source software. This tool will help understand the “real” strengths and weaknesses of different models for different tasks and will help give important directions to undertake future research.
        <br><br>
        To begin with we can focus on the following computer vision tasks: Motion detection, Face detection, Face recognition, Human detection, Head detection, Object detection, Tracking. A typical use of this tool will involve selecting the task, selecting a video, selecting two models/algorithms to compare and as a result seeing a side by side comparison of the analyzed video played synchronously along with other measurable parameters like time taken etc.
    </p>
</div>
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
        <td  >Week 1</td>
        <td>Understanding the various computer vision tasks involved</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Motion Detection - stand alone implementations using various alternate techniques</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Face Detection - stand alone implementations using various alternate off the shelf models/techniques</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Object detection - stand alone implementations using various alternate off the shelf models/techniques</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Tool design, architecture and skeleton implementation</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Integrating motion detection in tool</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Integrating face detection in tool</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Integrating object detection in tool</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Face recognition</td>
    </tr>
    <tr>
      <td>Week 10</td>
      <td>Human detection</td>
    </tr>
    <tr>
      <td>Week 11</td>
      <td>Head detection</td>
    </tr>
    <tr>
      <td>Week 12</td>
      <td>Tracking</td>
    </tr>
    <tr>
      <td>Week 13</td>
      <td>Buffer/Enhancements/Closure</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
