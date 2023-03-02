---
layout: project
title: Seasons of Code
project: InstiCloud
topics:
    - Web Development
    - Networks
    - Blockchain
mentors:
    - Karrthik Arya
    - Ishit Garg
    
mentees:
- 8-10
    
permalink: /soc/projects/2022/project262
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
        How much data is generated every minute across the world? You must have definitely come across the fact that 90% of world's data has been generated in the past 2 years!(From whichever year this fact is 😜) 
        </p>
<p class="display3" style = "font-size:22px;" >
Such a rapid rate of data generation along with issues such as data privacy coming up, often makes people wonder are centralized data storage platforms like google drive or iCloud really the way to go?<br><br>

This project aims to create a p2p data storage platform with blockchain based access control. Seems complicated? Not really…
There would be mainly 3 aspects to the project, the first would be to build the p2p data storage platform which we would be making with Node.js  using libraries such as webRTC. Next would be to build the system for access control and this is where blockchain comes in. We would be using a smart contract to keep track of who owns the file and who has access to it. <br><br>
So overall the concept is pretty simple, whenever you upload a file it would be broken into various parts which would be encrypted and then distributed amongst the peers connected along with making an appropriate entry in the blockchain. When you would try to access the file again the smart contract would return back the method to accessing the various segments if you are allowed access to that file. 
Prereqs: Enthusiasm to learn( though some experience in web development might be beneficial)<br>
References:<br>
<a href='https://drive.google.com/file/d/1DvE7DSjGQ33WtH-ZVlWgEUn80b06sbec/view?usp=sharing'>https://ieeexplore.ieee.org/document/8726493/</a> (This is what we would try to implement)<br>
<a href='https://javascript.plainenglish.io/build-a-p2p-image-sharing-app-with-webrtc-and-react-fe6b3d1976d5'>https://javascript.plainenglish.io/build-a-p2p-image-sharing-app-with-webrtc-and-react-fe6b3d1976d5</a> ( a good resource for a p2p file sharing system) <br>
</p>
</div>
<div class ="d-flex">
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Tentative Timeline :</h4>
    <table class = "table table-striped w-100">
  <thead>
    <tr>
      <th>Week Number</th>
      <th>Tasks to be Completed</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>Week 1</strong></td>
      <td>HTML, CSS, JavaScript(Brush Up) + Theoretical learning on blockchain and p2p system</td>
    </tr>
    <tr>
      <td><strong>Week 2 </strong></td>
      <td>Start learning Solidity and exploring Web3 </td>
    </tr>
    <tr>
      <td><strong>Week 3-4  </strong></td>
      <td>Learning frontend development ReactJS, React hooks, Redux</td>
    </tr>
    <tr>
      <td><strong>Week 5 </strong></td>
      <td> Learning to setup a p2p network</td>
    </tr>
    <tr>
      <td><strong>Week 6 </strong></td>
      <td>Building the UI on React along with implementing  the Smart Contract to connect with a wallet and store appropriate file info</td>
    </tr>
    <tr>
      <td><strong>Week 7-8 </strong></td>
      <td>Complete Smart Contract to check who has the access and accordingly retrieve the files. Then setup the p2p system to break and encrypt the files to store on the network
</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
