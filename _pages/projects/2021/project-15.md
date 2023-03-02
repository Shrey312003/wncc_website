---
layout: project
title: Seasons of Code
project: R(ea)L Trader
topics:
    - Reinforcement Learning
    - Algorithmic Trading
mentors:
    - Pratyush Agarwal
    - Raaghav Raaj
    - Yash Gupta     
    
mentees:
- 6
    
permalink: /soc/projects/2021/project-15
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
        The end goal is to deploy a RL based agent for automated stock trading.
        <br><br>
        Reinforcement learning might sound exotic and advanced, but the underlying concept of this technique is quite simple. In fact, everyone knows about it since childhood!
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        As a kid, you were always given a reward for excelling in sports or studies. Also, you were reprimanded or scolded for doing something mischievous like breaking a vase. This was a way to change your behaviour. Suppose you would get a bicycle or PlayStation for coming first, you would practice a lot to come first. And since you knew that breaking a vase meant trouble, you would be careful around it. This is called reinforcement learning.
        <br><br>
        The reward served as positive reinforcement while the punishment served as negative reinforcement. In this manner, your elders shaped your learning. In a similar way, the RL algorithm can learn to trade in financial markets on its own by looking at the rewards or punishments received for the actions.
        <br><br>
        In the realm of trading, the problem can be stated in multiple ways such as to maximise profit, reduce drawdowns, or portfolio allocation. The RL algorithm will learn the strategy to maximise long-term rewards.
        <br><br>
        A quote sums it up perfectly, “AlphaZero, a reinforcement learning algorithm developed by Google’s DeepMind AI, taught us that we were playing chess wrong!”
        <br><br>
        The project would involve reading up about RL, doing some simple assignments on it, learning about stocks and market, and then applying RL techniques for trading. Enthusiasm in stock markets, AI/RL and willingness to spend time and effort is the only pre-requisite. However having any knowledge/experience about the mentioned topics might help, so mention it in the proposal. If you don’t have any prior background in these fields, write about your general skills, programming languages you are comfortable in, and other things you find relevant. Keep the proposal short and crisp. Also in your proposal, mention your brief understanding of the below article (1 page max)
        <br><br>
        Reading resources : <a href = "https://blog.quantinsti.com/reinforcement-learning-trading/#how-to-apply-reinforcement-learning-in-trading">https://blog.quantinsti.com/reinforcement-learning-trading/#how-to-apply-reinforcement-learning-in-trading</a>
        <br><br>
        Sample websites to test out trading strategies : <a href = "https://www.quantconnect.com/competitions">https://www.quantconnect.com/competitions</a><a href = "https://lambda.asknbid.tech/tournaments"> https://lambda.asknbid.tech/tournaments</a>
        <br>
    </p>
</div>
<div class = "d-flex">
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
      <td>Read up about MDP, Reinforcement Learning, Stock markets and trading in general.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Develop RL agents for sample problems (Like maze solving), read up about different strategies in trading, alpha discovery and generation, try and test out different alphas. Start participating in online quant trading tournaments (continue this is coming weeks as well)</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Play around with simple AI models for trading, find datasets, develop metrics to test strategies. Explore RL algorithms like Q-Learning, Deep Q-Learning and apply such algorithms to simple games like tic-tac toe.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Develop RL agent for automating stock trading, work with 1-2 stocks initially and a small dataset, observe performance of different algorithms on it, backtest the agent, optimise it and slowly expand the dataset to include more stocks and larger time periods.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Finish up coding the agent, simulate trading on unseen data using it, check for possible errors and optimisations. Test the agent on various quant-trading websites, participate in tournaments and win prizes !</td>
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
      <td>Developing RL agent for solving a maze</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Learning to optimise different alphas and participation in online quant trading tournaments.</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Understanding Deep Q-Learning algorithm, experience replay and coming up with intuition for alpha generation for trading</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Making simple RL agent for stock trading involving 2-3 stocks and small time period and backtesting it.</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Extending the above agent to large number of stocks over larger time periods and employing it and evaluating its performance</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
