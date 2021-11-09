'use strict';

let num = 50;
    while(num <= 55) {
        console.log(num);
        num ++;
    }

let num2 = 60;
    do {
        console.log(num2);
        num2 ++;
    }
    while (num2 < 65);

for (let i = 1; i < 10; i ++) {
    if (i === 6) {
        //break;
        continue;
    }
    console.log(i);
}