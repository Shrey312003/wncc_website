---
layout: project
title: Seasons of Code
project: Gaming meets AI !!!
topics:
    - Machine Learning
    - Reinforcement Learning
mentors:
    -  Silky Kumari
    -  Ankit Kumar Jain   
     
    
mentees:
- 5 students   
    
permalink: /soc/projects/2021/project-14
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
        “Machine intelligence is the last invention that humanity will ever need to make.” ~Nick Bostrom Try out your hands on developing a superhuman AI to ace the game of 2048.
        <br><br>
        Fascinated by the potential of Reinforcement Learning? Want to leverage this potential on the challenging game 2048? Want to explore how the convolution of Neural Networks and Reinforcement Learning is turning out to be a game changer in the field of AI. Try out your hands on developing a superhuman AI to ace the game of 2048.
        <br><br>
        We will be developing an AI that can play the game 2048. The agent will be based on Deep Reinforcement Learning architecture Deep Q Network (DQN). We will also be developing our own game environment using Matplotlib or PyGame. We might as well use OpenAI Gym for the same.
        <br><br>
        It would require sound knowledge on Reinforcement Learning, Deep Learning, modern deep learning frameworks like Pytorch or Tensorflow, Python programming.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        The pre-requisites are Python Basics, Machine Learning and Artificial Neural Networks. These aren’t hard prerequisites, if you are willing to spend time during the break to get a firm hold on these aspects of the project.
        <br><br>
        </p>
        <p class = "lead" style = "font-size: 30px">PROPOSAL</p>
        <p class="display3" style = "font-size:22px;" >
        We expect you to cover the following aspects in your proposal. Previous knowledge in this domain Any projects that you have worked on ML/DL/RL. How much time per week would you be able to devote? Are you willing to read up the relevant material in the break? Why are you interested in this project?
        </p>
        <br><br>
        <p class = "lead" style = "font-size: 30px">RESOURCES</p>
        <p class="display3" style = "font-size:22px;">
        The famous Barto and Sutton book for Reinforcement Learning. You can find the PDF here. CS 234 : Reinforcement Learning on Stanford Engineering Channel on Youtube. DeepMind Atari research paper published in 2015.
        </p>
        <br>
</div>
<div class ="d-flex">
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
      <td><strong>Week 1</strong></td>
      <td>Python basics and Python libraries like Matplotlib, numpy. Read about Python Object Oriented Programming.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Brush up the basics of Deep Learning. Revisit tensorflow/pytorch Framework. Start reading RL from Barto and Sutton.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Explore the architectures like DQN, DDQN from Stanford Engineering on Youtube. Develop the game environment using MatPlotlib</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Complete the code of vanilla DQN from scratch on the lines of DeepMind Atari research paper.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Train on Google Colab or any other GPU resource and analyse the performance of other DRL based architectures</td>
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
      <td>Read the first 6 chapters of the Barto and Sutton book.</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Get familiar with DRL and explore the various architectures like DQN, DDQN</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Develop the game environment using MatPlotlib/PyGame.</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Complete the code of vanilla DQN from scratch.</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Train and analyze the performance of other DRL based architectures on the gaming environment.</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
