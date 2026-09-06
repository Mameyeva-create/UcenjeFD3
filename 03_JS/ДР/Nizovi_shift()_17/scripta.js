/* УРОК 17. МЕТОД shift() */

/* Знаем:
push() - добавляет элемент в конец
pop() - удаляет элемент с конца */

/*  МЕТОД shift() УДАЛЯЕТ ПЕРВЫЙ ЭЛЕМЕНТ МАССИВА */

// // Пример 1:
// let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
// fruits.shift()
// console.log(fruits);

/* shift() - тоже возвращает удаленный элемент */
let fruits = ['Яблоко', 'Банан', 'Апельсин'];
let firstFruit = fruits.shift();
console.log(firstFruit);

// ДЗ 18

// Задание 1 
// let colors = ['Красный', 'Синий', 'Зеленый'];
// colors.shift();
// console.log(colors);


// Задание 2  
let animals = ['Кот', 'Собака', 'Попугай']; // Создали массив
let firstAnimal = animals.shift(); // Cохраняем удаленный элемент в переменную
console.log(firstAnimal);
console.log(animals);


// Задание 3 
// let numbers = [10, 20, 30, 40];
// numbers.shift();
// numbers.shift();
// console.log(numbers);

// Тест: 
let colors = ['Красный', 'Синий'];
let first = colors.shift();

console.log(first);

// Тест 2:
let numbers = [5, 10, 15];

numbers.shift();
numbers.pop();

console.log(numbers);