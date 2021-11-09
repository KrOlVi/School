'use strict';

if(4 == 9) {

    console.log('Ok!');

} else {

    console.log('Error');

}



const num = 50;

if (num < 49) {

    console.log('Error');

} else if (num > 100) {

    console.log('Much');

} else {

    console.log('Ok!');

}
(num === 50) ? console.log('Ok!') : console.log('Error'); //Тернарный оператор(3 аргумента)



const num2 = 50;

    switch (num2) {
        case 49:
            console.log('No!');
            break;

        case 100:
            console.log('No! No!');
            break;

        case 52:
            console.log('OK!');
            break;

        default:
            console.log('Not this time!');
            break;
    }