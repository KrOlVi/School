"use strict";

//alert("Hello!");

//const result = confirm("Are you here?");
//console.log(result);

//const answer = +prompt("Вам есть 18?", "");
//console.log(answer + 5); 

const answers = [];
answers[0] = prompt("What is your name?", "");
answers[1] = prompt("What is your second name?", "");
answers[2] = prompt("How old are you?", "");

document.write(answers);//typeof()-тип данных!

//Интерполяция 

const category = "toys";

console.log(`http://someurl.com/${category}/5`);

const user = "oleh";

alert(`Привет, ${user}`);