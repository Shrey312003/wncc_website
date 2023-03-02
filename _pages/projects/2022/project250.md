---
layout: project
title: Seasons of Code
project: Explore the world of Web 3.0
mentors:
    - Bhavesh Patil
    - Ruchir Chheda   
    
mentees:
- 8-10 
    
permalink: /soc/projects/2022/project250
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
        "Web 3 is an internet owned by users and builders orchestrated with tokens." - Chris Dixon
        <br><br>
        As the craze for the blockchain, web3 and NFTs is increasing exponentially, the aim of this project is to introduce the amazing new world of web 3.0 in a completely hands-on manner. 
        </p>
        <p class="display3" style = "font-size:22px;" >
        In this project the mentees will be able to appreciate the amount of ease, freedom and transparency blockchain and decentralization is bringing in the world right now. You will get the hands-on experience of coding web3 applications aka dApps from scratch.
        Some of the projects you will be building along the way...
        </p>
        <ul style = "list-style-type: disc">
        <li class="display3 mb-2" style = "font-size:20px;">Crypto based crowdfunding app</li>
        <li class="display3 mb-2" style = "font-size:20px;"> Make your own NFT</li>
        <li class="display3 mb-2" style = "font-size:20px;"> NFT minting </li>
        <li class="display3 mb-2" style = "font-size:20px;"> DeFi apps</li>
        </ul>
        <p class="display3" style = "font-size:22px;" >
        Suggested reading material:
        <br>
        What is web3? <br>
        -> <a href='https://ethereum.org/en/web3/'>https://ethereum.org/en/web3/</a><br>
        DeFi <br>
        -> <a href="https://www.coinbase.com/learn/crypto-basics/what-is-defi">https://www.coinbase.com/learn/crypto-basics/what-is-defi</a>
<br>
Prerequisites:<br>
This project doesn't require any pre-requisite apart from whatever you have learnt in CS101. Familiarity with the JavaScript will be a plus point but not a formal pre-requisite. But the very fundamental prerequisite we expect is enthusiasm to learn and explore :)
</p>
</div>
<div class = "d-flex flex-wrap">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class="table table-striped w-100">
    <thead>
        <tr>
        <th>Week</th>
        <th>Work</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td>Week 1</td>
      <td>Learn Javascript</td>     
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Introduction to Blockchain, Ethereum (Metamask (https://metamask.io/) is a browser plugin which can be used as an ethereum wallet)</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Learn Solidity</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Finish Learning solidity, Learn to integrate web app with solidity</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Crypto crowd fund app</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Finishing crypto crowd fund app and Learn about NFTs</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Learn to make your own NFT</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Make your own NFT and deploy on a public marketplace</td>
    </tr>
    <tr>
      <td>Week 9</td>
      <td>Learn about DeFi</td>
    </tr>
    <tr>
      <td>Week 10</td>
      <td>Create personal interest based DeFi app or NFT minting app</td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
