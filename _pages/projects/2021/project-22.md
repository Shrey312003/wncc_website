---
layout: project
title: Quantum Computing Algorithms
project: Quantum Computing Algorithms
topics:
    - Theoritical
mentors:
    - Pradipta Bora
    - Harshit Gupta     
    
mentees:
- 4-5
    
permalink: /soc/projects/2021/project-22
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
        The perfect project for all the quantum physics enthusiasts. The code you will create for this project could one day break RSA/ revolutionise machine learning once the real hardware catches up.
        <br><br>
        Quantum Computing is often lauded as one of the next big things that is going to change the computing landscape forever. Unfortunately it is still quite difficult to put it into practice because our physical technology has not quite caught up to it yet.
        <br><br>
        </p>
        <p class="display3" style = "font-size:22px;" >
        The theory of quantum computing is very rich, and in this project you will aim to study Quantum Computing (in detail), learn about quantum algorithms and attempt to create a simple centralised repository implementing difficult classical problems in a quantum programming language (Q#/Qiskit). The aim is to build a quantum random generator, break RSA (on small inputs: using Shor’s algorithm), run Grover’s Search and time permitting look at some Quantum Machine Learning.
        <br><br>
        Note that these are simulated quantum programming languages (they can run on real hardware, but we don’ t have that!) and the simulators don’t work on large inputs (can’t simulate too many qubits!). As such this is not the project that will break RSA (google it up!) and end encryption, but instead more of a proof of concept showing how (once the hardware catches up) QC will break everything. In principle, assuming Q#/Qiskit are backwards compatible, the code you will create for this project could one day break RSA/ revolutionise machine learning once the real hardware catches up.
        <br><br>
        This is not a trivial project. You will have to learn to code in one of the quantum programming languages, understand the theory, read the textbook, ask questions and do a lot more. If time permits we could make a GUI for this in the .NET framework (Q# runs on the .NET framework) and build a nice visualisation tool for the algorithms.
        <br><br>
        Reading Material: You can go through the first chapter of the book called Nielsen and Chuang (google it). This is the godbook for quantum computing. You will read around 30-40% of this book (it will take time!) Other links that may provide some idea: <a href = "https://qiskit.org/learn/, https://docs.microsoft.com/en-us/azure/quantum/tutorial-qdk-explore-entanglement">https://qiskit.org/learn/, https://docs.microsoft.com/en-us/azure/quantum/tutorial-qdk-explore-entanglement</a>
        <br><br>
        Proposal: Firstly we need a good grade in PH107. This may sound counter intuitive but preference will be given to people who well know quantum physics well (of whatever that was taught to you). Please mention your grade here. In case you feel you know the material but messed up the exam, that is okay. Mention that. What we fully expect from you is that you are an expert at PH107 or can become an expert really quickly. More importantly if you know more quantum physics than say PH107, this is a big bonus. Maybe due to IPHO or some competition, doesn’t matter. If so do mention. Due to limited time people who know quantum get a big leap. Secondly, we need to know your previous programming background. Programming is going to be the easier thing to do here, but the more experience you have the better. Thirdly, a little bit of motivation.
        <br><br>
        We will do short interviews for the final selection.
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
      <td><strong>Week 1-2</strong></td>
      <td>Read the Textbook, understand the theory. This part is non trivial, we expect you to understand the basics really well. This will require a lot of effort, the goal should be to understand the requisite quantum theory along with the Grover’s, Shor’s algorithms. Tailormade resources will be provided, along with the text books. This may require some effort during the break period as well.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Finish up on the reading (if any left). Start basic programming on Q#/Qiskit. Some practice notebooks and problems will be provided.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Implement some famous algorithms like Grover’s, Shor’s and any other algorithm based on the interest of mentees. Use Shor’s to break RSA. Investigate linking with GUI using .NET</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Wrap up and integrate things. If time remains, we may try to use Quantum Machine Learning to do simple classification tasks. Bonus if we can visualise it in .NET.</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
