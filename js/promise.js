let drink = 1;

function shoot(arrow) {
    console.log('Вы сделали выстрел...');

    let promise = new Promise(function(resolve, reject) {                   // создание promise (обещания). resolve - обещание выполнилось, reject - не выполнилось
        setTimeout(function() {
            Math.random() > .5 ? resolve({}) : reject("Вы промахнулись");
        }, 3000);
    });

    return promise;
}

function win() {
    console.log("Вы победили!");
    (drink == 1) ? buyBeer() : giveMoney();
}

function buyBeer() {
    console.log("Вам купили пиво!");
}

function giveMoney() {
    console.log("Вам заплатили!");
}

function lose() {
    console.log("Вы проиграли!");
}

shoot({})
        .then(mark => console.log("Вы попали в цель!"))                    // использование promise. Then затем выполняется функция
        .then(win)                                                         // затем другая функция
        .catch(lose)                                                       // а если обещание не выполнено, запускается catch