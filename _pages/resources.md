---
layout: page
title: Resources
permalink: /resources/
---
<!-- blog -->
<section class="section">
<div class="container">
<h2 class = 'section-title text-center'>Choose your poison</h2> 
<div class = "d-flex flex-wrap justify-content-center">
{% for item in site.data.settings.resources-items %}
        <div class="col-lg-4 mb-3" style = 'width:400px; height: 220px; ' id = "resource-cards">
        <a href = "{{ site.baseurl }}/resources/#{{ item.name }}">
        <article class = " shadow rounded p-3 text-center pt-2" style = "background-color: rgb(20, 20, 30);" id = "resource-cards">
            <h3 style = "text-center">{{ item.title }}</h3>
        </article>
        </a>
        </div>
{%endfor %}
</div>
</div>
</section>
{% for item in site.data.settings.resources-items %}
<section class="section">
<div class="container">
        <div class="col-12 text-center">
            <h2 class="section-title" style="margin-bottom: 40px;">{{ item.title }}</h2>
            <p class ="text-dark">{{ item.fdis }}</p>
        </div>

<!-- Programming_101 -->

<div class="row row-eq-height">
            <!-- {% for label in site.data.settings.{{ item.name }} %}
            <div class="col-lg-4 col-sm-6 mb-4">
                <article class="card shadow">
                    <img class="rounded card-img-top" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="cars-text">{{ label.discription }}
                        </p>
                        <a href="{{ label.link }}" class="btn btn-xs btn-primary" target="_blank">Read More</a>
                    </div>
                </article>
            </div>
            {% endfor %} -->
            {% if item.name == "wiki" %}         
            {% for label in site.data.settings.wiki %}
            <div class="col-lg-4 col-sm-6 mb-4" id = "wiki">
                <article class="card shadow h-100">
                    <img class="rounded card-img-top" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark resource-card-title"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="card-text text-dark">{{ label.discription }}
                        </p>
                        <a href="{{ label.link }}" class="btn btn-xs btn-primary" target="_blank">Read More</a>
                    </div>
                </article>
            </div>
            {% endfor %}  
            {% elsif item.name == "ds" %}         
            {% for label in site.data.settings.ds %}
            <div class="col-lg-4 col-sm-6 mb-4 mx-auto" id = "ds">
                <article class="card shadow h-100">
                    <img class="rounded card-img-top" style = "height:400px" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark resource-card-title"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="card-text text-dark">{{ label.discription }}
                        </p>
                    </div>
                </article>
            </div>
            {% endfor %}  
            {% elsif item.name == "ciq" %}
            {% for label in site.data.settings.ciq %}
            <div class="col-lg-4 col-sm-6 mb-4" id = "ciq">
                <article class="card shadow h-100">
                    <img class="rounded card-img-top" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark resource-card-title"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="card-text text-dark">{{ label.discription }}
                        </p>
                        <a href="{{ label.link }}" class="btn btn-xs btn-primary" target="_blank">Read More</a>
                    </div>
                </article>
            </div>
            {% endfor %}            
            {% elsif item.name == "as" %}
            {% for label in site.data.settings.as %}
            <div class="col-lg-4 col-sm-6 mb-4" id = "as">
                <article class="card shadow h-100">
                    <img class="rounded card-img-top" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark resource-card-title"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="card-text text-dark">{{ label.discription }}
                        </p>
                        <a href="{{ label.link }}" class="btn btn-xs btn-primary" target="_blank">Read More</a>
                    </div>
                </article>
            </div>
            {% endfor %}
            {% elsif item.name == "ls21" %}
            {% for label in site.data.settings.ls21 %}
            <div class="col-lg-4 col-sm-6 mb-4" id = "ls21">
                <article class="card shadow h-100">
                    <img class="rounded card-img-top" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark resource-card-title"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="card-text">{{ label.discription }}
                        </p>
                        <a href="{{ label.link }}" class="btn btn-xs btn-primary" target="_blank">Read More</a>
                    </div>
                </article>
            </div>
            {% endfor %}
            {% elsif item.name == "ls" %}
            {% for label in site.data.settings.ls %}
            <div class="col-lg-4 col-sm-6 mb-4" id = "ls">
                <article class="card shadow">
                    <img class="rounded card-img-top h-100" src="{{ site.baseurl }}/assets/images/resources/{{ label.image }}"
                        alt="{{ label.title }}">
                    <div class="card-body">
                        <h4 class="card-title"><a class="text-dark resource-card-title"
                                href="{{ label.link }}" target="_blank">{{ label.title }}</a></h4>
                        <p class="cars-text">{{ label.discription }}
                        </p>
                        <a href="{{ label.link }}" class="btn btn-xs btn-primary" target="_blank">Read More</a>
                    </div>
                </article>
            </div>
            {% endfor %}
            {% endif %}


</div>
<p class="text-center text-dark">{{ item.ldis }}</p>
<div style="display: flex; align-item: center; justify-content: center;">
<a href="{{ item.btn-link }}" class="btn btn-xs btn-primary" target="_blank" style="
    padding: 15px 30px;
    font-size: 25px;
">{{ item.btn-title }}</a>
</div>
</div>
</section>

{% endfor %}


