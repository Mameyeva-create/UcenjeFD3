/* УРОК 34. МЕТОД substring() */

/* МЕТОД substring() - ВОЗВРАЩАЕТ ЧАСТЬ СТРОКИ ПО УКАЗАННЫМ ИНДЕКСАМ */

/* Синтаксис:
строка.substring(начало, конец)
начальный индекс включается;
конечный индекс не включается. */

/* Чем substring() отличается от slice()?

Различия появляются только в некоторых особых случаях (например, при отрицательных индексах), для обычной работы они ведут себя одинаково. */


// ДЗ 35

// Задание 1 
let word = 'JavaScript';
console.log(word.substring(0, 4));

// Задание 2  
let city = 'Osijek';
console.log(city.substring(2));

// Задание 3
let text = 'Программирование';
console.log(text.substring(0, 8));
console.log(text);

// Тест:
let city1 = 'Osijek';
console.log(city1.substring(1, 4)); // sij




