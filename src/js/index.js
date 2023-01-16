import { Fancybox, Carousel } from "@fancyapps/ui";

window.addEventListener('scroll', () => {

	/* Фиксируем шапку */
	if (scrollY > 0) document.querySelector('.header-main').classList.add('header-main_fixed');
	else document.querySelector('.header-main').classList.remove('header-main_fixed');

	/* Активные пункты "Как работает сервис" при прокрутке */
	let scrollDistance = window.scrollY;

	if (window.innerWidth > 767)
	{
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

/* О Команде на мобилке */
if (window.innerWidth < 768)
{
	new Carousel(document.querySelector(".block-team-items"), {
		'slidesPerPage' : 'auto',
		'center' : false,
		'infinite': false,
		Navigation: false,
		Dots: false,
		classNames: {
			viewport: "block-team-items__viewport",
		},
	});
}

/* Карусель "Нам доверяют" */
new Carousel(document.querySelector(".block-clients__carousel"), {
    'slidesPerPage' : 'auto',
    'center' : true,
    Navigation: false,
    Dots: false,
});

/* Инпуты при вооде */
document.querySelectorAll('.form-one__input').forEach(function(e){

    e.addEventListener('input', function(){

        if (this.value.length > 0) this.classList.add('form-one__input_set');
        else this.classList.remove('form-one__input_set');
    })
});