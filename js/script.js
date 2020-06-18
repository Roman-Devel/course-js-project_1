// - to string
// 1)
console.log(typeof(String(4)));
// 2)
console.log(typeof('ww' + 8)); // конкатенация

// - to Number
// 1)
console.log(typeof(Number('4')));
// 2)
console.log(typeof(5 + +'5')); // унарный плюс перед любым типом данных, превращает его в числовой
// 3)
console.log(typeof(parseInt('15px', 10))); // преобразование в числовой тип

let ans = +prompt("Hello!", ""); // унарный плюс

0, '', null, undefined, NaN // всегда false

// - to Boolean
// 1)
let switcher = null;

if (switcher) {
	console.log("Working..");
}

switcher = 1;

if (switcher) {
	console.log("Working..");
}
// 2)
console.log(typeof(Boolean('4')));
// 3)
console.log(typeof(!!'4')); // !! преобразовывает тип данных в логический