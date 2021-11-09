'use strick';

let x = 5;
console.log(x++); //5

//[] + false - null + true
console.log([] + false - null + true);  //"NuN"

let y = 1; let x = y = 2;  //идет с права на лево
console.log(x); //2

console.log([] + 1 + 2); //12

console.log('1'[0]); //1

console.log(2 && 1 && null && 0 && undefined);  //null 'и' запинается на лжи! ||ИЛИ запинается на првде

console.log(!!(1 && 2) === (1 && 2));

                  3
console.log( null || 2 && 3 || 4 ); //3

const a = [1, 2, 3];
const b = [1, 2, 3];
console.log(a == b); //не равно(false)

console.log(+"infinity"); //тип данных число унарный "+" alert(infinity)

console.log("Ёжик" > "яблоко"); //unicode регистр букв по алфавиту

console.log(0 || "" || 2 || undefined || true || false); //"2" код дальше не пойдет