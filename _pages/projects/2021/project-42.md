---
layout: project
title: Seasons of Code
project: Unscripted
topics:
    - Machine Learning
mentors:
    - Anirudh Mittal
    - Siddesh Pawar
    - Pranav Jeevan
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-42
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

        Journalists usually go out with their microphone to various places speaking into the recording device to note important events. They use these recordings later to prepare their article. We envision a system that can take a few minutes of audio from a recording device and use that information to write an article on that event. This fundamental concept can be extended to many other applications one of which can be automatic minutes-of-the-meet taker.
  </p>
  <p class="display3" style = "font-size:22px;" >


        We’re looking for team members who have experience with programming. Experience with ML, more specifically speech recognition and NLP will be a plus. Some articles to begin with:

        https://medium.com/@ageitgey/machine-learning-is-fun-80ea3ec3c471 
  <br>
        https://medium.com/@sanchittanwar75/introduction-to-machine-learning-and-deep-learning-bd25b792e488 
    <br>
        https://www.youtube.com/watch?v=aircAruvnKk
  </p><br>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Basics of machine learning and webscraping</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Basics of Speech-to-text, NLP and APIs</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Data collection and preprocessing</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Traning the model</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Finetuning the model</td>
    </tr>
    <tr>
      <td><strong>Week 7-8</strong></td>
      <td>Implementation</td>
    </tr>
  </tbody>
</table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Checkpoint Number</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>ML Basics</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Domain specific knowledge</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Cleaned data</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Model</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Final product</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
