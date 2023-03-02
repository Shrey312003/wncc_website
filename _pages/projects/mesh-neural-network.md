---
layout: project
title: Seasons of Code
project: 3D Object Classification using Mesh Neural Network
topics:
    - Machine Learning
mentors:
    - Sudhir Shinde  
mentees:
- Reet Mehta 
- Yogesh Supe 
- Prathmesh Bele 
- Shalabh Gupta 
permalink: /soc/projects/mesh-neural-network
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
        Implementing mesh neural network for 3D shape representation.
        <br><br>
        The project will be an implementation of the paper <a href="https://arxiv.org/abs/1811.11424">MeshNet: Mesh Neural Network for 3D Shape Representation (AAAI 2019)</a>. Mesh is an important and powerful type of data for 3D shapes and widely studied in the field of computer vision and computer graphics. A lot of research is going on to improve the accuracy of the 3D model classification. This paper has achieved 91.9% accuracy. You are expected to implement this research paper. The additional work may include modifying the NN Architecture and train the model on additional datasets.
        <br><br>
        The following points must be included in the proposal for the project:
        <br>
        <br>- Your motivation and understanding of the project
        <br>- Background in ML/DL (include your previous projects)
        <br>- Experience with Python and libraries (Numpy, Pandas, TensorFlow, PyTorch, etc)  
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
        <td>Brush-up Python, ML &amp; Various Deep Learning Architecture</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Understand the main paper and study input data structure of the 3D model</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Pre-processing of the data</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Test the input data on simple DNN model</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implement the MeshNet Model</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Hyperparameter Tuning of the Model</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Improve the architecture for better performance</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Generate additional dataset and testing the robustness of the model</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}