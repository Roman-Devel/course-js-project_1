$(document).ready(function() {

	$('.list-item:first').hover(function() {					// получаем первый элемент с классом и применяем наведение
		$(this).toggleClass('active');
	});

	$('.list-item:eq(2)').on('click', function() {				// получаем второй элемент и эмитируем addEventListener с событием click
		$('.image:even').fadeToggle('slow');
	});

	$('.list-item:eq(4)').on('click', function() {
		$('.image:odd').animate(
			{
				opacity: 'toggle',
				height: 'toggle'
			}, 3000
		);
	});

});