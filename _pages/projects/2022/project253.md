---
layout: project
title: Seasons of Code
project: Federated Learning for Traffic Prediction and Route Planning
topics:
    - Web Development
mentors:
    - Utkarsh Ranjan
    - Prashant Arora 
    - Vidit Goel   
    
mentees:
- 4 (may increase based on sop) 
    
permalink: /soc/projects/2022/project253
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
        "The goal of the project is to determine the optimum paths for various users in real-time using the live traffic information from the traffic stations.
</p>
<p class="display3" style = "font-size:22px;" >
Standard machine learning approaches require centralizing the training data on one machine or in a data center. Federated Learning enables mobile phones to collaboratively learn a shared prediction model while keeping all the training data on the device, decoupling the ability to do machine learning from the need to store the data in the cloud. The topic is a hot area of research both in academia and industry. Google is currently testing Federated Learning in Gboard on Android, the Google Keyboard. When Gboard shows a suggested query, your phone locally stores information about the current context and whether you clicked the suggestion. Federated Learning processes that history on-device to suggest improvements to the next iteration of Gboard’s query suggestion mode
<br> <br>
To facilitate the development of intelligent transport systems, particularly those involving most of the vehicles being autonomous, it is imperative to have an accurate prediction of the traffic conditions, such as traffic flow and speed. This knowledge can help make effective travel decisions, increase fuel efficiency, and alleviate air pollution. To reap all the aforementioned benefits, the traffic prediction must process the real-time and historical traffic data collected by traffic stations and mobile devices.
<br><br>
So In this project, we would be first building up some basics for the work involved like reading up about machine learning, federated learning, and graph algorithm. Then we would start working on some real-time traffic data from Sources like google Maps to train our model. We would work with hypothetical traffic stations for a particular map. This model would help us provide real time-optimal path for the drivers."				
        <br><br>
Prerequisite:
It would be good if the mentee has basic knowledge of python and/or graph algorithms. 
<br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1</td>
      <td>Start learning the Basics of python(if not familiar with it). Read up about basic data structures like priority queue, adjacency matrix, etc, and graph algorithms.
  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>	Develop an understanding of machine learning and optimization basics, finish some modules of the Deep Learning Specialization course (by AndrewNG) and read some papers on federated learning.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn ML libraries in python and start building some basic federated learning setup with simpler graphs topology, play around with different algorithms to analyze their performance.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Start working on the FL framework for traffic speed prediction. Implement the route planning using the predicted traffic data for the road network.</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Integrate the two mechanisms of traffic speed prediction and route planning. Explore the possibility of simulation of the results/ development of some GUI</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
