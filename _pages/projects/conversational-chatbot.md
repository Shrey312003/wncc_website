---
layout: project
title: Seasons of Code
project: Conversational Chatbot
topics:
    - Machine Learning
    - Development
    - NLP
    - Speech recognition
mentors:
    - Shri Ishwaryaa S V
    
mentees:
- Aaron Jerry Ninan
- Abhilaksh Kumar
- Devank Rajvanshi
- E Abhishek
- Pankaj Singh
- Pranjal Gupta
- Ravi Prakash Yadav
- Soham Mistri
- Vineet Gala  
    
permalink: /soc/projects/conversational-chatbot
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
        A conversational chatbot is a software that conducts conversation via auditory or textual methods. This project aims to build a closed-domain, generative-based conversational chatbot from scratch.
        <br><br>
The following will be executed :
<br><br>
    Speech recognition that allows the device to capture words, phrases and sentences as the user speaks and convert to text. Speech synthesis that allows the device to speak. Usage of SpeechRecognizer library, Google web speech API, PyAudio package.
<br><br>
    Natural language processing (NLP) for the device to understand the manually entered or converted text and find the best suitable reply. Machine learning algorithms such as RNNs, LSTM, and Sequence to Sequence model will be implemented from scratch in python. Datasets such as the Reddit conversation datasets, Cornell movie-dialogs corpus, or Twitter feed data can be used for training the NLP model. Exposure to PyTorch.
<br><br>
    Build an android app using Android Studio as the conversational interface. The interface displays the entire conversation between the bot and the user.
<br><br>
<b>Pre-requisites :</b>
<br>
Prior experience in Python coding. Basic android app development skills are desirable.
<br><br>
<b>Points to be included in proposal :</b>
<br>
Write your motivation and understanding of the project briefly. Background in ML/DL ( mention previous projects, if any ). Do specify it if you have no prior experience. Rough timeline explaining what you intend to learn and complete each week.
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
      <td>Read the theory related to speech recognition &amp; synthesis. Brush up Python skills.</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Implement recording speech through microphone and conversion to text. Also, write the code for speaking the reply returned by the NLP algorithm.</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Get familiarised with the bag of words model &amp; neural networks theory.</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Read the theory on RNNs, LSTM, sequence to sequence model thoroughly.</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Implement conversation flow &amp; identification of intents, and entities.</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Train and implement the sequence to sequence model. Complete NLP code.</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Design the conversational interface on Android Studio. Start learning to write code for the functioning of the app.</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Implement code fully. Debugging.</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
