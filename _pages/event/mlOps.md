---
layout: eventLayout
title: Events
project: Fundamentals of MLOps
    
permalink: /events/event/mlOps/
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
       Ever wondered how organizations build, deploy, maintain, adapt, retrain & redeploy large-scale AI-powered applications? In today's fast-paced industry, maintaining & deploying scalable applications while being able to adapt quickly to the changing consumer requirements is of utmost importance. Through this course, you will be introduced to some of the core ideas behind combining the long-established practices of DevOps with the emerging field of Machine Learning. You will be exposed to the various stages of ML model lifecycle, including data versioning, experimentation, evaluation & monitoring. To consolidate these principles, you will also get an opportunity to build & deploy end-to-end ML pipelines by leveraging various ML Operations Management tools.
<br><br>
Under Learners' Space, Web and Coding Club, IIT Bombay and Career Cell IITB bring to you a course on Fundamentals of MLOps.
Happy Learning!
<br>
<a href="https://github.com/wncc/TSS-2021/tree/main/Fundamentals%20of%20MLOps">Resources and Material for the course</a>
    </p>
</div>
{% endif %}
{% endfor %}
