/* УРОК 6 */

// Условия ( if ) / Если
// (else) / Иначе
 
// Условное_ветвление_if_else

// ПРАВИЛО: после if не ставиться точка с запятой


// Пример
const year = 2222
if (year === 2024) {
    console.log('Ура!')
} else if (year === 3000){
    console.log('Нейросеть помогает Человечеству')
} else {
    console.log('Неизвестный год') // Неизвестный год
}
 
// Аналогично через Тернарный_оператор: ? :
 const yEar = 2222
 const message = yEar === 2026
 ? 'Ура!' : yEar === 3000
? 'Нейросеть помогает Человечеству' : 'Неизвестный год'
console.log(message) // Неизвестный год
  

//ДЗ 7
// Задание 1
let age = 20;
if(age >= 18) {
console.log('Можно голосовать');
}

// Задание 2
// let age = 16;

// if(age >= 18) {
// console.log('Можно голосовать');
// }

// Задание 3
// let age = 16;

// if (age >= 18) { 
//     console.log('Можно голосовать'); 
// }
// else { console.log('Нельзя голосовать'); 

// }

// Задание 4
let temperature = 28;
if (temperature > 25) { console.log('Жарко'); 

}
else { console.log('Прохладно'); 

}




