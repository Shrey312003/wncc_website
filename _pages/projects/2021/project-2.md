---
layout: project
title: Seasons of Code
project: (Un)Clear
topics:
    - Machine Learning
    - Image Processing
mentors:
    - Omkar Ghugarkar
    - Bhuvan Aggarwal     
    
mentees:
- 10-15 students   
    
permalink: /soc/projects/2021/project-2
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
        This project would tackle the problem of Image Super Resolution. Image super-resolution (SR) techniques reconstruct a higher-resolution image or sequence from the observed lower-resolution images. Often a low-resolution image is taken as an input and the same image is upscaled to a higher resolution, which is the output. The details in the high-resolution output are filled in where the details are essentially unknown. Super resolution is essentially what you see in films and series like CSI where someone zooms into an image and it improves in quality and the details just appear.
        <br>
        </p>
        <p class= "lead" style = "font-size:30px;"> Why is it necessary?</p>
        <p class="display3" style = "font-size:22px;" >
        There are many applications of super-resolution, it is used successfully for improving medical imaging systems, satellite imaging, in surveillance, astronomical imaging; new ideas are emerging all the time. Many Companies like Disney, Nvidia use this technique to increase the quality of Videos.
        <br>
        </p>
        <p class= "lead" style = "font-size:30px;"> How are we going to do?</p>
        <p class="display3" style = "font-size:22px;" >
        The traditional methods using interpolation causes blurriness in the image. Thus, we would focus on deep Learning methods. The solution we proposed includes usage of Generative Adversarial Networks (simply GANs) as a framework to tackle this problem
        </p>
        <p class= "lead" style = "font-size:30px;"> Prerequisites</p>
        <p class="display3" style = "font-size:22px;" >
        A good understanding of concepts of CS – 101 is always good. It would be preferable if you have an introduction to Python. Don’t worry if you are not very comfortable with Python. Please go through the small Python tutorial attached in the resources section. Along with this, interest to learn new things and enthusiasm is must.
        </p>
        <p class= "lead" style = "font-size:30px;">Selection Procedure</p>
        <p class="display3" style = "font-size:22px;" >
        Your selection would be based on your SOP and a small coding test in Python (If you are good with CS101 and have an intro to python, it should be a cake-walk)
        </p>
        <p class= "lead" style = "font-size:30px;">Caution</p>
        <p class="display3" style = "font-size:22px;" >
        This project would require good amount of commitment. But believe me, you would enjoy the journey and learn lots of Cool stuff.
        </p>
        <p class= "lead" style = "font-size:30px;">Perks</p>
        <ul style = "list-style-type: disc">
        <li class="display3 mb-2" style = "font-size:22px;">Introduction to the whole new world of machine Learning and Deep learning</li>
        <li class="display3 mb-2" style = "font-size:22px;">Master the Deep learning packages like Tensor Flow, keras</li>
        <li class="display3 mb-2" style = "font-size:22px;">Apply the hottest technique in Deep Learning – GANs</li>
        <li class="display3 mb-2" style = "font-size:22px;">Get acquainted to various techniques in image processing</li>
        <li class="display3 mb-2" style = "font-size:22px;">Last but not the least, apply your coding skills to build an entire Project from scratch</li>
        </ul>
        <p class= "lead wrap" style = "font-size:30px;">Resources</p>
        <p class="display3 text-wrap" style = "font-size:22px;" >
        Python Tutorial - <a  href ="https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7">https://www.youtube.com/playlist?list=PL-osiE80TeTskrapNbzXhwoFUiLCjGgY7</a>
        <br>
        Image Super Resolution - <a href = "https://medium.com/beyondminds/an-introduction-to-super-resolution-using-deep-learning-f60aff9a499d">https://medium.com/beyondminds/an-introduction-to-super-resolution-using-deep-learning-f60aff9a499d</a>
        </p>
</div>
<div class = "d-flex">
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
      <td>Introduction to OpenCV and Learn Linear Regression and Logistic regression</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Get acquainted with Neural Networks and Deep learning</td>
    </tr>
    <tr>
      <td> - </td>
      <td>Break</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Development of the concepts related to GAN and read, understand and implement a simple GAN model</td>
    </tr>
    <tr>
      <td>Week 4-5</td>
      <td>Read, understand and start implementing the GAN model of the Project using Tensor Flow</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Buffer</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>1</td>
      <td>Complete tutorial on OpenCV</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Introduction to ML and DL techniques</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Complete tutorial on Resnet architecture</td>
    </tr>
    <tr>
      <td>4</td>
      <td>Complete tutorial on GAN</td>
    </tr>
    <tr>
      <td>5</td>
      <td>Read, learn and implement the Paper of SR</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
