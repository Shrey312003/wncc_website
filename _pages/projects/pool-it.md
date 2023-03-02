---
layout: project
title: Seasons of Code
project: Pool It!
topics:
    - Development
    - Web Development
mentors:
    - Aman Kansal
    - Ansh Khurana
mentees:
    - Vikas Panwar
    - Rahul Prajapat
    - Dhruv Sah
    - JULAKANTI MUKESH REDDY
    - Megha Baboria
permalink: /soc/projects/pool-it
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
        The project aims at extending the web application built for the pooling of possible services that can be shared. This is an idea we are implementing as one of our course projects but want to take it further.
        <br><br>
        Here is an overview -
        <br><br>
        Modern technology has transformed the marketplace worldwide. Apps and websites like Uber, Zomato, Amazon, and Flipkart have redefined the relationship between consumers and producers. With just the tap of a button, customers can bring the day to day services to their doorstep, giving an all-new meaning to consumerism.
        <br><br>
        However, in this dynamic marketplace, there are no apps/websites which offer consumer-consumer interaction. What if you want to order food with friends? How do you find like-minded friends to go with for a movie?
        <br><br>
        Technology at hand ignores the social aspect of the marketplace. We seek to address this void by creating “Pool-It!”, a user-driven platform that brings consumers together. Now no more time wasted searching for the “10th” member to avail your group discount!
        <br><br>
        - Before Pool-It! (real-life): Call a bunch of people to find out whether they are interested. 25% will say they already watched the movie, 25% will say outright that they are not interested, and the rest will spend at least 2 hours coordinating. ( college problems :) ).
        <br><br>
        - After Pool-It! (utopia): I open “Pool-It!”, select the groups of people I would wish to go with, and wait to get matched. No more coordination!”



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
      <td>Get familiarized with Git</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Go through Django tutorials and documentation (references to be provided later)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Have a look at the source code and build and run it locally</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Learn thoroughly SQL and the basic concept of Databases. (We now plan to divide the 4 mentees into two groups of 2 [can be reshuffled peridically], each of which would then be working on a separate feature to implement in the app)</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Possible checkpoints - group creation by link sharing (only people belonging to a group can pool services),  proposals and finalization of matching algorithms</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Possible checkpoints - calendar integration into the app and setting up the notification mechanism for service updates</td>
    </tr>
    <tr>
      <td>Week 9-10</td>
      <td>Possible checkpoints - in-app person to person chat support, group chat support, in-app voice call and screen sharing support</td>
    </tr>
    <tr>
      <td>Week 11</td>
      <td>Document the work done in the project</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
