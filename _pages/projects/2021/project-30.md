---
layout: project
title: Seasons of Code
project: Reinforcement Learning to Finance
topics:
    - Machine Learning
mentors:
    - Siddesh Pawar   
    
mentees:
- 5(freshies) + 3(sophies and above)  
    
permalink: /soc/projects/2021/project-30
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
        The experiments would be carried using libraries: OpenAI Gym and FinRL. A strong inclination towards mathematics is required(this should reflect in the proposal). The project would include experiments on NASDAQ-100, DJIA, S&P 500, HSI datasets. The tasks would be different for freshies and sophies. 
        </p>
        <p class ="display3" style = "font-size:22px">
        The task for freshies would be more focussed on reinforcement learning algorithms with a few experiments on the datasets towards the end. The ones for sophies would be heavier on the implementation side. The project would include contribution to the Note that this would be more of a reinforcement learning project than a core finance project. The final aim of the project is to set baselines for RL algorithms using different datasets.
        <br>
        It is mandatory to read the following blogs and summarize the content in the proposal:<a href = "https://medium.com/ai%C2%B3-theory-practice-business/reinforcement-learning-part-1-a-brief-introduction-a53a849771cf">https://medium.com/ai%C2%B3-theory-practice-business/reinforcement-learning-part-1-a-brief-introduction-a53a849771cf</a>
        <a href = "https://blog.floydhub.com/an-introduction-to-q-learning-reinforcement-learning/"> https://blog.floydhub.com/an-introduction-to-q-learning-reinforcement-learning/</a> <a href = "https://deepsense.ai/what-is-reinforcement-learning-the-complete-guide/" > "https://deepsense.ai/what-is-reinforcement-learning-the-complete-guide/</a> <a href = "https://analyticsindiamag.com/reinforcement-learning-in-finance-a-newbie-in-portfolio-selection-and-allocation/">https://analyticsindiamag.com/reinforcement-learning-in-finance-a-newbie-in-portfolio-selection-and-allocation/</a>
        <br>
        Prerequisites:
        Freshies: Prior experience in python/C++.
        Sophies: A completed course in Machine learning and a basic course in probability. Prior exposure to convex optimization would be an add-on(but not necessary). Sophies should explicitly mention their other commitments during the summers in their proposal.
  </p><br>
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
      <td>Introduction to basic RL algorithms and their implementation in Open AI Gym.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Setting baselines in OpenAI Gym and FinRL.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Experiments using basic online learning algorithms and MDPs(markov decision processes) on available datasets.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Experiments using Deep RL algorithms and developing a UI.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Pushing code to FinRL library.</td>
    </tr>
  </tbody>
</table>
</div>

{% endif %}
{% endfor %}
