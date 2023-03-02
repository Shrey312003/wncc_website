---
layout: blog
title: WnCC Blog
project: Roadmap-2
project_name: Roadmap 2 by Kunind Sahu 
permalink: /blogs/amex
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
<div class = "ml-3 mt-4 author-details mb-5"> Kunind Sahu
 3rd Year, B.Tech (MEMS)
 </div>
 </div>
<p class = "blog-content blog-higlight" style= "font-size:1.9em; color: aliceblue"><strong>Hey all! I am Kunind Sahu, a BTech thirdie (a to-be fourthie) in the MEMS department. I am pursuing a dual minor in Computer Science and Artificial Intelligence from CMInDS, IIT Bombay. You’d often see me making bad jokes, and then laughing at them. But (un) fortunately, I’m here to talk about my path to the role of an Analyst Intern in the Credit Fraud and Risk - Centre of Excellence at American Express, this summer!

<br>
</strong>
</p>
<p class = "blog-content">

<span style = "font-weight: 900; color: #55cfff; font-size: 45px">First Year</span>
<br>
I did not spend my first year doing a lot of things. However, it was during the COVID-19 period after my second semester had abruptly ended, during which I learnt quite a lot of things from various online sources.
<br>
Since CS101 for me ran in the spring sem, it was cut-off: so I first began to learn the remaining part of CS101 through CDEEP (also did MA108 through CDEEP and other resources so that my math fundamentals for further courses are clear - though you don’t really need differential equations for machine learning).
<br>
Then, I began by learning Python (since it was being used everywhere) and all the associated libraries for data science, namely, numpy, pandas and matplotlib. Once I had all the basics in place, I began my ML journey by doing this awesome introductory course ‘Machine Learning’ by Andrew Ng on Coursera. Although the programming assignments were in MATLAB, I found a Python version of the assignments, where you write code on Jupyter Notebooks instead and submit them the same way you’d submit the MATLAB assignments. You can find the Python version of the assignments <a href="https://github.com/dibgerge/ml-coursera-python-assignments">here</a>. Also, <a href="https://drive.google.com/file/d/1QtJKyo-CmdIulT5cNh_k2_j4R8-Mszb9/view?usp=sharing">here is the link</a> to my notes for Andrew Ng’s course and cheatsheet for Python libraries for machine learning.
<br>
I did apply for a few WnCC SoC projects, but wasn’t selected for either one of them. I did do a few other courses related to Finance. 

