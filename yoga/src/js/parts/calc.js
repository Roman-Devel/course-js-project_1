function calc() {
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
}

module.exports = calc;