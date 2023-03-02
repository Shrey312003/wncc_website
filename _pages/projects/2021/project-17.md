---
layout: project
title: Developing Hybrid ANN-Statistical Model for Robust Stock Market Prediction
project: Developing Hybrid ANN-Statistical Model for Robust Stock Market Prediction
topics:
    - Machine Learning
mentors:
    - Shantanu Gulawani     
    
mentees:
- 3   
    
permalink: /soc/projects/2021/project-17
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
        The volatility of stock market is generally modeled by three techniques; namely Technical Analysis, Machine Learning algorithms & statistical analysis. These models help in developing optimal portfolio for best returns with minimum risk.
        <br><br>
        A hybrid Artificial Neural Network & Time series analysis based statistical approach has the potential to obtain robustness in the prediction. This will essentially make possible to predict the seasonal volatility in market as well as currency value prediction.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        With this project, efficacy of various techniques shall be benchmarked with plenty of daily stock market data.
        <br><br>
        I suggest to read following Paper:
        <br>
        Yan Hu, Jian Ni, Liu Wen, “A hybrid deep learning approach by integrating LSTM-ANN networks with GARCH model for copper price volatility prediction,” Physica A: Statistical Mechanics and its Applications, Volume 557, 2020, 124907, ISSN 0378-4371, <a href= "https://doi.org/10.1016/j.physa.2020.124907">https://doi.org/10.1016/j.physa.2020.124907</a>.
        <br><br>
        Applicants are welcome to contact me on Whatsapp, if unable to obtain the above document or to obtain more information.
        <br>
    </p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>Literature Reviews</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Developing fundamental framework</td>
    </tr>
    <tr>
      <td><strong>Week 3-4</strong></td>
      <td>Benchmarking Algorithms</td>
    </tr>
    <tr>
      <td><strong>Week 5-6</strong></td>
      <td>Further development and Validation; Project Closure &amp; Packaging</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
