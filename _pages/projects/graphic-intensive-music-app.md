---
layout: project
title: Seasons of Code
project: Graphic Intensive MUSIC APP
topics:
    - Development
    - Graphic Design
    - Animation
mentors:
    - Sudhanshu Sahil
    - Ravi Jangir          
mentees:
    - Shweta Shaw
    - Mitali singhal
    - Yash Sharma
    - Sarthak rao
    - Md Kamran
    - Khyati Jain
    - Ishaan Agarwal
    - Anchal yadav
    - Esha Kolte

permalink: /soc/projects/graphic-intensive-music-app
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
        This project aims at introducing the student to the world of software development and graphic design. We will present several tools such as Android Studio, Google’s Firebase, Django, Adobe Xd, Adobe Photoshop and Adobe Premiere Pro. After completing the basics, we will apply the learned concepts to build and design an ergonomic music app.
        <br><br>
        The project has three parts: The interface will be developed using android studio / Flutter ,this will be the part of the app that the user interacts with. The back-end will be developed using Firebase / Django , this will be a server that stores the music and take care of authentication etc. The interface and logo of the app will be designed using Adobe Xd and Adobe Illustrator. Some animated video will be added using Adobe Premiere Pro.
        <br><br>
        Our major aim for the SOC is for our mentees to explore the fields of design and development and therefore, there are no hard prerequisites. We will start from the very basic. All that is required is an interest in design or coding and enthusiasm to work.
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
      <td>Basics such as languages and design softwares</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Create a basic working prototype of individual platforms (App/Website - creating a simple app with list views and basic UI; Server - Creating an API with GET/POST requests) ; Design: wireframe of the app (Layout and Hover Animations)</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Implementing individual features, Implementation and testing of models. Deciding the colour scheme and fonts that matches the user expectations.</td>
    </tr>
    <tr>
      <td>Week 8-10</td>
      <td>Improve code structure/ Improve aesthetics of the app/ Buffer Time.</td>
    </tr>
    <tr>
      <td>Week 11</td>
      <td>Feedback and Review Week</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
