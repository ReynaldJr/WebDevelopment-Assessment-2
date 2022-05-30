(function ($) {
  "use strict";


  // FOOTER
  if ($('.footer-widget__newsletter-bottom').length) {
    $('.footer-widget__newsletter-bottom').parent().find('.mc-form button[type=submit]').attr('disabled', 'disabled');
    $('.footer-widget__newsletter-bottom').on('click', function () {
      $(this).find('i').toggleClass('fa-circle fa-check');

      if ($('.footer-widget__newsletter-bottom').find('i').hasClass('fa-check')) {
        $('.footer-widget__newsletter-bottom').parent().find('.mc-form button[type=submit]').removeAttr('disabled');
      } else {
        $('.footer-widget__newsletter-bottom').parent().find('.mc-form button[type=submit]').attr('disabled', 'disabled');
      }
    });
  }


  // ODOMETER
  if ($(".odometer").length) {
    var odo = $(".odometer");
    odo.each(function () {
      $(this).appear(function () {
        var countNumber = $(this).attr("data-count");
        $(this).html(countNumber);
      });
    });
  }

  // Skill Bar
  if ($('.count-bar').length) {
    $('.count-bar').appear(function () {
      var el = $(this);
      var percent = el.data('percent');
      $(el).css('width', percent).addClass('counted');
    }, {
      accY: -50
    });

  }

  //Progress Bar / Levels
  if ($(".progress-levels .progress-box .bar-fill").length) {
    $(".progress-box .bar-fill").each(
      function () {
        $(".progress-box .bar-fill").appear(function () {
          var progressWidth = $(this).attr("data-percent");
          $(this).css("width", progressWidth + "%");
        });
      }, {
        accY: 0
      }
    );
  }

  // Testimonial Carousel
  if ($(".web-testimonial__carousel").length) {
    $(".web-testimonial__carousel").owlCarousel({
      loop: true,
      margin: 30,
      nav: false,
      smartSpeed: 500,
      autoHeight: false,
      autoplay: true,
      dots: true,
      autoplayTimeout: 10000,
      navText: [
        '<span class="icon-left-arrow"></span>',
        '<span class="icon-right-arrow"></span>',
      ],
      responsive: {
        0: {
          items: 1,
        },
        600: {
          items: 1,
        },
        800: {
          items: 1,
        },
        1024: {
          items: 1,
        },
        1200: {
          items: 2,
        },
      },
    });
  }

})(jQuery);