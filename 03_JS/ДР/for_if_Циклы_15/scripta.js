/* УРОК 15. УСЛОВИЯ ВНУТРИ ЦИКЛА  (if + for) */


// Пример 1:
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log('Нашли число 3');
    }
}

// РАБОТА С МАССИВОМ:
let fruits = ['Яблоко', 'Банан', 'Апельсин', 'Груша'];
for (let i = 0; i < fruits.length; i++) {
    if (fruits[i] === 'Банан') {
        console.log('Нашли банан!');
    }
}


// ДЗ 16

// // Задание 1 / Написать цикл от 1 до 10

for (let i = 1; i <= 10; i++) {
    if(i === 5){
console.log('Пять найдено!');
    } 
}

// Задание 2  
let pets = ['Кот', 'Попугай', 'Собака'];
for (let i = 0; i < pets.length; i++){
    if (pets[i] === 'Собака'){
        console.log('Нашли собаку!')
    }
}

// Задание 3 
let numbers = [3, 8, 12, 5];
for (let i = 0; i < numbers.length; i++) {  
    if(numbers[i] > 5) {
        console.log(numbers[i]);
    }
}

