---
layout: result
title: Seasons of Code
project: DIY FaceApp


    
permalink: /soc-results/project-10-result
---

<h2 class="display1 m-3 p-3 text-center customcol">{{page.project}}</h2>
{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}

<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "75%" height="auto"  alt="{{ project.project}}" class="border rounded" style = "float: left; margin-top: 3%; margin-right: 3%">
</div>


<div class="mentor-mentee-section">
    <br>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
        {% endfor %}
    <br>
    <h4 class="mentor-title" style="display: block; fontWeight: 800">Mentors</h4>   
    <h4 class="mentors" style="display: inline;">Akshit Srivastava, Aakriti  </h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Mihir Nandawat, Satwik Murarka, K Adithya Krishna, Manav Doshi, Ashutosh Mitra</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1vcRRxbU9ptm81Jji-60zA29VnP3lZ4N6arZfKckIEZ4/edit?usp=sharing" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/mihirn07/DIY_FaceApp_SOC" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/drive/folders/1UsBEb33gvYR89P6UuQAviAlTWN5waM8U?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
