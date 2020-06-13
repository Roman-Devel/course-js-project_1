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

// ----- Массивы -----

// let arr = ["first", 2, 3, "four", 5]; 			// --- создание массива

// // for (let i = 0; i < arr.length; i++) {
// // 	console.log(arr[i]);
// // }

// arr.forEach(function(item, i, mass) { // --- 1 аргумент (элемент массива), 2 аргумент (номер элемента), 3 аргумент (сам массив)
// 	console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// console.log(arr);

// let mass = [1, 3, 4, 6, 7];

// for (let key of mass) {
// 	console.log(key);
// }

// let ans = prompt("", ""),
// 	arr = [];

// arr = ans.split(',');
// console.log(arr);

// let arr = ['aawe', 'zzz', 'pp', 'rqa'],
// 	i = arr.join(', ');
// console.log(i);

let arr = [1, 15, 4],
	i = arr.sort(compareNum);

function compareNum(a,b) {
	return a-b;
}

console.log(arr);