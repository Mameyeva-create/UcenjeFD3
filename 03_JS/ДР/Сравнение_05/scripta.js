/* УРОК 5. СРАВНЕНИЕ */
// УНАРНЫЕ ОПЕРАТОРЫ - КОТОРЫЕ ПРИМЕНЯЮТСЯ К ОДНОМУ ОПЕРАНДУ (ЗНАЧЕНИЮ) 

/* Все операторы сравнения:
1.Больше > 
10 > 5 true

2.Меньше <
5 < 10 true

3.Mеньше или равно <=
5 <= 10 true

4.Больше или равно >=
18 >= 18 true

5.Равно == Сравнение_или_по_Типу_или_по_Значению_Возможно приведение к одному типу
console.log( 2 == '2') // true


6.Строго равно === Сравнение_и_по_Типу_и_по_Значению_Невозможно_приведение к одному типу
console.log( 2 === '2') // false

 let age = 25
(Положить значение ===)
console.log(age === 25);
означает проверить, равны ли значения

7.Не равно !==
Сравнение_или_по_Типу_или_по_Значению_Возможно приведение к одному типу
console.log( 25 !== 25); / false 

8. Строго не равно !===
Сравнение_или_по_Типу_или_по_Значению_Возможно приведение к одному типу
*/

// СРАВНЕНИЕ СТРОК - ПО СИМВОЛАМ В ТАБЛИЦЕ ЮНИКОД - Чем_дальше_символ_тем_больше
console.log('а' < 'б' ) // true
console.log('ы' > 'f') // true
console.log('JavaSkript' > 'Java') // true

// ДЗ 6
let age = 25;

console.log(age > 18); // true
console.log(age < 18); // false
console.log(age >= 25); // true
console.log(age <= 30); // true
console.log(age === 25); 
console.log(age !== 25); // false

let temperature = 15;

console.log(temperature > 20); // false
console.log(temperature < 20); // true
console.log(temperature === 15); // true
console.log(temperature !== 10); // true













