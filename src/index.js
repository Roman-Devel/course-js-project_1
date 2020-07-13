let myModule = require('./script');                 // импорт модуля из файла, который лежит в этой же папке

let newModule = new myModule();                        // объявляем наш модуль

console.log(newModule.hello());
console.log(newModule.goodbye());