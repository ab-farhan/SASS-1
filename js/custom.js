$(function () {


	// owl-carosoul

	$('.client_slider').owlCarousel({
		loop: true,
		margin: 30,
		autoplay: true,
		autoplayTimeout: 2000,
		smartSpeed: 1000,
		responsive: {
			0: {
				items: 2,
				dots: false,
			},
			576: {
				items: 3,
				dots: false,
			},
			800: {
				items: 4,
				dots: false,
			},
			1000: {
				items: 4
			}
		}
	});




	//back to top js

	if ($('#back-to-top').length) {
		var scrollTrigger = 300,
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}









	//	slickslider

	$('.blog_slider').slick({
		dots: false,
		infinite: true,
		speed: 500,
		arrows: true,
		autoplay: true,
		slidesToShow: 3,
		prevArrow: '.s-prev-arrow',
		nextArrow: '.s-next-arrow',
		slidesToScroll: 1,
		autoplaySpeed: 2000,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
					infinite: true,
					dots: true
				}
    },
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
    },
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
    }

  ]
	});

	// menu fix on scroll
	//====================================================================//

	$(window).on('scroll', function () {
		if ($(window).scrollTop() > 150) {
			$('.menu_part').addClass('animated slideInDown fix');
			$('.menu_part').removeClass('py-40');

		} else {
			$('.menu_part').removeClass('animated slideInDown fix');
		}
	})

	//	bootstrap banner 

	$('.carousel').carousel({
		interval: 4000,
		pause: false,
	});



	//	//	rotate slider
	//	$('.rotate_slider').carousel({
	//		num: 3,
	//		maxWidth: 700,
	//		maxHeight: 480,
	//		distance: 204,
	//		scale: 0.8,
	//		animationTime: 2000,
	//		showTime: 2000,
	//		autoPlay: true,
	//
	//
	//	});


	//isotop 

	$('.isotop_grid').isotope({
		itemSelector: '.isotop_item',
		layoutMode: 'fitRows',
	});

	$('.control_isotop ul li').click(function () {
		$('.control_isotop ul li').removeClass('active');
		$(this).addClass('active');


		var selector = $(this).attr('data-filter');
		$('.isotop_grid').isotope({
			filter: selector
		});

		return false;
	});


	//counter up js

	$('.counter').counterUp({
		time: 2500,
	});








	//veno box js
	$('.venobox').venobox({

	});

	//	// paralx js
	//	$('.parallax-window').parallax({
	//		imageSrc: '../image/company.jpg'
	//	});
	//







});
