---
layout: page
title: Seasons of Code
permalink: /soc/
---

<!-- about-soc -->
<section class="section">
  <div class="container-fluid">
    <h3 class="display2 p-3 text-center project-title">Checkout the 2022 projects below!!!</h3>
    <br>
    <div class="row">
      <div class="col-lg-10 mx-auto text-center d-flex self-align-stretch">
        <div style = "margin-right:50px">
        <article class = "card p-3 shadow mb-4 soc-cards" style = "width:700px">
        <h3 class ="card-title"> What is Seasons of Code? </h3>
        <br>
        <p class="font-secondary paragraph-lg text-dark">Seasons of Code is a programme launched by the WnCC, along the lines of GSoC without much greenery though. </p>
        <p class="font-secondary paragraph-lg text-dark" id ="about">{{ site.data.settings.about-soc-what-is-soc }}</p>
        <button class ="btn btn-primary mx-auto" id ="read-toggle">Read More</button>
        </article>
        </div>
        <div>
        <article class = "card p-3 shadow mb-4 soc-cards" style = "width:700px;">
        <h3 class ="card-title">  Why should you participate? </h3>
        <p class="font-secondary paragraph-lg text-dark">Seasons of Code gives you an amazing opportunity to learn and dive into coding under the mentorship of the best in our institute.</p>
        <p class="font-secondary paragraph-lg text-dark" id ="why">{{ site.data.settings.about-soc-why-participate }}</p>
        <button class ="btn btn-primary mx-auto" id ="why-toggle">Read More</button>
        </article>
        </div>
      </div>
    </div>
  </div>
</section>
<!-- /about-soc -->

<!-- join the force (from old website) -->
<section id="one" class="wrapper bg-primary">
  <header class="major_soc p-2">
    <h2 class="text-white">Join The Force</h2>
    <p class="text-white">Do. Or do not. There is no try.</p>
  </header>
  <div class="container p-3">
    <div class="row">
      <div class="col-md-6 col-sm-12 text-center p-3">
        <section>
          <img class="icon major_soc " src="{{ site.baseurl }}/svg/light-siber-one.svg" />
          <h3 class="text-white">Padawan</h3>
          <p class="text-white">The Force is strong with you. <br> Train yourself to let go of everything you fear to lose. <br> The Force will be with you always.<br> Ready are you?</p><br />
          <a target="_blank" type="button" href="https://forms.gle/YJdu5oop2fEuQ8Es5" class="btn btn-info ">Become a Padawan</a>
        </section>  
      </div>
      <div class="col-md-6 col-sm-12 text-center p-3">
        <section>
          <img class="icon major_soc" src="{{ site.baseurl }}/svg/light-siber.svg" />
          <h3 class="text-white">Master</h3>
          <p class="text-white">I can feel you code. <br> It gives you focus. It makes you stronger. <br> Use the force <br> and someday you will be the most powerful Jedi ever.</p><br />
          <a target="_blank" type="button" href="https://goo.gl/forms/1WXW4oSDwlCHD4313" class="btn btn-info">Become a Master</a>
        </section>
      </div>
    </div>
  </div>
</section>
<!-- /join the force (from old website) --  >


<!-- soc -->
<section class="section">
  <div class="container">
  <h2 class = "text-center mt-0 mb-4">Upcoming Missions for the Jedi Order</h2>
    <div class="row mb-5">
      <div class="col-12">
        <div class="btn-group btn-group-toggle justify-content-center d-flex flex-wrap"  data-toggle="buttons">
          <label class="btn btn-sm btn-primary disabled" style = "pointer-events:none">
          Topic:
          </label>
          <label class="btn btn-sm btn-primary active">
            <input type="radio" name="shuffle-filter" value="all" checked="checked" />All
          </label>
          {% for label in site.data.settings.soc-type-label %}
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter" value="{{ label.type }}" />{{ label.title }}
          </label>
          {% endfor %}
        </div>
        <br>
        <!--
        <div class="btn-group btn-group-toggle justify-content-center d-flex"  data-toggle="buttons">
          <label class="btn btn-sm btn-primary disabled" style = "pointer-events:none">
          Year:
          </label>
          <label class="btn btn-sm btn-primary active">
            <input type="radio" name="shuffle-filter1" value="all" checked="checked" />All
          </label>
          {% for label in site.data.settings.soc-year-label %}
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter1" value="{{ label.type }}" />{{ label.title }}
          </label>
          {% endfor %}
        </div>
        -->
      </div>
    </div>
    <div class="row row-eq-height shuffle-wrapper">
      {% for item in site.data.settings.soc-items %}
      <div class="col-lg-4 col-6 mb-4 shuffle-item " data-groups="[{% for soc in item.soc-type %}{% if forloop.first == true %}{% else %},{% endif %}&quot;{{ soc.type }}&quot;{% endfor %}]">
        <div class=" rounded hover-wrapper pr-3 pl-3 pt-3 pb-3 bg-white" href="{{site.baseurl}}{{ item.url }}.html" style = "height:350px">
          <a href = "{{ site.baseurl }}{{item.url}}.html">
          <span class="rounded"> <p class="lead text-center font-weight-bold text-dark" >{{ item.title }}</p> <img src="{{ site.baseurl }}/{{ item.image_small }}" alt="{{ item.title }}" class="img-fluid  w-100 d-block mt-5 h-75 rounded"></span>
          <div class="hover-overlay rounded">
          </div>
          </a>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
<!-- /soc -->
