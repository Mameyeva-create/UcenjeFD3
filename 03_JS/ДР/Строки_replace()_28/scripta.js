/* УРОК 28. МЕТОД  replace() */

/* replace() - ИСПОЛЬЗУЕТСЯ ЧТОБЫ ЗАМЕНИТЬ ОДНО СЛОВО ИЛИ СИМВОЛ НА ДРУГОЙ */

// Пример: 
let text = 'Я люблю кошек';
console.log(text.replace('кошек', 'собак')); // Я люблю собак

/* МОЖНО ЗАМЕНИТЬ СИМВОЛ */ 
// Пример2:
let city = 'OSIJEK';
console.log(city.replace('O','A')); // ASIJEK 

/* ИСХОДНАЯ СТРОКА НЕ ИЗМЕНЯЕТСЯ: */
// Пример:
let word = 'JavaScript';
console.log(word.replace('Java', 'Type')); // TypeScript
console.log(word); // JavaScript

// ДЗ 29

// Задание 1 
let text1 = 'Я люблю чай';
console.log(text1.replace('чай', 'кофе'));

// Задание 2  
let city1 = 'Osijek';
console.log(city1.replace('O', 'Z'));

// Задание 3 
let word1 = 'JavaScript';
console.log(word1.replace('Script', 'Code'));
console.log(word1);

/* ВАЖНО - replace() ЗАМЕНЯЕТ  ТОЛЬКО ПЕРВОЕ НАЙДЕННОЕ СОВПАДЕНИЕ */