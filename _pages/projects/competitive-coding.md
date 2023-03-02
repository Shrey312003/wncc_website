---
layout: project
title: Seasons of Code
project: Competitive coding 
topics:
    - Competitive Coding
mentors:
    - Pratyush Agrawal
    - Srijan Karn
    - Yash Gupta   
mentees:
    - Akshat Gautam
    - Aniket Agrawal
    - Devak Sinha
    - Harsh Vinayak Borkar
    - Himanshu Wakode
    - Hiren Bavaskar
    - Janeel Patel
    - karthikeya reddy konda
    - Kunal Chhabra
    - Nilesh Sonune
    - Payal Choudhary
    - Prajwal Patil
    - Prajwal Singh
    - Prateek Chauhan
    - Raja Gond
    - Rishav Ranjan
    - Ruchir Chheda
    - Sahasra Ranjan
    - Shivang Tiwari
    - Sidharth Mundhra
    - Tamoghno Kandar
    - Vrinda Jindal
    - Manan Agarwal

permalink: /soc/projects/competitive-coding
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
        Get started with competitive coding!
        <br><br>
        This project is aimed towards people who want to better themselves in the sport of competitive programming. The plan during the summers would be to get people familiar with standard data structures and algorithms. Apart from this the project would require the mentees to give a good amount of time to practice problems on various online judges like Codeforces, Codechef, SPOJ etc.
        <br><br>
        <strong>Proposal</strong>
        <br>
        Mention your familiarity with C++ and algorithms in the proposal. Also if you already practice on some online judge like codechef, codeforces, hackerearth, do provide the link to your profile on those judges. If active on GitHub, provide link for that too. Also mention what other activities you are taking up in the summer and how much time you will be able to devote per week for SOC.
        
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
      <td>C++ revision and STL</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Sorting, binary search</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Greedy algorithms, exchange arguments</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Binary exponentiation, sieve, modular arithmetic, Fermat’s theorem</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Dynamic programming(basic)</td>
    </tr>
    <tr>
      <td>Week 6</td>
      <td>Dynamic programming(advanced)</td>
    </tr>
    <tr>
      <td>Week 7</td>
      <td>Graph representation, BFS, DFS</td>
    </tr>
    <tr>
      <td>Week 8</td>
      <td>Dijkstra’s algorithm</td>
    </tr>
    </tbody>
    </table>
</div>
{% endif %}
{% endfor %}
