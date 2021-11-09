'use strict';

// To string

//1)
console.log(typeof(String(null)));
console.log(typeof(String(5)));

//2
console.log(typeof(5 + ''));

const num = 5;                  //чило + строка = строка!

console.log('http://vk.com/catalog/' + num);

const fontSize = 22 + 'px';


//To number 

//1)

console.log(typeof(Number(5)));

//2)

console.log(typeof(+ '5'));

//3)

console.log(typeof(parseInt('5px', 10)));

let answ = +prompt('Hello!', '');


//To boolean

//1)

//0, '', null, undefined, NaN - это все false!

let switcher = null;

    if (switcher) {
        console.log('Working...');
    }
    switcher = 1;
    if (switcher) {
        console.log('Working...');
    }

//2)

console.log(typeof(Boolean("5")));

//3)

console.log(typeof(!!"66666"));
