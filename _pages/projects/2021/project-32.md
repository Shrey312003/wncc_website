---
layout: project
title: Seasons of Code
project: Image Colorization 
topics:
    - Machine Learning
mentors:
    - Valay Bundele    
    
mentees:
- 4 students   
    
permalink: /soc/projects/2021/project-32
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
        
        Colorizing black and white images is one of the most exciting applications of deep learning. Out of the many available techniques, Generative Adversarial Networks(GANs) based methods have shown excellent results on this task. Referring to GANs, Facebook’s AI research director Yann LeCun called adversarial training “the most interesting idea in the last 10 years in ML”. GANs are really the biggest breakthrough in the history of AI.
</p>
<br><br>

<p class="display3 " style = "font-size:22px;" >
        Image-to-image translation involves translating an image from one domain to another. It includes synthesizing photos from label maps, reconstructing objects from edge maps, and colorizing images. Pix2Pix GAN is a conditional image-to-image translation architecture which has produced really great results. This project will involve the implementation of this paper for image colorization. We can also try the other translation tasks given in the paper(if time permits).

        The link to the paper : https://arxiv.org/pdf/1611.07004.pdf

        You can take up this project even if you’re new to ML, you will just need to devote more time to it then.
</p>
<br>
</div>
<div class = "d-flex">
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
      <td><strong>Week 1-2</strong></td>
      <td>Read about the basic ML techniques like linear/logistic regression and neural networks, learn python</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Learn about Convolutional Neural Networks(CNNs), various deep learning architectures and PyTorch/TensorFlow</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Understand the working of GANs and the main paper</td>
    </tr>
    <tr>
      <td><strong>Week 5-6</strong></td>
      <td>Work on the implementation of the paper</td>
    </tr>
    <tr>
      <td><strong>Week 7</strong></td>
      <td>Project documentation + Buffer</td>
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
      <td>Knowledge of basic ML techniques(Till week 5 of Machine Learning, Courses 1 and 2 of Deep Learning Specialisation)</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>CNNs (Course 4 of DL Specialisation)</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Understanding of GANs and the paper</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Implementation of the network architecture</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Completing the model and training</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
