// let a = Math.round(Math.random()*1100);
//       console.log(a);

function toObject (a) {
    if (a > 999 || a < 0) {
        console.log('Недопустимое число');
        return {};
    }
    return decompose = {
        hundreds: Math.floor(a / 100),
        tens: Math.floor(a / 10) % 10,
        ones: a % 10
    };
}
toObject(a);

// let randNumber = Math.round(Math.random()*1100);
//         console.log(randNumber);

// function toObject(randNumber) {
//     if (randNumber <= 999 && randNumber > 0) {
//         let number = {
//             hundreds() {
//                 hundred = Math.floor(randNumber/100);
//                 return hundred;
//             },

//             tens() {
//                 ten = Math.floor((randNumber-(hundred * 100))/10);
//                 return ten;
//             },

//             ones() {
//                 one = randNumber - ((hundred * 100) + (ten * 10));
//                 return one;
//             }
//         };
//     number.hundreds();
//     number.tens();
//     number.ones();  
//     console.log(hundred); 
//     console.log(ten);
//     console.log(one);
//     } else {
//         let number = {};
//         console.log(number);
//     }
// }

// toObject(randNumber);

// Задание 2

var basket = [
    {
        name: 'jeans',
        price: 1900,
        quantity: 3
    },

    {
        name: 't-shirt',
        price: 500,
        quantity: 6
    },

    {
        name: 'jacket',
        price: 2500,
        quantity: 2
    }
];

function basketTotal(basket) {
    return basket.reduce((result, basketElem) => result + basketElem.price * basketElem.quantity, 0);
}
console.log(basketTotal(basket));


