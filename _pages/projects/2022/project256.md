---
layout: project
title: Seasons of Code
project: "Intro to Web Development, News Café (A News Aggregator Web-App)"
topics:
    - Web Development
mentors:
    - Molina Dhembla
    - Gurpreet Singh Wadhwa
    - Dhananjay Kejriwal   
    
mentees:
- 4 
    
permalink: /soc/projects/2022/project256
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
<div >
    <p class="display3" style = "font-size:22px;" >
        <br>
        "The first half of this project will involve extensive use of the python Django framework in developing a news aggregator web application. Mentees will have to learn how to use Django for basic web development. Learning how to access APIs in Python will be required for obtaining news articles. <br><br>
The second half will focus on frontend development, particularly in React js or Angular, this is flexible and mentees can choose which software they wish to learn and use for developing the frontend. Learning how to integrate this with the Django backend is the major task.
<br>
Extra: Mentees can attempt hosting the final app (possibly via Heroku) depending on their progress and interest. This will require learning how to handle a cloud-based PostgreSQL database.<br><br>

Some resources-<br>
For python beginners:<br>
<a href="https://youtu.be/_uQrJ0TkZlc">https://youtu.be/_uQrJ0TkZlc</a><br>
<a href="https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU">https://www.youtube.com/playlist?list=PL-osiE80TeTt2d9bfVyTiXJA-UTHn6WwU</a><br>
Django documentation and tutorial:<br>
<a href="https://docs.djangoproject.com/en/4.0/">https://docs.djangoproject.com/en/4.0/</a><br>
<a href="https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p">https://www.youtube.com/playlist?list=PL-osiE80TeTtoQCKZ03TU5fNfx2UY6U4p</a><br>
Angular basics:<br>
<a href="https://youtu.be/k5E2AVpwsko"> https://youtu.be/k5E2AVpwsko</a>	
        <br>
Prerequisites:<br>
Experience with basic python programming and/or frontend development with React js/Angular<br>
Experience in using Django framework<br>
*these are not hard requirements, enthusiasm and willingness to learn matters most*<br>
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
      <td>Week 1-2</td>
      <td>Learning Django. 
We will provide resources (video tutorials and documentation) which mentees can use if they will be using Django for the first time in this project. Mentees will be expected to start basic implementation in the second week.
  </td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>	Working on developing the news-aggregator backend on Django and completing a provisional (working) backend</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learning frontend design with React js or Angular (based on what mentees want to learn/use). We will provide the resources.</td>
    </tr>
    <tr>
      <td>Week 6-8</td>
      <td>Developing frontend design and integrating it with the backend on Django
Extra: tie up loose ends, touch up the frontend with interactive elements and mentees can attempt hosting the app (possibly via Heroku) depending on their progress and interest</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
