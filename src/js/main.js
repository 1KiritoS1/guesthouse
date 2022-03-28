import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

$(function() {
	//* --- Fixed Menu --- *//
	$(window).on('scroll', function() {
		let scroll = $(window).scrollTop();
		if (scroll < 700) {
		  $(".header__wrapper").removeClass("fixed");
		} else {
			$(".header__wrapper").addClass("fixed");
		}
	});

	//* --- Slider --- *//
	$('.guests__slider').slick({
		dots: false,
		infinite: true,
		slidesToShow: 2,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
					variableWidth: false,
				}
			}	
		]

	});

	$('.slick-arrow').on('click', function() {
		let next = $('.slick-current').next().next();
		var prev = $('.slick-current').prev();

		$('.slick-active').removeClass('another');
        next.addClass('another');
	});

	//* --- Burger --- *//
	const burger = document.querySelector('.header__burger');
	const burgerBtn = document.querySelector('.btn');
	const burgerMenu = document.querySelector('.nav');
	const burgerList = [burger, burgerBtn, burgerMenu];
	burger.addEventListener('click', () => {
		burgerList.forEach((e) => {
			e.classList.toggle('active');
		})
		
		// Anchor crossing
		for (let i = 0; i < burgerList.length; i++) {
			if (burgerList[i].classList.contains('active')) {
				document.body.style.overflow = 'hidden';
				document.documentElement.style.scrollBehavior = 'auto';
			} else {
				document.body.style.overflow = 'auto';	
				document.documentElement.style.scrollBehavior = 'smooth';
			}
		}
	});

	// Anchor crossing
	const navLinks = document.querySelectorAll('.nav__link');
	navLinks.forEach((navLink) => {
		navLink.addEventListener('click', (e) => {
			document.body.style.overflow = 'auto';	
			setTimeout(() => {
				document.documentElement.style.scrollBehavior = 'smooth';	
			}, 1000);
		});
	});
});