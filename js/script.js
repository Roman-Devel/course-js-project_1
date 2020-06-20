let btn = document.querySelectorAll('button'),
	wrap = document.querySelector('.wrapper'),
	link = document.querySelector('a');

// btn[0].onclick = function() {							// --- событие клика на элемент
// 	alert('Вы нажали первую кнопку');
// };

// btn[0].addEventListener('click', function(event) { 			// --- событие клика через callBack функцию
// 	console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

// wrap.addEventListener('click', function(event) {
// 	console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
// });

link.addEventListener('click', function(event) {
	event.preventDefault();
	console.log('Произошло событие: ' + event.type + ' на элементе ' + event.target);
});

btn.forEach(function(item) {
	item.addEventListener('mouseleave', function() { 		// --- когда мышь выходит за пределы элемента
		console.log('Вышли!');
	});
});

// btn[0].addEventListener('mouseenter', function() {		// --- событие наведения мышки на элемент
// 	alert('Вы навели на первую кнопку');
// });