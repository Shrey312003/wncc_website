---
layout: project
title: Seasons of Code
project: How to Sell ***** Online (Fast)
topics:
    - Web Development
mentors:
    - Shruti Singh
    - Dev Moxaj Desai
    
mentees:
- 6  
    
permalink: /soc/projects/2022/project297
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
      Every wondered, what is anonymous browsing? How to achieve anonymous browsing?  What is the dark web? 
Well look no further, this project plans to create an anonymous market place, like the silk road. You will get to dive deep into the darknet and explore networks, crypto, and ofc website hosting! 
  </p>    
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:200px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-2</td>
      <td>Learning about the Dark Web, TOR, Networks</td>
    </tr>
    <tr>
      <td>Week 3-5</td>
      <td>Implementing the basic website</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Integrating cryptocurrency-based payments</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Deployment + Buffer time</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
