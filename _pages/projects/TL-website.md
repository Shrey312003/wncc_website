---
layout: project
title: Seasons of Code
project: Tinkerers’ Laboratory WebsiteVivek Saurabh Verma
topics:
    - Web Development
mentors:
    - Vivek Saurabh Verma
    - Aditya Sonawane          
mentees:
    - Aditya Jain
    - Adit Akarsh
    - Tanmay Hiremath
    - Akshat Goel
permalink: /soc/projects/TL-website
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
        Develop a Django website for Tinkerers’ Laboratory
        <br><br>
        We are working to add on certain features to the pre-existing Tinkerers’ Laboratory website to incorporate it with a new setup for entry recording, issuing items from the lab, and access to machines using biometric data.
        <br><br>
        This website needs to be capable to dynamically update to display inventory currently in the lab and people should be able flag errors/discrepancies which would them generate automatic notifications to alert the TL team. Additionally, machine availability and maintenance requests are to be made public.
        <br><br>
        No pre-requisites required.
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
      <td>Learn Python, HTML, and CSS</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn Bootstrap, jQuery, and JavaScript</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn Django and create views for different pages</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Work upon the front-end of all pages</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Create an authentication system</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Create an inventory management system, with flagging of items</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Testing</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Create item search feature using tags and keywords</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Testing week and time to finish up presentation and documentation</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
