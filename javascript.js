


////////// Slide container 1 //////////

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1200){
          $(".links1").css({"right" : "0px"})
        }
        else {
          $(".links1").css({"right" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1200){
          $(".links1").css({"opacity" : "1"})
        }
        else {
          $(".links1").css({"opacity" : "0"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1200){
          $(".rechts1").css({"left" : "0px"})
        }
        else {
          $(".rechts1").css({"left" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1200){
          $(".rechts1").css({"opacity" : "1"})
        }
        else {
          $(".rechts1").css({"opacity" : "0"}) 
        }
      })
    })

////////// slide container 2 //////////

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1650){
          $(".links2").css({"right" : "0px"})
        }
        else {
          $(".links2").css({"right" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1650){
          $(".links2").css({"opacity" : "1"})
        }
        else {
          $(".links2").css({"opacity" : "0"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1650){
          $(".rechts2").css({"left" : "0px"})
        }
        else {
          $(".rechts2").css({"left" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >1650){
          $(".rechts2").css({"opacity" : "1"})
        }
        else {
          $(".rechts2").css({"opacity" : "0"}) 
        }
      })
    })

////////// slide container 3 //////////

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2100){
          $(".links3").css({"right" : "0px"})
        }
        else {
          $(".links3").css({"right" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2100){
          $(".links3").css({"opacity" : "1"})
        }
        else {
          $(".links3").css({"opacity" : "0"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2100){
          $(".rechts3").css({"left" : "0px"})
        }
        else {
          $(".rechts3").css({"left" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2100){
          $(".rechts3").css({"opacity" : "1"})
        }
        else {
          $(".rechts3").css({"opacity" : "0"}) 
        }
      })
    })

////////// slide container 4 //////////

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2550){
          $(".links4").css({"right" : "0px"})
        }
        else {
          $(".links4").css({"right" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2550){
          $(".links4").css({"opacity" : "1"})
        }
        else {
          $(".links4").css({"opacity" : "0"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2550){
          $(".rechts4").css({"left" : "0px"})
        }
        else {
          $(".rechts4").css({"left" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >2550){
          $(".rechts4").css({"opacity" : "1"})
        }
        else {
          $(".rechts4").css({"opacity" : "0"}) 
        }
      })
    })


////////// slide container 5 //////////

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >3000){
          $(".links5").css({"right" : "0px"})
        }
        else {
          $(".links5").css({"right" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >3000){
          $(".links5").css({"opacity" : "1"})
        }
        else {
          $(".links5").css({"opacity" : "0"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >3000){
          $(".rechts5").css({"left" : "0px"})
        }
        else {
          $(".rechts5").css({"left" : "1000px"}) 
        }
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >3000){
          $(".rechts5").css({"opacity" : "1"})
        }
        else {
          $(".rechts5").css({"opacity" : "0"}) 
        }
      })
    })



$(document).ready(function(){
      $(window).scroll(function(){
        if($(this).scrollTop() >100){
          $(".pulsate").css({"opacity" : "1"})
        }
        else {
          $(".pulsate").css({"opacity" : "0"}) 
        }
      })
    })



var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }

        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };



