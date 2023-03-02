---
layout: project
title: Seasons of Code
project: Agree to Disagree
topics:
    - Machine Learning
mentors:
    - Anirudh Mittal
    - Siddesh Pawar
    - Pranav Jeevan   
    
mentees:
- 6 students   
    
permalink: /soc/projects/2021/project-41
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

        How often do you read the terms and conditions before actually signing up for something, installing a software or entering a website? According to a study XX% of internet users don’t. The reason behind that shouldn’t be very hard to find. The Terms and conditions are usually many pages long filled with legal jargon and complex sentences. But can’t we now, with the advancement of technology, find a solution to fix this problem which started 20 years back with the internet in the early 2000s? 
  </p>
  <p class="display3" style = "font-size:22px;" >

        We propose a Harvey-your own lawyer as a browser extension that will read the document for you and summarize the important points in simple language that actually matter to you and which you might want to consider before signing up.

        We’re looking for team members who have some experience with programming. You will have to learn how to collect data, clean it and train ML models on it. If you have any such relevant experience, do mention it in your proposal. Brownie points is you’re interested in law, contracts or policy making.
  </p><br>
</div>
<div class="d-flex">
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
      <td><strong>Week 1-2</strong></td>
      <td>Basics of machine learning and webscraping</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Data collection and browser extension</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Data preprocessing</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Traning the model</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Finetuning the model</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Implementation</td>
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
      <td>Learning phase</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Data and browser extension</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Preprocessed data</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Trained model</td>
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
