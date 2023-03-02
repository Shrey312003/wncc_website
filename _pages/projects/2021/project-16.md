---
layout: project
title: Seasons of Code
project: Computational Geometry
topics:
    - Algorithm Design
mentors:
    - Aravind Bharathi   
    
mentees:
- 3 (although it is quite flexible)   
    
permalink: /soc/projects/2021/project-16
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
        There are many fields of computer science that deal with solving problems of a geometric nature. These include computer graphics, computer vision and image processing, robotics, computer-aided design and manufacturing, computational fluid-dynamics, and geographic information systems, to name a few.
        <br><br>
        Computational geometry is a term claimed by a number of different groups.
          </p>
        <p class="display3" style = "font-size:22px;" >
         The term was coined perhaps first by Marvin Minsky in his book “Perceptrons”, which was about pattern recognition, and it has also been used often to describe algorithms for manipulating curves and surfaces in solid modeling. Its most widely recognized use, however, is to describe the subfield of algorithm theory that involves the design and analysis of efficient algorithms for problems involving geometric input and output.
        <br><br>
        There are many fields of computer science that deal with solving problems of a geometric nature. These include computer graphics, computer vision and image processing, robotics, computer-aided design and manufacturing, computational fluid-dynamics, and geographic information systems, to name a few.
        <br><br>
        Most of the problems will be dealt with a combinatorial element, as opposed to dealing with numerical methods. You can study computational geometry without having to learn a lot of analytic or differential geometry.
        <br><br>
        The initial phase will be quite theoretical and you may start with an overview on Algorithm Design and Computational Complexity Theory and later diversify to work on a single field (such as computer vision) or understand some existing geometric algorithms.
        <br><br>
        You will be required to document the things you learn and turn in a report at the end of the project along with some implementation of algorithms in code.
        <br><br>
        As this is more along the lines of a learning project in the initial phase, your proposal needn’t be very elaborate. You could read up on Computational Geometry and find a domain that fascinates you and write a proposal on how you think this project will help you achieve that on the long run. Although I recommend using Python, if you want to use a different programming language, do state that in the proposal.
        <br><br>
        You may follow any resource (but make sure to cite them). This might be a good place to start and get an idea about the theoretical nature involved in this project <a href = "https://archive.org/details/designanalysisof00ahoarich/page/n7/mode/2up">https://archive.org/details/designanalysisof00ahoarich/page/n7/mode/2up</a> although if you choose to, Wikipedia will suffice
        <br>
    </p>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <p class = "display3" style = "font-size:22px;" >
    The first two weeks (i.e., from 22nd of March to 4th of April) will only involve reading and understanding the theory of computation (from graph theory to algorithm design). They may implement basic searching and sorting algorithms in 1-dimensional space to brush up CS101. Later on, they can read and implement algorithms on some geometric problems like finding a simple closed path for a given set of points or find the vertex, focus and directrix of a parabola or even implement a solution to the Gift-Wrapping problem Alternatively, they can choose a specific domain and learn it in depth (although this will require more effort from their end)
    </p>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <p class = "display3" style = "font-size:22px;" >
    As it is going to be quite an open project, once you get an idea on what you want to work on (in terms of a geometric algorithm), you can develop a timeline along the following lines (and get back to me if you need any help). Nevertheless, the first two checkpoints will be the same for everyone.
    </p>
    <table class="table table-striped">
  <thead>
    <tr>
      <th>Checkpoint Number</th>
      <th>Progress</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>1</strong></td>
      <td>Read and Understand the basics of graph theory and algorithm design</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>From the provided material, get an idea about computational geometry and choose a topic to work on.Say, you want to analyse and create 3D shapes for computer vision algorithms.</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Point Cloud Generation</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Polygon Meshing</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Poisson Surface Reconstruction</td>
    </tr>
  </tbody>
</table>
</div>
{% endif %}
{% endfor %}
