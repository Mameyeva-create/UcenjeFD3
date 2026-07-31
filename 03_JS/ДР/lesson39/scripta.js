/* УРОК 39. МЕТОД reverse() (для массивов) */

/* МЕТОД reverse() - МЕНЯЕТ ПОРЯДОК ЭЛЕМЕНТОВ МАССИВА НА ОБРАТНЫЙ */

/* Синтаксис:
массив.reverse() */

// Пример:
let numbers = [10, 20, 30, 40];
numbers.reverse()
console.log(numbers); // [40, 30, 20, 10,]

/* Важно!
В отличие от многих методов строк (slice(), replace(), toUpperCase() и др.), метод reverse() изменяет сам массив.*/
// Пример:
let colors =['Красный', 'Синий', 'Зеленый'];
colors.reverse();
console.log(colors); // ['Зелёный', 'Синий', 'Красный']  ИСХОДНЫЙ МАССИВ УЖЕ СТАЛ ДРУГИМ


// ДЗ 40

// Задание 1 
let fruits = ['Яблоко', 'Банан', 'Апельсин'];
fruits.reverse();
console.log(fruits);


// Задание 2  
let Numbers = [1, 2, 3, 4, 5];
Numbers.reverse()
console.log(Numbers);

// Задание 3
let Colors = ['Красный', 'Синий', 'Зеленый'];
console.log(Colors);
Colors.reverse();
console.log(Colors);


/* некоторые методы массивов:

push()
pop()
shift()
unshift()
reverse()

❌ изменяют сам массив */

// Тест:
let coLors = ['Красный', 'Синий'];
coLors.reverse();
console.log(coLors[0]); // Синий