---
layout: blog
title: WnCC Blog
project: ICPC Experience
project_name: ICPC World Finals, Moscow, October 2021 
permalink: /blogs/icpc
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
<div class = "ml-3 mt-4 author-details mb-5"> Bhaskar Gupta
 4th Year, B.Tech (CSE)
 </div>
 </div>
<p class = "blog-content blog-higlight" style= "font-size:1.9em; color: aliceblue"><strong>In its own words, ICPC is:
<br>

An algorithmic programming contest for college students. Teams of three, representing their university, work to solve the most real-world problems, fostering collaboration, creativity, innovation, and the ability to perform under pressure. Through training and competition, teams challenge each other to raise the bar on the possible. Quite simply, it is the oldest, largest, and most prestigious programming contest in the world.
<br>
</strong>
</p>
<p class = "blog-content">
The lineup from IIT Bombay this year was Shivam Goel (a final year undergrad), Shubham Jain (currently doing his masters at Stanford), and me, Bhaskar Gupta. Unfortunately, Shivam was unable to participate in the World Finals as he was unwell.
<br>

<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Pre-Contest</span>
<br>
Shubham and I met for breakfast to decide our team strategy. Surprisingly we both had the same outlook towards a problem: treat it as trivial until you solve it! We also decided to split up the topics which each of us would attempt and left for the exam hall. 
<br>
Before the start of the contest, each team was invited inside the contest hall with the name of their college being announced. It gave us an immense sense of pride when our college IIT-B’s name was called out. There were some changes this year in the seating area due to COVID-19. There were transparent plastic dividers between each team member and the team members had to communicate via headphones. Also, for the first time in the history of ICPC, there were three machines per team so that everyone could code individually. 
<br>
As the contest was about to start, the spectators began a countdown of 10, 9, …, 1, 0, and the contest began!
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">The Contest!</span>
<br>
To our surprise, there were 15 tasks this time. Usually, ICPC never crosses 12 tasks. As the tasks are not sorted according to difficulty, we started reading the tasks in order; Shubham from the back and I from the front. Shubham suddenly exclaimed, “Peeche ke saare problems geometry ke lagre hai”. I was overjoyed as computational geometry is my favorite topic. Being an international chess player has helped me build up my spatial reasoning and so I am comfortable with geometry tasks. 
<br><br>
During the contest, there was a live scoreboard presented to show which team solved which task at what time. 12 minutes into the contest the University of British Columbia had got the first AC (correct submission i.e. accepted) of the contest and the audience broke into loud applause, enough to distract everyone in the hall! 
<br><br>
In the meantime, I had settled into Problem E, which could be reduced to adding linear equations on an array and querying for a value in the array. Quickly coding it up, our first AC was at the 33rd minute! In the meantime, Shubham was solving a problem (Problem D) on strings using Manacher’s algorithm and we got our second AC at the 45th minute. By then I had picked up a geometry problem (Problem C). There were n points on a 2D plane, and the task was to find the area where a camera can be placed so that the order of the points will be seen in a given permutation from left to right. This problem was equivalent to the intersection of n-1 halfplanes as for each pair of adjacent points, a halfplane is the region where we can see the first point to the left of the second. I coded up 200 lines and submitted my code but got the verdict WA (wrong submission). I could not find any obvious mistake when I read the code again so I quickly read the problem statement again and realized that I had missed that a camera can only capture a halfplane (which is logically obvious too). So I had to delete the convex hull of the points from the halfplane intersection. I quickly coded all this and it ended up being 350 lines. After reading my code again, and hoping for it to pass in a single go, I submitted it. AC (141st minute)! By then Shubham had coded Problem O, and the task was to check if two planets are isomorphic, allowing the planets to rotate. He was getting WA as the verdict and was reading other problems by the time I finished coding the geometry Problem C. He explained his logic for Problem O, it seemed perfect and so I began reading his code. I realized that the code had a small bug that incorrectly converted doubles to integers, and after fixing it we got our fourth AC (156th minute)!
<br><br>
After this, we approached Problem G, which was an optimization task. We were unable to get anywhere with the problem for around 30 minutes. I tried out another geometry problem (Problem F) while Shubham tried a puzzle kind of problem (Problem A). However, seeing the submissions on Problem G increasing, we decided to go back to it. This time we started discussing our thoughts on the problem. Instead of using headphones, we were shouting through the plastic divider between us xD! We split the problem into 8 cases and formalized the algorithm for each case. For this, we required 6 segment trees and 2 merge sort trees, which is just repulsive to think about! Being the data structure guy of the team, it was up to me to code this. Shubham again moved on to Problem A, leaving me around 80 minutes to code this problem. Out of sheer laziness of coding another lengthy task, I spent 10 minutes thinking of some alternate solution. I thought of an idea by which I was able to reduce 1 of the cases into a 1 line code, and similarly, all the cases followed. It ended up being only a 10 line code and we got our 5th AC on the 247th minute! Shubham had begun coding problem A and we had our 6th AC on the 268th minute! Having around 30 minutes left to the end of the contest, we approached problem J together, Shubham tried an approach using flows, and I used DP. We were unable to formalize anything and I moved on to the geometry problem (Problem F). 10 minutes to the end of the contest I got a rough idea of the logic behind the problem. However, seeing the timer we stopped, as 10 minutes is orders of magnitude less than the time required to even code a geometry problem. There was a countdown again during the last 10 seconds of the contest, and the contest ended! 
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Post-Contest (Closing Ceremony) </span>
<br>
Submissions for the last hour are not visible to the participants, and so everyone had to wait for the official results which were declared during the closing ceremony. Our team ended up with a World Rank of 33, and 2nd out of the 8 teams from India. It has been the best performance by IIT Bombay in the history of ICPC! 
<br>
The most memorable moment during the closing ceremony was when the World Champions were declared; they received a standing ovation for a prolonged period as everyone paid homage to how hard and long the champions had worked for this moment.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Personal Acknowledgements</span>
<br>
1. My sister, Ilina Gupta, for guiding me throughout.<br>
2. My classmate and friend, Pratyush Agarwal, for teaching me a ton of cool algorithms in my second year.<br>
3. My teammates, Shubham Jain and Shivam Goel for pushing me to continuously improve.
</p>

    

{% endif %}
{% endfor %}
