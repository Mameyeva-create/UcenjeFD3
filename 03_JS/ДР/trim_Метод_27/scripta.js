/* УРОК 27. МЕТОД trim() */

/* trim() - ИСПОЛЬЗУЕТСЯ ЧТОБЫ УБРАТЬ ЛИШНИЕ ПРОБЕЛЫ */

// Пример: 
let name = '  Оля   ';
console.log(name.trim()) // Оля

// Пример2:
let city = '   OSIJEK';
console.log(city.trim()); 

/* ВАЖНО - trim() - УДАЛЯЕТ ПРОБЕЛЫ ТОЛЬКО В НАЧАЛЕ И В КОНЦЕ СТРОКИ, ПРОБЕЛЫ ВНУТРИ СТРОКИ ОСТАЮТСЯ */


// ДЗ 28

// Задание 1 
let name1 = '      Оля     ';
console.log(name1.trim());


// Задание 2  
let city1 = '       Osijek';
console.log(city1.trim());

// Задание 3 
let word1 = 'JavaScript      ';
console.log(word1.trim());
console.log(word1);

