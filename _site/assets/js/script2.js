
(function ($) {
    'use strict';
    // Sticky Menu
    $(window).scroll(function () {
        if ($('.navigation').offset().top > 100) {
            $('.navigation').addClass('nav-bg');
        } else {
            $('.navigation').removeClass('nav-bg');
        }
        console.log($(window).scrollTop());

        var triggerHeight = 1800;

    if ($(window).scrollTop() >= triggerHeight) {
        $('.achievements').css('visibility', 'visible').hide().fadeIn("slow");
        $(this).off('scroll');
    }
    });

    // Background-images
    $('[data-background]').each(function () {
        $(this).css({
            'background-image': 'url(' + $(this).data('background') + ')'
        });
    });

    // background color
    $('[data-color]').each(function () {
        $(this).css({
            'background-color': $(this).data('color')
        });
    });

    // progress bar
    $('[data-progress]').each(function () {
        $(this).css({
            'bottom': $(this).data('progress')
        });
    });

    $("#read-toggle").click(function() {
        var elem = $("#read-toggle").text();
        if (elem == "Read More") {
          $("#read-toggle").text("Read Less");
          $("#about").slideDown();
        }else {
            $("#read-toggle").text("Read More");
            $("#about").slideUp();
          }
    });

    $("#why-toggle").click(function() {
        var elem = $("#why-toggle").text();
        if (elem == "Read More") {
          $("#why-toggle").text("Read Less");
          $("#why").slideDown();
        }else {
            $("#why-toggle").text("Read More");
            $("#why").slideUp();
          }
    });
    
    /* ########################################### hero parallax ############################################## */
    window.onload = function () {

        var parallaxBox = document.getElementById('parallax');
        var
            /* c1left = document.getElementById('l1').offsetLeft,
                       c1top = document.getElementById('l1').offsetTop, */
            c2left = document.getElementById('l2').offsetLeft,
            c2top = document.getElementById('l2').offsetTop,
            c3left = document.getElementById('l3').offsetLeft,
            c3top = document.getElementById('l3').offsetTop,
            c4left = document.getElementById('l4').offsetLeft,
            c4top = document.getElementById('l4').offsetTop,
            c5left = document.getElementById('l5').offsetLeft,
            c5top = document.getElementById('l5').offsetTop,
            c6left = document.getElementById('l6').offsetLeft,
            c6top = document.getElementById('l6').offsetTop,
            c7left = document.getElementById('l7').offsetLeft,
            c7top = document.getElementById('l7').offsetTop,
            c8left = document.getElementById('l8').offsetLeft,
            c8top = document.getElementById('l8').offsetTop,
            c9left = document.getElementById('l9').offsetLeft,
            c9top = document.getElementById('l9').offsetTop;

        parallaxBox.onmousemove = function (event) {
            event = event || window.event;
            var x = event.clientX - parallaxBox.offsetLeft,
                y = event.clientY - parallaxBox.offsetTop;

            /*  mouseParallax('l1', c1left, c1top, x, y, 5); */
            mouseParallax('l2', c2left, c2top, x, y, 25);
            mouseParallax('l3', c3left, c3top, x, y, 20);
            mouseParallax('l4', c4left, c4top, x, y, 35);
            mouseParallax('l5', c5left, c5top, x, y, 30);
            mouseParallax('l6', c6left, c6top, x, y, 45);
            mouseParallax('l7', c7left, c7top, x, y, 30);
            mouseParallax('l8', c8left, c8top, x, y, 25);
            mouseParallax('l9', c9left, c9top, x, y, 40);
        };
        
        $('#toggle').prop("checked", "true")

        consoleText(["Web and Coding Club "], 'text',['white'], 'console');
    window.setTimeout(function(){
        $("#console2").css({
            'visibility': 'visible'
        });
        consoleText(["IIT Bombay", "Coders Together Strong", "Turning Caffeine to Code"], 'text2', ['#ffa500'],'console2');
    }, 3500);
    let clicked = false;
    let active = false;
    teamText(['<font color = "lightgreen">WnCC@itc:</font><font color = "blue">~</font>$ ./WnCC-team.sh <br> \
     Reading package lists.         .            .            .            Done <br> \
     Setting up dependency tree <font color = "tomato">tty15</font> <br> \
     Fetched 260 kb in 1s(286 kb/s) <br> \
     Preparing to unpack     .          .           .  <font color = "lightgreen">/managers.gz</font> <br> \
     Adding "Conveners to <font color = "lightblue">/usr/bin/tty15/members</font>" <br>\
     Build Successful!<br>\
     <font color = "green">Click on the images to know about the members</font>'],
     ["teamtext"], ["aliceblue"]);
     $("#team-title").click(function() {
        if(active){
            clicked = true;
            }
            teamText(['<font size = "5px"><font color = "blue">const</font> Managers {<br>\
                 &emsp; Ishit Garg;\
                 &emsp; Shreedhar Malpani;<br>};<br>\
                 <font color = "green">const</font> Conveners {<br>\
                 &emsp; Aryan Bhosale;\
                 &emsp; Aryan Goyal;\
                 &emsp; Chaitanya Aggarwal; <br>\
                 &emsp; Navyansh Mahla;\
                 &emsp; Parth Pujari;\
                 &emsp; Shrey Aggarwal; <br>\
                 &emsp; Soutrik Sarangi;<br>\
                 };</font>'], 'teamtext',['white'],);
     });
    $("#Parth").click(function() {
        if(active){
        clicked = true;
        }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
             &emsp; <font color = "green">name</font>: Parth Pujari;<br>\
             &emsp; <font color = "green">type</font>:Convener;<br>\
             &emsp; contact at:\
             <a href="https://www.linkedin.com/in/parth-pujari-12723323a"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/profile.php?id=100075941285086"> <i class = "ti-facebook"></i></a> \
              <a href="http://github.com/ParthP3"> <i class = "ti-github"></i> </a> ; <br>\
             };'], 'teamtext',['white'],);
    });
    $("#Shrey").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Shrey Aggarwal;<br>\
            &emsp; <font color = "green">type</font>:Convener;<br>\
            &emsp; contact at: \
            <a href="https://www.linkedin.com/in/shrey-aggarwal-5606a8223/"><i class = "ti-linkedin"></i></a>\
             <a href="http://facebook.com/profile.php?id=100075168486456"><i class = "ti-facebook"></i></a>\
             <a href="https://github.com/Shrey312003"><i class = "ti-github"></i></a>; <br> \
            };'], 'teamtext',['white']);
         
    });
    $("#Aryan_Bhosale").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Aryan Bhosale;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
             <a href="https://www.linkedin.com/in/aryan-bhosale-345497226"><i class = "ti-linkedin"></i></a> \
             <a href="https://www.facebook.com/profile.php?id=100075084139651"><i class = "ti-facebook"></i></a> \
             <a href="https://github.com/Hyperion0209"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
         
    });
    $("#Navyansh").click(function() {
        if(active){
        clicked = true;
        }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Navyansh Mahla;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/navyansh-mahla-519817223/"><i class = "ti-linkedin"></i></a> \
              <a href="https://www.facebook.com/navyansh.mahla"><i class = "ti-facebook"></i></a> \
              <a href="https://github.com/navyanshmahla"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
         
    });

    $("#Chaitanya").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Chaitanya Aggarwal;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/chaitanya-aggarwal-991b82224/"><i class = "ti-linkedin"></i></a> \
              <a href="https://www.facebook.com/chaitanya.aggarwal.940"><i class = "ti-facebook"></i></a>\
              <a href="https://github.com/Chaitanya-Aggarwal"><i class = "ti-github"></i></a> ; <br> \
            };'], 'teamtext',['white']);
         
    });

    $("#Soutrik").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Soutrik Sarangi;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/soutrik-sarangi-01745718b"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/soutrik.sarangi.1/"><i class = "ti-facebook"></i> </a> \
              <a href="http://github.com/soutrik-01"><i class = "ti-github"></i> </a> ; <br> \
            };'], 'teamtext',['white']);
         
    });

    $("#Ishit").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Ishit Garg;<br>\
            &emsp; <font color = "green">type</font>: Manager;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/ishit-garg-a4120b201/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/ishit.garg.18"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/ishit16"><i class = "ti-github"></i> </a> ; <br> \
            };'], 'teamtext',['white']);
         
    });

    $("#Atishay").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Atishay Jain;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/atishay-jain-b04565228"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/atishay.bajaj.56"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/Atishay25"><i class = "ti-github"></i> </a> ; <br> \
            };'], 'teamtext',['white']);
         
    });

    $("#Aryan").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Aryan Goyal;<br>\
            &emsp; <font color = "green">type</font>: Convener;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/aryan-goyal-8429611a7/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/aryanx07/"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/aryangoyal7"><i class = "ti-github"></i> </a>; <br> \
            };'], 'teamtext',['white']);
         
    });

    

    $("#Shreedhar").click(function() {
        if(active){
            clicked = true;
            }
        teamText(['<font color = "blue">const</font> WnCC {<br>\
            &emsp; <font color = "green">name</font>: Shreedhar Malpani;<br>\
            &emsp; <font color = "green">type</font>: Manager;<br>\
            &emsp; contact at: \
              <a href="https://www.linkedin.com/in/shreedhar-malpani-23a139209/"><i class = "ti-linkedin"></i> </a> \
              <a href="https://www.facebook.com/ShreedharMalpani28"><i class = "ti-facebook"></i> </a> \
              <a href="https://github.com/shreedharmalpani"><i class = "ti-github"></i> </a>; <br> \
            };'], 'teamtext',['white']);
         
    });

    

