/* УРОК 36. МЕТОД concat() */

/* МЕТОД concat() - ОБЪЕДИНЯЕТ  ДВЕ ИЛИ НЕСКОЛЬКО СТРОК В ОДНУ НОВУЮ */

/* Синтаксис:
строка1.concat(строка2);
 */

// Пример:
let firstName = 'Nina';
let lastName = 'Ivanova';
console.log(firstName.concat(' ', lastName)); // Nina Ivanova

// Пример1:
let city = 'Osi';
let end = 'jek';
console.log(city.concat(end));

/* Важно - concat() не изменяет исходную строку. */

// ДЗ 37

// Задание 1 
let FirstName = 'Оля';
let LastName = 'Миронова';
console.log(FirstName.concat(' ', LastName));


// Задание 2  
let city1 = 'Osi';
let end1 = 'jek';
console.log(city1.concat(end1));

// Задание 3
let word = 'Java';
console.log(word.concat('Script'));
console.log(word);

/* В современном JavaScript чаще используют оператор +.

Например, вместо:

let firstName = 'Оля';
let lastName = 'Миронова';

console.log(firstName.concat(' ', lastName));

чаще пишут:

let firstName = 'Оля';
let lastName = 'Миронова';

console.log(firstName + ' ' + lastName); */
