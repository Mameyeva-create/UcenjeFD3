/* УРОК 11. ВОЗВРАЩАЕМОЕ ЗНАЧЕНИЕ (return)*/

// Для возвращеня результата, чтобы использовать его дальше, существует return

//  Например:
function sum(a, b){
    return a + b;
}
let result = sum(5, 3);
console.log(result); // 8


// Пример:
function multiply(a, b){
    return a * b;
}
console.log(multiply(4, 5)); // 20

// Пример:
function test(){
    return 10;
}
let number = test(); // число 10 храниться в переменной number
console.log(number);

// ДЗ 12

// Задание 1
function hello(name) {
    console.log('Привет,' + name);
}
hello('Оля');
hello('Иван');
hello('Анна');

//Задание 2
function showAge(age){
    console.log('Мне ' + age + 'лет');
}
showAge(25); // Мне 25 лет
showAge(30); // Мне 30 лет

// Задание 3
function favoriteColor(color){
    console.log('Мой любимый цвет: ' + color);
}
favoriteColor('peony')
favoriteColor('juniper')


function showNumber(number) {
    console.log(number);
}
showNumber(100); // 100
showNumber(250); // 250




