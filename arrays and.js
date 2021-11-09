'use strict';

const arr = [1, 12, 23, 16, 38];
arr.sort(compareNum);
console.log(arr);

function compareNum(a, b) {
    return a - b;
}

//arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

//console.log(arr.length);

//arr.pop();  //Удаляет последний элемент массива

// arr.push(10); //Добавляет еще один элемент массива

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of arr) {
    console.log(value);
}

const str = prompt('', '');
const products = str.split(", ");
products.sort();
console.log(products.join('; '));