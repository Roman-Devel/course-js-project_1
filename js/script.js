// let options = {
// 	width: 1366,
// 	height: 768,
// 	background: 'red',
// 	font: {
// 		size: '16px',
// 		color: '#fff'
// 	}
// };

// console.log(JSON.parse(JSON.stringify(options)));					// --- преобразование в JSON формат передачи данных (stringify) и обратно (parse)

let inputRub = document.getElementById('rub'),
	inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {

function catchData() {

	return new Promise(function(resolve, reject) {
		let request = new XMLHttpRequest();
		request.open('GET', 'js/current.json');
		request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
		request.send();

		request.onload = function() {
			if(request.readyState === 4) {
				if(request.status == 200) {
					resolve(this.response)
				}
				else {
					reject();
				}
			}
		}
	});
};

	// request.open(method, url, async, login, pass);

	//status --- состояние сервера, цифровой ответ - 404
	//statusText --- текстовый ответ от сервера
	//responseText / response --- текст ответа сервера
	//readyState  --- текущее состояние запроса

catchData()
		.then(response => {
			console.log(response);
			let data = JSON.parse(response);
			inputUsd.value = inputRub.value / data.usd;
		})
		.then(() => console.log(5000))
		.catch(() => inputUsd.value = "Что-то пошло не так!")

});