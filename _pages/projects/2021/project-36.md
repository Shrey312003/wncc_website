---
layout: project
title: Seasons of Code
project: Language Detection
topics:
    - Machine Learning
mentors:
    -  Tejpal kumawat        
    
mentees:
- 5 students   
    
permalink: /soc/projects/2021/project-36
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

<div>
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        Description:

Project will be based on Natural Language Processing which will predict language (English , hindi , chinese and French)
Predict the language of the written text and also language of the text from the images.
Read text from images by Optical Character Recognition (OCR) using tensorflow.
Use concepts of natural language processing and deep learning to do this
Will deploy the model on the heroku with the help of streamlit.

<br><br>

</p>
<p class= "lead" style = "font-size:30px;"> 

Resources:

</p>
  <p class="display3" style = "font-size:22px;" >


Streamlit - https://www.youtube.com/playlist?list=PLtqF5YXg7GLmCvTswG32NqQypOuYkPRUE
<br><br>
NLP- https://www.youtube.com/watch?v=fM4qTMfCoak&list=PLZoTAELRMXVMdJ5sqbCK2LiM0HhQVWNzm
<br><br>
OCR- https://www.youtube.com/watch?v=aELZtpOClWk&list=PLreVlKwe2Z0QKobecSxrheGzrgd4iXJje
<br><br>
Github- https://github.com/tejpal123456789/Natural-Language-Processing/blob/main/language_detection.ipynb
       </p> <br>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Learn basics of python and try to understand basics of deep learning</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Start learning about natural language processing like how to clean data, how to convert text into vector  (basic level) and also about OCR</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn how to train model with simple machine learning algorithm</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Learn basics of the streamlit</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Apply all these things on the capstone.</td>
    </tr>
  </tbody>
</table>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Checkpoint Number</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>Python</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Natural language Processing</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>OCR and its application</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Model training using python and basics of the stremlit</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Final Project</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
