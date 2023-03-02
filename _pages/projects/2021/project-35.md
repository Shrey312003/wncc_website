---
layout: project
title: Seasons of Code
project: Techster Texter
topics:
    - Web Development
mentors:
    - Ashish Pandit       
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-35
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
        
        Whats App is widely used for it’s simplicity. Every new project you begin, you have a new whats app group. Have you ever wondered what are the common types of messages that flow around(in a project group, because on family group its only GM and the college groups are dead.)? I have wondered. Also, with so many project management tools in the market, why don’t they become hit? Because they are too complex, heavy and difficult to master. How about we provide mankind with a golden mean of WhatsApp and Slack? Design a texting Android Application that is secure and provides additional features escpecially for team coordination.
<br><br>
</p>
<p class= "lead" style = "font-size:30px;"> 

        Resources:
</p>
        <p class="display3" style = "font-size:22px;" >
  <br><br>

        Streamlit - https://www.youtube.com/playlist?list=PLtqF5YXg7GLmCvTswG32NqQypOuYkPRUE
<br><br>
        NLP- https://www.youtube.com/watch?v=fM4qTMfCoak&list=PLZoTAELRMXVMdJ5sqbCK2LiM0HhQVWNzm
<br><br>
        OCR- https://www.youtube.com/watch?v=aELZtpOClWk&list=PLreVlKwe2Z0QKobecSxrheGzrgd4iXJje
<br><br>
        Github- https://github.com/tejpal123456789/Natural-Language-Processing/blob/main/language_detection.ipynb
  </p> <br>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-stripped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>In week one, we shall list the features of the App, Set up the Environment and learn the basics of each platform, decide/ shortlist platforms for database, etc and design the architecture of the application</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Survey of similar apps, teams of different components will start working seperately: Front end team, database team, security, network/ communication team.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Teams will merge/ integrate the codes of different systems.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>The App will tested for parameters, loopholes, bugs</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
