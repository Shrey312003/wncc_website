---
layout: project
title: Seasons of Code
project: BuzzWord
topics:
    - Web Development
mentors:
    - Prajwal Kamble     
    
mentees:
- 4-5   
    
permalink: /soc/projects/2022/project221
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
<div>
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        Buzzword is an app to learn new words. These words can be either for your GRE/Toefl preparation, technical jargon that one might to learn etc. Structure of the app would be tinder like where you:
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;"> swipe right to the new word that learned</li>
<li class="display3 mb-2" style = "font-size:20px;"> swipe left to the word you already knew</li>
<li class="display3 mb-2" style = "font-size:20px;"> save the word you want to refer later</li>
</ul>
<p class="display3" style = "font-size:22px;" >
We would use Flutter for frontend, Django or NodeJS for backend (a/c to preference of mentees).
We would need 2 mentees working on Flutter and 2 mentees working on backend. 
<br>
Prerequisites:
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;">Familiarity of some programming language and OOPs concepts</li>
<li class="display3 mb-2" style = "font-size:20px;">Enthusiasm and eagerness to explore</li>
</ul>
<p class="display3" style = "font-size:22px;" >
Note for Mentees:
</p>
<ul style = "list-style-type: disc">
<li class="display3 mb-2" style = "font-size:20px;"> Mention whether you want to work on frontend or backend. If you are not clear or want to work on both, mention that.</li>
<li class="display3 mb-2" style = "font-size:20px;">  If you are good at UI design, write it in proposal </li>
</ul>
</div>
<div class = "d-flex flex-wrap">
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
      <td>Get Familiar with flutter and django/nodejs (whatever we decide to use)</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>UI design on paper and backed structure</td>
    </tr>
    <tr>
      <td>Week 3-6</td>
      <td>Code - Test - Debug - Code (app and backend separately)</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Integrate App with Backend</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
