---
layout: project
title: Seasons of Code
project: VoteChain
topics:
    - Blockchain Development
mentors:
    - Aadish Jain & Gaurang Dev 
    
mentees:
- 4 (but can take more based on SoP)
    
permalink: /soc/projects/2022/project284
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
<div >
    <p class="display3 project-desc" style = "font-size:22px;" >
        <br>
        This project aims to develop a blockchain based electronic voting system in Python.
<br>
Why Blockchain?<br>
Blockchains are being used to cut out the middleman and create a secure, decentralized way for service providers and customers to connect and transact safely and directly.
<br></p>
<p class="display3" style = "font-size:22px;" >
Where is it important to cut the middleman? You guessed it right : It is indeed in elections
<br>
What can we do?<br>
With the knowledge of Blockchain, we can create a secured, tamper-proof Electronic Voting System to avoid any adultery during elections.
<br>
Project Details:
<br>
We will start with understanding the basics of blockchain, how blockchain works, and the
implementation of BitCoin which will include some understanding of cryptography. We will then start building upon the simulated prototype of the blockchain to understand its each building block in detail. We will simulate a blockchain while implementing vote casting, block generation, block mining, proof of work, and cryptographic signatures. It will contain basic functions for the users like view contesting candidates, cast vote which will be registered securely and anonymously, and display the result at the end.
<br>
All of this will be done in the form of a simulation, later this project can also be extended to creating our own blockchain (on Ganache for example) and deploying it for users if time permits.
<br>
It is important to note that this project might be a bit heavy on the learning side, so applicants should be well prepared for the same.
<br>
<br>
Resources:
- <a href="https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8978295">https://ieeexplore.ieee.org/stamp/stamp.jsp?arnumber=8978295</a><br>
- <a href="https://bitcoin.org/bitcoin.pdf">https://bitcoin.org/bitcoin.pdf</a><br>
- <a href="https://www.tutorialspoint.com/blockchain/blockchain_proof_of_work.htm">https://www.tutorialspoint.com/blockchain/blockchain_proof_of_work.htm</a>
<br>
Prerequisites:<br>
We are majorly looking for enthusiasm in students for understanding blockchain which will be judged by the amount of effort put in their proposals, though basic knowledge of python and git may help

<br>
    </p>
</div>
<div class = "d-flex flex-wrap">
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
      <td  >Week 1-2</td>
      <td>Kickstarting with Bitcoin White paper , Understanding Cryptography, Basics of Python and git</td>
    </tr>
    <tr>
      <td>Week 3-4</td>
      <td>Reading Recent Paper(s) based on E voting System and Implementation Plan for Backend</td>
    </tr>
    <tr>
      <td>Week 5-6</td>
      <td>Implementation of important classes and identifying the required internal functions</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Wrapping up backend implementation</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Adding mentioned APIs for users</td>
    </tr>
    <tr>
      <td>Bonus</td>
      <td>UI Development and Creation of Real Blockchain on Ganache</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
 