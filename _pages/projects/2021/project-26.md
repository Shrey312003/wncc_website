---
layout: project
title: Seasons of Code
project: Browser Based PDF Manager
topics:
    - Web Development
    - Image Processing
mentors:
    - Danish Angural
    - Tanmay Hiremath 
    
mentees:
- 6-8 students   
    
permalink: /soc/projects/2021/project-26
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
        <br>
        A project that helps you create such a client based application for all document related operations in a single location, which includes reading handwritten notes!

        Description: How often have you wanted to combine the speed of handwritten notes to the neatness of latex printed document? 
        </p>
         <p class="display3" style = "font-size:22px;" >
        Here is a project that helps you create such a client based application for all document related operations in a single location, which includes reading handwritten notes!!!. Here you will create a browser based PDF editor which will have various tools like organise pages, merges, split pdfs, rotate, etc, and scan handwritten notes. What you can expect to learn: Angular Javascript Some reading material to start you off: https://angular.io/ https://material.angular.io/components/categories https://pdf-lib.js.org/ https://tesseract.projectnaptha.com/ https://en.wikipedia.org/wiki/Optical_character_recognition
  </p>
  <br>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>	Learn basics of HTML, CSS, Angular, Material, javascript, Small Assignment of creating a homepage using Angular.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Start with Frontend in Angular, create homepage.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Work in teams to create pages for various tools with partial functionality.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Incorporate PDF managing javascript libraries to complete functionality of most tools.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Incorporate OCR into tools for notes reading to generate a latex and a pdf file.</td>
    </tr>
    <tr>
      <td>If time permits</td>
      <td>Extend notes reading to math OCR.</td>
    </tr>
    </tbody>
    </table>
</div>

{% endif %}
{% endfor %}
