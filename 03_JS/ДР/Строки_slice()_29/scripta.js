/* УРОК 29. МЕТОД slice() */

/* slice() - ИСПОЛЬЗУЕТСЯ ЧТОБЫ ПОЛУЧИТЬ ЧАСТЬ СТРОКИ */

// Пример: 
let word = 'JavaScript';
console.log(word.slice(0, 4)); // Java
/* Индексы такие:
J a v a S c r i p t
0 1 2 3 4 5 6 7 8 9
slice(0, 4) берёт символы с индекса 0 до индекса 4 (не включая 4). */


/* ЕСЛИ УКАЗАТЬ ТОЛЬКО ОДИН ИНДЕКС, СТРОКА БЕРЕТСЯ ДО КОНЦА: */ 
// Пример2:
let city = 'OSIJEK';
console.log(city.slice(2)); // IJEK 

/*  ВАЖНО - slice() НЕ ИЗМЕНЯЕТ ИСХОДНУЮ СТРОКУ */
// Пример:
let word1 = 'JavaScript';
console.log(word1.slice(4)); // Script
console.log(word1); // JavaScript

// ДЗ 30

// Задание 1 
let word2 = 'JavaScript';
console.log(word2.slice(0, 4));

// Задание 2  
let city1 = 'Osijek';
console.log(city1.slice(2));

// Задание 3
let text = 'Программирование';
console.log(text.slice(0, 8));
console.log(text);

 /* ПРАВИЛО:
 slice(начало, конец)
 начальный индекс - входит;
 конечный индекс - не входит!
 */



