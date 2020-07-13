function slider() {
    let slideIndex = 1,
		slides = document.querySelectorAll('.slider-item'),
		prev = document.querySelector('.prev'),
		next = document.querySelector('.next'),
		dotsWrap = document.querySelector('.slider-dots'),
		dots = document.querySelectorAll('.dot');

	showSlides(slideIndex);

	function showSlides(n) {

		if (n > slides.length) {										// после последнего слайда возвращаемся к самому первому
			slideIndex = 1;
		}
		if (n < 1) {													// если перелистнуть с первого слайда назад, мы вернемся к последнему слайду
			slideIndex = slides.length;
		}

		slides.forEach((item) => item.style.display = 'none');			// первый способ перебора псевдо-массива (скрываем все слайды)
		// for (let i = 0; i < slides.length; i++) {					// второй способ перебора псевдо-массива (скрываем все слайды)
		// 	slides[i].style.display = 'none';
		// }
		dots.forEach((item) => item.classList.remove('dot-active'));	// методом перебора удаляем активный класс из точек

		slides[slideIndex - 1].style.display = 'block';					// показываем самый первый слайд
		dots[slideIndex - 1].classList.add('dot-active');				// добавляем класс активности первой точке

	}

	function plusSlides(n) {											// увеличивает значение индекса слайда
		showSlides(slideIndex += n);
	}
	function currentSlide(n) {											// значение основного значения слайда (корректного в данный момент)
		showSlides(slideIndex = n);
	}

	prev.addEventListener('click', function() {							// слайд назад (по клику)
		plusSlides(-1);
	});

	next.addEventListener('click', function() {							// слайд вперед (по клику)
		plusSlides(1);
	});

	dotsWrap.addEventListener('click', function(event) {				// используем делегирование событий (нажатие на точки и переход по слайдам)
		for (let i = 0; i < dots.length + 1; i++) {
			if (event.target.classList.contains('dot') && event.target == dots[i-1]) {
				currentSlide(i);
			}
		}
	});
}

module.exports = slider;