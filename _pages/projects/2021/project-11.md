---
layout: project
title: Seasons of Code
project: A Deep Dive into CNNs
topics:
    - Machine Learning
    - Computer Vision
mentors:
    - Aakriti
    - Akshit Srivastava   
    
mentees:
- 10-15 students   
    
permalink: /soc/projects/2021/project-11
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
        In this project, mentees will learn about the four of the famous Convolutional Neural Network (CNN) architectures - AlexNet, VGGNet, ResNet and GoogleNet.
        <br><br>
        All of these are classic deep neural networks that have performed exceptionally well in the ImageNet Challenge (ILSVRC) in different years and have functioned as backbones for many computer vision tasks.
        <br><br>
        The project will involve learning about fundamental concepts and algorithms used in machine learning to analyze the salient features of these different architectures and evaluate cases where these models outperform others. After a basic implementation of these architectures using PyTorch, students would move onto use transfer learning to train deeper models on bigger datasets for classification and localization.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        Have a look at the case study presented in these slides - <a href = "http://cs231n.stanford.edu/slides/2019/cs231n_2019_lecture09.pdf">http://cs231n.stanford.edu/slides/2019/cs231n_2019_lecture09.pdf</a>
        <br><br>
        Bonus points for comparing performance in a more complex CV task such as face or gesture recognition!
        <br><br>
        This project is ideal for students who want to get started with Deep Learning for Computer Vision.
        <br>
    </p>
</div>
<div class ="d-flex">
<div>
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
      <td>Learn/Brush-up Python, PyTorch, Jupyter, Numpy, Unix commands</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Learn about logistic regression, activation function, gradient descent and neural networks</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn about CNNs for image classification and give a read to the architectures presented in the original papers of these models</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Implement the models from scratch for classification and compare performance</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Read about Transfer Learning to train models for more complex tasks and Document results</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
