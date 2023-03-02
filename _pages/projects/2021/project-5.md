---
layout: project
title: Seasons of Code
project: PyRated
topics:
    - Machine Learning 
    - NLP
mentors:
    - Vibhav Aggarwal - <a href = "vibhav.agg@iitb.ac.in">vibhav.agg@iitb.ac.in</a>
    - Tulip Pandey - <a href = '190050125@iitb.ac.in'>190050125@iitb.ac.in</a>    
    
mentees:
- Preferably 4 but may take more based on SOPs
    
permalink: /soc/projects/2021/project-5
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
        <li><h4 class="text-primary text-center">{{topic}}</h4></li>
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
        This project aims to develop a source code plagiarism detector using Python.
        <br><br>
        First step will be to implement a basic bag of words approach by file parsing. After that, some language specific preprocessing like renaming of variables, usage of macros, etc. can be integrated to improve accuracy on a specific language (like c++). Based on the results, we will further add some machine learning techniques like k-nearest neighbours to further improve the results.
        <br><br>
        This project can also be extended to compare source codes with online available codes using Google Search API (for example) if time permits.
        <br><br>
        </p>
        <p class ="display3" style = "font-size:22px">
        We expect the students to go through some of the references mentioned and do some research of their own and include some of their ideas related to the project topic in their proposals. More importantly, we look for enthusiasm in students which will be judged by the effort they put in their proposals.
    </p>
    <p class = "display2 text-dark" style = "font-size:30px">References</p>
    <ol style = "list-style-type: decimal">
    <li class="display3 mb-2" style = "font-size:22px;">Bag of words approach:</li>
    <ul style = "list-style-type: disc">
    <li class="display3 mb-2" style = "font-size:17px;"><a href = "https://machinelearningmastery.com/gentle-introduction-bag-words-model/">https://machinelearningmastery.com/gentle-introduction-bag-words-model/</a></li>
    <li class="display3 mb-2" style = "font-size:17px;"><a href = "https://stackabuse.com/python-for-nlp-creating-bag-of-words-model-from-scratch/">https://stackabuse.com/python-for-nlp-creating-bag-of-words-model-from-scratch/</a></li>
    </ul>
    <li class="display3 mb-2" style = "font-size:22px;">Basic Python tutorial: <a href= "https://www.w3schools.com/python/python_intro.asp">https://www.w3schools.com/python/python_intro.asp</a></li>
    <li class="display3 mb-2" style = "font-size:22px;">File parsing using Python: <a href = "https://stackabuse.com/read-a-file-line-by-line-in-python/">https://stackabuse.com/read-a-file-line-by-line-in-python/</a></li>
    <li class="display3 mb-2" style = "font-size:22px;">KNN: <a href = 'https://towardsdatascience.com/machine-learning-basics-with-the-k-nearest-neighbors-algorithm-6a6e71d01761'>https://towardsdatascience.com/machine-learning-basics-with-the-k-nearest-neighbors-algorithm-6a6e71d01761</a></li>
    <li class="display3 mb-2" style = "font-size:22px;">A research paper on this approach: <a href = "http://ijmlc.org/papers/50-A243.pdf">http://ijmlc.org/papers/50-A243.pdf</a></li>
    </ol>
</div>
<div class = "d-flex">
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
      <td>Learn basics of Python and file parsing</td>
    </tr>
    <tr>
      <td>Week 2</td>
      <td>Implement a basic bag of words approach</td>
    </tr>
    <tr>
      <td>Week 3</td>
      <td>Add some preprocessing specific to language syntax</td>
    </tr>
    <tr>
      <td>Week 4</td>
      <td>Integrate KNN</td>
    </tr>
    <tr>
      <td>Week 5</td>
      <td>Final touch and presentation</td>
    </tr>
    <tr>
      <td>Bonus</td>
      <td>In case we meet deadlines earlier than planned, we can integrate Google Search API to search on online available codes.</td>
    </tr>
    </tbody>
    </table>
</div>
<div>
    <h4 class="display3" style="margin:40px 0px 40px 0px;">Checkpoints :</h4>
    <table class="table table-striped">
    <thead>
        <tr>
        <th>Checkpoint Number</th>
        <th>Progress</th>
        </tr>
    </thead>
    <tbody>
    <tr>
      <td  >1</td>
      <td>(4th April) - Implement bag of words with similarity percentage</td>
    </tr>
    <tr>
      <td>Rest</td>
      <td>Same as week schedule</td>
    </tr>
    </tbody>
    </table>
</div>
</div>
{% endif %}
{% endfor %}
