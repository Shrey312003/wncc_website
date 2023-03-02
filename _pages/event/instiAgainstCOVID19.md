---
layout: eventLayout
title: Events
project: COVID Talks
    
permalink: /events/event/covid_talks/
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
        WnCC conducted a two-day webinar series where participants got to learn about the working of some innovative and impactful solutions proposed by the professors at our college and used in the fight against COVID-19. Given below are the details of the webinars.
        <br><br>
        DAY 1
<br>
Speaker: Prof. Manoj Gopalkrishnan, Associate Professor, Department of Electrical Engineering, IIT Bombay. 
<br>
Project: Tapestry Tapestry is a mathematical algorithm for smart pooling of samples for COVID testing. The algorithm describes a novel way to pool samples and test in a single step, thereby conserving resources and increasing testing capacity by increasing throughput
<br><br>
    DAY 2
<br>
    Speaker: Prof. Bhaskaran Raman,
Professor, Department of CSE, IIT Bombay
Project: SMS-based E-token generator
A unique SMS-based E-token generation, live queue management and remote queue status check for the benefit of any service provider. The system has been used within the IITB campus extensively and has been found to be extremely user friendly and valuable in maintaining social distances among buyers.
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
