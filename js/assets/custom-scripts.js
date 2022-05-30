$(document).ready(function () {
  'use strict';

  //===== Menu Active =====//
  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $("nav ul li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
    $(this).parent('li').addClass("active").parent().parent().addClass("active").parent().parent().addClass("active");
  });

  //===== Menu Active =====//
  var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/") + 1);
  $(".menu-wrap ul li a").each(function () {
    if ($(this).attr("href") == pgurl || $(this).attr("href") == '')
    $(this).parent('li').addClass("active").parent().parent().addClass("active-parent").parent().parent().addClass("active-parent");
  });

  //===== Scroll Top =====//
  $(".clc-tp-btn").on('click',function () {
    $("html, body").animate({scrollTop: 0}, 1000);
  });

  //===== Info Box =====//
  $(".photo-info-box > span").on('click',function () {
    $(this).parent().toggleClass('active');
  });

  //===== Event Script =====//
  $('.timeline-list > li').each(function () {
    $(".timeline-box-wrap").on('mouseenter', function () {
      $(this).parent().parent().parent().find(".timeline-box-wrap").removeClass("active");
      $(this).addClass("active");
    });
  });

  //===== Alert Box =====//
  $(".alert > button.close").on('click',function () {
    $(this).parent().parent().fadeOut('normal');
  });

  //===== FAQ Question =====//
  if ($(".faq-que-box-wrap").length > 0) {
    $('.faq-que-box-wrap .faq-que-box-desc').slideUp('normal');
    $('.faq-btn').on("click", function() {
      $(this).parent().find('div.faq-que-box-desc').slideToggle('normal');
      $(this).parent().parent().toggleClass('active');
      $(this).parent().parent().find('div.faq-que-box > i').slideToggle('normal');
    });
  }

  //===== Login =====//
  $('.user-btn').on('click', function () {
    $('.login-popup-wrap').addClass('active');
    return false;
  });
  $('html, body').on('click', function () {
    $('.login-popup-wrap').removeClass('active');
  });
  $(".login-popup-inner").on('click',function(event){
    event.stopPropagation();
  });

  $(".shop-info p").slideUp("normal");

  //===== List View Post =====//
  $(".shop-list-btn").on('click', function () {
    $(".shop-wrap").addClass("list-view");
    $(this).addClass("active");
    $(".shop-grid-btn").removeClass("active");
    $(".shop-info p").slideDown("normal");
    return false;
  });

  //===== Grid View Post =====//
  $(".shop-grid-btn").on('click', function () {
    $(".shop-wrap").removeClass("list-view");
    $(this).addClass("active");
    $(".shop-list-btn").removeClass("active");
    $(".shop-info p").slideUp("normal");
    return false;
  });

  //===== Range Slider =====//
  if ($('#area-filter').length > 0) {
    var nonLinearSlider = document.getElementById('area-filter');
    noUiSlider.create(nonLinearSlider, {
      // connect: true,
      decimals: 0,
      behaviour: 'tap',
      start: 60,
      tooltips: true,
      range: {
        'min': [0],
        'max': [2000]
      }
    });
    var nodes = [
      document.getElementById('lower-value'),
      document.getElementById('upper-value')
    ];
    // nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    //   nodes[handle].innerHTML = values[handle] + '';
    // });
  }

  //===== Price Filter Slider =====//
  if ($('#price-filter').length > 0) {
    var nonLinearSlider = document.getElementById('price-filter');
    noUiSlider.create(nonLinearSlider, {
      connect: true,
      decimals: 0,
      tooltips: true,
      behaviour: 'tap',
      start: [90, 350],
      range: {
        'min': [0],
        'max': [500]
      }
    });
    // var nodes = [
    //   document.getElementById('lower-value'),
    //   document.getElementById('upper-value')
    // ];
    // nonLinearSlider.noUiSlider.on('update', function (values, handle, unencoded, isTap, positions) {
    //   nodes[handle].innerHTML = values[handle] + '$';
    // });
  }

  //===== Width =====//
  var width = window.innerWidth;

  //===== Header Search Open =====//
  $('.search-btn').on('click', function () {
    $('.header-search').addClass('active');
    return false;
  });

  //===== Header Search Close =====//
  $('.search-close-btn').on('click', function () {
    $('.header-search').removeClass('active');
    return false;
  });

  //===== Wow Animation Setting =====//
  if ($(".wow").length > 0) {
    var wow = new WOW({
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
    }); 

    wow.init();
  }

  //===== Side Menu =====//
  $('.res-menu-btn').on('click', function () {
    $('.responsive-menu').addClass('slidein');
    return false;
  });
  $('.menu-close').on('click', function () {
    $('.responsive-menu').removeClass('slidein');
  });
  $(".menu-wrap").on('click',function(event){
    event.stopPropagation();
  });
  $('.responsive-menu li.menu-item-has-children > a').on('click', function () {
    $(this).parent().siblings('li').children('ul').slideUp();
    $(this).parent().siblings('li').removeClass('active');
    $(this).parent().children('ul').slideToggle();
    $(this).parent().toggleClass('active');
    return false;
  });

  //===== Scrollbar =====//
  if ($('.responsive-menu').length > 0) {
    var ps = new PerfectScrollbar('.responsive-menu');
  }

  //===== Touchspin =====//
  if ($('.qty').length > 0) {
    $('.qty').TouchSpin();
  } 

  //===== Progress Bar =====//
  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart1").waypoint(function(){
      $("#pie-chart1").circleProgress({
      value: 0.75,
      fill: {color: '#ff3890'},
      thickness: 6,
      emptyFill: '#f0f4fd',
      size: 177
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(75 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart2").waypoint(function(){
      $("#pie-chart2").circleProgress({
      value: 0.33,
      fill: {color: '#fdbd59'},
      thickness: 5,
      emptyFill: '#f0f4fd',
      size: 147
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(33 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart3").waypoint(function(){
      $("#pie-chart3").circleProgress({
      value: 0.87,
      fill: {color: '#509eff'},
      thickness: 6,
      emptyFill: '#f0f4fd',
      size: 177
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(87 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart11").waypoint(function(){
      $("#pie-chart11").circleProgress({
      value: 0.87,
      fill: {color: '#ff3890'},
      thickness: 6,
      emptyFill: '#fff',
      size: 177
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(87 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart22").waypoint(function(){
      $("#pie-chart22").circleProgress({
      value: 0.35,
      fill: {color: '#fdbd59'},
      thickness: 5,
      emptyFill: '#fff',
      size: 147
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(35 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart33").waypoint(function(){
      $("#pie-chart33").circleProgress({
      value: 0.87,
      fill: {color: '#509eff'},
      thickness: 6,
      emptyFill: '#fff',
      size: 177
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(87 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  if ($(".pie-chart-box").length > 0) {
    $("#pie-chart44").waypoint(function(){
      $("#pie-chart44").circleProgress({
      value: 0.35,
      fill: {color: '#14226b'},
      thickness: 5,
      emptyFill: '#fff',
      size: 147
      }).on('circle-animation-progress', function(event, progress) {
        $(this).find('span').html(Math.round(35 * progress) + '<i>%</i>');
      });
    }, { offset: '80%'})
  }

  //===== Sticky Sidebar =====//
  if(width > 851) {
    if ($('.page-wrap > div.row > div').length > 0) {
      $('.page-wrap > div.row > div').theiaStickySidebar({
        additionalMarginTop: 0,
        additionalMarginBottom: 60
      });
    }
  }

  //===== Accordions =====//
  if ($("#toggle").length > 0) {
    $(function() {
      $('#toggle .toggle-content').hide();
      $('#toggle h4:first').next().slideDown(500).parent().addClass("active");
      $('#toggle h4').on("click",function() {
        if($(this).next().is(':hidden')) {
          $('#toggle h4').next().slideUp(500).parent().removeClass("active");
          $(this).next().slideDown(500).parent().toggleClass("active");
        }
      });
    });
  }

  //===== Toggles =====//
  if ($("#toggle2").length > 0) {
    $(function() {
      $('#toggle2 .toggle-content2').hide();
      $('#toggle2 h4:first').next().slideDown(500).parent().addClass("activate");
      $('#toggle2 h4, .toggle-item2 > span').on("click",function() {
        $(this).next().slideToggle('slow').parent().toggleClass("activate");
      });
    });
  }

  //===== Counter Up =====//
  if ($.isFunction($.fn.counterUp)) {
    $('.counter').counterUp({
      delay: 10,
      time: 2000
    });
  }

  //===== LightBox =====//
  if ($.isFunction($.fn.fancybox)) {
    $('[data-fancybox],[data-fancybox="gallery"]').fancybox({});
  }

  //===== Contact Form Validation =====//
  if($('#email-form').length){
    $('form#email-form').submit(function (e) {
      e.preventDefault();
      var fname = $('#email-form .fname').val();
      var email = $('#email-form .email').val();
      var phone = $('#email-form .phone').val();
      if(fname == '' || email == '') {
        $(this).children('.response').html('<div class="failed alert alert-warning text-center rounded-pill mt-2">Please fill the required fields.</div>');
        return false;
      }
      $.ajax({
        url: "sendemail.php",
        method: "POST",
        data: $(this).serialize(),
        beforeSend: () => {
          $(this).children('.response').html('<div class="text-info"><img src="assets/images/preloader.gif"> Loading...</div>');
        },
        success: (data) => {
          $(this).children('.response').fadeIn().html(data);
          setTimeout(function () {
            $(this).children('.response').fadeOut("slow");
          }, 5000);
          $(this).trigger("reset");
        },
        error: (res) => {
          console.log(res);
          $(this).children('.response').fadeIn().html(data);
        }
      });
    });
  }

  /*===== Newsletter Form Validation =====*/
  if($('#subscribe-form').length){
    $('form#subscribe-form').submit(function (e) {
      e.preventDefault();
      var email = $(this).children('.email').val();
      if (email.length == 0) {
        $(this).children('.response').html('<div class="failed alert alert-warning text-center rounded-pill mt-2">Please fill the required fields.</div>');
        return false;
      }
      $.ajax({
        url: "sendnewsletter.php",
        method: "POST",
        data: $(this).serialize(),
        beforeSend: () => {
          $(this).children('.response').html('<div class="text-info"><img src="assets/images/preloader.gif"> Loading...</div>');
        },
        success: (data) => {
          $(this).children('.response').fadeIn().html(data);
          setTimeout(function () {
            $(this).children('.response').fadeOut("slow");
          }, 5000);
          $(this).trigger("reset");
        },
        error: (res) => {
          console.log(res);
          $(this).children('.response').fadeIn().html(data);
        }
      });
    });
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.owlCarousel)) {
    //=== Service Tabs Carousel ===//
    var owl = $('.serv-tab-carousel');
    owl.owlCarousel({
      animateOut: 'fadeOut',
      animateIn: 'fadeIn',
      nav: false,
      dots: false,
      items: 1,
      margin: 30,
      stagePadding: 0,
      smartSpeed: 450
    });

    //=== Custom Button ===//
    $('.customNextBtn').on('click',function() {
      owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').on('click',function() {
      owl.trigger('prev.owl.carousel');
    });
  }

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {

    //=== Featured Area Carousel ===//
    var $pagi_info = $('.pagiInfo');
    var $slick_featcaro = $('.feat-caro');
    $slick_featcaro.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $pagi_info.text(i + '/' + slick.slideCount);
    });
    $slick_featcaro.slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 8000,
      speed: 6000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 1921,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1445,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1370,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 1180,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      ]
    });

    //=== Featured Image Carousel 1 ===//
    $('.feat-img-caro').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 2000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
    });

    //=== Featured Image Carousel 2 ===//
    $('.feat-img-caro2').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 7000,
      speed: 2000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
    });

    //=== Featured Image Carousel 3 ===//
    $('.feat-img-caro3').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 9000,
      speed: 2000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
    });

    //=== Featured Image Carousel 4 ===//
    $('.feat-img-caro4').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 10000,
      speed: 2000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
    });

    //=== Featured Area Carousel 3 ===//
    $('.feat-caro3').slick({
      arrows: false,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: true,
      autoplaySpeed: 7000,
      cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
      speed: 5000,
      draggable: true,
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false
    });

    //====== Services Carousel =====//
    $('.serv-caro').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 10000,
      speed: 2000,
      draggable: true,
      arrows: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          adaptiveHeight: true
        }
      }
      ]
    });

    //=== Team Carousel ===//
    var $pagi_info2 = $('.pagiInfo');
    var $slick_team = $('.team-caro');
    $slick_team.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $pagi_info2.text(i + '/' + slick.slideCount);
    });
    $slick_team.slick({
      arrows: true,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      autoplay: false,
      autoplaySpeed: 6000,
      speed: 1500,
      draggable: true,
      dots: false,
      vertical: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      ]
    });

    //====== Why Choose Us Carousel =====//
    var $pagi_info3 = $('.pagiInfo');
    var $slick_why_choose = $('.why-choose-caro');
    $slick_why_choose.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $pagi_info3.text(i + '/' + slick.slideCount);
    });
    $slick_why_choose.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>"
    });

    //====== Reviews Carousel =====//
    $('.reviws-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 1290,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 490,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      ]
    });

    //====== Exc Projects Carousel =====//
    var $pagi_info4 = $('.pagiInfo');
    var $slick_exc_proj_img = $('.exc-proj-img-caro');
    $slick_exc_proj_img.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
      var i = (currentSlide ? currentSlide : 0) + 1;
      $pagi_info4.text(i + '/' + slick.slideCount);
    });
    $slick_exc_proj_img.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>"
    });

    //====== Packages Carousel =====//
    $('.packages-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><svg viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.04907e-06 8L7.5 1.0718L7.5 14.9282L1.04907e-06 8Z' fill='#ffffff'/><path d='M7 8L28 8' stroke='#ffffff'/></svg></button>",
      nextArrow:"<button type='button' class='slick-next'><svg viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M28 8L20.5 14.9282L20.5 1.0718L28 8Z' fill='#ffffff'/><path d='M21 8L0 8' stroke='#ffffff'/></svg></button>",
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      ]
    });

    //====== Portfolio Detail Image Carousel =====//
    $('.port-dtl-img-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><svg viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.04907e-06 8L7.5 1.0718L7.5 14.9282L1.04907e-06 8Z' fill='#ffffff'/><path d='M7 8L28 8' stroke='#ffffff'/></svg></button>",
      nextArrow:"<button type='button' class='slick-next'><svg viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M28 8L20.5 14.9282L20.5 1.0718L28 8Z' fill='#ffffff'/><path d='M21 8L0 8' stroke='#ffffff'/></svg></button>"
    });

    //====== Related Portfolio Carousel =====//
    $('.rlt-port-caro').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 10000,
      speed: 2000,
      draggable: true,
      arrows: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      ]
    });

    //====== Blog Image Carousel =====//
    $('.blog-img-caro').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: true,
      fade: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><svg viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M1.04907e-06 8L7.5 1.0718L7.5 14.9282L1.04907e-06 8Z' fill='#ffffff'/><path d='M7 8L28 8' stroke='#ffffff'/></svg></button>",
      nextArrow:"<button type='button' class='slick-next'><svg viewBox='0 0 28 16' fill='none' xmlns='http://www.w3.org/2000/svg'><path d='M28 8L20.5 14.9282L20.5 1.0718L28 8Z' fill='#ffffff'/><path d='M21 8L0 8' stroke='#ffffff'/></svg></button>"
    });

    //=== Shop Detail Image Carousel ===//
    $('.shop-detail-big-imgs').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      arrows: false,
      // slide: 'li',
      fade: true,
      asNavFor: '.shop-detail-imgs-nav',
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      }
      ]
    });
    
    $('.shop-detail-imgs-nav').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      asNavFor: '.shop-detail-big-imgs',
      dots: false,
      arrows: false,
      // slide: 'li',
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      responsive: [
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
      ]
    });

    //===== Product Carousel =====//
    $('.prod-caro').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: false,
      autoplay: false,
      autoplaySpeed: 10000,
      speed: 2000,
      draggable: true,
      arrows: true,
      centerPadding: '0',
      focusOnSelect: true,
      vertical: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      ]
    });
  }

}); //===== Document Ready Ends =====//

