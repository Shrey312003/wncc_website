---
layout: project
title: Seasons of Code
project: Lossless high entropy compression algorithm
topics:
    - Machine Learning
    - Signal Processing
    - Neural Networks
mentors:
    - Anubhav Agarwal  
mentees:
- Aman Singh 
- Raj Aryan Agarwal
- Gaurav P
- Tirthankar Adhikari
- Ojas Gramopadhye
permalink: /soc/projects/lossless-high-entropy-compression-algorithm
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
        Implement your own sequence neural net
        <br><br>
        Ever dreamed of making the compression algorithm from Pied Piper featured in the popular Silicon Valley series? Here is your chance! The project aims at implementing a potentially lossless algorithm which, unlike others, can work even on high entropy data. The project will involve basic knowledge of Discrete Time Fourier Transform, signal processing. However, a major portion would involve developing expertise in neural networks with focus on RNNs, LSTMs, etc. You would implement your own sequence to sequence neural net aimed at performing a particular task which is essential to the working of compression algorithm.
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
        <td  >Week 1,2,3</td>
        <td>Developing fundamentals in python,machine learning and neural networks through popular sources like coursera, udacity.</td>
    </tr>
    <tr>
      <td>Week 4,5</td>
      <td>Learning basics of RNNs and LSTMs and their in-depth implementation in tensorflow  2.0</td>
    </tr>
    <tr>
      <td>Week 6,7</td>
      <td>Trying out various models and getting your hands dirty while aiming to achieve the objective</td>
    </tr>
    <tr>
      <td>Week 8,9</td>
      <td>If above task is complete, packaging everything into an end-to-end pipeline</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}