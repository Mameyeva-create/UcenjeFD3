/* УРОК 9. ФУНКЦИИ */

// Для ввода одних и тех же команд, например 10 раз,- существуют Функции

//  Например:
// function hello(){ // имя функции
//     console.log('Привет');
// }
// hello(); // запускает функцию -> вызывает
// hello();
// hello();

/* Function Declaration */

console.log(sum(2, 3)) // объявление раньше чем объявлена функция -> это 1 особенность Function Declaration -> Поднятие ли Хойстинг( hoisting )
function sum(a, b) { // sum -> имя функции ( a + b ) -> параметры функции
    return a + b
}

// 2 особенность Function Declaration -> возможность перезаписать:
function logMeSsage() {
    console.log('Привет')
}
logMeSsage() // Пока
function logMeSsage() {
    console.log('Пока')
}
// 3 особенность Function Declaration:
function logAll() {
    console.log(arguments)
}
logAll('Привет', 555, false)

/* Function Expreshion */
// перезаписивать можно через let
// Поднятие не разрешено

const logHello = function () { // logHello -> название переменной
    console.log('Привет')
}
logHello()

/* Arrow Function  - Стрелочная Функция */
// Cтрелка => дала название arrow function
// До объявления в коде нельзя исползовать
// Не имеет доступа к Неявной Переменной arguments
// Не имеет своего контекста и ключевое слово this покажет из внешнего контекста:
const user = {
    name: 'Оля',
    sayName: function () {
        const arrow = () => {
            console.log(this.name)
        }
        arrow()
    }
}
user.sayName() // Оля 

// Особенность Arrow Function - неявный возврат из функции если записана в одну строку:
// Пример1:
const suM = (a, b) => a + b
console.log(suM(1, 2))
// Пример2:
const doSomething = (num) =>
    num % 2 === 0 ?
        num / 2 :
        (num + 1) / 2
// Аналогично:
const doSomeThing = (num) => {
    const isEven = num % 2 === 0
    return isEven ?
        num / 2 :
        (num + 1) / 2
}
/*****************************/
function fn1() {
    return 'Я функция fn1'
}

const fn2 = function () {
    return 'Я функция fn2'
}

const fn3 = () => {
    return 'Я функция fn3'
}
console.log(fn1) // ƒ fn1() { return 'Я функция fn1' }
console.log(fn2) // ƒ () { return 'Я функция fn2' }
console.log(fn3) // () => { return 'Я функция fn3' }

console.log(fn1()) // Я функция fn1
console.log(fn2()) // Я функция fn2
console.log(fn3()) // Я функция fn3


const fN1 = () => {
    return 'Я функция fn1'
}
const fN2 = fN1
console.log(fN2()) // Я функция fn1
/*****************************/

/* Callback ( колбэк) - функция, которую мы передаем другой функции, чтобы она вызвала ее позже */
// Пример1:
function SayHello() {
    console.log('Привет!')
}

function doSometHing(callback) {
    callback()
}
doSometHing(SayHello)
/*****************************/
// Пример2:
document.querySelector('.button').addEventListener('click', () => {
    document.querySelector('.menu').classList.add('is-active')
})
// Аналогичная запись более понятной формой:
const showMenu = () => {
    document.querySelector('.menu').classList.toggle('is-active')
}
document.querySelector('.button').addEventListener('click', () => {
    showMenu()
})

/* button.addEventListener('click', () => {
    console.log('Нажали')
}) 
// () => { console.log('Нажали') } -> callback */ 
// document -> вся HTML страница с кот. работает сейчас JS
// .querySelector('.button') -> найди на стр элемент ('.button')
// Точка(.) -> означает class
// document.querySelector('.button') -> найденная кнопка
// .addEventListener -> означает -следи за событием на этом элементе
// .addEventListener('click', () -> следи за нажатием кнопки (кликом)
// () => {} -> arrow function(стрелочная функция): говорит - когда произойдет click, выполни код внутри {}
// .add() -> добавь класс - (is-active)
// до клика: <div class="menu">
// после клика: <div class="menu is-active"
// клик -> JS добавляет is-active -> CSS показывает меню
/*****************************/
// Пример3:
const LogMessage = (actionBefore, actionAfter) => {
    actionBefore()
    console.log('Привет!')
    actionAfter()
}
const Fn1 = () => console.log('before')
const Fn2 = () => console.log('after')

// LogMessage(Fn1, Fn2) или:
/* LogMessage(
  actionBefore  () => console.log('before')
   actionAfter () => console.log('after')
)
*/

// Обычная функция:
function sAyHello() {
    console.log('Привет!')
}
/* Та же функция как arrow function:
const sAyHello = () => {
    console.log('Привет!')
    }
*/

// Если функция делает одно действие и возвращает результат, можно убрать {} и return:
const sUm = (a, b) => a + b
// Это полностью тоже самое:
/* const sUm =(a, b) => {
return a + b
 }
*/

// Если параметр один, скобки можно убрать:
const double = x => x * 2
// Вместо:
/* const double = (x) => {
   return x * 2
}
*/
// Если праметров не -> Скобки обязательны:
const sayHello = () => {
    console.log('Привет')
}

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

// Функция может вощвращать результатом другую функцию:
const validate = (hasAccess) => { // validate -> имя переменной
    if (hasAccess) { // true / false
        return () => console.log('Доступ разрешен :)')
    } else {
        return () => console.log('Доступ запрещен :(')
    }
}
const lagMessage = validate(true) // если false //  Доступ запрещен :(
lagMessage() // Доступ разрешен :)

/* Аналогичная упрощенная запись:
const validate = (hasAccess) => {
    return hasAccess
    ? () => console.log('Доступ разрешен :)')
    : () => console.log('Доступ запрещен:(')
}
const lagMessage = validate(false)
lagMessage()
*/

/* Еще более упрощенная :
const validate = (hasAccess) => hasAccess
? () => console.log('Доступ разрешен :)')
: () => console.log('Доступ запрещен :(')

const lagMessage = validate(false)
lagMessage() */

/****************************
  Глаголы- префиксы для функций:
 * get -> получить какое-то значение
 * set -> установить какое-то значение
 * create -> создать какую-то сущность
 * update -> обновить какую-то сущность
 * delete -> удалить какую-то сущность
 * show -> показать что-то
 * hide -> скрыть что-то
 * search -> найти что-то
 * calc ->вычислить что-то
 * check -> проверить что-то 
*/