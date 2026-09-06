/* УРОК 4. АРИФМЕТИКА */
// БИНАРНЫЕ ОПЕРАТОРЫ - ПРИМЕНЯЮТСЯ К ДВУМ ОПЕРАНДАМ (ЗНАЧЕНИЯМ)
// СЛОЖЕНИЕ
let a = 10;
let b = 5;

console.log(a + b); // 15

// ВЫЧИТАНИЕ
console.log(a - b); // 5

// УМНОЖЕНИЕ
console.log(a * b); // 50


// ДЕЛЕНИЕ
console.log(a / b); // 2

// ВОЗВЕДЕНИЕ В СТЕПЕНЬ
console.log(a ** b) // 100_000

// ОСТАТОК ОТ ДЕЛЕНИЯ %
console.log(10 % 3); // 1

// УНАРНЫЕ ОПЕРАТОРЫ - К ОДНОМУ ОПЕРАНДУ (ЗНАЧЕНИЮ)

// ОПЕРАТОР МИНУСА - ДЕЛАЕТ ЧИСЛО ОТРИЦАТЕЛЬНЫМ
console.log(- 10)

// ПЛЮСА
console.log(+"3" + +"5") // 8
console.log("3" + "5") // "35"

let count = 1
count += 2 // 3 // count = count + 2 // count = 1 + 2
count -= 5 // -4 //  count = 1 - 5 
count *= 10 // 10 // 1 * 10
count /= 3 // 0.33
console.log(count)

let message = 'Привет'
message += ', друг!'
message += ' Как дела?'
console.log(message) // Привет, друг! Как дела?

// ДИКРИМЕНТ

/* i-- ПОСТФИКСНАЯ ФОРМА */
let coUnt = 10
coUnt-- // 9
coUnt-- // 8
count-- // 7
console.log(coUnt)

/* --i ПРЕФИКСНАЯ ФОРМА */


// ИНКРИМЕНТ

/* i++ ПОСТФИКСНАЯ ФОРМА  - Сначала_Использовать_потом_Увеличить */
let couNt = 10
couNt++ // 11
couNt++ // 12
couNt++ // 13
console.log(couNt)

/* ++i ПРЕФИКСНАЯ ФОРМА - Сначала_Увеличить_потом_Использовать */
let counT = 10
let newCount = ++counT

console.log(counT) // 11
console.log(newCount) // 11


// ДЗ 5
// let a = 20;
// let b = 4;

// console.log(a + b); // 24
// console.log(a - b); // 16
// console.log(a * b); // 80
// console.log(a / b); // 5
// console.log(a % b); // 0

// let x = 7;
// let y = 2;

// console.log(x + y); // 9
// console.log(x - y); // 5
// console.log(x * y); // 14
// console.log(x / y); // 3.5
// console.log(x % y); // 1