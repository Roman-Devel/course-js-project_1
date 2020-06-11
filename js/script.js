// function showFirstMessage(text) {
// 	alert(text);
// 	let num = 20;
// }

// showFirstMessage("Hello World!");

// function calc(a,b) {
// 	return (a + b);
// }

// let calc = function(a,b) {
// 	return (a + b);
// }

let calc = (a,b) => a+b;

console.log(calc(3,4));

console.log(calc(8,4));

function retVar() {
	let num = 50; // объявляем локальную переменную
	return num; // через функцию return выводим переменную в глобальный тип
}

let anotherNum = retVar();
console.log(anotherNum);

let str = "test";
console.log(str.length);

console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";

// console.log(Math.round(twelve));
console.log(parseInt(twelve));
console.log(parseFloat(twelve));