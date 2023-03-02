---
layout: project
title: Seasons of Code
project: L.A.M.A. AI using Reinforcement Learning
topics:
    - Development
    - Machine Learning
mentors:
    - Kumar Ayush
    - Anuj Shetty     
mentees:
    - Akash Cherukuri
    - Anirudh Mittal
    - Jayesh Singla
    - S. Anand Natarajan
stipend:
    - INR 5000

permalink: /soc/projects/lama-ai
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
    <h4 class="display3  ">Stipend :</h4> 
    <ul>
        {% for stipend in page.stipend %}
        <li><h5 class="">{{stipend}}</h5></li>
        {% endfor %}
    </ul>
</div>
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
        Implementation of an RL based AI for playing L.A.M.A.
        <br><br>
        <b>L.A.M.A.</b>
        <br>
        <a href="https://boardgamegeek.com/boardgame/266083/llm">L.A.M.A.</a> is a board game. It fits all the criteria I would look for. It is small to carry, easy to understand, quick to play and most importantly, a good mix of strategy and randomness. You can play it sober and not sober and have fun.
        <br><br>
        <b>Pre-requisites</b>
        <br>
        Basic proficiency in Python
        
    </p>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <p>We expect about 100 hours of work spread over ten weeks.</p>
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
      <td>Play L.A.M.A. with us, and with your project group, and with friends to familiarise yourself with it. Then, enable logging for all state changes in the web game. As of now, no information is stored.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Write a naive AI. Instead of expecting a player response, the game should be able to query a response from this AI submodule. We fill the naive AI with heuristics about the best strategy. Performance of the naive AI serves as benchmark for later experiments.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implement an interface that allows us to run games with all players as AI. The current web interface with its laughable GUI is not required at all for this. Rather, this interface or framework should allow us to program multiple runs of the game with varying set of parameters. In other words, set up an experimentation lab.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Try out Q-Learning examples on the web. There is not sufficient time for us to understand all the mathematics behind RL techniques, but we can understand how to use these as a skill. You can deep dive into the book in references, at your own convenience.</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Implement Q-learning for our AI</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Measure performance against benchmark. This will also involve hyperparameter search and analysing performance across the hyperparameter grid.</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Buffer</td>
    </tr>
    <tr>
      <td>Week 10</td>
      <td>Documentation Week. You write blogs about your experience, shoot a video etc.</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
        <b>Secondary Learning Goals</b>
        <br>
        Apart from learning about RL, you can expect to learn about the following:
        <br>
        - RPC (Remote Procedure Calls)
        <br>
        - FSM (Finite State Machines)
        <br>
        - AWS (Amazon Webservices)
        <br><br>
        <b>References</b>
        <br>
        - <a href="https://github.com/cheekujodhpur/projectlama">Project Repository</a>
        <br>
        - <a href="https://kumar-ayush.com/lama/">Web Game</a>
        <br>
        - <a href="https://web.stanford.edu/class/psych209/Readings/SuttonBartoIPRLBook2ndEd.pdf">RL Book, Sutton & Barto 2nd Ed</a>
        <br>
        - <a href="https://www.learndatasci.com/tutorials/reinforcement-q-learning-scratch-python-openai-gym/">Q-Learning Tutorial</a>
    </p>
</div>
{% endif %}
{% endfor %}
