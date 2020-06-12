let options = { 					// --- Любой объект имеет пару - ключ = значение
	width: 1024,
	height: 1024, 					// --- в теле метода прописываются свойства
	name: "test"
};

console.log(options.name); 			// --- выводим из метода, свойство name
options.bool = false; 				// --- записали в объект options новую пару - ключ = значение
options.colors = { 					// --- записываем в объект options новый объект со своими свойствами
	border: "black",
	bg: "red"
};

delete options.bool;				// --- удаляем свойство из объекта

console.log(options);

for (let key in options) {			// --- цикл перебора свойств нужного объекта, key - свойство, options - нужный нам объект
	console.log('Свойство ' + key + ' имеет значение ' + options[key]);
}
console.log(Object.keys(options).length); // --- выводим в консоль объект с его свойствами и узнаем количество этих свойств