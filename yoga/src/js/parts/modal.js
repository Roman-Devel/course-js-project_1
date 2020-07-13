function modal() {
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
}

module.exports = modal;