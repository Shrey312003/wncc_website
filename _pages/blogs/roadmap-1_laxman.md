---
layout: blog
title: WnCC Blog
project: Roadmap-1
project_name: Roadmap 1 by Laxman Desai 
permalink: /blogs/sprinklr
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
<div class = "ml-3 mt-4 author-details mb-5"> Laxman Desai
 3rd Year, B.Tech (Chemical)
 </div>
 </div>
<p class = "blog-content blog-higlight" style= "font-size:1.9em; color: aliceblue"><strong>I'm Laxman Desai, a Chemical Engineering 3rd year Undergraduate. I love to code and design cool stuff.

<br>
</strong>
</p>
<p class = "blog-content">

<span style = "font-weight: 900; color: #55cfff; font-size: 45px">First Year</span>
<br>
Growing up, I always dreamt of becoming a software guy working for some massive SAAS company in Silicon Valley, but it was just a distant dream. As for my first year in college, I had absolutely no idea of what I should make of my stay here. I kinda knew I had no intention of pursuing Chemical.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Programming Experience untill 2nd year summers</span>
<br>
It was quite accidental I'd say. It all started when the pandemic hit. All of a sudden I was locked in my room, with no college, no hanging out with friends, and basically nothing to do. With a ton of free time at hand, I began exploring various things: design, music and coding among others.
<br><br>

