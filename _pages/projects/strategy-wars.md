---
layout: project
title: Seasons of Code
project: Strategy Wars [Online]
topics:
    - Development
    - Economics
mentors:
    - Dhairya Jain  
mentees:
- Ishita Gupta
- Samanvaya Jain
- Akshata Jain
- Rohith Nithil G
- Pragya Patel
- Tejas Bhalla
- Tejaswi Pagadala
- Tanu Goyal
permalink: /soc/projects/strategy-wars
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
        I’m planning to create a game that simulates a real-life situation, similar to those strategic games done by the finance club, IITB. What needs to be done is that we need to create a game using Django so that multiple students are able to play it in real-time. The student will learn OOPs concepts and Web Development through this project. He/she needs to learn FrontEnd Technologies (Html, CSS, JS, JQuery) to design an attractive interface for the players to play the game, Backend( Django), OOP in Python.
        <br><br>
         - You are free to write a proposal based on your understanding of what the project could be and why do you want to contribute to this project (important). Any other ideas that can shape and steer the project are welcomed. Use youtube to learn python and frontend. For Django, You can refer to the django documentation found on its official website after studying it from youtube.
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
        <td>Creating a git account, install all the dependencies, start learning python</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learns OOPs and creates a 1-page (“Simple Hello World”) Django application</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Continues learning Django and FrontEnd Simultaneously</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Creates a multi-paged django application and Make a user registration and login portal</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learns Class-Based Views and  Generic Views and use them to make a simple application</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Thinking a rough implementation</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Creating the game from scratch or from what has been developed</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Making PRs and merging them</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Creating new Issues and solving them if possible</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}