/* УРОК 14. ЦИКЛ for */

// Если нужно вывести много элементов, существует ЦИКЛ


/* ПЕРВЫЙ ЦИКЛ: */
for (let i = 0; i < 5; i++){
console.log(i); // 0 1 2 3 4
}

/* Разберем:
for ( - Начинаем цикл
let i = 0 - Создаем счетчик, Начинаем с нуля
i < 5 -Пока это условие истинно- цикл продолжается
i++ - После каждого круга увеличиваем i на 1, это сокращение записи  i = i + 1 */

/* РАБОТА С МАССИВОМ */

//Выводим все элементы массива автоматически:

//  let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
//  for ( let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);
//  }



// ДЗ 15

// Задание 1
for (let i = 1; i <= 5; i++){
console.log(i);
}

// Задание 2  
let colors = ['Красный', 'Синий', 'Зеленый'];
for (let i = 0; i < colors.length; i++){
    console.log(colors[i]);
}

// Задание 3 
let numbers = [10, 20, 30, 40];
for ( let i = 0; i<=3; i++){   // for (let i = 0; i < numbers.length; i++) - это работает на все числа
    console.log(numbers[i]);
}

/* ПРАВИЛО: 
если цикл проходит по массиву, почти всегда используем запись:
for(let i = 0; i < array.length; i++){
console.log(array[i]);
}
где:
array - массив (fruits, numbers, colors и т.д);
length - количество элементов
*/

// Пример:
let fruits = ['Яблоко', 'Банан'];
for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i]);
}

for (let i = 0; i < 3; i++) {
    console.log(i);
}
