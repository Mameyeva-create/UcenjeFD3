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
// alert('Первое окно');
// alert('Второе окно');

// Это моя первая программа 

console.log('Я изучаю JavaScript');

alert('Привет 1')
console.log('Привет 2')
alert('Привет 3')
console.log('Привет 4')

// promt -> Вызывает всплывающее окно с текстом в поле ввода

// Пример1:
const userAge = prompt('Сколько тебе лет?') // вводим данные в окне 
// если нажать отмена / cancel -> 'Доступ запрещен'
if (userAge >= 18) {
    console.log('Доступ разрешен')
} else {
console.log('Доступ запрещен')
}

/* ЛЮБОЕ ЗНАЧЕНИЕ ЧЕРЕЗ ФУНКЦИЮ promt ПРИВОДИТСЯ К СТРОКЕ ( String ) */

// Пример2:
const uSerAge = Number(prompt('Сколько тебе лет?')) // +prompt('Сколько тебе лет?')
if(uSerAge === 0) {
    console.log('Такого возраста не может быть!')
} else {
    console.log(`Твой возраст: ${uSerAge}`)
}

// confirm -> служит для взаимодействия с пользователем, используется для подтверждения каких-либо действий, вызывает окно с текстом
// результат -> true / false
// Пример3:
const isUserReady = confirm('Ты готов?')
if (isUserReady) {
    console.log('Начинаем!')
} else {
    console.log('Ладно, подождем...')
}
 // КОНСТРУКЦИЯ switch case:
 // Пример4:
 const age = +prompt('Сколько тебе лет?') // в этой строке фиксируется возраст и с помощью Унарного Опреатора (+) -> Преобразовываются в числовой тип
 switch (age) // Условие сравнивается со значениями в {} до первого истинного условия (true)
{
    case 0: // если 0 то выведи 'Такого влзраста не бывает!'
    { 
       console.log('Такого возраста не бывает!') 
       break
    }
    case 18: {
        console.log('Не верю, покажи паспорт!')
        break // прекращает работу
    }
    case 1000: {
        console.log('Вампир что ли?')
        break
    }
    default: {
        console.log(`Твой возраст${age}`)
    }
}

// Для проверки каких-либо диапазонов:
// Пример5:
const aGe = +prompt('Сколько тебе лет?')

switch (true) {
    case aGe < 1: {
        console.log('Такого возраста не бывает!')
        break
    }
    case aGe === 18: {
        console.log('Не верю, покажи паспорт!')
        break
    }
    case aGe > 0 && aGe <= 125: {
        console.log(`Твой возраст: ${aGe}`)
        break
    }
    case aGe > 125: {
        console.log('Вампир что ли?')
        break
    }
    default: {
        console.log('Возраст введен неккоректно')
    }
}

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





