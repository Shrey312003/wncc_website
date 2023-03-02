---
layout: project
title: Seasons of Code
project: PAC MAN
topics:
    - Machine Learning
mentors:
    - Utkarsh Agarwal
    - Gagan Jain    
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-50
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
        
        Reinforcement Learning (RL) is a field of Artificial Intelligence where an agent learns by interacting with its environment and receiving a reward/penalty for its actions. RL has recently started receiving a lot more attention, owing to the famous victory by an RL agent over the world champion in the game of “Go”. 
        </p>
        <p class="display3" style = "font-size:22px;" >

        This project aims to get people familiar with the field and get started with a hands-on project that will require them to understand and implement some of the popular RL algorithms. We will start with building a simple GUI, and will then try out algorithms like SARSA and Q-learning for training agents in basic environments. We will then move on to Deep RL techniques for handling Pac-Man which involve the use of neural networks for training the agents.
</p>
<p class= "lead" style = "font-size:30px;">
        Reading:
</p>
        <p class="display3" style = "font-size:22px;" >

        Nothing as such right now. If you’re interested, you might want to read the first chapter of the book “Introduction to Reinforcement Learning” by Sutton and Barto to get a feel of RL. The book is available freely online and a simple google search should do :)

        Watching the video lectures of the Reinforcement Learning Specialisation on Coursera by The University of Alberta can be a good starting point for getting the hang of RL.
</p>
<p class= "lead" style = "font-size:30px;"> 

        Links:
  </p>
  <p class="display3" style = "font-size:22px;" >


        Sutton and Barto (http://incompleteideas.net/book/RLbook2018trimmed.pdf) Coursera (https://www.coursera.org/specializations/reinforcement-learning?) Enjoy watching this beautiful documentary about AlphaGo by DeepMind - (https://www.youtube.com/watch?v=WXuK6gekU1Y)
  </p>
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
      <td>Basics of RL and some basic implementations. Python beginners should also start learning about the ML libraries. The goal for this week from the project side will be to have a simple GUI from openai gym ready and running for visualization.</td>
    </tr>
    <tr>
      <td><strong>Week 2-3</strong></td>
      <td>Understanding RL algorithms and implementing them on basic examples such as grid-world and mountain car. Training the agent based on these algorithms and observing the results.</td>
    </tr>
    <tr>
      <td><strong>Week 4-5</strong></td>
      <td>Understanding the technique of Deep Reinforcement Learning, implementing them, and comparing the results with other available implementations.</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Wrapping things up, documenting the work done and exploring possible extensions to the work done.</td>
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
      <td>Getting started with the theory of RL. Getting the GUI ready</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Understanding simple RL concepts and algorithms like MDP planning, SARSA and Q Learning</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Implementing the basic applications of RL algorithms to get a hang of them</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Understanding and implementing Deep RL algorithm for learning for Pac Man</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Finishing up the implementation by fine-tuning the hyperparameters and removing bugs</td>
    </tr>
    <tr>
      <td><strong>6</strong></td>
      <td>Documenting everything</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
