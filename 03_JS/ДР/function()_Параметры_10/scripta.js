/* УРОК 10. ПАРАМЕТРЫ ФУНКЦИИ */


//  Например:
// function hello(name){ // name - переменная, кот. существует только внутри функциии
//     console.log('Привет,' + name);
// }
// hello('Анна') //  Привет Анна

// Пример:
// function showAge(age){
//     console.log('Возраст:' + age);
// }
// showAge(25); // Возраст: 25
// showAge(30); // Возраст: 30

// ДЗ 11

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




