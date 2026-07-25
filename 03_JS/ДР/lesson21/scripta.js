/* УРОК 21. МЕТОД join() */


/* Метод includes - более простой метод проверки*/
 
//Вместо:
// if (animals.indexOf('Собака') != -1){
// console.log('Собака найдена!');
// }
//Миожно написать:
// if(animals.includes('Собака')){
//     console.log('Собака найдена!');
// }

/* КАК РАБОТАЕТ includes() - ОТВЕЧАЕТ ТОЛЬКО НА ОДИН ВОПРОС- ЕСТЬ ЛИ ЭТОТ ЭЛЕМЕНТ В МАССИВЕ?*/

/* Он вовращает:
true - если элемент есть;
false - если элемента нет;
*/


// Пример 1:
// let fruits = ['Банан', 'Апельсин', 'Груша'];
// console.log(fruits.includes('Банан')) // true

 // Пример:
// let fruits = ['Яблоко', 'Банан', 'Апельсин'];
// console.log(fruits.includes('Груша')) // false - означает такого элемента нет в массиве



// ДЗ 21

// Задание 1 
let colors = ['Красный','Синий', 'Зеленый'];
console.log(colors.includes('Синий')); 


// Задание 2  
let animals = ['Кот', 'Собака', 'Попугай']; // Создали массив
if(animals.includes('Попугай')){
    console.log('Попугай найден!');
}

// Задание 3 
let numbers = [10, 20, 30, 40];
console.log(numbers.includes(50));


// Тест:
let fruits = ['Яблоко', 'Банан'];
if(fruits.includes('Яблоко')){
    console.log('Есть!');
}