---
layout: project
title: Seasons of Code
project: Introduction to Machine Intelligence
topics:
    - App Development
mentors:
    - Tanmay Dokania & Aziz Shameem 
    
mentees:
- 8
    
permalink: /soc/projects/2022/project292
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
        The project includes training in machine-level intelligence after familiarization with the basics of Python(and libraries), Jupyter, Github, Neural Networks and Reinforcement Learning.
Through this course, we aim to equip people with the right knowledge and tools to be able to dive into and thrive in the fields of  ML/AI, and Reinforcement Learning starting from the basics of the language and working up to important libraries and powerful visualization tools.<br></p>
<p class="display3" style = "font-size:22px;" >
During this project, implementation tasks will be given to build a better familiarity with the concepts, like a basic hand written digit classifier and a Q Learning agent.
Depending on the pace and amount of progress made in the project the timeline and final project complexity can be tweaked.
The final aim of the project is to implement a Deep Q Network, which has shown some prominent results. However, the scope of the project is towards a basic understanding of Deep Q Networks, it will surely help introduce to some of the important concepts.
<br>
Some cool links:<br>
 <a target='_blank' href="https://youtu.be/tfb6aEUMC04">https://youtu.be/tfb6aEUMC04</a><br>

<a target='_blank' href="https://youtu.be/8tq1C8spV_g">https://youtu.be/8tq1C8spV_g</a><br>
 
 <a target='_blank' href="https://daiwk.github.io/assets/dqn.pdf">https://daiwk.github.io/assets/dqn.pdf</a><br>

<br>
Prerequisites:
NONE :)
        <br>
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
      <td  >Week 1</td>
      <td>Getting acquatined with Python and Jupyter</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td> Reading up on NumPy, GitHub, Neural Networks</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Neural Networks + Tensorflow, CNN, RNN</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Getting familiar Q Learning </td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Learning about the OpenAI Gym Environment</td>
    </tr>
    <tr>
      <td>Week 7-9</td>
      <td>DQN + Implementation</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 