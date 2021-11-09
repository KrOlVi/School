'use strict';

let num = 10;

function showFirstMessage(text) {
    console.log(text);
    num = 10;
}

showFirstMessage('Hello Oleh!');
console.log(num);


function calc(a, b) {
    return (a + b);
}
console.log(calc(5, 3));
console.log(calc(3, 7));
console.log(calc(8, 6));


function ret() {
    let num = 50;

        //

    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function() {
    console.log('Hello!');
};
logger();


const calc2 = (a, b) => {
    console.log('1');
    return a + b;
};