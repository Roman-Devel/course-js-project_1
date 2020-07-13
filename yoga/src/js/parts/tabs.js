function tabs() {
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
}

module.exports = tabs;