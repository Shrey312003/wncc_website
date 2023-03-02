---
layout: project
title: Seasons of Code
project: An Introduction to QC, ML, and QML
topics:
    - Web Development
mentors:
    - Siddhant Midha
    - Vedang Asgaonkar   
mentees:
    - 4-5 
    
permalink: /soc/projects/2022/project229
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
    <p class="display3" style = "font-size:22px;" >
        <br>
        Why does one do machine learning? You can write a program for a lot of complex things - from some sorting algorithm to the fast fourier transform. What if one asks you to write a program which when given a picture, tells you whether your friend is in it or not. Difficult. There are some things we do which we do not know how we do - enter ML.
<br><br>
Information is physical, and so is computation. You know very well how bits are used for computations. These are classical entities, manipulated using classical logic gates (AND, NOT, NAND and so on). These form a basis for computing things. We can also do the with quantum mechanics as the underlying physical theory. That is, instead of "bits", we use "quantum-bits". Interest arose in this area with the development of quantum mechanics, and lead to the field of quantum computation and information. Then questions such as "are quantum computers better than classical ones" arose. 
<br><br>
Now, quantum computing can be used as a way to do ML. As a simple example, you may be aware of how parallel computing is done via vectorized-computation. Quantum mechanics possesses the property of superposition, which leads to the power of "quantum-parallelism". Many papers have exploited this principle to produce quantum versions of ML algorithms. 
<br><br>
In this project, we shall first learn the basics of Quantum Computing and implement algorithms like QFT and Grover search using libraries such as IBM's Qiskit. We shall then move on to machine learning and implement a few toy models in python using numpy and sklearn. Finally, we move on to Quantum Machine Learning using libraries such as Pennylane and Tensorflow quantum. After learning the basics, we will aim to implement a paper such as clustering or SVMs using quantum computing. 
<br><br>
Prerequisite: While there are no strict prerequisites, you need to be aware that the project will be mathematically involved and will need implementation skills too. So, have a good handle on that. Being thorough with linear algebra and basic QM helps. Familiarity with Python is encouraged. 
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3 mx-auto" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-75 mx-auto">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >Week 1- 3</td>
      <td>Learn ML. Spend time learning the theory of artificial neural networks, SVM, Clustering Algorithms. Implement some of these from scratch using numpy. References include Ng's Intro to ML, and if time permits some theoretical reading.

</td>
    </tr>
    <tr>
      <td>Week 3-7</td>
      <td>Learn QC. Read some traditional QC texts such as Nielson and Chuang, Preskil Notes etc. Will Implement some algorithms in Qiskit (more libraries to be explored if needed).
Learning about the existing libraries, basic principles and conclude with implementing some papers on application of QC to ML like for clustering, SVM etc.
 </td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
