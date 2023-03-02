---
layout: project
title: Seasons of Code
project: Food Recommendation through Machine Learning
topics:
    - Machine Learning
    - Development
mentors:
    - Anuj Agrawal 

mentees:
- Sreyashi Saha
- Aneri Modi
- Vinamra Baghel
- Labdhi Gandhi
- Pokala Mohith
- Zeel Shah
- Mansi Singhai
- Garvit Joshi
- Anusha Mantha
- Abhijeet Soni
- Dhruv Arora
- Amisha S Kanhekar
- Ayan Agrawal
- Hardik Siloiya
- Aayush Shahid
- Rhythm Shah  
    
permalink: /soc/projects/food-recommendation-through-machine-learning
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
        The project has two parts: The front-end is an Android app/website that provides an interface to choose food recipes and create schedules. The back-end will be a Django server that provides personalized recommendations through machine learning.
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
      <td>Setting up the Environment and learning the basics of each platform</td>
    </tr>
    <tr>
      <td>Week 2-3</td>
      <td>Basics of languages used in individual languages (App - Java/Kotlin; Website - JavaScript/CSS/HTML; Server - Python)</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Create a basic working prototype of individual platforms (App/Website - creating a simple app with list views and basic UI; Server - Creating an API with GET/POST requests)</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Creating a basic infrastructure of the individual platforms for the project. Learning Machine Learning basics</td>
    </tr>
    <tr>
      <td>Week 8-9</td>
      <td>Implementing individual features, Implementation and testing of models</td>
    </tr>
    <tr>
      <td>Week 10-12</td>
      <td>Improve code structure/ Improve aesthetics of the app/ Buffer Time</td>
    </tr>
    <tr>
      <td>Week 13</td>
      <td>Writing Blogs sharing experiences etc.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
