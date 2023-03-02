---
layout: project
title: Seasons of Code
project: Road Accident Prevention (RAP)
topics:
    - Web Development
mentors:
    - Rishi Kumar 
    - Rishikesh Gunjal (200040123)   
mentees:
    - Preferably 6 to 7 (might take more depending upon the proposal) 
    
permalink: /soc/projects/2022/project225
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
<div>
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
            Countless people use the highway at all hours of the day and night. Taxi drivers, bus drivers, truck drivers, and long-distance travellers all suffer from sleep deprivation. As a result, driving when sleepy becomes extremely dangerous. 
            </p>
     <p class="display3" style = "font-size:22px;" >
             The majority of accidents occur as a result of the driver's tiredness. So, to avoid these accidents, we'll be developing a model using Python, OpenCV, and Keras to create a system that will inform the driver when he gets tired. The implementation of this project idea in actual world could save the life of a random driver and will be extremely useful. 
<br>
There is no requirement for prior Deep Learning experience, however it would be helpful if you did. Some familiarity with python and image classification is expected but you can catch up quickly without that too if you are motivated enough.  In your proposal, indicate your readiness to devote time to this project. If you have any previous coding (Python) or machine learning or deep learning skills, be sure to highlight that.
<br>
Similar Research Paper - 
<a href='https://www.mdpi.com/2076-3417/12/3/1145/pdf' target ='_blank'>https://www.mdpi.com/2076-3417/12/3/1145/pdf</a>
        <br>
        <br>
        Prequisites: Python (not compulsory), better if you have basic idea on deep learning and image classification (not compulsory). Mandatory prerequisite is Enthu!!
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1</td>
      <td>Get familarize with Python basics
</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction to OpenCV and applications
 </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Get acquainted with Neural Networks and Deep learning

</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Introduction to Keras and practicing building models
</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Working on the final model</td>
    </tr>
    <tr>
        <td>Week 6</td>
        <td>Working on the final model</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
