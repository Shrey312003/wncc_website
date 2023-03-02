---
layout: project
title: Seasons of Code
project: Computer vision based web app
topics:
    - Machine Learning
mentors:
    - Senthil Vikram Vodapalli 
    - Dharshan    
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-34
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
        
        In the early weeks, the mentee will be revising python programming, ML concepts focussing on computer vision and image processing. Next, the mentee will be implementing basic classification and recognition models and going through the state-of-the-art literature on detection models. Next, the mentee will work on implementing a transfer learning model of state-of-the-art object detection model and testing it on PC completely offline with live video input. The results from the detection model will be saved into a file and the mentee will work on building a web application and deploying the model to output results using flask with considerably good UI. Depending on the time available, further improvements can be made in the data analysis and UI part.

  <br><br>
</p>
<p class= "lead" style = "font-size:30px;"> 

        Resources:
</p>
  <p class="display3" style = "font-size:22px;">
        https://machinelearningmastery.com/how-to-develop-a-convolutional-neural-network-to-classify-photos-of-dogs-and-cats/
        https://ai.googleblog.com/2020/04/efficientdet-towards-scalable-and.html
        https://towardsai.net/p/computer-vision/yolo-v5-object-detection-on-a-custom-dataset
        </p>
        <p class="display3" style = "font-size:22px;" >


<br><br>
        Image processing: https://pythonprogramming.net/loading-images-python-opencv-tutorial/
       <br><br>
       </p>
        <p class="display3" style = "font-size:22px;" >

        Basic web development: https://www.w3schools.com
        Flask: https://www.tutorialspoint.com/flask/
  </p>
  <br>
</div>
<div class="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-stripped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Brushing up python, ML and image processing.</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Implementing an image classification model (cat vs dogs)</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Implementing an object detection model and going through the state of the art literature in detection models.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Working on transfer learning detection model of selected architecture in colab</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Making the model to work in offline and start working on web application</td>
    </tr>
    <tr>
      <td><strong>Week 6</strong></td>
      <td>Making a database out of the results and drawing inferences using python libraries</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Deploying the model results on the web application using flask</td>
    </tr>
    <tr>
      <td><strong>Week 8</strong></td>
      <td>Error handling, further improvements and back log cover-up week</td>
    </tr>
  </tbody>
</table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-stripped">
  <thead>
    <tr>
      <th>Checkpoint Number</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>Implement,validate and fine-tune a binary classification model from scratch for cat vs dog dataset from microsoft</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Implement ,validate and fine-tune an object detection (on what classes/data) algorithm from scratch</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Perform transfer learning on existing state of the art networks to fine tune them to our requirements</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Build a web frame-work/app with user friendly UI for live, interactive user experience with the model of best performance.</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Perform basic data analysis with the generated output of the model to determine useful information about the input data.</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
