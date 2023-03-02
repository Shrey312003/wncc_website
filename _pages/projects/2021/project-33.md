---
layout: project
title: Seasons of Code
project: Language Model Based Syntax Autocompletion in a Text Editor 
topics:
    - Machine Learning
mentors:
    - Pradipta Parag Bora
    - Harshit Gupta
    - Ankit Kumar Jain     
    
mentees:
- 8 students   
    
permalink: /soc/projects/2021/project-33
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

        “This project aims to build an open source code editor (like Sublime Text), that uses natural language processing to create a language model for code prediction. Natural Language Processing is used widely to build models of languages that can be used to predict the sentiment/future words/infer information from languages and the idea is to build such a model out of a codebase to create auto completions automatically. A lot of papers/projects have come up on this, we will attempt to integrate everything into a nice package. Initially we will create a simple model that learns from an existing corpus of code to create general auto completions, later on we will try to extend this to be more locally aware.

  <br><br>
</p>
  

  <p class= "lead" style = "font-size:30px;">Some reading (NLP):</p>
  <p class="display3" style = "font-size:22px;" >
        https://towardsdatascience.com/building-a-next-word-predictor-in-tensorflow-e7e681d4f03f#:~:text=Next%20Word%20Prediction%20or%20what,or%20emails%20without%20realizing%20it.
    <br>
        https://web.stanford.edu/~chshah/files/contextual-code-completion.pdf
        https://www.tabnine.com/blog/locals
 <br>
        (what we want to achieve, although this is a professional product, if we get 20% of this it’ll be great)
        We will require two teams for this project, a team that will build the editor using software development framework (preferably Electron and Angular). This team will have to be proficient in software development (you can learn!). The goal is team to make a working (and good looking) code editor that is able to integrate with the code completion system easily and effectively.
  </p>

<p class= "lead" style = "font-size:30px;">  Links:</p>

<p class="display3" style = "font-size:22px;" >

        https://www.sitepoint.com/build-a-desktop-application-with-electron-and-angular/
  <br>
        https://www.electronjs.org/
  <br>
        The Second team will work on the NLP model. The mentors will work with them to build a good model that works decently. The aim is to initially create a language model from the code corpus and then try to implement some recent papers that add in more local awareness. We may investigate using classical code completion methods (like the ones in used in Sublime Text) to augment the NLP based approach.
  </p> <br>
</div>

<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline (ML) :</h4>
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
      <td>Study basics of DL (starting with neural networks) and NLP (Stanford CS224N will be followed) We will tell what to study, only the required parts are to be covered. If you know this already, start reading the papers. Gap Period: Get proficient with DL and NLP. Learn PyTorch or Tensorflow and code basic things in these frameworks.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Implement/Run the Stanford Project paper linked above and see how it works to create the language model. Create an API that can integrate with the other team effectively.</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Improve the model (we’d have to see how!) and add local heuristics to augment the NLP model.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Investigate local contextual awareness by extending the window of input to the model, try other strategies to add localisation to the model. Add everything to the API.</td>
    </tr>
    <tr>
      <td><strong>Extra Week</strong></td>
      <td>Nothing much, strategising and creating a good model is all</td>
    </tr>
  </tbody>
</table>
</div>

<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline (Dev) :</h4>
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
      <td>Familarise yourself with Electron and Angular. Make some basic working prototypes. You may use other frameworks but we won’t be able to help there. Once done, start making a simple editor.</td>
    </tr>
    <tr>
      <td><strong>Week 3</strong></td>
      <td>Add file IO, syntax highlighting and also provide endpoints to link the API</td>
    </tr>
    <tr>
      <td><strong>Week 4</strong></td>
      <td>Add project view, improve UI.</td>
    </tr>
    <tr>
      <td><strong>Week 5</strong></td>
      <td>Wrap up and bind with the API provided by ML team</td>
    </tr>
  </tbody>
</table>
</div>

<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints(ML) :</h4>
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
      <td>Basic theory of DL. Basic tutorial of Tensorflow/Pytorch</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>RNN/Attention and simple NLP model (Word2Vec)</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>Implement basic language model (stanford paper)</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Add API and link it. Improve the model.</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>Add local awareness to the model for better predictions.</td>
    </tr>
  </tbody>
</table>
</div>

<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints(ML) :</h4>
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
      <td>Basic Angular apps in Electron</td>
    </tr>
    <tr>
      <td><strong>2</strong></td>
      <td>Working basic code editor in Angular</td>
    </tr>
    <tr>
      <td><strong>3</strong></td>
      <td>File IO/Syntax Highlighting</td>
    </tr>
    <tr>
      <td><strong>4</strong></td>
      <td>Project view, add extra features (templates/keyboard shortcuts)</td>
    </tr>
    <tr>
      <td><strong>5</strong></td>
      <td>rap up and create final deployment code.</td>
    </tr>
  </tbody>
</table>
</div>


{% endif %}
{% endfor %}
