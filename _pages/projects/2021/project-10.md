---
layout: project
title: Seasons of Code
project: DIY FaceApp
topics:
    - Machine Learning
mentors:
    - Akshit Srivastava
    - Aakriti    
    
mentees:
- 10 
    
permalink: /soc/projects/2021/project-10
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
<div class = "mobile-img-soc">
  <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded">
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
        They main idea behind this project is to understand and implement the algorithms used by FaceApp, especially the aging/de-aging filter. Developing an actual app that does this would be a plus point!
        <br><br>
        Description: This project will involve learning many machine learning algorithms leading to Generative Adversarial Networks (GANs), which are the basis of such filters.
        <br><br>
        For students who have participated in Summer of Science (Machine Learning track) before, this would be a great hands-on project!
    </p>
</div>
<div class ="d-flex">
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
      <td>Use Linear Regression on a std dataset</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>CNN on MNIST dataset</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Implement basic GAN</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>GAN for face aging</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>documentation</td>
    </tr>
  </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
