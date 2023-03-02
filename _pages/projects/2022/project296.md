---
layout: project
title: Seasons of Code
project: Advances in Nuclear Fusion
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Jai Israni
    
mentees:
- 11
    
permalink: /soc/projects/2022/project296
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
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        Researches now believe that nuclear fusion is the best possible energy alternative to fight climate change, having the capacity to produce huge amounts of energy from handful of seawater. Yes, the same process that powers the Sun and stars. Various nations and billion dollar companies are already on the run supporting research in this field. Tokamaks and stellarators are two kinds of fusion reactors among others in the present day. Through this project I hope to motivate young to-be engineers and scientists to contribute and fight for the global cause, revealing to them the potential of nuclear power through news articles and research papers. 
        <br>
The final goal is to be able to reproduce graphs in articles with high accuracy and summarise the scientific and technological strides in Nuclear Power through Nuclear fusion. Gaining experience in this kind of plotting will help you in innumerable tasks when you are analysing any research paper involving data analysis and plotting. Topics will glide on the borderline of fusion theory and experiment. You will be guided in both Python and MATLAB, using either or both depending on the available datasets. Additionally, you might also end up learning some SQL.
</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1-2-3</strong></td>
      <td>Python basics and plotting, Nuclear Energy,Nuclear fusion, MATLAB</td>
    </tr>
    <tr>
      <td><strong>Week 4-5 </strong></td>
      <td>Magnetohydrodynamics

 </td>
    </tr>
    <tr>
      <td><strong>Week 6-7  </strong></td>
      <td>Research papers, plasma technologies</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
