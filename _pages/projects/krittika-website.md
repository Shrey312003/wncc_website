---
layout: project
title: Seasons of Code
project: Krittika Website
topics:
    - Web Development
mentors:
    - Chaithanya Naik Mude 
    - Kritti Sharma   
mentees:
    - Vishnu Jayan
    - Harshit Varma

permalink: /soc/projects/krittika-website
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
        Develop a Django website for Krittika
        <br><br>
        We’re working to create a django website for catering to the publicity of events and handling of resources. We’re planning to expand the website to create a user friendly interface to edit the website with access given to specific people and create wiki. The other being handling user profiles and discussion forums.
        <br><br>
        There will be three steps that need to be followed.
        <br>
        1. Design the skeleton for the website using basic CSS and HTML. Convert this into a mobile friendly django website.
        <br>
        2. Add the user profile features and create personalized views for short scale users.
        <br>
        3. Create user friendly interface to edit things on the website.
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
      <td>Learn python, HTML and CSS.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Learn Django and decide upon the template and animations.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Create basic wiki page and editable interface to upload and arrange images and text appropriately.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Testing</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Editable interface to moderate posts regarding events on the website.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Add search bar for wiki pages and user profiles</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Create discussion forums similar to reddit style thread.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Testing</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Buffer week to finish up presentation and documentation</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
