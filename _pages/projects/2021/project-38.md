---
layout: project
title: Seasons of Code
project: ResoBin - Not the bin we deserve but the bin we need! 
topics:
    - Web Development
mentors:
    - Rishabh Arya 
    - Latika Patel      
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-38
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
        <br>
        Description:
        <br><br>
        You may have caught yourself asking for past papers, resources and anything and everything possible one day before your exams. The SSS fb page is filled with such requests before every mid sem and end sem. There are a number of electives offered by various departments in the institute and many students find it difficult to find the required resources. To solve this problem, we propose to create a collaborative platform for collecting resources and making them available for use by all. Students will be able to upload past papers, tutorials etc for the courses they have taken and will be able to access the material uploaded by others.
<br><br>
</p>
        <p class="display3" style = "font-size:22px;" >

        We will be using ReactJS for the frontend and Django for the backend. We are looking for enthusiastic people who are willing to learn. There are no other prerequisites. At the end of this, you will have made your own first live project. And the knowledge gained would be enough for you to make your own portals and websites.
  <br>
</p>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
   <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Getting familiar with basics of git, HTML and CSS</td>
    </tr>
    <tr>
      <td><strong>Week 2 &amp; 3</strong></td>
      <td>Basics of javascript, ReactJS and python.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Finalising the UI of the portal and start developing the frontend and backend simultaneously depending on the mentees’ preference</td>
    </tr>
    <tr>
      <td><strong>Week 5 &amp; 6</strong></td>
      <td>Work on the functionalities of the portal such as login, upload and search.</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Making a database out of the results and drawing inferences using python libraries</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Final Testing and Debugging</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Feedbacks and Deployment</td>
    </tr>
  </tbody>
</table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Checkpoint Number</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>Completed at least one given ReactJS and Django Tutorials</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Finalise database schema, login and signup functionality</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Finalise the UI of the portal, Complete upload and download functionality</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Complete feature testing and fix bugs</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Reviews for the portal and final changes</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
