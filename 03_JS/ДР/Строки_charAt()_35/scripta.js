/* УРОК 35. МЕТОД charAt() */

/* МЕТОД charAt() - ВОЗВРАЩАЕТ СИМВОЛ СТРОКИ ПО УКАЗАННОМУ ИНДЕКСУ */

/* Синтаксис:
строка.charAt(индекс);
 */

// Пример:
let word2 = 'JavaScript';
console.log(word2.charAt(0)); // J

/* ЧЕМ charAt() ОТЛИЧАЕТСЯ ОТ КВАДРАТНЫХ СКОБОК?: */
// МОЖЕМ ПОЛУЧИТЬ СИМВОЛ ТАК:
let name = 'Nina';
console.log(name[0]); // N
// ТО ЖЕ САМОЕ ЧЕРЕЗ charAt():
let name1 = 'Nina';
console.log(name1.charAt(0));
// В современном JavaScript чаще используют квадратные скобки.

// Что будет, если индекс слишком большой?
let word = 'Java';
console.log(word.charAt(20));

// Будет возвращена пустая строка (''), потому что символа с таким индексом нет.

// ДЗ 36

// Задание 1 
let word1 = 'JavaScript';
console.log(word1.charAt(0));

// Задание 2  
let city = 'Osijek';
console.log(city.charAt(4)); // e

// Задание 3
let text = 'Программирование';
console.log(text.charAt(5)); // а




