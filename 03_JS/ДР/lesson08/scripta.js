/* УРОК 8. ЛОГИЧЕСКИЕ ОПРЕАТОРЫ */

// Для проверки сразу несколько условий, есть три оператора:

/* 1. && - И
Означает:
Оба условия должны быть истинными. */

/* ГЛАВНОЕ ПРАВИЛО - ОПЕРАТОР && ИДЕТ СЛЕВА НАПРАВО И ИЩЕТ ПЕРВОЕ ЛОЖНОЕ ( false ) ЗНАЧЕНИЕ */

/* В JavaScript k false относятся:
false
0
''
null
undefined
NaN
*/
console.log(false && false) // false
console.log(true && false) // false
console.log(false && true) // false
console.log(true && true) // true

const moneyInWallet = 5
const iceCreamPrice = 2
const isStoreOpen = true
if (iceCreamPrice < moneyInWallet && isStoreOpen) {
  console.log('Вот ваше мороженое!')
} else {
  console.log('Магазин закрыт :(')
}

const reSult = 'Привет' && true && 5 && null && 10 
console.log(reSult) // null

// Пример:
const goDine = 16
const isYoung = goDine < 18
isYoung && console.log('Покажите паспорт!')
// Читается - если выражение - isYoung верно, тогда выполниться выражение - 'Покажите паспорт!'
//  Например:
// let age = 20;
// let hasTicket = true;

// if(age >= 18 && hasTicket) {
//     console.log('Можно войти'); // Можно войти
// }

// Если одно из условий станет ложным - ничего не выведется


/* 2. || - ИЛИ
Означает:
Достаточно чтобы было истинным одно из условий */

//  Например:
// let day = 'суббота';

// if(day === 'суббота' || day === 'воскресенье'){
//     console.log('Выходной'); // Выходной
// }

const result = '' || false || null || undefined || 0 || 'Привет' || 'Пока'
// выполнение происходит с_лева_направо_приводя каждый_к_booleвому_типу_данных, и после первого TRUE, работа останавливается
console.log(result) // Привет

const rezult = null || '' || 100 || 200 || 300
console.log(rezult)

/* 3. ! - НЕ
Этот оператор меняет зачение на противоположное */

// Например: 1
// let rain = false;
// console.log(!rain); //true

// Пример 2:
// let rain = true;
// console.log(!rain); // false

// ДЗ 9

// Задание 1
// let age = 20;
// let hasTicket = true;

// if(age >= 18 && hasTicket) {
//     console.log('Можно войти');
// }

//Задание 2
// let age = 20;
// let hasTicket =  false;

// if(age >= 18 && hasTicket) {
//     console.log('Можно войти'); // ' '
// }

// Задание 3
// let day = 'воскресенье';
// if (day === 'суббота' || day === 'воскресенье') {
//     console.log('Сегодня выходной');
// } else { console.log('Сегодня рабочий день');

// }

// Задание 4
// let rain = false;
// console.log(!rain); // true

let rain = true;
console.log(!rain); // false

