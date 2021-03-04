// var a = 1, b = 1, c, d;
// c = ++a; alert(c);           // 2
// d = b++; alert(d);           // 1
// c = (2+ ++a); alert(c);      // 5
// d = (2+ b++); alert(d);      // 4
// alert(a);                    // 3
// alert(b);                    // 3

// c = ++a; alert(c); // 2 потому что префиксная форма сначала увеличивает на 1, а потом выводит число
//d = b++; alert(d); //1 потому что постфиксная форма сначала выводит число, а потом увеличивает, поэтому выводится 1
// c = (2+ ++a); alert(c); // 5 потому что мы увеличиваем а еще на 1 и прибавляем 2
// d = (2+ b++); alert(d); // 4 потому что прибывляем 2 и увеличиваем б на единицу, так как значение б было 1, то стало 2
// alert(a) // 3 потому что было 2 инкремента
// alert(b) // 3 по этой же причине


// Задание 2

var a = 2;
var x = 1 + (a *= 2);
x = 5;

//Задание 3

//Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:
// если a и b положительные, вывести их разность;
// если а и b отрицательные, вывести их произведение;
// если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.

let a = -20;
let b = -15;

if (a >= 0 && b >= 0) {
    console.log(a - b);
} else if (a < 0 && b < 0) {
    console.log(a * b);
} else {
    console.log(a + b);
}

// Задание 4

//Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.

let a = +prompt('Введите число в промежутке от 0 до 15');

switch(a){
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);    
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a);
    }

 //Задание 5 и 6   

//  Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) и вернуть полученное значение (использовать switch).
var arg1, arg2, operation;

function mathOperation(arg1, arg2, operation){
    switch(operation){
        case 'сложение':
            return sum(arg1, arg2);
        case 'вычитание':
            return subtraction(arg1, arg2);
        case 'деление':
            return division(arg1, arg2);
        case 'умножение':
            return multi(arg1, arg2);
    }

    function sum(arg1, arg2){
        return arg1 + arg2;
    }
    
    function subtraction(arg1, arg2){
        return arg1 - arg2;
    }
    
    function division(arg1, arg2){
        return arg1 / arg2;
    }
    
    function multi(arg1, arg2){
        return arg1 * arg2;
    }
}

// *Сравнить null и 0. Попробуйте объяснить результат.

null > 0; // false   null преобразуется к 0
null < 0; // false   null преобразуется к 0
null == 0; // false   == рассматривает null особо.
null >= 0; // true  //если null < 0 принимает значение false, то null >= 0 принимает значение true
null <= 0; // true

// Задание 8

//*С помощью рекурсии организовать функцию возведения числа в степень. 
//Формат: function power(val, pow), где val – заданное число, pow – степень.

function power(val, pow){
    if (pow == 1){
        return val;
    } else {
        return (val * power(val , pow - 1));
    }
    console.log(power(5, 6));
}


