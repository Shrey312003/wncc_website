---
layout: project
title: Seasons of Code
project: Tech-Points Portal
topics:
    - Web Development
mentors:
    - Payal Choudhary & Aniket Agrawal     
    
mentees:
- 6  
    
permalink: /soc/projects/2022/project277
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
<div class = "project-desc" style = "margin-bottom: 100px">
    <p class="display3" style = "font-size:22px;" >
        <br>
        Tech Points is a concept to streamline the process of prizes distribution.
Each club will, in place of tech vouchers, give certain tech points to the winners. These winners can redem these points at any time of the year to get any prize from the list of prizes we provide mapped to tech points. Our task is to create a portal where students can check their tech points along with appropriate history, give them a redemming option as well as show the stage their current redemmed prize are in, maintain a backend whose access will be restricted to club managers, nominees and GS to allot tech points and provide prizes when redemmed by users.
<br>
Prerequisites:<br>

Basic Web Development Skills (react, node js)
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>Learn basics of react framework and creating API in the node js backend</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Create an authentication option with access only to IITB students along with an interface in the frontend</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Develop a dashboard to show user data and integrate it by creating APIs in the backend</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Create a page to show the transaction history and integrate it by creating APIs in the backend</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Provide the option to redeem the points to get the listed prize, and check its current status</td>
    </tr>
     <tr>
      <td>Week 6</td>
      <td>Make an admin side interface for club  managers to allot tech points after any event</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
