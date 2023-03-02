---
layout: eventLayout
title: Events
project: Introduction to App Development
    
permalink: /events/event/intro-app-dev/
---

<h2 class="display1 m-3 p-3 text-center project-title">{{page.project}}</h2>

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
       Have you ever wanted to build beautiful android/iOS applications? You can learn to craft user-friendly beautiful apps within a month! 
<br>
An Introduction to App Development using Google's Flutter SDK which is used for crafting beautiful applications using a single codebase. Compared to its counterparts like React Native, Swift and Java, Flutter is much easier to learn and use. Flutter supports a fast app development process hence it saves a lot of time that goes into getting your application from start to finish. Flutter is relatively a newer framework compared to React Native but there is an increasing demand of Flutter for App Development.By the end of this course, you will be fluently programming in Dart and be ready to build your own Flutter apps.
<br><br>
Under Learner's Space, Web and Coding Club, IIT Bombay and Career Cell IIT-B bring to you a course on Introduction to App Development.
<br>
<a href="https://github.com/wncc/TSS-2021/tree/main/Intro%20to%20App%20Development">Resources and Material for the course</a>
    </p>
</div>
{% endif %}
{% endfor %}
