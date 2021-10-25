"use strict";

console.log("arr" + " - object");
console.log(4 + + "5"); //Унарный +

let incr = 10,
    decr = 10;

incr++; //Увеличение на 1
decr--; //Уменьшение на 1

console.log(incr);
console.log(decr);

console.log(5%2);

console.log(2*4 === "8"); //Стргое сравнение

// && - оператор "и"
// || - орератор "или"

const isChecked = true,
      isClose = false;

console.log(isChecked && isClose);

const isChecked1 = false,
      isClose1 = true;

console.log(isChecked1 || isClose1);

const isChecked2 = false,
      isClose2 = false;

console.log(isChecked2 || !isClose2);

console.log(2 + 2 * 2 !== "6");