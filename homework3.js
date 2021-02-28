// Задание 1
let i = 1;
check: while(i < 100){
    i++;
    let d = 2;
        while(d < i){
            if(i % d === 0){ 
                continue check;
        } 
        d++; 
    }
    console.log(i); 
}

//Задание 2

//a) Организовать такой массив для хранения товаров в корзине;
//b) Организовать функцию countBasketPrice, которая будет считать стоимость корзины.

let basket = [
    ['jeans', 1900, 3],
    ['t-shirt', 500, 6],
    ['jacket', 2500, 2],
];

let result = 0;
for (let i of basket){
    result += i[1]*i[2];
}console.log(result);

// Задание 3

//*Вывести с помощью цикла for числа от 0 до 9, не используя тело цикла. Выглядеть это должно так:

var num;
for(num = 0;num <= 9;console.log(num++)){}

//Задание 4

//*Нарисовать пирамиду с помощью console.log, как показано на рисунке, только у вашей пирамиды должно быть 20 рядов, а не 5:

let x = '';
count = 0;
while(count < 20){
    console.log(x += 'x');
    count++;
}





