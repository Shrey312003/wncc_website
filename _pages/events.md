---
layout: page
title: Events
permalink: /events/
---
<!-- Labels for different years -->
<section class="section">
  <div class="container">
    <div class="row mb-5">
      <div class="col-12">
        <div class="btn-group btn-group-toggle justify-content-center d-flex scroll"  data-toggle="buttons">
          <label class="btn btn-sm btn-primary active">
            <input type="radio" name="shuffle-filter" value="all" checked="checked" />All
          </label>
          {% for label in site.data.settings.event-labels %}
          <label class="btn btn-sm btn-primary">
            <input type="radio" name="shuffle-filter" value="{{ label.type }}" />{{ label.title }}
          </label>
          {% endfor %}
        </div>
      </div>
    </div>
     <div class="row shuffle-wrapper">
      {% for item in site.data.settings.events-items %}
      <div class="col-lg-4 col-6 mb-4 shuffle-item" data-groups="[{% for event in item.event-type %}{% if forloop.first == true %}{% else %},{% endif %}&quot;{{ event.type }}&quot;{% endfor %}]">
        <div class="position-relative rounded hover-wrapper p-3" href="{{ item.url }}">
          <span class="rounded"> <img src="{{ site.baseurl }}/{{ item.image }}" alt="{{ item.title }}" class="img-fluid  w-100 d-block p-10"></span>
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