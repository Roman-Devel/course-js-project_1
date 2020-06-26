window.addEventListener('DOMContentLoaded', function() {

	// --- функция конструктор, предназначена для конструирования объектов и создания множества подобных копий, return (возврат) не нужен --- \\
	function User(name, id) {
		this.name = name;
		this.id = id;
		this.human = true;
		this.hello = function() {
			console.log('Hello! ' + this.name);
		};
	}
	User.prototype.exit = function(name) {
		console.log('Пользователь ' + this.name + ' ушел');
	}

	let ivan = new User('Ivan', 25),
		alex = new User('Alex',20);

	console.log(ivan);
	console.log(alex);
	
	ivan.exit();

});