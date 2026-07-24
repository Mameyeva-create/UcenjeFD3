/* УРОК 16. МЕТОД pop() */

/* СЛУЖИТ ДЛЯ УДАЛЕНИЯ ПОСЛЕДНЕГО ЭЛЕМЕНТА МАССИВА */

// Пример 1:
// let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
// fruits.pop()
// console.log(fruits);

/* pop() - не только удаляет элемент, но и возвращает: */
let fruits = ['Яблоко', 'Банан', 'Апельсин'];
let lastFruit = fruits.pop();
console.log(lastFruit);

// ДЗ 17

// Задание 1 
// let colors = ['Красный', 'Синий', 'Зеленый'];
// colors.pop();
// console.log(colors);


// Задание 2  
let animals = ['Кот', 'Собака', 'Попугай']; // Создали массив
let lastAnimal = animals.pop(); // Cохраняем удаленный элемент в переменную
console.log(lastAnimal);
console.log(animals);


// Задание 3 
// let numbers = [10, 20, 30, 40];
// numbers.pop();
// numbers.pop();
// console.log(numbers);


//  Тест:
let colors = ['Красный', 'Синий'];
let last = colors.pop();

console.log(last); // Покажет удаленный элемент // Синий


// Тест 2:
let numbers = [5, 10, 15];
numbers.pop();

console.log(numbers);