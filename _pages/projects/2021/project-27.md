---
layout: project
title: Seasons of Code
project: Resume Script Generator
topics:
    - Web Development
    - Development
mentors:
    - Divyansh Natani
    - Vedant Kumar Sultania      
    
mentees:
- 5-6 students   
    
permalink: /soc/projects/2021/project-27
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
        Building your resume with the template of your choice just made easier!
        Description: This project will make use of Django to generate a dynamic form website, which will collect all details required for making a resume like Scholastic Achievements, Key Projects, PORs etc. This will involve dealing with dynamic forms which can include headings, multiple sub-headings and sub-sub-headings. 
        </p>
         <p class="display3" style = "font-size:22px;" >
        For, handling this, we will use Django Framework and other Python libraries. This form will, at the end, generate a LaTEX script which can be used to generate Resume. Will use Bootstrap for front-end design. Here, we will deal with all standard resume formats used at IITB(2-3 types of 2-page resume and 2-3 types of 1-page resume) to give user a choice of format
        <br>
        This project can serve institute and can help reduce time required to make a resume. So, it has a high scope.
        <br>
        If you are newbie to python, don’t be scared. Just go through this resource once, hardly it takes 1-2 hr to understand basics of python. If facing any problem, you are welcome to reach out to us.
        <br>
        In proposal, you must include your motivation, how will you contribute/what new you can add and why should we take you. For those who do not satisfy (Soft) prerequisite, please do also include how are you gonna cover it up(just give a brief plan, we will provide you help and resources).
        <br>
        At the end of this, you will have hands-on-experience on one of the most used Python-Web framework, Django along with HTML, CSS, bootstrap. Also, you will learn about LaTEX, which will definetely help you in making your assignments as well as resume. Timeline will use three weeks of starting SOC period and three weeks of summer vacations.
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
      <td  >Week 0</td>
      <td>Brush Up Python</td>
    </tr>
    <tr>
      <td>Week 1</td>
      <td>Introduction to Django</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction to LaTEX</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Form Rendering</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Writing Backend Logic for Form and including LaTEX Structure</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Front-end Design and other logistics</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
