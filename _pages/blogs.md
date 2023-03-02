---
layout: page
title: Code::Blogs
permalink: /blogs/
---

<style>
  .yellow{
    background-color: #FFFF00;
  }
  .card{
    margin: 2em;
    border-radius: 20px;
    background-color: #FFFF00;

  }
  .congrats{
    font-size: 20px;
    line-height: 1.5em;
    color: white;
    padding-top: 1em;
    padding-bottom: 1em;
  }
</style>

<section class = "section">
 <div class="container">
    <div class="card">
      <div class="col-lg-10 container my-auto mx-auto text-center">
        <p class="congrats" style="font-size: 30px; line-height: 1.5em; color: white; margin-bottom: 1em;" >Welcome to the WnCC's Blog Section. Here you can read some interesting tech related experiences of our seniors and learn from them. </p>
      </div>
    </div>
  </div>
<div class="container mx-auto">
    <br>
    <div class="row row-eq-height shuffle-wrapper">
      {% for item in site.data.settings.blog-items %}
      <div class="col-md-4 col-6 mb-4 shuffle-item" data-groups="[{% for soc in item.blog-type %}{% if forloop.first == true %}{% else %},{% endif %}&quot;{{ soc.type }}&quot;{% endfor %}]">
        <div class="rounded hover-wrapper pr-3 pl-3 pt-3 pb-3 shadow-sm bg-white border-top border-right mx-auto" href="{{site.baseurl}}{{ item.url }}.html" style = "height:400px;">
          <a href = "{{ site.baseurl }}{{item.url}}.html">
          <span class="rounded"> <h4 class = "text-center">{{ item.title }}</h4> <img src="{{ site.baseurl }}/{{ item.image}}" alt="{{ item.title }}" class="img-fluid rounded  w-100 d-block mt-5" style= "height: 65%">
          <br>
          <h5 class = "text-center">- {{item.author}}</h5>
          </span>
          <div class="hover-overlay rounded">
          </div>
          </a>
        </div>
      </div>
      {% endfor %}
  </div>
  </div>

 </section> 