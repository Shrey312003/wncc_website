---
layout: eventLayout
title: Events
project: QnA with Kalpesh
    
permalink: /events/event/qna-with-kalpesh/
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
    <p class="display3 project-desc" style = "font-size:22px; margin-bottom:450px" >
        <br>
        Kalpesh Krishna is an EE undergraduate (2014-18) from IITB and is now pursuing MS/PhD in Computer Science from University of Massachusetts, Amherst. He has also done some remarkable internships under Google Brain, Google AI language, University of Chicago and has also contributed to Mozilla, under Google Summer Of Code.
<br><br>
He shared with us his journey and how he pursued his career in Computer Science. He discussed about how he paved his way towards a career in Computer Science despite being from a non CS background. He also talked about what all activities one should do in the Institute to build a solid career in Computer Science. He answered various questions including Why he preferred a PhD over a job in corporate sector and also discussed his past internship experiences.
<br><br>
    </p>
</div>
{% endif %}
{% endfor %}
