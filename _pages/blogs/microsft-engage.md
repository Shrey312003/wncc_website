---
layout: blog
title: Microsoft Engage
project: Microsoft Engage
project_name: Microsoft Engage
permalink: /blogs/ms-engage
---


{% for project in site.data.settings.blog-items %}
{% if project.title == page.project %}
<p>
<div class = "blog-title"> 
    <img src="{{ site.baseurl }}/{{ project.image }}"  width = "600px" height="auto"  alt="{{ project.project}}" class="rounded img-fluid blog-img" style = "float: left;">
</div>
<div class = "d-flex justify-content-center blog-info">
<h2 class="display1 m-3 p-3 text-center blog-col flex-fill ">{{page.project_name}}</h2>
</div>
</p>
<div class = "d-flex m-5">
<img src="{{ site.baseurl }}/{{ project.author_image }}" alt="{{ project.project}}" width = "150px" height = "auto" id = "circular-author" style = "border-radius: 50%;">
<div class = "ml-3 mt-4 author-details mb-5"> Vikram Atreya
 3rd Year, B.Tech (Mechanical)
 </div>
 </div>
<p class = "blog-content blog-higlight" style= "font-size:1.9em; color: aliceblue"><strong><span style = "font-weight: 900; color: #55cfff; font-size: 45px">What is Microsoft Engage?</span></strong>
<br>
It is a program run by microsoft to give students a chance to be mentored by microsoft. A challenge is given to you for a period of 1 month in which you have to work on the problem statement with guidance from your mentor. 
<br>
</p>
<p class = "blog-content">
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">How to apply?</span>
<br>
Notification usually comes around mid-late May on the microsoft careers website - <a href = "https://careers.microsoft.com/students/us/en">https://careers.microsoft.com/students/us/en</a>. You will have to sign up for the engage internship from the website. 
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Selection process</span>
<br>
First there will be if you pass the resume screening. You will receive a mail, with the test details in the following week. The test was about 1 hr long. Questions were based on simple programming concepts, git, implementing a data structure, riddles, etc. If you pass the test, you will receive a congratulatory email saying you have been accepted for engage and your mentor will contact you. 

<br><br>
<img src = "{{ site.baseurl }}/assets/images/blog/microsoft-path.jpeg" class = "img-fluid">
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Problem Statement</span>
<br>
Every year the problem statement changes and does not have any specific pattern. In 2020, the problem statement for stage 1 was to build a video chat application similar to MS teams. Working in teams was not allowed this year but taking help from internet or friends was allowed. The basic problem statement was “Your solution should be a fully functional prototype with at least one mandatory functionality - a minimum of two participants should be able connect with each other using your product to have a video conversation”. Building more features on top of this would be given more points. Points were also allotted for UI, speed, code practices and anything that can impress the judges. 
<br><br>
The problem statement for stage 2 is released just 1 week before the final submission. You can complete the program without completing the stage 2 task as well, but this feature will contain extra points and they expect your code to follow the AGILE methodology to implement the feature easily. The problem statement for this phase was:
<br> <br>
<span class ="blog-content" style = "font-size: 35px; display: inline-block; padding-left: 40px">
Include a chat feature in your application where meeting participants can share info without disrupting the flow of the meeting. Through this chat feature, your participants should be able to: </span>
    <ul style = "list-style-type:disc; padding-left: 150px">
    <li class = "blog-content" style = "font-size: 35px;">View & Send messages.</li>
    <li class = "blog-content"  style = "font-size: 35px;">Continue the conversation after the meeting.</li>
    <li class = "blog-content"  style = "font-size: 35px;">Start the conversation before the meeting.</li>
    </ul>
    <br>
</p>
<p class ="blog-content">
In the end you have to submit a working link of your chat application and also a video demo of your app working.
</p>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Mentorship</span>
<br>
<p class ="blog-content">
There are various lectures and sessions that are conducted by microsoft during the period the engage challenge runs. There were sessions on agile methodology, azure communication services, design thinking, journey from campus to corporate, Why microsoft?, etc. Also a mentor is allotted for a batch of 6 people who will be checking on your progress every week and give you feedback on how you can proceed further. They also hold some ice breaking sessions and group discussions. 
<br><br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">How you get an internship?</span>
<br>
<p class ="blog-content">
After your engage submission is done, based on your submission and mentor feedback you get a chance to interview. The interview will mostly be within a week or 2 from the submission deadline. The interview process had only 1 round and was very casual and short. First I was asked a few HR questions like Why microsoft?, Why CS and why not mechanical (since I’m majoring in mechanical). Next there was 1 coding question which I had to code live on a text editor + scratchpad. The interviewer wanted me to explain the logic first and then code. Using the scratchpad I explained the logic and proceeded to code on the live text editor. The interviewer questioned why I was writing code in a specific way and tried to test my understanding. After I was done solving, the interviewer asked if I had any questions for me and the interview was over.
<br><br>
You get an email after a week if you have been selected :)
</p>

    

{% endif %}
{% endfor %}
