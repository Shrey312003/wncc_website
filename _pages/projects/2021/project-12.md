---
layout: project
title: Seasons of Code
project: Snake AI
topics:
    - Machine Learning
mentors:
    - Shubham Lohiya     
    
mentees:
- 3  
    
permalink: /soc/projects/2021/project-12
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
        In this project, we’ll build a snake game from scratch, and implement both basic Reinforcement Learning and Deep Reinforcement Learning techniques to help the snake master the game and get really high scores.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        Reinforcement learning (RL) is an area of machine learning concerned with how intelligent agents ought to take actions in an environment in order to maximize the notion of cumulative reward. A reinforcement learning agent is capable of learning on its own by exploring its environment to determine the best action to take in a certain situation.
        <br><br>
        In this project, we’ll build a snake game from scratch, and implement both basic Reinforcement Learning and Deep Reinforcement Learning techniques to help the snake master the game and get really high scores. Check out this gif to see how the agent will get better as it keeps playing: <a href = "https://drive.google.com/file/d/1MnOe8JvfhyjQLZEXpKmxDtKR1B8MJKY7/view?usp=sharing">https://drive.google.com/file/d/1MnOe8JvfhyjQLZEXpKmxDtKR1B8MJKY7/view?usp=sharing</a> If time permits, we’ll also create an agent that learns to play the Flappy Bird game amazingly well.
        <br><br>
        This project aims to introduce you to Reinforcement Learning and Deep Learning, creating your own games, and good coding practices. No prior Machine Learning experience is expected, but it’s a bonus if you know some stuff. Some familiarity with python and linear algebra is expected but you can catch up quickly without that too if you are motivated enough. Indicate your willingness to commit time to this project in the proposal as this project will have a steep learning curve and will be time-intensive. Be sure to mention previous (Python) coding or machine learning experience, if any.
        <br>
    </p>
</div>
<div class ="d-flex">
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
      <td>Get familiar with version control (Git and Github), brush up on python, make the simple game version</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Familiarize yourself with using Numpy and Jupyter Notebooks. Learn basic Reinforcement Learning concepts</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Continue exploring Reinforcement Learning and incorporating learned concepts into the project code, parallely exploring basic Machine Learning / Deep Learning concepts</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Experiment with and compare various reinforcement learning algorithms, tune parameters, document results. Implement the deep reinforcement learnign algorithm.</td>
    </tr>
  </tbody>
</table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints:</h4>
    <table class = "table table-str">
  <thead>
    <tr>
      <th>Checkpoint Number</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>Set up of the coding environment, familiarity with Git, comfortable with python</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Understanding of model-based and model-free RL algos, Game environment planning</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Ready Game environment, basic RL algo implementation</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Experimentation with several algos, deep learning concepts visited</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Parameter Tuning, Attempt DRL algo, document results</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
