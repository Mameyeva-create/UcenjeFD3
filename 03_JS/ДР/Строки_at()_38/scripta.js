/* УРОК 38. МЕТОД at() */

/* МЕТОД at() - ВОЗВРАЩАЕТ СИМВОЛ ПО УКАННОМУ ИНДЕКСУ*/

/* Синтаксис:
строка.at(индекс) */

// Пример:
let Word = 'JavaScript';
console.log(Word.at(0)); // J

/* ГЛАВНОЕ ПРЕИМУЩЕСТВО at() - ОН УМЕЕТ РАБОТАТЬ С ОТРИЦАТЕЛЬНЫМИ ИНДЕКСАМИ*/
// Пример:
let word1 = 'JavaScript';
console.log(word1.at(-1)); // t // - последний символ
console.log(word1.at(-2)); // p

/* console.log(word[-1]); - НЕ РАБОТАЕТ - ВЕРНЕТ undefined */

// ДЗ 39

// Задание 1 
let word2 = 'JavaScript';
console.log(word2.at(0));


// Задание 2  
let city = 'Osijek';
console.log(city.at(-1));

// Задание 3
let text = 'HTML';
console.log(text.at(0));
console.log(text.at(-1));

/*  Самое главное правило:
положительные индексы → считаем с начала;
отрицательные индексы → считаем с конца. */
