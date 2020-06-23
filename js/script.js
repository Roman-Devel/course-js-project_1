window.addEventListener('DOMContentLoaded', function() {

// let timerId = setTimeout(sayHello, 3000);			// --- функция срабатывает 1 раз с задержкой (функция, задержка в миллисек)
// clearTimeout(timerId);								// --- очистка таймера

// let timerId = setInterval(sayHello, 3000);			// --- интервальный повтор функции (функция, задержка в миллисек)
// clearTimeout(timerId);								// --- очистка таймера

// function sayHello() {
// 	console.log('Hello World!');
// }

// let timerId = setTimeout(function log() {			// --- рекурсивный вызов setTimeout - функция вызывает сама себя и работает как setInterval
// 	console.log('Hello!');								// нужен в тех случаях, когда внутренняя функция отрабатывает дольше, чем заданная задержка
// 	setTimeout(log, 2000);
// });

let btn = document.querySelector('.btn'),
	elem = document.querySelector('.box');

function myAnimation() {
	let pos = 0;
	let id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval(id);
		} else {
			pos++;
			elem.style.top = pos + 'px';
			elem.style.left = pos + 'px';
		}
	}
}

btn.addEventListener('click', myAnimation);

let btnBlock = document.querySelector('.btn-block');

btnBlock.addEventListener('click', function(event) {
	if (event.target && event.target.matches('button.first')) {
		console.log("Hello!");
	}
});

});