I saw a youtube video by Rachit Jain about how he got good at coding / landed an internship at Microsoft despite not being from CSE. He talked about this thing called Competitive Programming (aka CP), and how it got him addicted to coding. In May 2020 I too decided to give it a try. By June, I was hooked on it and decided to stop wasting time elsewhere (social media, etc) and focus full time on getting good at competitive coding. Back then, only a handful of my batchmates used to do CP. Every time I used to get stuck, I had no one to turn to. This greatly improved my Googling and debugging skills. I would read the editorials and even ask questions on the CodeChef/Codeforces forums. By October, I was highly rating obsessed and realised I wasn't learning anything new. I was at the end of my 3rd Sem at this point in time and had no winter internship. So I decided to change my strategy, and try and master some new algorithms during my winter break. I would take up a new topic every week from November till Jan, and attempt a shit ton of questions related to that topic. During week-1 and week-2 I focused on trees and graphs, during week-3 and week-4 I focused on Segment Trees and Disjoint Set Unions and then later I focused on Advanced Dynamic Programming, Sparse Tables and Math-based Algorithms (Euler's Totient, etc)
<br><br>
By January, I had attempted 800+ questions over the various websites I used. I've added links to how my coding habits evolved over time at the bottom.
<br>
<br>
During spring sem registration, I was hoping to take DSA as a course, but my CPI didn't allow me. By february 2021 things had begun falling apart. CP felt boring. I had no summer intern/plans at that point of time. My CPI had dropped massively last semester, and my major felt like a major waste of time.
<br>
To brighten things, I decided to explore other domains of Software. Particularly this thing everyone talked about called Machine Learning. I had also taken up DS303 - Intro to ML. During that semester, I learnt Python and understood basic machine learning, it seemed all fun until I got introduced to Tensorflow 💀.
<br>
In March I managed to land a summer internship via the placement cell. I had also decided to mentor for a CP-based project in WnCC’s SOC during the summer. I also became a mentee for another project called ResoBin which was something I really wanted to build since the previous year but for which I had no technical knowledge. The idea behind ResoBin was to build a common resource-sharing platform. That summer, I spent the majority of my time learning how the web works. I began with HTML, CSS and JS and soon realised how painful web dev actually was. Soon I moved to ReactJS and life got even more painful. I kept going and soon things started to fall in place. I got really good at React in a month's time (with no web knowledge).
I was also doing an internship at a startup, where my project was mainly based on Computer Vision. I learnt Pytorch (and fell in love with it) and OpenCV.
In June, I managed to get another internship. This time in frontend development using NextJS. The interviews gave me an idea of what my resume lacked - a thorough mathematical (not just intuitive) understanding of my ML projects.
In July, I spent some time on CP for third-year intern tests, and also read the math behind miscellaneous topics in Deep Learning.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Projects or Internships</span>
<br>
I did build a couple of projects, one can find an exhaustive list on my GitHub <a href="https://github.com/relaxxpls">github.com/relaxxpls</a> and soon enough on my portfolio <a href="https://laxmandesai.com">laxmandesai.com</a>.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Preparation Strategy</span>
<br>
3rd sem & Winter: CP
<br>
4th sem & Summer: ML / Deep Learning / CV
<br>
5th sem: Full Stack Web Dev
<br>
6th sem: Same as 5th sem + Explored Crypto + Game dev a little.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Intern Season</span>
<br>
I had made up my mind a year back, and only applied for the software-related companies, a majority of which didn't open for Chemical. Out of the 5 companies I applied to, day 1 got me 0 selections. I was mentally prepared for this. The next company I was allowed to apply for was Sprinklr, and I was able to get a test shortlist. The test was 3h long, and I was able to solve 2.5 of the 3 questions. Anyone who solved 2+ questions was shortlisted for the interview. After 3 Technical (1 - 1.5h each) and 1 HR interview (30mins) rounds of interviews, I managed to get selected.
<br>
<br>
Interview experience (Tech Rounds)
<br>
1) Previous internship learnings.
<br>
2) Some projects from my resume.
<br>
3) My understanding of the tech used in my projects/interns. For example, why did I choose a particular web framework like React or why did I need a database or a cache.
<br>
4) DSA Topics: Some knowledge about how C++ Data Structures actually work, like set and map (AVL Trees, RB Trees) and their unordered versions (Hash Maps)
<br>
5) Solving a few DSA questions on Google Docs (No IDE autocompletions, so practice this!).
<br>
6) Some puzzles and logic questions.
<br>
7) A little knowledge about how the internet works.
Since I had some React experience. I had to design some components and custom React hooks.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Protips for the Interview</span>
<br>
Right off the bat suggest/implement the brute force solution (even if you know a better solution exists). Then walk the interviewer through how you can optimize various things and suggest a better solution.
Also practice extensively with one language of your choice, I'd suggest C++. Closer to your interview, practise solving questions on Google Docs / Note Pad (No autocompletions)
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Mistakes Committed</span>
<br>
A ton. Here's what I've learnt:
<br>
a) Read, think, implement, repeat. Focus on implementing things hands-on, rather than just watching tutorial videos.
<br>
b) If you want to stay in the game long enough to get noticed then dream big. Most people tend to float away once they've accomplished their goals.
<br>
c)Start early, and work as much as you possibly can.
<br>
d) Everything is already out there. If you’re just beginning, things seem new. Stick around for a while and they become familiar.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Tips and Suggestions</span>
For CP, I'd suggest using Stopstalk to understand which problems to solve. It's a website that lets you see the problems solved by others in a sorted order. Here's my 
<a href = "https://www.stopstalk.com/user/profile/Relaxxpls">profile</a> and you can find other instizens
<a href = "https://www.stopstalk.com/leaderboard?q=Indian+Institute+of+Technology+Bombay">here</a> 
You'll still have to submit on the various sites (Codechef, codeforces, etc) individually.
I used to stalk a few seniors and follow their progress chronologically.
You can also see how my code evolved from a noob person <a href = "https://www.codechef.com/viewsolution/33464653">noob person</a> to a well, <a href ="https://codeforces.com/contest/722/submission/103334574"> non-noob person </a>
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Must Do Resources</span>
<br>
For CP
<br>

<a href = "https://atcoder.jp/contests/dp"> Dynamic Programming </a>
<br>
<a href = "https://leetcode.com/discuss/career/449135/how-to-effectively-use-leetcode-to-prepare-for-interviews"> Speed solve this a month before your internship tests </a>
<br>
<a href = "https://cp-algorithms.com/#articles">CP Theory</a>
<br>
<br>
For Interviews
<br>
<a href = "https://github.com/realabbas/big-companies-interview-questions/tree/master/companies">Interview Questions</a>
<br>
<a href = "https://www.ohsu.edu/sites/default/files/2019-04/How-to-Answer-the-64-Toughest-Interview-Questions.pdf">64 HR Questions</a>
<br>
<a href = "https://gurmeet.net/puzzles/">Puzzles</a>
<br>
</p>

    

{% endif %}
{% endfor %}
