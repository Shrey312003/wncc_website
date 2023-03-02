---
layout: project
title: Seasons of Code
project: Stock Market Prediction using ARIMA Model
mentors:
    - Kishan Kumar
    - Aniruddh Baranwal   
    
mentees:
- 5 
    
permalink: /soc/projects/2022/project247
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
        Humans need to predict the future trends of various sequences in the best possible manner. These sequences may be stock prices, performance parameters of start ups, life history of Li-ion batteries, etc. This helps us to make better decisions, which is of great importance for businesses and research groups alike. Sequence model prediction helps investment banks to find out the best assets to invest in, helps electric car manufacturers to keep track of the health of batteries and even helps biologists to predict the growth of animal populations. 
        </p>
        <p class="display3" style = "font-size:22px;" >
        This project is about predicting stock market trends using the specialized ARIMA model. The ARIMA model is a state of the art model which can be used to predict time series using less amount of data and gives superior performance compared to LSTMs for short term analysis. It will help you get an introduction to the basics of this field and equip you with the necessary background so that you can explore it further.I do not expect much from, your proposal, The only need is enthusiasm to work in Machine Learning . And it would be a fun learning process, where we all can learn together. No prerequisites, but some knowledge of Machine Learning or Python will be icing on the cake!
        <br>
        
        Some resources on the ARIMA model:

        <a href='https://medium.com/@derejeabera/stock-price-prediction-using-arima-model-251ddb4ee52a'>https://medium.com/@derejeabera/stock-price-prediction-using-arima-model-251ddb4ee52a</a>
        <a href='https://www.analyticsvidhya.com/blog/2021/07/stock-market-forecasting-using-time-series-analysis-with-arima-model/'>https://www.analyticsvidhya.com/blog/2021/07/stock-market-forecasting-using-time-series-analysis-with-arima-model/</a>
        <a href = 'https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average '>
        https://en.wikipedia.org/wiki/Autoregressive_integrated_moving_average </a>
<br>
Prerequisites:
- Basics of python (But not necessarily required we will teach you)
- Enthusiastic in Data science and AI
</p>
</div>
<div class = "d-flex flex-wrap ">
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
      <td>Basic Python</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Basic Python and Numpy</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Pandas</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Matplotlib and Seaborn</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Data Cleaning and Exploratory Data Analysis</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Basics of Time Series Analysis</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>ARIMA Model Reading and Implementation</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>ARIMA Model Reading and Implementation</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
