window.addEventListener('DOMContentLoaded', function() {

	'use strict';

	// ---------- Реализация скрытия и показа нужных табов на странице ---------- \\
	// -------------------------------------------------------------------------- \\
	let tab = document.querySelectorAll('.info-header-tab'),
		info = document.querySelector('.info-header'),
		tabContent = document.querySelectorAll('.info-tabcontent');
	
	function hideTabContent(a) {
		for (let i = a; i < tabContent.length; i++) {
			tabContent[i].classList.remove('show');						// --- удаляем класс
			tabContent[i].classList.add('hide');						// --- добавляем класс
		}
	}
	hideTabContent(1);													// --- функция скрывает все табы, пропуская нулевой

	function showTabContent(b) {
		if (tabContent[b].classList.contains('hide')) {					// --- если элемент имеет класс hide --- .classList.contains('hide')
			tabContent[b].classList.remove('hide');
			tabContent[b].classList.add('show');
		}
	}

	info.addEventListener('click', function(event) {
		let target = event.target;										// --- целевой элемент
		if (target && target.classList.contains('info-header-tab')) {	// --- если существует цель (блок табов) и у цели определенный класс
			for (let i = 0; i < tab.length; i++) {						// --- перебираем количество табов
				if (target == tab[i]) {									// --- если цель совпадает определенным табом, который мы перебираем
					hideTabContent(0);									// --- скрываем все табы через функцию выше
					showTabContent(i);									// --- показываем нужный нам таб с помощью ключа перебора
					break;												// --- останавливаем цикл
				}
			}
		}
	});

	// ---------- Реализация функции Timer на странице ---------- \\
	// ---------------------------------------------------------- \\
	let deadline = '2021-01-16';										// --- конечная дата

	function getTimeRemaining(endtime) {
		let t = Date.parse(endtime) - Date.parse(new Date()),			// --- от конечной даты отнимаем дату, которая сейчас и получаем в переменную миллисекунды
			seconds = Math.floor((t / 1000) % 60),						// --- округляем число с помощью метода и вычисляем конечный остаток до начала след минуты
			minutes = Math.floor((t / 1000 / 60) % 60),					// --- округляем и вычисляем остаток до следующего часа
			hours = Math.floor((t / (1000 * 60 * 60)));					// --- округляем и вычисляем количество целых часов
			// If I need to get number of days
			// hours = Math.floor((t / 1000 / 60 / 60) % 24),			// -- получаем остаток с 24 часами (как в сутках)
			// days = Math.floor((t / (1000 * 60 * 60 * 24))); 			// -- получаем количество целых суток

			return {													// --- функция возвращает объект с парами (ключ : значение)
				'total' : t,											// --- полностью все время
				'hours' : hours,										// --- часы
				'minutes' : minutes,									// --- минуты
				'seconds' : seconds										// --- секунды
			};
	}

	function setClock(id, endtime) {
		let timer = document.getElementById(id),						// --- получаем блок с таймером
			hours = timer.querySelector('.hours'),						// --- получает блок с часами
			minutes = timer.querySelector('.minutes'),					// --- получаем блок с минутами
			seconds = timer.querySelector('.seconds'),					// --- получаем блок с секундами
			timeInterval = setInterval(updateClock, 1000);				// --- запускаем интервальное повторение функции (1 раз в секунду)
		
		function updateClock() {
			let t = getTimeRemaining(endtime);							// --- записываем в переменную t возвращенный объект из функции

			function addZero(num) {										// --- функция возвращает либо число, либо добавляет к этому числу '0' в начало
				if (num <= 9) { return '0' + num; } else { return num; }
			};

			hours.textContent = addZero(t.hours);						// --- подставляем за место числа пеменную с часами
            minutes.textContent = addZero(t.minutes);					// --- подставляем за место числа пеменную с минутами
            seconds.textContent = addZero(t.seconds);					// --- подставляем за место числа пеменную с секундами

			if (t.total <= 0) {											// --- когда время кончится, таймер очистится и часы, минуты, секунды встанут по нулям (00:00:00)
				clearInterval(timeInterval);
				hours.textContent = '00';
				minutes.textContent = '00';
				seconds.textContent = '00';
			}
		}
	}
	setClock('timer', deadline);										// --- 1 аргумент (id блока с таймером в верстке), 2 аргумент (конечная дата)

	// ---------- Реализация Modal Window ---------- \\
	// --------------------------------------------- \\
	let more = document.querySelector('.more'),							// --- кнопка узнать больше
		overlay = document.querySelector('.overlay'),					// --- блок с модальным окном
		close = document.querySelector('.popup-close');					// --- крестик
	
	more.addEventListener('click', function() {
		overlay.style.display = 'block';								// --- показываем модальное окно
		this.classList.add('more-splash');								// --- добавляем кнопке класс с анимацией
		document.body.style.overflow = 'hidden';						// --- запрещаем прокрутку страницы
	});

	close.addEventListener('click', function() {
		overlay.style.display = 'none';									// --- скрываем модальное окно
		more.classList.remove('more-splash');							// --- удаляем у кнопки класс с анимацией
		document.body.style.overflow = '';								// --- снова разрешаем прокрутку страницы
	});

	// ---------- Send form ---------- \\
	// ------------------------------- \\
	let message = {
		loading: 'Загрузка...',
		success: 'Спасибо! Скоро мы с вами свяжемся!',
		failure: 'Что-то пошло не так...'
	};

	let form = document.querySelector('.main-form'),
		input = document.getElementsByTagName('input'),
		statusMessage = document.createElement('div');

		statusMessage.classList.add('status');

	form.addEventListener('submit', function(event) {
		event.preventDefault();
		form.appendChild(statusMessage);

		let request = new XMLHttpRequest();
		request.open('POST', 'server.php');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		
		let formData = new FormData(form);

		let obj = {};
		formData.forEach(function(value, key) {
			obj[key] = value;
		});
		let json = JSON.stringify(obj);

		request.send(json);

		request.addEventListener('readystatechange', function() {
			if (request.readyState < 4) {
				statusMessage.innerHTML = message.loading;
			} else if (request.readyState === 4 && request.status == 200) {
				statusMessage.innerHTML = message.success;
			} else {
				statusMessage.innerHTML = message.failure;
			}
		});

		for (let i = 0; i < input.length; i++) {
			input[i].value = '';
		}
	});

	// ---------- Slider ---------- \\
	// ---------------------------- \\
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

	// ---------- Calculator ---------- \\
	// -------------------------------- \\
	let persons = document.querySelectorAll('.counter-block-input')[0],
		restDays = document.querySelectorAll('.counter-block-input')[1],
		place = document.getElementById('select'),
		totalValue = document.getElementById('total'),
		personsSum = 0,
		daysSum = 0,
		total = 0;

	totalValue.innerHTML = 0;

	persons.addEventListener('input', function() {						// событие следит за каждым введенным символом
		personsSum = +this.value;										// получаем то, что ввел пользователь
		total = (daysSum + personsSum) * 4000;							// наша математическая формула расчета

		if (restDays.value == '' || persons.value == '') {				// если дни или количество человек не заполнены
			totalValue.innerHTML = 0;									// тогда выводим в общей сумме 0
		} else {
			totalValue.innerHTML = total;								// иначе выводим сумму
		}
	});

	restDays.addEventListener('input', function() {
		daysSum = +this.value;
		total = (daysSum + personsSum) * 4000;

		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			totalValue.innerHTML = total;
		}
	});

	place.addEventListener('input', function() {
		if (restDays.value == '' || persons.value == '') {
			totalValue.innerHTML = 0;
		} else {
			let a = total;
			totalValue.innerHTML = a * this.options[this.selectedIndex].value;	// используем свойство value из выпадающего списка
		}
	});


});