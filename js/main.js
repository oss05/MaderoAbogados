(function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 54)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 56
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Hide navbar when modals trigger
    $('.portfolio-modal').on('show.bs.modal', function(e) {
      $('.navbar').addClass('d-none');
    })
    $('.portfolio-modal').on('hidden.bs.modal', function(e) {
      $('.navbar').removeClass('d-none');
    })
  
  })(jQuery); // End of use strict
  
  
  
  
  
  
      $('.quotes').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
  });
  
  
  /*
  To prevent the flashing of unstyled content (FOUC) I created a class ".no-fouc"
  which hides the slider.  When everything is ready to roll, I simply remove the
  .no-fouc class from the slider section using the script below.  I placed the CSS snippet in the head of the HTML
  page so that it's loaded before other things for obvious reasons.  What about folks with JS turned off?  
  Well, I don't worry about them too much anymore.  Oh my.  I feel the heat from the flames already.  :) 
  */
  
  $( document ).ready(function() {
  $('.no-fouc').removeClass('no-fouc');
  });
  