function consoleText(words, id, colors, console_id) {
  if (colors === undefined) colors = ['#fff'];
  var con = document.getElementById(console_id);
  var letterCount = 1;
  var x = 1;
  var waiting = false;
  var target = document.getElementById(id)
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function() {

    if (letterCount === 0 && waiting === false) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function() {
        var usedColor = colors.shift();
        colors.push(usedColor);
        var usedWord = words.shift();
        words.push(usedWord);
        x = 1;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
        if(console_id === "console"){
        $("#"+console_id).empty();
        }
        else{
        waiting = true;
      window.setTimeout(function() {
        x = -1;
        letterCount += x;
        waiting = false;
      }, 1000)
    }
      
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
}
function teamText(words, id, colors) {
  if (colors === undefined) colors = ['#fff'];
  var letterCount = 1;
  var x = 1;
  var target = document.getElementById(id);
  target.setAttribute('style', 'color:' + colors[0]);
  let timer = setInterval(function() {
      active = true;
      if (words[0][letterCount] === '&'){
        letterCount += 6;
      }else if (words[0].substring(letterCount, letterCount+2) === '<b'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 5;
      }
      else if (words[0].substring(letterCount, letterCount+2) === '<a'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 50;
      }else if (words[0].substring(letterCount, letterCount+2) === '</'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 6;
      }else if (words[0].substring(letterCount, letterCount+2) === '<f'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 30;
      }else if (words[0].substring(letterCount, letterCount+2) === '<i'){
        target.innerHTML = words[0].substring(0, letterCount)
        letterCount += 30;
      }else{
      target.innerHTML = words[0].substring(0, letterCount)
        letterCount += x;
        if (letterCount === words[0].length + 1) {
            clearInterval(timer);
            active =false;
            }
        if (clicked){
            clearInterval(timer);
            target.innerHTML = '';
            clicked = false;
        }
    }

  }, 30)
  
}
    };

    function mouseParallax(id, left, top, mouseX, mouseY, speed) {
        var obj = document.getElementById(id);
        var parentObj = obj.parentNode,
            containerWidth = parseInt(parentObj.offsetWidth),
            containerHeight = parseInt(parentObj.offsetHeight);
        obj.style.left = left - (((mouseX - (parseInt(obj.offsetWidth) / 2 + left)) / containerWidth) * speed) + 'px';
        obj.style.top = top - (((mouseY - (parseInt(obj.offsetHeight) / 2 + top)) / containerHeight) * speed) + 'px';
    }
    /* ########################################### /hero parallax ############################################## */

    // testimonial-slider
    $('.testimonial-slider').slick({
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        arrows: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        adaptiveHeight: false,
        autoplay: true,
        autoplaySpeed: 5000,
    });


    // clients logo slider
    $('.client-logo-slider').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        dots: false,
        arrows: false,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    

    // Shuffle js filter and masonry
    var jQuery = window.jQuery;
    var Shuffle = window.Shuffle;

    var myShuffle = new Shuffle(document.querySelector('.shuffle-wrapper'), {
        itemSelector: '.shuffle-item',
        buffer: 1,
        filterMode: Shuffle.FilterMode.ALL
    });

    jQuery('input[name="shuffle-filter"]').on('change', function (evt1) {
        var input1 = evt1.currentTarget;
        let x =0;
        if(x == 0){
            console.log(input1.value)
            myShuffle.filter(input1.value);
        }
    });
    
    

    
})(jQuery);

