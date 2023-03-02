---
layout: project
title: Seasons of Code
project: (Un)structured
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Gagan Jain

mentees:
- Heetak Shah
- Suraj Samaga
- Deepanshu
- Vaishnavi Agarwal
- Supreet Gupta
- Ritwik Kadu

    
permalink: /soc/projects/unstructured
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
        We all have used scanned copies of books and have been irritated by the fact that we cannot directly navigate to a particular section of the document or do a Ctrl+F. This project aims to take unstructured text as the input data and to give us nice and good looking structured text. This is not only restricted to properly written text as in a book but also extends to targeting problems like a self driving car detecting and understanding random road signs, automatic detection systems to record and interpret number plates of vehicles which did not follow the red light, and much more!
<br><br>
So, let’s dwell deep into the technicalities of the project. In simple words, the problem we’re targeting is as follows - ““You have an image as an input which contains text at certain locations in the image. You need to detect the text and generate the text present in the input as the output. This involves segmenting the given image to focus only on the part of the image which contains text. Then you need to implement text recognition to generate the output.””
<br><br>
So, having stated this, the project expects no prior knowledge of machine learning, but it will be a bonus if you know some stuff. You should be familiar with basics of linear algebra, and a little calculus(which you already know). Basic proficiency in Python is desirable but you can cover up even without that. As far as the proposal is concerned, you should be willing to dedicate time to the project because it is going to be learning intensive and time taking. Also mention your experience with coding in python and background in ML, if any. Also include what do you understand by the project description. You might require a lot of time to train your model just to check little changes.
<br><br>
Resources:
<br>
    <a href='https://www.hackerrank.com/domains/python'>Python</a><br>
    <a href='https://www.coursera.org/specializations/deep-learning'>Deep Learning Specialization</a><br>
    <a href='https://towardsdatascience.com/a-gentle-introduction-to-ocr-ee1469a201aa'>OCR</a><br>
</p>
</div>
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
      <td>Learn the basics of version control (GitHub). Brush up your Python programming skills.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Install Ubuntu and setup a development environment.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn about Linux commands, working with numpy, Jupyter. Start learning about Neural Networks.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Continue learning about Deep Learning architectures. Start looking for good datasets to train and test the model.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Learn concepts of Image Classification and Recognition. Try simple implementations for the same.</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Start working on the chosen dataset. Build a deep learning network which classifies and recognizes the data properly.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Work on tuning and training of the network on different datasets and analyse the results.</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Buffer Week. Keep experimenting with the model to optimise results and improve accuracy.</td>
    </tr>
    <tr>
      <td>Week 10</td>
      <td>Properly document the project. Write a short description about your project experience.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
