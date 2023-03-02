---
layout: project
title: Seasons of Code
project: Intelligent agents
topics:
    - Artificial Intelligence
    - Data Science
mentors:
    - T Sanjeev Vishnu   
mentees:
    - Abishek Pai Angle
    - Aum Jain
    - Dev Moxaj Desai
    - Divyanshi Kamra
    - Madhumitha S
    - Prasann Vishwanathan
    - Tanay Sharma
    - Tushar Nandy
    - Naman Agarwal
permalink: /soc/projects/intelligent-agents
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
        The project aims at creating agents which can figure patterns from huge datasets on its own even without any prior information on how or where to look for trends.
        <br><br>
        <b>Pre-requisites:</b>
        <br>
        - Very good at logic and mathematics
        <br>
        - Enthusiastic in Data Science & AI
        <br><br>
        <b>Description:</b>
        So far, mankind has advanced in the field of Artificial Intelligence by designing algorithms which look for patterns. For example: An algorithm which looks for edges in an image. The chaos we are living in needs a lot more than the patterns we perceive. The project aims at creating agents which can figure patterns from huge datasets on its own even without any prior information on how or where to look for trends. A good example of such an agents is a child trying to learn to speak. The child figures out patterns by associating data received by its eyes and ears even without any external agent asking the child to look for correlation between the data.
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
      <td>Reading relevant material from the resources</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn to work with huge datasets and draw conclusions and analysis</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Implement Machine Learning to analyse basic data and forecast</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Design Neural Networks to associate different datatypes together</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Try to find patterns and train with huge amounts of training set</td>
    </tr>
    <tr>
      <td>Week 9-10</td>
      <td>Make intelligent beings which are able to understand basic grammar and usage of words in the English language</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
