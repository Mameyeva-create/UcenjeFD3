/* УРОК 24. ДОСТУП К СИМВОЛАМ СТРОКИ */

// Пример: 
let name ='Оля';
console.log(name[0]); // O

// Пример 1: 
console.log(name[1]); // л
 
// Пример 2:
console.log(name[2]); // я

/* У СТРОКИ КАК У МАССИВА,  ПЕРВЫЙ ЭЛЕМЕНТ ИМЕЕТ ИНДЕКС 0 */

// ДЗ 25

// Задание 1 
let city = 'Osijek'; // создали строку
console.log(city[0]); // O

// Задание 2  
console.log(city[3]); //  j

// Задание 3 
let word = 'JavaScript';
console.log(word[4]); // S

/* ЕСЛИ ОБРАТИТЬСЯ К НЕСУЩЕСТВУЮЩЕМУ СИМВОЛУ - undefined */
// Пример:
 let name1 = 'Костя';
 console.log(name1[10]); // undefined - потому что символа с индексом 10 - нет