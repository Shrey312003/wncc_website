---
layout: project
title: Seasons of Code
project: NLPlay with Transformers
topics:
    - Machine Learning
    - Natural Language Processing
mentors:
    - Tezan Sahu
    - Shrey Laddha    
    
mentees:
- 10-15 students   
    
permalink: /soc/projects/2021/project-9
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
        <li style = "display: inline"><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        The core idea behind this project is to familiarize with Deep NLP (one of the most sough-after domains of AI) & get hands-on experience with various deep network architectures while trying to accomplish 2 major tasks: Sentiment Analysis (Classification) & Automatic Lyrics Generation (Text Generation)
        <br><br>
        </p>
        <p class ="display3" style="font-size:22px">
        Natural Language Processing (NLP) is a field of AI that gives the machines the ability to read, understand and derive meaning from human languages. Back in 2014, Sequence to Sequence (Seq2Seq) models revolutionized the field of NLP. Machine Learning is a quickly developing discipline, and it wasn’t too long since even more groundbreaking work built on the shoulders of giants came along. Today, we talk about the hype surrounding Transformer models such as BERT and, most recently, GPT-3.
        <br><br>
        This project involves learning NLP from the ground up. You will be introduced to the fundamental concepts and algorithms used for Natural Language Processing through an in-depth exploration of two different examples: sentiment classification and song lyrics generation. Starting the journey by understanding the basic theory behind Deep NLP, you will maneuver your way through RNNs, LSTMs and GRUs while simultaneously applying the gained knowledge to the sentiment classification task. In the second stage of the project, we will focus on transformers, beginning with using BERT, RoBERTa & XLM for the sentiment classification task, and concluding this project by employing models like GPT & T5 for the song lyrics generation task.
        <br><br>
        Prereqs - Enthu !!!
        <br>
    </p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1  (22/03 - 28/03)</strong></td>
      <td>Basics of Neural Networks &amp; NLP, with introduction to PyTorch &amp; NLTK</td>
    </tr>
    <tr>
      <td><strong>Week 2  (29/03 - 04/04)</strong></td>
      <td>Implement Basic Preprocessing &amp; Feedforward Network for Sentiment Analysis; Get started with Deep NLP</td>
    </tr>
    <tr>
      <td><strong>Week 3  (05/04 - 11/04)</strong></td>
      <td>Understand RNN, LSTM &amp; GRU; implement them for Sentiment Analysis</td>
    </tr>
    <tr>
      <td><strong>Week 4  (10/05 - 16/05)</strong></td>
      <td>Introduction to Transformers &amp; the Huggingface library</td>
    </tr>
    <tr>
      <td><strong>Week 5  (17/05 - 23/05)</strong></td>
      <td>Deep Dive into Transformer architectures; Fine-tune BERT, XLM, etc. for Sentiment Analysis</td>
    </tr>
    <tr>
      <td><strong>Week 6  (24/05 - 30/05)</strong></td>
      <td>Introduction to Text Generation using Transformers</td>
    </tr>
    <tr>
      <td><strong>Week 7  (31/05 - 06/06)</strong></td>
      <td>Buffer Week (to account for overspills or dive deeper into theoretical aspects of transformers)</td>
    </tr>
    <tr>
      <td><strong>Week 8  (28/06 - 04/07)</strong></td>
      <td>Get started with Lyrics Generation using LSTM</td>
    </tr>
    <tr>
      <td><strong>Week 9  (05/07 - 11/07)</strong></td>
      <td>Fine-tune GPT-2, T5, etc. for Lyrics Generation &amp; study their performance</td>
    </tr>
    <tr>
      <td><strong>Week 10 (12/07 - 18/07)</strong></td>
      <td>Buffer Week (to account for overspills) + Final Documentation</td>
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
      <td><strong>1 (04/04)</strong></td>
      <td>Implement Sentiment Analysis using Feedforward Network in PyTorch</td>
    </tr>
    <tr>
      <td><strong>2 (23/05)</strong></td>
      <td>Implement LSTM-based &amp; have a theoretical understanding of Transformers</td>
    </tr>
    <tr>
      <td><strong>3 (06/06)</strong></td>
      <td>Fine-tune BERT-based Sentiment Analysis models &amp; Familiarize with Text Generation Tasks</td>
    </tr>
    <tr>
      <td><strong>4 (18/07)</strong></td>
      <td>Fine-tune GPT / T5-based Lyrics Generation models &amp; complete project documentation</td>
    </tr>
  </tbody>
</table>
</div>
</div>
{% endif %}
{% endfor %}
