---
layout: eventLayout
title: Events
project: Internship Preparation Session
    
permalink: /events/event/intern_prep/
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
  </div>>

<div>
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom:350px" >
        <br>
        To help prepare for the gruesome intership season, WnCC along with Career Cell IITB organized this INTERNSHIP PREPARATION PROGRAM.
        <br><br>
        
 WnCC regularly released DSA preparation booklets (comprising both theory and questions) from 13th to 27th June 2021. Moreover, for assistance with the doubts related to the booklets we had with us, Aakash Kapoor, an IITB electrical 2020 graduate, currently, a Machine Learning researcher at Samsung. He also held detailed DSA tech sessions to help people learn. These sessions were held a day after the release of the booklet and were specifically focused on the material covered in that booklet.
<br><br>
 
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
