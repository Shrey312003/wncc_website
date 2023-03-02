---
layout: project
title: Seasons of Code
project: Insti Buddy
topics:
    - Development
    - Web Development
mentors:
    - Rishabh Arya
    - Latika Patel 
mentees:
    - Kumari Sakshi
    - Sahil Kumar
    - Vaibhavi Agrawal
    - Adarsh Kumar
    - Kushal Choudhary
permalink: /soc/projects/insti-buddy
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
        Insti buddy will be an assistant that helps you search telephone directory of IIT Bombay and keeps you updated with the Facebook feed of campus groups at IIT Bombay.
        <br><br>
        <b>Features:</b>
        <br>
        - Contacts: Access complete telephone directory of IIT Bombay. User may call, mail, and save contact directly using this feature.
        <br>
        - Notice: It will show Facebook feeds of all the campus groups relevant to user. Insti buddy also notifies user when anything new comes on these pages.
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
      <td>Set up necessary environment and learn some basics of GitHub and each platform</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn basics of all languages which will be used in development( App- Java/kotlin; website - HTML/CSS/Javascript ; Server - Python )</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Make a basic prototype model of (Creating a simple app with list views and basic UI; server - creating an API with get/post requests)</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Collect the data of all contacts or find the way to directly fetch them and research about methods to scrap posts from Facebook</td>
    </tr>
    <tr>
      <td>Week 7-9</td>
      <td>Implementation of individual features , and testing</td>
    </tr>
    <tr>
      <td>Week 10-11</td>
      <td>Debugging in code/improve code structure/Some buffer time</td>
    </tr>
    <tr>
      <td>Week 12</td>
      <td>Check all issues and Document the work done</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
