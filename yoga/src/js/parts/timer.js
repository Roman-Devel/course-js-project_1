function timer() {
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
}

module.exports = timer;