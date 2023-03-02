---
layout: eventLayout
title: Events
project: Python and its Applications
    
permalink: /events/event/python/
---

<h2 class="display1 p-3 text-center project-title">{{page.project}}</h2>

{% for project in site.data.settings.events-items %}
{% if project.title == page.project %}
<div class ="img-event d-block"> 
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-1">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-2">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-3">
    <img src="{{ site.baseurl }}/{{ project.image }}" alt="{{ project.project}}" class="img-4">
</div>
<div class = "mobile-img-soc">
  <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded">
  </div>

<div>
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
       For many developers picking up the basics of Python is an easy part. After they’ve mastered the basics of Python, a whole new world opens up! And suddenly it’s all about learning the libraries, frameworks, and best practices that surround Python. This course will help you dive deeper into some of the concepts & libraries that will prove to be extremely useful in your journey of  Python. It will introduce you to some of the fundamnetal concepts of python and then help you apply them in fields like data analysis, game development, Natural Language Processing and Scientific Computing.
<br><br>
Under Learners' Space, Web and Coding Club, IIT Bombay and Career Cell IITB bring to you a course on Python & its Applications.
Happy Learning!
<br>
<a href="https://github.com/wncc/TSS-2021/tree/main/Python%20%26%20its%20Applications">Resources and Material for the course</a>
    </p>
</div>
{% endif %}
{% endfor %}
