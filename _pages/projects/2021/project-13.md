---
layout: project
title: Seasons of Code
project: Facial Recognition App
topics:
    - Image Processing 
    - Machine Learning
    - Computer Vision
mentors:
    - Prayas Jain
    - Vanshika Gupta     
    
mentees:
- 10-15 students   
    
permalink: /soc/projects/2021/project-13
---

<h2 class="display1 m-3 p-3 text-center">{{page.project}}</h2>

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
        Ready to make a simple app that can compete with Google Photos?
        <br><br>
        Description: You must be living under a rock if you are not familiar with Google photos and it’s capabilities. But say you wants you want to nice movie (not google photos’ simple 
        </p>
        <p class="display3" style = "font-size:22px;" >
        slideshow video) of all your mother and father pictures for their anniversary, and want to scan through your personal dataset for all such pictures and cluster them, can Google photos do it for you? No. You have to upload and wait for clustering and then can’t even get an output back. That’s one of the many features we want our Facial Recognition App to do!
        <br><br>
        
        We aim to develop a face recognition app capable of detecting all faces included in the image, cropping the faces and extracting their features, and comparing the faces for clustering pictures with same faces. We also plan to develop a GUI that can ask the user to label the unique people identified in the images and run a model that can learn the unique feature of each face to make future predictions on new images and videos. Our app will be able to output the cluster pictures with same faces and output them folder wise to a drive. We also aim to develop many additional features (as many as we can) in our app such as fancy one-click styling picture, image-captioning and cartooning videos that could be applied to whole dataset of user pictures.
        <br><br>
        Some open-source resources having similar ideas of project - <a href="https://www.pyimagesearch.com/2018/06/18/face-recognition-with-opencv-python-and-deep-learning/">https://www.pyimagesearch.com/2018/06/18/face-recognition-with-opencv-python-and-deep-learning/</a> 
        <br>
        <a href="https://machinelearningmastery.com/how-to-perform-face-detection-with-classical-and-deep-learning-methods-in-python-with-keras/">https://machinelearningmastery.com/how-to-perform-face-detection-with-classical-and-deep-learning-methods-in-python-with-keras/</a> <a href = "https://www.sitepoint.com/keras-face-detection-recognition/">https://www.sitepoint.com/keras-face-detection-recognition/</a> <a href = "https://www.youtube.com/watch?v=D4uBrRIK1OI">https://www.youtube.com/watch?v=D4uBrRIK1OI</a> <a href = "https://github.com/nalbert9/Image-Captioning">https://github.com/nalbert9/Image-Captioning</a>
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
      <td><strong>Week 1</strong></td>
      <td>Learning python basics for ML + Using and beautifying colab notebook</td>
    </tr>
    <tr>
      <td><strong>Week 2</strong></td>
      <td>Reading computer vision basics + Learning how to batch download facial dataset from internet or personal drive</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Extracting face features and clustering similar faces automatically in drive</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Developing a user interface to ask users to name found unique faces</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Testing trained model on test picture and video + Trying new features such as cartoonizing user video + One click neural style transfer for pictures</td>
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
      <td><strong>1</strong></td>
      <td>Making a simple user interface in Google Colab performing simple linear regression (will confirm understanding of python + colab + basic ML concepts)</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Able to batch download and import pictures dataset or importing a labelled personal dataset</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Successfully extracting feature vector of a face after reading about face recognition and computer vision basics</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Developing a user interface to ask users to name found unique faces and model to learn individual features</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Incorporating additional features in app and testing on test pictures and videos</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
