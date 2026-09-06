/* УРОК 22. МЕТОД split() */

/* МЕТОД split() -  ПРЕВРАЩАЕТ СТРОКУ В МАССИВ */

// Пример:
// let text = 'Банан, Апельсин, Груша';
// let fruits = text.split(',');
// console.log(fruits); //  выводит массив

/* ЕСЛИ СЛОВА РАЗДЕЛЕНЫ ПРОБЕЛОМ:*/
// Пример 1:
// let text = 'HTML CSS JavaScript';
// let words = text.split(' ');
// console.log(words); // ['HTML', 'CSS', 'JavaScript']

/* РАЗДЕЛИТЕЛЬ МОЖЕТ БЫТЬ ЛЮБЫМ: */
// Пример 2:
// let text = 'Osijek-Zagreb-Split';
// let cities = text.split('-');
// console.log(cities); // ['Osijek', 'Zagreb', 'Split']

// ДЗ 23

// Задание 1 
let text1 = 'Красный,Синий,Зеленый'; // создали строку
let colors = text1.split(','); // преобразовали в массив
console.log(colors); // вывели // ['Красный', 'Синий', 'Зеленый']


// Задание 2  
let text2 = 'Кот Собака Попугай';
let pets = text2.split(' ');
console.log(pets);


/* ОСОБЕННОСТЬ - ПОСЛЕ split() - ЧИСЛА СТАНОВЯТСЯ СТРОКАМИ: */
// Задание 3 
let text3 = '10-20-30-40';
let numbers = text3.split('-');
console.log(numbers); // ['10', '20', '30', '40']

// Тест:
let fruits = ['Яблоко', 'Банан'];
console.log(fruits.join(' + '));

// Тест2:
let text4 = 'Osijek-Zagreb-Split';
let cities = text4.split('-');
console.log(cities[1]); // Zagreb