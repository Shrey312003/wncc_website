---
layout: project
title: Seasons of Code
project: IIT-BEE
topics:
    - Web Development
mentors:
    - Gaurav P & Jayesh Singla   
    
mentees:
- 4-5   
    
permalink: /soc/projects/2022/project275
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
<div >
    <br>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center topics">{{topic}}</h4></li>
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        MOTIVATION:<br>
1. Most of the students applying to various engineering colleges in india after their jee exams no or very little idea of what happens inside<br>
2. Lack of knowledge amongst students about what goes on inside institute under various branches especially how placement and internships work, how studies are and what can u expect from each study<br>
3. Lack of trustable information available regarding various colleges<br>
4. Common platform for mentors who would like to share information about various stuff in their college and mentees who would like to follow and be updated about various stuff that happens in college<br>
</p>
 <p class="display3" style = "font-size:22px;" >
5. Lack of analytics that allow efficient comparison about different colleges and their pros and cons,ie lack of representative data which allows users to take conclusive decision while choosing their college<br>
</p>
<p class="display3" style = "font-size:22px;" >
BASIC FEATURES AND PLAN:<br>
1. Firstly a dashboard with representative data about various college closing/opening rank, placement and internship stats dept wise and overall(For this while developing we can first develop only using IITB data and if possible other IITs like IITM or IITD). This also allows users to compare across different colleges and dept<br>
2. Secondly, a post forum specific to each college where approved mentors can post info about their college which can be categorized as cult,tech,sports,acads,research etc. Post contains important information that can be released outside after approval<br>
3. Come up with a new rating system like IMDB which allows users to rate their college on various sections like cult, tech, sport, infrastructure. So for each tag ratings can be given by the user of the institute where the user  can be approved using some authentication mechanism. We will also be allowing text review below the rating value and also filtering of reviews based on rating to allow users to see why particular rating was given <br>
4. BONUS: Since we have opening and closing ranks year wise we can try some predictive algorithms but just for fun since the samples are really less hence not really expected to work very efficient<br>
5 .BONUS: Perform analytics on various data collected which can be user collected data or on scraped information. 
6 .BONUS: To make things interesting we try to come up with an algorithm which takes the users preference about branch and college which can have various categories and produces an ordering of choice filling (order of universities to be submitted during counseling) which is based on various stats like placements & internship stats, insti rating, etc. <br>
<br>
Prerequisites:
<br>
Firstly, high motivation and interest to work on the project since we are just guides and ideas for the project. U guys will be the heart of the whole project. Also if the project succeeds then they can continue their work on the project next year to develop it further to a commercial mode.<br> <br>

Just basic programming skills but they need to be comfortable in learning to code in various languages . They do need the motivation,interest to work and the ability to grasp things at a decent pace <br><br>

Note: We recommend you to apply for this if you are first interested in the idea and would like to contribute and not just for the coding part since we would like to take this project long term and mostly the mentees will be carrying it forward.<br>
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1-3</td>
      <td>Learning Basics of Front-end, Backend,Preparing project pipeline. Scraping and data collection</td>
    </tr>
    <tr>
      <td>Week 4-6</td>
      <td>Learning how to use JavaScript & jQuery</td>
    </tr>
    <tr>
      <td>Week 7-8</td>
      <td>Testing and Finishing left over parts. Also trying out new/additional features (be decided based on the flow of the project)</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
