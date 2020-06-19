let box = document.getElementById('box'), // через встроенный объект document, используем метод для поиска элемента по ID
	btn = document.getElementsByTagName('button'), // получение псевдоколлекции по тегу
	circle = document.getElementsByClassName('circle'), // получение псевдоколлекции по классу
	heart = document.querySelectorAll('.heart'), // получение псевдоколлекции по нужному селектору
	oneHeart = document.querySelector('.heart'), // получение первого элемента на странице по нужному селектору
	wrapper = document.querySelector('.wrapper');

box.style.backgroundColor = 'blue';
btn[1].style.borderRadius = '100%';

circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// for (let i = 0; i < heart.length; i++) {
// 	heart[i].style.backgroundColor = 'blue';
// }

// heart.forEach(function(item, i, hearts) {
// 	item.style.backgroundColor = 'blue';
// });

let div = document.createElement('div'), // --- создание элемента
	text = document.createTextNode('Тут был я'); // --- создание текстового узла

div.classList.add('black'); // --- добавление класса к элементу

// document.body.appendChild(div); // --- вставка элемента в самый конец родительского тега, тэг body встроенный
// wrapper.appendChild(div); // --- вставка элемента в самый конец родительского тега

// div.innerHTML = '<h1>Hello World!</h1>'; // --- вставка html конструкций внутрь элементов
div.textContent = 'Hello World!'; // --- вставка текста внутрь элемента

document.body.insertBefore(div, circle[0]); // --- вставка элемента перед чем-то (что вставляем, перед чем)
document.body.removeChild(circle[1]); // --- удаление элемента со страницы
wrapper.removeChild(heart[1]);

document.body.replaceChild(btn[1], circle[1]); // --- замена одного элемента другим (какой элемент, на какой заменяем) - 2 элемент удалится

console.log(div);