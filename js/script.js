// touchstart 			--- касание к элементу (таб на элементе)
// touchmove 			--- перетаскивание элемента
// touchend 			--- когда убираем палец с элемента
// touchenter 			--- когда водим пальцем по экрану и заходим на определенный элемент
// touchleave			--- когда палец покидает пределы элемента
// touchcancel			--- когда палец не регистрируется внутри браузера (выходим за его пределы)

window.addEventListener('DOMContentLoaded', function() {
	let box = document.querySelector('.box');

	// box.addEventListener('touchstart', function(event) {
	// 	event.preventDefault();
	// 	console.log('Red Box: touchstart');
	// 	console.log(event.target);										// --- вывод элемента, на котором было касание
	// 	console.log(event.touches[0].target);							// --- вывод элемента, на котором было касание от первого пальца (мобильное событие)
	// 	console.log(event.touches);										// --- регистрация всех пальцев, которые были использованы в событии
	// 	console.log(event.changedTouches);								// --- аналогичное предыдущему свойству
	// 	console.log(event.targetTouches);								// --- регистрация только тех пальцев, которые взаимодействуют с элементом
	// });

	box.addEventListener('touchmove', function(event) {
		event.preventDefault();
		console.log('Red Box: ' + event.touches[0].pageX);				// --- получаем координаты оси Х от первого пальца
	});

	// box.addEventListener('touchend', function(event) {
	// 	event.preventDefault();
	// 	console.log('Red Box: touchend');
	// });
});