jQuery(window).on('load',function(){
  'use strict';

  //===== Slick Carousel =====//
  if ($.isFunction($.fn.slick)) {
    //=== Faq Questions Carousel ===//
    $('.faq-que-caro').slick({
      arrows: true,
      initialSlide: 0,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      fade: false,
      autoplay: false,
      autoplaySpeed: 10000,
      speed: 1000,
      draggable: true,
      centerMode: false,
      centerPadding: '0',
      dots: false,
      pauseOnDotsHover: true,
      pauseOnFocus: false,
      pauseOnHover: false,
      prevArrow:"<button type='button' class='slick-prev'><i class='icon-angle-arrow-left'></i></button>",
      nextArrow:"<button type='button' class='slick-next'><i class='icon-angle-arrow-right'></i></button>",
      responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 851,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        }
      }
      ]
    });
  }

  //===== Width =====//
  var width = window.innerWidth;

  if(width > 992) {
    //===== Header =====//
    var menu_height = $('header').innerHeight();
    $(window).on('scroll',function () {
      var scroll = $(window).scrollTop();
      if (scroll >= menu_height) {
        $('header.stick').addClass('sticky');
      } else {
        $('.stick').removeClass('sticky');
      }
    });
    if ($('header.style1').hasClass('stick')) {
      $('main').css({'padding-top': menu_height});
    }
  }

  //===== Isotope =====//
  if (jQuery('.fltr-itm').length > 0) {
    if (jQuery().isotope) {
      var jQuerycontainer = jQuery('.masonry'); // cache container
      jQuerycontainer.isotope({
        itemSelector: '.fltr-itm',
        columnWidth: .1
      });
      jQuery('.portfolio-links a').on('click',function () {
        var selector = jQuery(this).attr('data-filter');
        jQuery('.portfolio-links li').removeClass('active');
        jQuery(this).parent().addClass('active');
        jQuerycontainer.isotope({ filter: selector });
        return false;
      });
      jQuerycontainer.isotope('layout'); // layout/layout
    }

    jQuery(window).resize(function () {
      if (jQuery().isotope) {
        jQuery('.masonry').isotope('layout'); // layout/relayout on window resize
      }
    });
  }
});//===== Window onLoad Ends =====//