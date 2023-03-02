---
layout: project
title: Seasons of Code
project: Image Editing
topics:
    - Web Development
mentors:
    - Valay Mahesh Bundele    
    
mentees:
- 5   
    
permalink: /soc/projects/2022/project252
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
        "Were there situations when you felt that you would have looked better in a pic if you had smiled? Or if you had bangs? Well, I guess you faced such situations. In this project, we aim to develop a model which can do this editing for you i.e. make you smile or add bangs. Sounds interesting, right?<br>

Image Editing is one of the most exciting applications of deep learning. Out of the many available techniques, Generative Adversarial Networks(GANs) based methods have shown excellent results on this task. Referring to GANs, Facebook’s AI research director Yann LeCun called adversarial training “the most interesting idea in the last 10 years in ML”. GANs are really the biggest breakthrough in the history of AI.<br>
</p>
<p class="display3" style = "font-size:22px;" >
Semantic image editing is the task of transforming a source image to a target image while modifying desired semantic attributes, e.g., to make an image taken during summer look like it was captured in winter. It also includes facial attribute editing which aims to manipulate single or multiple attributes(e.g., hair color, expression, mustache and age) of a face image, i.e., to generate a new face with desired attributes while preserving other details. The paper titled “Enjoy Your Editing: Controllable GANs for Image Editing via Latent Space Navigation” develops an approach to change multiple attributes simultaneously. This project would involve the implementation of this paper for editing the facial images. "				
        <br>
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
      <td  >Week 1-2</td>
      <td>Read about the basic ML techniques like linear/logistic regression and neural networks, learn python
  </td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>	Learn about Convolutional Neural Networks(CNNs), various deep learning architectures and PyTorch/TensorFlow</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Understand the working of GANs and the main paper</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Work on the implementation of the paper</td>
    </tr>
    <tr>
      <td>Final Week</td>
      <td>Project documentation + Buffer</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
