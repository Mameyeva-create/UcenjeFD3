// varijabla je prostor u memoriji
// može biti različitih tipova podataka
// u JS ES6 postoje tri načina deklariranja varijabli
// 1. način je CONST

// ulaz
const ime = 'Pero' //prompt('Unesi ime')
// kao da je svaki puta korisnik unio Pero
// izlaz
console.log(ime)

/* 3. string */
// kojeg je tipa podatka varijabla IME
console.log(typeof ime) // ispisuje tip podatka varijable // string

console.log('ime', typeof ime, ime) //ime string Pero

console.log(`Dobar dan ${ime}!`) // Dobar dan Pero!

/* 2. number */
const unosGodina = '2026' // 2026 // string

// konverzija u broj
const godina = Number(unosGodina) //number


console.log('unosGodina', typeof unosGodina, unosGodina,
    'godina', typeof godina, godina // unosGodina, string, 2026, godina, number, 2026
)

// decimalni brojevi - десятичные числа
const pi = parseFloat('3.14')

console.log('pi', typeof pi, pi)

/* 3. tip podaatka boolean - logićka vrijednost */
const logickaVrijednost = true // druga moguća vrijednost - false

console.log('logickaVrijednost', typeof logickaVrijednost, logickaVrijednost)  // logickaVrijednost, boolean, true

// logickaVrijednost=false Uncaught TypeError: Assignment to constant variable


// 2 način deklariranja varijable (prava varijabla)
let broj = 7
console.log('broj', typeof broj, broj) // broj, number, 7

// let broj = 8 Uncaught SyntaxError: Identifier 'broj' has already been declared

broj = 8
console.log('broj', typeof broj, broj)

broj = 'Osijek'
console.log('broj', typeof broj, broj) //broj, string, Osijek

// 3 naċin deklariranja variabli //nećemo koristiti
var x = 8
console.log(' var x', typeof x, x) // var x, number, 8
var x = true
console.log('var x', typeof x, x) // var x, boolean, true

const velikBroj = 45454545454545n
console.log('velikiBroj', typeof velikBroj, velikBroj)  // velikBroj, bigint, 45454545454545n


//const se ne može deklarirati bez vrijednosti
// const i;

let varijabla;

console.log('varijabla', typeof varijabla, varijabla) // varijabla undefined - переменная не определена

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla) // varijabla, number, 7


// JSON - JavaScript Object Notation
const osoba = {
    id: 1,
    ime: 'Pero',
    placa: 2345.99,
    zaposlen: true
} 
console.log('osoba', typeof osoba, osoba) // osoba object {id: 1, ime: 'Pero', placa: 2345.99, zaposlen: true}

console.table(osoba) // tablica

/* Arraj, niz, polja - a JS to zove OBJEKT */
const niz = [1, 2, 3, 4, 5, 23, 8] //uglata
console.log('niz', typeof niz, niz) // niz object (7) [1, 2, 3, 4, 5, 23, 8]
console.table(niz) // tablica

const json=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
console.table(json)


/* 4 u JS je i fukcija tip podatka */

//stari  način definiranja funkcije
function pozdrav(){
    console.log('Pozdrav iz funkcije!')}

console.log('pozdrav', typeof pozdrav,/* pozdrav */ )  // pozdrav function
// poziv funkcije
pozdrav() // Pozdrav iz funkcije!

// novi način definiranja funkcije
const pozdravi = () => console.log('Pozdrav iz nove funkcije')
console.log('pozdravi', typeof pozdravi)
// poziv funkcije
pozdravi()


// ovo nečemo koristiti
const id1= Symbol('Edunova')
const id2= Symbol('Edunova')

console.log('id1', typeof id1, id1) // id1 symbol Symbol(Edunova)
console.log('id2',typeof id2, id2)

// = - je operator dodjelivanja - распределения
 
// operator usporedbe  - сравнения  == i ===

// == usporedba po vrijednosti - сравнение по значению
// === esporedba i po vrijednosti i po tipu podatka - и по Типу и по Значению
console.log('7' ==7) //true  // значение'7' ==  7 число /* разные типы, значения одинаковые */
console.log('7' ===7) // false /* Сравнивает и значения и тип */
console.log( 7===7 ) //true


console.log(id1==id2) // false
console.log(id1===id2) // false
