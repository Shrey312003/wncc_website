---
layout: project
title: Seasons of Code
project: Moodify
topics:
    - Web Development
mentors:
    - Deepanshu Bagotia 
    - Aadish Jain   
mentees:
- 4-5   
    
permalink: /soc/projects/2022/project226
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
<div class = "project-desc">
    <p class="display3" style = "font-size:22px;" >
        <br>
            Have you ever experienced that the instagram posts visible to you are completely unrelated to what you wanted to see ? Well, not anymore.
            <br>
Moodify will classify your insta feed according to your current mood, which will make your feed more engrossing and relatable. We will use Instagram API for gathering the feed and apply our model to select relevant posts. We plan to build a ML model which will classify the posts based on their picture, caption, and top few comments to predict which mood is more likely to relate with this post. <br>
Initially we will learn a CNN based model for the image part and a RNN based model for the textual part. Then we will combine their outputs to predict a common metric and classify the outputs in "happy", "funny", "motivational" etc. <br>
We will only be working on those posts with a single image (in case of multiple images we will select the first one). Later, if time permits, we may also build a mobile application for the same. 
<br>
Prerequisites: <br>Basic knowledge of python is mandatory, <br> additional knowledge of ML will be appreciated. 
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
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
      <td  >Week 1-2</td>
      <td>Learning basics of CNN and RNN
</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Understanding MetaForDevelopers API offered by instagram
 </td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Building the CNN model for image classification

</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Implementing RNN model for textual data
</td>
    </tr>
    <tr>
        <td> Week 8-9 </td>
        <td> Combining both the models to get the final output, and hyper parameter tuning for achieving better results  </td>
    </tr>    
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
