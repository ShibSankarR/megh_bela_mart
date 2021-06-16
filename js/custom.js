// JavaScript Document
/* DETAILS
==================================================
	Theme Name: guelphextermination.ca	
	Author: Shib RCPL
	Author URI: 
==================================================
*/
// Header Background Change

$(document).ready(function(){
  $(window).scroll(function () {
    if($(document).scrollTop() > 50){
      $(".header").css('background','#fff');
      $(".header").css('bottom','0');
      //$(".logo").css('width','25%');
      
    }
    else{
      $(".header").css('background','');
      $(".header").css('bottom','0');
      $(".logo").css('width','');
      //$(".navbar-nav").css('margin','10px 0 10px 65%');
    }
  });



  $("#catagories").click(function(){
    $(".catagory-menu").toggle("");
  });





//my account page
  !(function($) {
    "use strict";
    var a = {
      accordionOn: ["xs"]
    };
    $.fn.responsiveTabs = function(e) {
      var t = $.extend({}, a, e),
        s = "";
      return (
        $.each(t.accordionOn, function(a, e) {
          s += " accordion-" + e;
        }),
        this.each(function() {
          var a = $(this),
            e = a.find("> li > a"),
            t = $(e.first().attr("href")).parent(".tab-content"),
            i = t.children(".tab-pane");
          a.add(t).wrapAll('<div class="responsive-tabs-container" />');
          var n = a.parent(".responsive-tabs-container");
          n.addClass(s),
            e.each(function(a) {
              var t = $(this),
                s = t.attr("href"),
                i = "",
                n = "",
                r = "";
              t.parent("li").hasClass("active") && (i = " active"),
                0 === a && (n = " first"),
                a === e.length - 1 && (r = " last"),
                t
                  .clone(!1)
                  .addClass("accordion-link" + i + n + r)
                  .insertBefore(s);
            });
          var r = t.children(".accordion-link");
          e.on("click", function(a) {
            a.preventDefault();
            var e = $(this),
              s = e.parent("li"),
              n = s.siblings("li"),
              c = e.attr("href"),
              l = t.children('a[href="' + c + '"]');
            s.hasClass("active") ||
              (s.addClass("active"),
              n.removeClass("active"),
              i.removeClass("active"),
              $(c).addClass("active"),
              r.removeClass("active"),
              l.addClass("active"));
          }),
            r.on("click", function(t) {
              t.preventDefault();
              var s = $(this),
                n = s.attr("href"),
                c = a.find('li > a[href="' + n + '"]').parent("li");
              s.hasClass("active") ||
                (r.removeClass("active"),
                s.addClass("active"),
                i.removeClass("active"),
                $(n).addClass("active"),
                e.parent("li").removeClass("active"),
                c.addClass("active"));
            });
        })
      );
    };
  })(jQuery);
  
  $(".responsive-tabs").responsiveTabs({
    accordionOn: ["xs", "sm"]
  });
  
});


// banner Slider

$(document).ready(function() {
  $('.banner-slider').owlCarousel({
    loop:true,
    margin:0,
    dots: false,
    nav:true,
    autoplay: true,
    autoplayHoverPause:true,
    animateIn:"fadeIn",
    //slideSpeed : 8000,
    //autoplaySpeed : 4000,
    navText: [
      '<i class="fas fa-angle-left" aria-hidden="true"></i>',
      '<i class="fas fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  })
  });




  // Product Slider

$(document).ready(function() {
  $('.product-slider').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    dots: false,
    autoplay: true,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
  });
// Product Slider

$(document).ready(function() {
  $('.left-side-pro').owlCarousel({
    loop:true,
    margin:20,
    nav:true,
    autoplay: true,
    autoplayHoverPause:true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})
  });



  <!--toptobottom-->

	// browser window scroll (in pixels) after which the "back to top" link is shown

	var offset = 300,

		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced

		offset_opacity = 1200,

		//duration of the top scrolling animation (in ms)

		scroll_top_duration = 700,

		//grab the "back to top" link

		$back_to_top = $('.cd-top');



	//hide or show the "back to top" link

	$(window).scroll(function(){

		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');

		if( $(this).scrollTop() > offset_opacity ) { 

			$back_to_top.addClass('cd-fade-out');

		}

	});



	//smooth scroll to top

	$back_to_top.on('click', function(event){

		event.preventDefault();

		$('body,html').animate({

			scrollTop: 0 ,

		 	}, scroll_top_duration

		);

	});


// Menu
$('.stellarnav').stellarNav({
  theme: 'light',
  breakpoint: 960,
  position: 'right',
  //phoneBtn: '18009997788',
  //locationBtn: 'https://www.google.com/maps'
});






	$('.blck-tape a').click(function(){

    $('html, body').animate({

        scrollTop: $( $.attr(this, 'href') ).offset().top

    }, 500);

    return false;

});





<!--end-->