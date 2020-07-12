let json = '{"id":2}';

// Перехват ошибок try...catch
try {													// сначала выполняется блок try, если нет ошибок, тогда блок catch игнорируется
	let user = JSON.parse(json);
	console.log(user);

	if (!user.name) {
		throw new Error("В этих данных нет имени!");	// конструкция создания собственной ошибки
	}
} catch(error) {
	console.log(error.name);							// имя ошибки
	console.log(error.message);							// сообщение ошибки
	console.log(error.stack);							// набор вызовов, которые привели к этой ошибке

	console.log(`Мы получили ошибку: ${error.name}`);
} finally {												// этот блок выполняется всегда (но он не обязателен!)
	console.log('Я выполняюсь всегда!');
}

console.log('А я буду работать дальше');