---
layout: result
title: Seasons of Code
project: Moodify


    
permalink: /soc-results/project-40-result
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
    <h4 class="mentors" style="display: inline;">Abhishek Pai Angle, Divyanshi Kamra</h4>    
    <br>  <br>
    <h4 class="mentor-title" style="display: block;">Mentees</h4> 
    <h4 class="mentors" style="display: inline;">Sarthak Mehrotra, Adish Shah, Karrthik Arya, Tanirika Roy, Sai Teja Varanasi, Kritheesh, Hastyn Joshi, Krutheeka R K J, Aaditi Thete, Siddhant Dutta , Dhawal Singh</h4>
    </div>

<div class = "button-holder">
    <div class="button-res"><a href="https://docs.google.com/document/d/1PybK8Y8RXCibicR8ruDFCIAzLA3jRc6kBZBufjChgks/edit" role="button">Documentation</a></div>
    <div class="button-res"><a href="https://github.com/E-Kritheesh/mooodify_app" role="button">GitHub Repo</a></div>
    <div class="button-res"><a href="https://drive.google.com/file/d/1FCsL5U78mmzPckZbryxsmJXUqi6PQFax/view?usp=sharing" role="button">Demo</a></div>
</div>

{% endif %}
{% endfor %}
