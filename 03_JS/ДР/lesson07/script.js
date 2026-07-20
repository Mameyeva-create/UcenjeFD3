/* УРОК 7. else if */

/* Например:1
let score = 82;

if (score >= 90) {
console.log('Отлично');
} else if (score >= 75) {
 console.log('Хорошо');
 } else if (score >=60){
  console.log('Удовлетворительно');
  } else {
    console.log('Не сдал');
} // ХОРОШО 
Компьютер идет сверху вниз и после первого истинного условия, остальные проверки не выполняются 

Пример 2:
let hour = 14;

if (hour < 12) {
console.log('Доброе утро');
} else if (hour < 18){
 console.log('Добрый день');
 } else {
    console.log('Добрый вечер');
  } //  ДОБРЫЙ ДЕНЬ
*/

// ДЗ 8

// Задание 1,2
let score = 50; // 85;

if (score >= 90) {
  console.log('Отлично');
} else if (score >= 75) {
  console.log('Хорошо');
} else if(score >=60){
  console.log('Удовлетворительно');
} else {
  console.log('Не сдал');
}  // НЕ СДАЛ / ХОРОШО

// Задание 3
let hour = 20;

if(hour < 12) {
  console.log('Доброе утро');
  } else if(hour < 18) {
    console.log(' Добрый день')
  } else { 
    console.log('Добрый вечер');
  }
