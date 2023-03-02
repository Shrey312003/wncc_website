---
layout: project
title: Seasons of Code
project: Style It !!
mentors:
    - Akash Vivek Chodankar
    - Shreya Laddha     
    
mentees:
- 6-8   
    
permalink: /soc/projects/2022/project241
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
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        Ever wish you could polish your writings to better fit the purpose, for example, make them more professional, polite or humorous? Ever wondered if you could paint like Picasso or Van Gogh? In this project, we focus on Style Transfer, which involves the adoption of a different style and change of attributes while preserving the content that you start with. 
        </p>
         <p class="display3" style = "font-size:22px;" >
        The core idea behind this project is to familiarize with Deep NLP (one of the most sought-after domains of AI) & get hands-on experience with various deep network architectures while trying to accomplish 2 major tasks: Text Style Transfer & Image Style Transfer.
<br>
Prerequisites:
Enthu !!
        <br>
    </p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:0px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th></th>
         <th>Work</th>
          <th></th> 
          <th></th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 0</td>
      <td>Understand basics of Neural Networks and Deep Learning</td>
      <td>Explore the fundamentals of Traditional NLP techniques</td>
      <td>Know about Loss functions and data pre-processing techniques</td>
      <td>Familiarize with Pytorch and TensorFlow</td>
    </tr>
    <tr>
      <td>Week 1</td>
      <td>Getting familiar with FFNN, RNN, LSTM, GRUs, Seq2Seq model</td>
      <td>Execution of a simple sentiment analysis task to get acquainted with the models</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Getting acquainted with Encoder-decoder architecture, Transformers, Hugging Face, Pre-trained models like BERT, GPT</td>
      <td>Extending the previously done sentiment analysis task for accommodating transformer models.</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Implementing the learned models for sentiment transfer task (converting the sentiment of sentence, e.g. from positive to negative)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Implementing the learned models for formality transfer task (converting informal to formal sentences) and politeness transfer task ( converting from impolite to polite tone). These two tasks are used heavily in chatbots.</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implementing Generative Style Transformer (GST) for Gender transfer (from masculine to feminine) and Politics transfer task (from republic to democrats)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Buffer week for concluding Text Style Transfer tasks (to account for overspills or dive deeper into the tasks)</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Learn about CNNs, VGG16, Resnet etc.</td>
      <td>Implement basic image classification tasks using these models to get familiarized with them</td>
      <td>Design the architecture from scratch!</td>
      <td></td>
    </tr>
    <tr>
       <td>Week 8</td>
       <td>Get familiarized with the idea and working of Neural Style Transfer</td>
       <td>Implement it from scratch using a pretrained VGG16 model</td>
       <td>Explore Tensorflow’s module for Fast Style Transfer and implement it</td>
       <td>Create a web application for the same</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
