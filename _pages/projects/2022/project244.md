---
layout: project
title: Seasons of Code
project: CryptoCreate
mentors:
    - Vishruth N
    - Eknoor Singh
    - Yash Patil   
    
mentees:
- 3 
    
permalink: /soc/projects/2022/project244
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
        Decentralized finance, or DeFi for short, is a system in which users can access financial products directly on a decentralized blockchain network, without the need for middlemen such as banks and brokerages. 
        </p>
         <p class="display3" style = "font-size:22px;" >
        Democratizing finance by replacing centralized institutions such as banks with direct, peer-to-peer relationships is the way to go. Every financial service we use today -- savings, loans, insurance and much more -- could one day exist on a blockchain, not in a bank. 
        </p>
        <p class="display3" style = "font-size:22px;" >
        This project is focused on Launching a Token on a chain of your choice with a fixed supply and a notional value. A coin has its own blockchain, while a token is built on a pre-existing network. Cryptocurrencies rely on blockchains for their security and decentralized nature.<br>
        The project would involve learning blockchain native languages such as Solidity to develop smart contracts. It would also involve designing the Tokenomics of the currency that we would create. Tokenomics are the economics that govern your crypto, like total supply, distribution method, and initial pricing.  
<br>
Prerequisites:
N/A
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
      <td>Week 1-3</td>
      <td>Read and study about different Blockchain architectures and their usecases</td>     
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Learn solidity/rust (will be decided later)</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Work on the tokenomics and deciding the parameters.</td>
    </tr>
    <tr>
      <td>Week 6-7</td>
      <td>Work on the implementation to launch the token on Ethereum/Binance smart chain/Solana
    </td>
    </tr>
    </tbody>
    </table>
</div>

</div>
{% endif %}
{% endfor %}
