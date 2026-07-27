/* УРОК 25. ЦИКЛ for И СТРОКА */

// Пример: 
let name ='Оля';
for (let i = 0; i < name.length; i++){
    console.log(name[i]);
} // О
 // л
 // я
/* Как это работает?:

На первой интерации:
i = 0
name[0] - О

на второй:
i = 1
name[1] - л

на третьей:
i = 2
name[2] - я

После этого i = 3, условие i < name.length (3 < 3) становиться ложным, и цикл заканчивается. 

name.length - это ДЛИНА СТРОКИ

i < name.length - означает -ПОКА ИНДЕКС МЕНЬШЕ ДЛИНЫ СТРОКИ -ПРОДОЛЖАЕМ ЦИКЛ
 
ЦИКЛ ВЫПОЛНЯЕТСЯ СТОЛЬКО РАЗ - СКОЛЬКО СИМВОЛОВ ЕСТЬ В СТРОКЕ

*/



// ДЗ 26

// Задание 1 
let city = 'Osijek'; // создали строку
for (let i = 0; i < city.length; i++){
console.log(city [i]);
}

// Задание 2  
let word = 'JavaScript';
for (let i = 0; i<word.length; i++){
    console.log(word[i]);
}

// Задание 3 
let color = 'Purple';
for (let i = 0; i < color.length; i++){
    console.log(color[i]);
}

