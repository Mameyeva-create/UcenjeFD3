
const ime = 'Pero' //prompt('Unesi ime')

console.log(ime)

console.log(typeof ime)

console.log('ime', typeof ime, ime)

console.log(`Dobar dan ${ime}`)

const unosGodina = '2026'


const godina = Number(unosGodina) //number


console.log('unosGodina', typeof unosGodina, unosGodina,
    'godina', typeof godina, godina
)

const pi = parseFloat('3.14')


console.log('pi', typeof pi, pi)


const logickaVrijednost = true // druga moguća 

console.log('logickaVrijednost', typeof logickaVrijednost, logickaVrijednost)

// logickaVrijednost=false Uncaught TypeError: Assignment to constant variable


//2

let broj = 7
console.log('broj', typeof broj, broj)

// let broj = 8 Uncaught SyntaxError: Identifier 'broj' has already been declared

broj = 8
console.log('broj', typeof broj, broj)

broj = 'Osijek'
console.log('broj', typeof broj, broj)

//3
var x = 8
console.log(' var x', typeof x, x)
var x = true
console.log('var x', typeof x, x)

const velikBroj = 45454545454545n
console.log('velikiBroj', typeof velikBroj, velikBroj)



//const se ne može 
// const i;


let varijabla;


console.log('varijabla', typeof varijabla, varijabla) //

varijabla = 7
console.log('varijabla', typeof varijabla, varijabla)



// JSON - JavaScript Object N
const osoba = {
    id: 1,
    ime: 'Pero',
    placa: 2345.99,
    zaposlen: true
}


console.log('osoba', typeof osoba, osoba)
console.table(osoba)

// Arraj, niz, polja - a JS to zove object
const niz = [1, 2, 3, 4, 5, 23, 8] //uglata
console.log('niz', typeof niz, niz)
console.table(niz)


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


//u JS je i 

//stari 
function pozdrav(){
    console.log('Pozdrav iz funkcije!')}

console.log('pozdrav', typeof pozdrav )  //primjer

pozdrav()



//
const pozdravi=()=> console.log('Pozdrav')
console.log('pozdravi', typeof pozdravi)
pozdravi()



//
const id1= Symbol('Edunova')
const id2= Symbol('Edunova')

console.log('id1', typeof id1, id1)
console.log('id2',typeof id2,id2)






console.log('7' ==7) //true
console.log('7' ===7) // false
console.log(7===7 ) //true


console.log(id1==id2)
console.log(id1===id2)
