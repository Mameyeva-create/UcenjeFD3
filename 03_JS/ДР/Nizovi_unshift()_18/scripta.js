/* УРОК 18. МЕТОД unshift() */

/* Знаем:
push() - добавляет элемент в конец
pop() - удаляет элемент с конца 
shift() - удаляет сначала
*/

/*  МЕТОД unshift()  ДОБАВЛЯЕТ ЭЛЕМЕНТ В НАЧАЛО МАССИВА */

// Пример 1:
// let fruits = ['Банан', 'Апельсин', 'Груша'];
// fruits.unshift('Яблоко');
// console.log(fruits);

/* unshift() - добавляет один или несколько элементов в начало массива */
// let numbers = [30, 40];
// numbers.unshift(10, 20);
// console.log(numbers);

// ДЗ 19

// Задание 1 
let colors = ['Синий', 'Зеленый'];
colors.unshift('Красный');
console.log(colors);


// Задание 2  
let animals = ['Собака', 'Попугай']; // Создали массив
animals.unshift('Кот');

console.log(animals);


// Задание 3 
let numbers = [30, 40];
numbers.unshift(10, 20);

console.log(numbers);

