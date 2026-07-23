/* УРОК 12. МАССИВЫ (Arrays)*/

// Для возвращеня результата, чтобы использовать его дальше, существует return

//  Например:
// function sum(a, b){
//     return a + b;
// }
// let result = sum(5, 3);
// console.log(result); // 8


// // Пример:
// function multiply(a, b){
//     return a * b;
// }
// console.log(multiply(4, 5)); // 20

// // Пример:
// function test(){
//     return 10;
// }
// let number = test(); // число 10 храниться в переменной number
// console.log(number);

// ДЗ 12

// Задание 1
function sum(a, b){
    return a + b;
}
console.log(sum(10, 5));


//Задание 2
function multiply(a, b){
    return a * b;
}
console.log(multiply(6, 7));

// Задание 3
function minus(a, b){
    return a - b;
}
console.log(minus(4, 8)); // -4
console.log(minus(345, 128)); 

// Например:
let total = sum(10, 5);
console.log(total); // 15

// Пример:
let result = sum(10, 5) * 2;
console.log(result) // 30

//  Пример:
function square(number){
    return number * number;
}
console.log(square(4)); // 16



