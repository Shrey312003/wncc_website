---
layout: page
title: Seasons of Code
permalink: /soc/
---

<!-- about-soc -->
<section class="section">
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-10 mx-auto text-center">
        <h3> What is Seasons of Code? </h3>
        <br>
        <p class="font-secondary paragraph-lg text-dark">{{ site.data.settings.about-soc-what-is-soc }}</p>
        <br>
        <br>
        <h4>  Why should you participate? </h4>
        <p class="font-secondary paragraph-lg text-dark">{{ site.data.settings.about-soc-why-participate }}</p>
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
          <img class="icon major_soc " src="/svg/light-siber-one.svg" />
          <h3 class="text-white">Padawan</h3>
          <p class="text-white">The Force is strong with you. <br> Train yourself to let go of everything you fear to lose. <br> The Force will be with you always.<br> Ready are you?</p><br />
          <a target="_blank" type="button" href="https://forms.gle/6hSaLUSB8Gfeogw7A" class="btn btn-info ">Become a Padawan</a>
        </section>  
      </div>
      <div class="col-md-6 col-sm-12 text-center p-3">
        <section>
          <img class="icon major_soc" src="/svg/light-siber.svg" />
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
    <div class="row mb-5">
      <div class="col-12">
        <div class="btn-group btn-group-toggle justify-content-center d-flex" data-toggle="buttons">
          <label class="btn btn-sm btn-primary active">
            <input type="radio" name="shuffle-filter" value="all" checked="checked" />All
          </label>
          {% for label in site.data.settings.soc-label %}
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter" value="{{ label.type }}" />{{ label.title }}
          </label>
          {% endfor %}
        </div>
      </div>
    </div>
    <div class="row shuffle-wrapper">
      {% for item in site.data.settings.soc-items %}
      <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[{% for soc in item.soc-type %}{% if forloop.first == true %}{% else %},{% endif %}&quot;{{ soc.type }}&quot;{% endfor %}]">
        <div class="position-relative rounded hover-wrapper" href="{{ item.url }}">
          <span class="rounded"> <img src="{{ site.baseurl }}/{{ item.image }}" alt="{{ item.title }}" class="img-fluid  w-100 d-block"></span>
          <div class="hover-overlay">
            <div class="hover-content p-1 m-1">
              <a class="btn btn-xs btn-primary btn-block" style="white-space:normal; word-wrap:break-word;overflow: hidden;text-overflow: ellipsis;" href = "{{item.url | relative_url}}">{{ item.title|Title }}</a>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}
    </div>
  </div>
</section>
<!-- /soc -->