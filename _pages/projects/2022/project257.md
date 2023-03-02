---
layout: project
title: Seasons of Code
project: CNN Based Stock Market Prediction
topics:
    - Web Development
mentors:
    - Shivprasad Kathane 
    
mentees:
- 5-10 (would yield variety of prediction results!)
    
permalink: /soc/projects/2022/project257
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
        The goal of this project is to implement 3D Convolutional Neural Network models for predicting the directional movement of stock markets using data from various sources.
        
Main Paper: <a href='https://www.sciencedirect.com/science/article/pii/S0957417419301915'>https://www.sciencedirect.com/science/article/pii/S0957417419301915</a><br>
</p>
        <p class="display3" style = "font-size:22px;" >
Other Articles:<a href='https://www.analyticsvidhya.com/blog/2021/08/hands-on-stock-price-time-series-forecasting-using-deep-convolutional-networks/'>https://www.analyticsvidhya.com/blog/2021/08/hands-on-stock-price-time-series-forecasting-using-deep-convolutional-networks/</a><br>
<a href='https://www.analyticsvidhya.com/blog/2021/08/hands-on-stock-price-time-series-forecasting-using-deep-convolutional-networks/'>https://www.analyticsvidhya.com/blog/2021/08/hands-on-stock-price-time-series-forecasting-using-deep-convolutional-networks/</a><br> <a href='https://machinelearningmastery.com/using-cnn-for-financial-time-series-prediction/'>https://machinelearningmastery.com/using-cnn-for-financial-time-series-prediction/</a><br>
will be sharing resources for learning the foundations, mentees can also find more articles on the internet, and look up papers & data on the Indian market as well and try working on them.			
        <br>
Prerequisite:
Should be familiar with python and exposure to data analysis is preferable
</p>
</div>
<br>
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
      <td>Week 1</td>
      <td>Intro to Time Series Data & Problems  </td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basic modeling & forecasting Methods</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Basic Machine Learning & Deep Learning</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Building Neural Networks in Google Colab</td>
    </tr>
    <tr>
    <td>Week 5</td>
      <td>Understanding and Implementing CNNs</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Reading and Understanding the Paper
Possibly reviewing similar papers/articles</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Understanding & Working with the Data, Model Building & Evaluation</td>
    </tr>
    <tr>
      <td>Week 8-9</td>
      <td>Possible Iterations, Optimisations, suggest improvements & Documention</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
