/* УРОК 3. ТИПЫ ДАННЫХ */

/***************************************** 

В  языке_JS -есть 8 ТИПОВ ДАННЫХ:

1. String - текст _ const name = 'Olya' 
2. Numder - число _ const age = 50 
3. Boolean - true / false _ const isDeveloper = true
4. Bigint - (числа с кол-вом цифр > 14 _ Квадралионы) _ const power = 999999999999999n - 
5. Simbol()  _ const sign = Symbol()
6. Undefined _ ( когда Значение переменной не присвоено)

7. Objekt  _ const user = {
login: '123',
password: 'qwerty',
}
8. Null _ const data = null



*****************************************/
// 1.СТРОКА (STRING) -
//  ( Записывается в кавычках: ( "" ), ( ' ' ) или ( ` ` )-baktik -они дают дополнительную функциональность )

const greeting = 'Привет'
const nAme = "Olya"
const goodbye = `Пока`

const message = `${greeting}, ${nAme}!` // ИНТЕРПОЛЯЦИЯ СТРОК - способ всавить значение переменной внутрь строки
console.log(message) // Привет, Olya!

// или КОНКАТЕНАЦИЯ  - склеивание строк в одну:
const naMe = "Olya"
console.log("Привет, " + naMe + "!") // Привет, Olya!

// Можно вставить и выражение:
const a = 5
const b = 3
console.log(`Сумма: ${a + b}`) // Сумма: 8


// Любой текст.
let City = 'Osijek';

// 2.ЧИСЛО (NUMBER)
const posX = 50
const posY = -100
const posZ = 1.55
const point = (posX + posY + posZ) * 2 / posX
console.log(point) // -1.9380000000000002
console.log('Слово' / 100) // NaN - ( not a Number)
console.log(100 / 0) // Infinity - ( Бесконечность)
console.log(-100 / 0) // -Infinity - ( Отрицательная Бесконечность)

// 3.BIGINT _ для работы с большими числами без ошибок
// -88888888888888898 < number < 9999999999999989
console.log(88888888888888898n + 1n)
console.log(88888888888888898n + 2n)
// JavaScript не разрешает складывать BigInt и Number напрямую - поэтому 1 = 1n, 2 = 2n, оба числа должны быть BigInt
const numBer = 1_000_000_000 // так можно писать для удобства


// 4.BOOLEAN
// TRUE - / ДА / ИСТИНА / ВКЛЮЧЕНО
// FALSE - / НЕТ / ЛОЖЬ / ВЫКЛЮЧЕНО 

// 5. NULL - Пустое или неизвестное значение - используют если данные появятся
let data = null
console.log(data) // null

// 6. UNDEFINED - Значение не было присвоено
let namE
console.log(namE) // undefined

// 7. OBJEKT
// Пример1
const uSer = {
    nAMe: 'Olya',
    Age: 50,
    isDevelopEr: true,
}
// Пример2
const numBers = [4, 8, 17, 23, 76]
// Пример3
const map = new Map()
// Пример4
const set = new Set()
// Пример5
const date = new Date()

// ПРОВЕРИТЬ ТИП ДАННЫХ - ОПЕРАТОР - typeof
const mEssage = 'Привет'
console.log(typeof mEssage) // string
console.log(typeof 100) // number
console.log(typeof 100n) // bigint
console.log(typeof true) // boolean
console.log(typeof null) // object - это баг, есть статья
console.log(typeof undefined) // undefined
console.log(typeof {} ) // object
console.log(typeof []) // object

// ПРЕОБРАЗОВАНИЕ ТИПОВ ДАННЫХ - Явные и неявные:
// НЕЯВНЫЕ:
// Пример 1
const num = 111 // JS  число приводит к типу текст
const str = '222'
const result = num + str
console.log(result) // 111222
console.log(typeof result) // string

// Пример 2
console.log('16' / '8') // 2, строки в число, потому что деление
console.log(typeof ('16' / '8') ) // number

// ЯВНЫЕ:
const godine = 11
console.log(typeof godine) // number
console.log(typeof String(godine)) // string

const sTr = '1000'
const nUm = Number(sTr)
console.log(nUm)
console.log(typeof nUm) // number
console.log(Number('точно-не-число'))
console.log(Number(true)) // 1
console.log(Number(false)) // 0
console.log(Number(null)) // 0
console.log(Number(undefined)) // NaN

console.log(Boolean(-1)) // true
console.log(Boolean(0)) // false
console.log(Boolean(1)) // true
console.log(Boolean(2)) // true
console.log(Boolean('Привет!')) // true
console.log(Boolean(0)) // false
console.log(Boolean('')) // false
console.log(Boolean(' ')) // true
// ДЗ
let ime = 'Оля';
let age = 25;
let student = true;
let city = 'Osijek';

console.log(ime);
console.log(age);
console.log(student);
console.log(city);

// let age = '25';
// console.log(age);

// age = 25;
// console.log(age); 

let aGe = 25;