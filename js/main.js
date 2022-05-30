( function($) {
  'use strict';

	// IMG POPUP
	if ($(".img-popup").length) {
		var groups = {};
		$(".img-popup").each(function () {
		  var id = parseInt($(this).attr("data-group"), 10);
	
		  if (!groups[id]) {
			groups[id] = [];
		  }
	
		  groups[id].push(this);
		});
	
		$.each(groups, function () {
		  $(this).magnificPopup({
			type: "image",
			closeOnContentClick: true,
			closeBtnInside: false,
			gallery: {
			  enabled: true,
			},
		  });
		});
	  }

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

	// Counter
	if ($(".count-box").length) {
		$(".count-box").appear(
		function () {
			var $t = $(this),
			n = $t.find(".count-text").attr("data-stop"),
			r = parseInt($t.find(".count-text").attr("data-speed"), 10);

			if (!$t.hasClass("counted")) {
			$t.addClass("counted");
			$({
				countNum: $t.find(".count-text").text(),
			}).animate({
				countNum: n,
			}, {
				duration: r,
				easing: "linear",
				step: function () {
				$t.find(".count-text").text(
					Math.floor(this.countNum)
				);
				},
				complete: function () {
				$t.find(".count-text").text(this.countNum);
				},
			});
			}
		}, {
			accY: 0
		}
		);
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

    /*-------------------------------------------------------------------------------
	  Window load
	-------------------------------------------------------------------------------*/



	$(window).load(function(){

		$('.loader').fadeOut(300);

	});

	var wow = new WOW({
	    offset: 150,          
	    mobile: false
	  }
	);
	
	wow.init();

	var navbarDesctop=$('.site-navbar');
	var navbarMobile=$('.navbar-mobile');



	/*-------------------------------------------------------------------------------
	  Affix
	-------------------------------------------------------------------------------*/



	navbarDesctop.affix({
	  offset: {
	    top: 500
	  }
	});


	navbarDesctop.on('affix.bs.affix', function() {
		if (!navbarDesctop.hasClass('affix')){
			navbarDesctop.addClass('animated slideInDown');
		}
	});

	navbarDesctop.on('affix-top.bs.affix', function() {
	  	navbarDesctop.removeClass('animated slideInDown');
	  	$('.navbar-collapse').collapse('hide');
	});






	/*-------------------------------------------------------------------------------
	  Smooth Scroll to Up
	-------------------------------------------------------------------------------*/



    $('.js-target-scroll').on('click', function() {
        var target = $(this.hash);
        if (target.length) {
            $('html,body').animate({
                scrollTop: (target.offset().top -100)
            }, 1000);
            return false;
        }
    });

})(jQuery);
