---
layout: eventLayout
title: Events
project: Code in Quarantine
    
permalink: /events/event/code-in-quarantine/
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
        During the COVID '19 pandemic, WnCC organised Code in Quarantine so that people could utilize their idle time during the lockdown learning programming.
<br><br>
Here’s the list of topics that were covered 
<br>
Week 1 - Python
<br>
Week 2 - Competitive Programming
<br>
Week 3 - Machine Learning
<br>
Week 4 - Git/GitHub
<br>
Week 5 - FrontEnd Dev
<br>
Week 6 - BackEnd Dev
<br>
Week 7 - Advanced FrontEnd Dev
<br>
Week 8 - Blockchain

<br><br>
    Every Monday, a tutorial containing links to some beginner-friendly resources was shared, along with a task to assess learning. People freely discussed their doubts while understanding the tutorial or solving the task on our Telegram group.
    </p>
</div>
{% endif %}
{% endfor %}
