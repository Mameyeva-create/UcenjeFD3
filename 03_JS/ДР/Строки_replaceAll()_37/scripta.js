/* УРОК 37. МЕТОД replaceAll() */

/* МЕТОД replaceAll() - ЗАМЕНЯЕТ ВСЕ СОВПАДЕНИЯ */

/* Важно: 
replaceAll() не изменяет исходную строку.*/


// ДЗ 38

// Задание 1 
let text = 'кот кот кот';
console.log(text.replaceAll('кот', 'пес')); // пес пес пес


// Задание 2  
let text1 = 'Java Java Java';
console.log(text1.replaceAll('Java', 'Type'));

// Задание 3
let word = 'HTML HTML';
console.log(word.replaceAll('HTML', 'CSS'));
console.log(word);