<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Programming Experience untill 2nd year summers</span>
<br>
I had some coding experience before coming to the institute through school. We were taught introductory programming (roughly equivalent to the pre-midsem part of CS101) in Java as a part of our ICSE curriculum - that really helped me get enthusiastic about the field as a whole. That, and the online courses (especially the application oriented programming assignments of the coursera Machine Learning course) I did during my summers, really motivated me about programming - more specifically in the area of machine learning.<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Projects or Internships</span>
<br>
I did do quite a few course projects through the courses I was doing as a part of the CMInDS minor, apart from those two, I did a summer research internship at TU Delft (during the summers after my 4th sem). Additionally, I also did a project through WnCC SoC in the area of reinforcement learning.
<br>
<br>
<a style = "font-weight:900" href = "https://github.com/kunind27/DS203-Programming-for-Data-Science/tree/master/Project">DS203</a> - The project was supposed to be done in groups. My team and I made a project on the analysis of a bank marketing campaign where we employed tools from all the four pipelines (Exploratory, Descriptive, Predictive, Prescriptive) of data science - to predict if the campaign would be successful and ways or actions to be employed to improve it.
<br><br>
<a style = "font-weight:900" href = "https://github.com/kunind27/DS303-Intro-to-ML">DS303</a> - Again a group project: we employed various machine learning algorithms to detect credit card fraud. Here, we tried to focus much more on machine learning aspects of data science . This project coincidentally overlapped a lot with what AmEx was hiring interns for, in my year. Consequently, this project was discussed the most in my AmEx interview! 
<br><br>
<a style = "font-weight:900" href = "https://summerblog.insightiitb.org/kunind-sahu-tu-delft/?fbclid=IwAR2T_gC6Xt7LCKGrhoQhJ9qTBvf0Yq66r_inlZ--hlK3FtROmvd8useR3ak">Summer Research Internship @ TU Delft</a> - I got an opportunity to intern @ TU Delft at their MACHINA Lab (TU Delft has 16 labs dedicated specifically to AI and its applications ;) ). There, I worked on the topic of Graph Similarity Computation through Deep Learning. This is where I was first exposed to the nascent field of Graph Machine Learning (which has turned into an interest now!). To give you an idea of the awesome work being done there. My guide, Prof. Miguel Bessa, used machine learning to <a href="https://www.youtube.com/watch?v=cWTWHhMAu7I">make a super-compressible metamaterial from a brittle base material</a> . Additionally, one of his PostDoc students used <a href="https://www.tudelft.nl/en/2021/tnw/tu-delft-creates-one-of-the-worlds-most-precise-microchip-sensors-thanks-to-a-spiderweb#:~:text=Delft%27s%20latest%20news-,TU%20Delft%20creates%20one%20of%20the%20world%27s%20most,sensors%20%E2%80%93%20thanks%20to%20a%20spiderweb&text=A%20team%20of%20researchers%20from,for%20quantum%20technologies%20and%20sensing.">Bayesian Optimization and created the world’s most precise microchip sensor using a spiderweb as an inspiration!</a> I got the internship through apping. I’ve written extensively about the process of apping right <a href = "https://drive.google.com/file/d/1PELKe3qu6XbhMGpubwALYFBp-jn-vDTu/view">here.</a> 
<br><br>
<span style = "color:#fff; font-weight:900">WnCC SoC Project</span> - My project was on the topic of reinforcement learning. There, we used reinforcement learning algorithms such as Q-Learning and Deep Q-Learning (and also the Expectimax algorithm as a heuristic to serve as a baseline) to train an intelligent agent to play the game of 2048.
<br><br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Preparation Strategy</span>
<br>
<span style = "color:#fff; font-weight:900">Data Structure and Algorithms: </span>
<a href = "https://github.com/wncc/DSA-Learning-Series-2021">WnCC’s DSA Prep Booklets</a> to understand the basics of the important data structures and implement them from scratch on C++. I also practised a few problems on hackerrank. In my opinion, my DSA Prep was not enough. Although I was well versed with the common data structures, their functioning and implementation, I was unable to solve problems which were majorly application based - I lacked the ability to judge the best algorithm / data structure to be used for a particular problem - essentially, lack of experience and problem practice.
<br>
<br>
<span style = "color:#fff; font-weight:900">Probability: </span>
“50 Problems on Probability” - went through the entire book
“Heard on the Street” - solved a few select solved problems
<br>
<br>
<span style = "color:#fff; font-weight:900">Machine Learning: </span>
Used my own <a href = "https://drive.google.com/drive/folders/1NV_YhegefJNgV845W-FU5bV8BTk0vZJZ?usp=sharing">(awesome xD)  ML notes</a> No special prep as such.
<br>
<br>
<span style = "color:#fff; font-weight:900">HR: </span>
“64 Toughest Interview Questions” - went through it to create an HR Doc of my own.
<br>
<br>
<span style = "color:#fff; font-weight:900">Miscellaneous: </span>
Course on Options Pricing (understanding the math, basic hedging strategies etc and coding the Black Scholes model in Python) through FinSearch by Finance Club and also did an <a href = "https://www.udacity.com/course/sql-for-data-analysis--ud198">SQL course on Udacity</a> to brush up on what I had learnt during DS203.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Interview Shortlisting</span>
<br>
AmEx released a preliminary shortlist of people eligible for the first round. Although, I'm not entirely sure on what basis they shortlisted the applicants.
<br>
What did I feel helped me in getting the shortlists:
<br>
1) My projects (especially the credit card fraud detection) and my ML experience
<br>
2) CPI
<br>
AmEx, thankfully, did NOT have a DSA round. Instead of a DSA round, they had an MCQ test on ML concepts, which was pretty easy to answer if you knew the basics of ML.
<br>
In addition to ML, there was another business decision related MCQ question - a situation was given and answers to many situation related questions were given. You could only choose to view answers to some of the questions about the situation. On the basis of the answers you've chosen to view, you had to choose the most appropriate action to improve the situation - which was also pretty easy to answer.
<br>
Those who did well in the above test were shortlisted for the interview rounds.
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Interview Experience</span>
<br>
There were two rounds, I was asked both (technical + HR) kinds of questions in both the rounds of the interviews.
<br>
The major focus of the interviews was my resume, specifically, the projects I did, especially the one on credit card fraud detection. We had worked quite extensively (tried many techniques, quite a few of which failed) - which made for quite an amazing discussion - we did go quite deep into the mathematical aspects of the algorithms I had used. Apart from the resume, a few AmEx specific questions to know if I knew about the company and two puzzles. All in all, I left the interview feeling quite confident about my performance.

<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Mistakes Committed</span>
<br>
Not preparing for DSA well. All of you reading this, hopefully you all still have time - so please practise DSA well, they’re important in getting shortlists. Especially, go through questions on Dynamic Programming, because they’re almost often asked in the shortlisting coding tests. Apart from that, I felt that my interview preparation was done well. Laxman (Sprinklr) has given amazing tips for DSA in <a href = "https://wncc-iitb.org/blogs/sprinklr.html">his intern roadmap piece</a>, do go through it!
<br>
<br>
<span style = "font-weight: 900; color: #55cfff; font-size: 45px">Tips and Suggestions</span>
<br>
Please please please keep in constant contact with your friends; keep talking to them, prepare together, it’ll help improve both of your moods and would kinda act as a morale booster. 
Internship season is of course a super important period (and super stressful too) in your stay here at IITB. There are surely going to be times when you are going to feel really down and not up for it. But please don’t worry too much; in the end, if you’ve prepared well and have a decent resume, you’ll get a good internship. All the best! ;)
</p>

    

{% endif %}
{% endfor %}
