---
layout: project
title: Seasons of Code
project: KontaKt App
topics:
    - Development
    - Web Development
    - Machine Learning
mentors:
    - Prabhat Singh
    - Saurav Garg          
mentees:
    - Abhijeet Prasad Bodas
    - Adarsh Raj
    - Sibasis Nayak
    - Ritveek Mahajan
    - Gardas Chaitanya
permalink: /soc/projects/kontakt-app
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
        The aim of the project is to build Kontakt app- a social media application which will provide an interface to anyone in Insti to ask doubts/questions or post anything anonymously(user dependent) subjected to some constraints/filters.
        <br><br>
        Flutter is an open-source mobile application development framework created by Google. It is used to develop applications for Android and iOS.In this project, we will be using Flutter/Android Studio for developing the app.
        <br><br>
        We will use Django for web development which is a Python-based free and open-source web framework. We will use deep learning for detecting and removing inappropriate content. Google for more information about Flutter, Django and Deep Learning.”game by abstracting the framework you developed.
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
      <td>Software installation/setup + Learning</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Learning + Developing a simple real-time messaging app</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Using knowledge of real-time messaging app we will start working on the main app</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Start working on deep learning</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Implement Deep Learning in our app to remove inappropriate content + Testing + Debugging</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Debugging</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
