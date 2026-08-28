/* УРОК 9. ФУНКЦИИ */

// Для ввода одних и тех же команд, например 10 раз,- существуют Функции

//  Например:
// function hello(){ // имя функции
//     console.log('Привет');
// }
// hello(); // запускает функцию -> вызывает
// hello();
// hello();

//Пример2:
const message = 'Глобльный привет!'
function logMessage() {
    const message = 'Локальный привет!'
    console.log(message)
    for (let i = 0; i < 3; i++) {
        const message = `Интерация цикла №${i}` /* Получается 3 интерации:
        i = 0 -> Интерация цикла №0
        i = 1 -> Интерация цикла №1
        i = 2 -> Интерация цикла №2

        когда i = 3, 3 < 3 -> это false и цикл заканчивается
*/
        console.log(message) // Интерация цикла №0
        // Интерация цикла №1
        // Интерация цикла №2

    }
}
logMessage() // Локальный привет!
console.log(message) // Глобальный привет!

// Пример3:
// ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ
{
    const number = 1
    console.log(number)
    {
        const number = 2
        console.log(number)
        {
            const number = 3
            console.log(number) // все в {} -> Локальная область
        }
    }
}
// console.log(numbers) // Область вне -> Не может видеть и показать то что в Локальной области!

// Пример4:
function logMessage(message, count) // Внутри() -> ПАРАМЕТРЫ ФУНКЦИИ 
{
    for (let i = 0; i < count; i++) {
        console.log(message)
    }
}
logMessage('Привет!', 3) // Внутри() -> АРГУМЕНТЫ // 3 раза Привет! 
logMessage('Пока!', 2) // 2 раза Пока!

// Пример5:
const globalMessage = 'Привет'
function logMessage(message, count = 4) {
    const smsFormatted = `(((${message})))`
    for (let i = 0; i < count; i++) {
        console.log(smsFormatted)
    }
}
logMessage(globalMessage)
// console.log(globalMessage)

/* ДЕФОЛТНЫЕ ЗНАЧЕНИЯ (default values) - это значения, которые программа использует по умолчанию, если мы ничего не указали*/

// Пример6:
function sumFiveNumbers(
    num5,
    num1 = 100,
    num2 = 200,
    num3 = 300,
    num4 = 400

) {
    const sum = num1 + num2 + num3 + num4 + num5
    console.log(`Сумма чисел равна ${sum}`)
}
sumFiveNumbers(1000) // 2000

// ДЗ 10

// Задание 1
function hello() {
    console.log('Привет');
}
hello();
hello();
hello();

//Задание 2
function bye() {
    console.log('Пока');
}
bye();
bye();

// Задание 3
function myName() {
    console.log('Меня зовут Оля');
}
myName();



