/* УРОК 1. ЧТО ТАКОЕ JAVA SCRIPT ?
/* ************************************* 
ПЕРЕМЕННЫЕ:
let - переменная, значения в которой могут меняться( переопределяться)
const - значения не меняються!( не переопределятся)
var - не используется

значения пишутся через запятую, Например:

const
name = 'Olya',
age = 50,
isDeveloper = true

Две или больше переменных с одинаковым именем Не Может быть!

'use strict' - Строгий режим, для блокирования ошибок, ставитья в начале js_файла

Имя переменной не может начинаться с цифры!

***************************************/
// alert -> Показывает сообщение во всплывающем окне
// alert ('Привет, меня зовут Оля!');
console.log('Я изучаю JavaScript');


// alert('Первое окно');
// alert('Второе окно');

// Это моя первая программа 

/* УРОК 2. ПЕРЕМЕННЫЕ
// ДЗ:2
/* let name = 'Оля';
let age = 25;

console.log(name);
console.log(age); */

/* let city = 'Osijek';
let color = 'purple';

console.log(city);
console.log(color); */



/* ПЕРЕМЕННЫЕ МОЖНО ИЗМЕНЯТЬ

// РАССМОТРИМ ПОНЯТИЕ - ПАРСИТЬ ( parse ) - это преобразовывать данные из одного формата в другой, удобный для работы программы

/* САМЫЕ ПОПУЛЯРНЫЕ СПОСОБЫ ПАРСИНГА В JavaScript: 

Number('25') -> Преобразует Строку в Число
parseInt('25') -> Строку в Целое Число
parseFloat('25.7') -> Строку в Дробное Число
JSON.parse() -> JSON-строку в Объект
*/

// Примеры:
console.log(parseInt('123')) // 123
console.log(parseInt('123px')) // 123
console.log(parseInt('12.3')) // 12 // берет только целую часть

console.log(parseFloat('12.8')) // 12.8
console.log(parseFloat('3.14px')) // 3.14

// есть строка:
const text = '{"name":"Olya","age":50}'
// парсим ее:
const user = JSON.parse(text)
console.log(user.name) // Olya
console.log(user.age) // 50
/* let age = 25;
console.log(age);
age = 26;
console.log(age); */


//ДЗ:3
/* let name = 'Oля';
let age = 25;

console.log(name);
console.log(age);

age = 26;
console.log(age);

let pet = 'Кот';
console.log(pet);

pet = 'Собака';
console.log(pet); */





