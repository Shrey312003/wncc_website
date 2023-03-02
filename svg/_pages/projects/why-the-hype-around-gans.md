---
layout: project
title: Seasons of Code
project: Why The Hype Around GANs
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Akshit Shrivastava
    - Tezan Sahu
mentees:
    - Aakriti
    - Atin Bainada
    - Chirag Garg
    - Liza Dahiya
    - Samyak Shah
    - Sumit Jain
    - Thomas Jacob
    - Yash Gadhia
    - Yatharth Champaneria
permalink: /soc/projects/why-the-hype-around-gans/
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

{% for project in site.data.settings.soc-items %}
{% if project.title == page.project %}
<div>
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "300" height="300" alt="{{ project.project}}" class="border rounded img-soc">
</div>
<div>
    <ul>
        {% for topic in page.topics %}
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
        {% endfor %}
    </ul>
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
        Yann LeCun described GANs as “the most interesting idea in the last 10 years in Machine Learning”. And, indeed, Generative Adversarial Networks (GANs for short) have had a huge success since they were introduced in 2014 by Ian J. Goodfellow.
        <br><br>
        This project will involve learning many machine learning algorithms leading to GANs. Mentees will implement a Generative Adversarial Network from scratch.
        <br><br>
        For students who have participated in Summer of Science (Machine Learning track) before, this would be a great hands-on project!
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
        <td>Week 1-2</td>
        <td>Learn/Brush-up Python, Torch, Jupyter, Numpy, Unix commands</td>
        </tr>
        <tr>
        <td>Week 3-4</td>
        <td>Learn Linear Regression, Logistic Regression, Neural Networks</td>
        </tr>
        <tr>
        <td>Week 5-6</td>
        <td>Read up on the use cases and building blocks of Deep Learning.</td>
        </tr>
        <tr>
        <td>Week 7-8</td>
        <td>Implement a generative adversarial network from scratch and train it on toy dataset.</td>
        </tr>
        <tr>
        <td>Week 9-10</td>
        <td>Learn PyTorch/TensorFlow, implement a GAN network using the library.</td>
        </tr>
        <tr>
        <td>Week 11-12</td>
        <td>Start collecting data and training. Document all interesting observations</td>
        </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
