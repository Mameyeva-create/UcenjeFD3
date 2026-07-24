/* УРОК 13. ДОБАВЛЕНИЕ ЭЛЕМЕНТОВ В МАССИВ */

// Если нужно добавить элемент в массив, используем push()
//  Например:
let fruits = ['Яблоко', 'Банан'];

// методом push() добавим:
fruits.push('Апельсин');
console.log(fruits); // ['Яблоко', 'Банан', 'Апельсин']

/* НОВЫЙ ЭЛЕМЕНТ ВСЕГДА ДОБАВЛЯЕТСЯ В КОНЕЦ МАССИВА!*/


/* УЗНАТЬ КОЛ-ВО ЭЛЕМЕНТОВ - ИСПОЛЬЗУЕТСЯ СВ-ВО length */ 

// Пример:
// let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
// console.log(fruits.length); // 4

// // Получить  последний элемент массива: 
// console.log(fruits[fruits.length - 1]);  // Груша



// ДЗ 14

// // Задание 1
 let animals = ['Кот', 'Собака'];
animals.push('Попугай');
console.log(animals); // Выводим весь массив


// //Задание 2  Выводим кол-во элементов
console.log(animals.length); // 3


// // Задание 3 Выводим последний элемент
console.log(animals[animals.length - 1]);


// Пример: 1
let colors = ['Красный'];
colors.push('Синий');
colors.push('Зеленый');
console.log(colors); // (3) ['Красный', 'Синий', 'Зеленый']

// Пример: 2
let numbers = [10, 20, 30];
console.log(numbers.length);

// Пример: 3
let pets = ['Кот', 'Собака', 'Попугай'];
console.log(pets[pets.length - 1]);


