import { Fancybox, Carousel } from "@fancyapps/ui";

/* Карусель "Нам доверяют" */
new Carousel(document.querySelector(".block-clients__carousel"), {
    'slidesPerPage' : 'auto',
    'center' : true,
    Navigation: false,
    Dots: false,
});

/* Активные пункты "Как работает сервис" при прокрутке */
window.addEventListener('scroll', () => {

	let scrollDistance = window.scrollY;

	if (window.innerWidth > 768) {
		document.querySelectorAll('.block-work-item').forEach((el, i) => {
			if (el.offsetTop - 150 <= scrollDistance) {
				document.querySelectorAll('.work-step__item').forEach((el) => {
					if (el.classList.contains('work-step__item_active')) {
						el.classList.remove('work-step__item_active');
					}
				});

				document.querySelectorAll('.work-step__item')[i].classList.add('work-step__item_active');
			}
		});
	}
});

/* Раскрытие / Скрытие меню */
document.querySelector('.menu-top-btn').addEventListener('click', function(){

	document.querySelector('.menu-top').classList.add('menu-top_open');
});

document.querySelector('.menu-top__close').addEventListener('click', function(){

	document.querySelector('.menu-top').classList.remove('menu-top_open');
});

document.querySelectorAll('.menu-top__link').forEach(el => {

	el.addEventListener('click', function(){

		document.querySelector('.menu-top').classList.remove('menu-top_open');
	});
});