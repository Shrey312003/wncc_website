---
layout: project
title: Seasons of Code
project: ML GYM
topics:
    - Machine Learning
mentors:
    - Lalit Saini
    - Devak Sinha   
mentees:
- Akash Vivek Chodankar
- Anjali Yadav
- D. Chandra Sekhara SS Hetha Havya
- G. Raghunandan Reddy
- Ishan Kapnadak
- Koustav Sen
- Prakhar Mittal
- Shaan Shah
- Shivam Raj
- Prathmesh Jayaprakash
- Sheel Shah
- Sumeet Kumar Mishra
permalink: /soc/projects/ml-gym
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded img-soc">
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
        <li><h5 class=" ">{{mentor}}</h5></li>
        {% endfor %}
    </ul>
    <h4 class="display3  ">Mentees :</h4> 
    <ul>
        {% for mentee in page.mentees %}
        <li><h5 class="">{{mentee}}</h5></li>
        {% endfor %}
    </ul>
</div>
<div>
    <p class="display3" style = "font-size:22px;" >
        <br>
        The project is about making a web platform where a user can upload the data, choose any model according to which they want their data to be trained and see the results. In the first phase, we will make a platform where every parameter is given by the user. After successfully completing this, we will add a feature to suggest the best method and parameters for the data. In the final stage, the platform will have features for uploading raw data and getting results after pre-processing. Pre req: Grip over linear algebra
        <br><br>
        Every week, the mentees will be given to learn, analyze and work on a specific algorithm and explore how variation of parameters can vary the results for that.
    </p>
</div>
{% endif %}
{% endfor %}