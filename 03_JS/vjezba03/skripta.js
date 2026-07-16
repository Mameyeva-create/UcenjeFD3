// operatori

//vjezba02 = == ===

//arifmetički operatori
// + - * /

// ovdje može doći promt s parseInt ili Number - ULAZ
const a = 2, b = 3  // deklariranje dvje varijable u jednoj liniji

let rez // undefined
// ALGORITAM
rez = a + b
// IZLAZ
console.log('rez', rez)  // 5

// neće biti primjere za - * /

// modulo operator (%) 
// ostatsk nakon cjelobrojnog djeljenja

// 9 % 2 = 1
// 4 * 2 = 8
// 9 - 8 = 1 <- ovo je rezultat

console.log('9 % 2', 9 % 2) // 1 
console.log('8 % 2', 8 % 2) // 0

// modulo se najčešće koristi pri odreďivanju parnosti broja

// operatori dodjele

rez += 2 //isto kao i rez = rez +2
console.log('rez+=2', rez)


// debugger
rez = rez + 3

console.log('rez=rez+3', rez)

// postoje i -=, *=, /=

// vjerovali ili ne
// najčešća operacija u programiranju je uvećanje varijable za 1

// način uvećanja varijable za 1
rez = rez + 1 // 11
rez += 1 // 12
rez++ // 13 -> ovaj način zapisa se nikada ne bi trebao koristiti sam u linij


// inkrement ++ i dekrement --
// dvojaku ulogu
// kada se koristi i kada se uvećava / smanjuje

let i = 0

//prvo koristi pa uvećaj
console.log('i++', i++) // 0 -> nakon ispisa i=1

// prvo uvećaj pa koristi
console.log('++i', ++i) // 2    -> 1 + 1 daje 2 i onda to ispiše


// isto sve vrijedi i za --

// ovo može biti na razgovoru za posao 
//debugger
i = 2
let j = 1
i = j++ - i // 1-2     j = 2, i = -1
j += --i - ++j // i= - 2 -3 = -5, j= -3
console.log(i - j) //1

//operatori usporeďivanja == ===

//razlićito !=, !==
console.log(5 != 4) // true
console.log('5' != 5) // false
console.log('5' !== 5) // true


// <, >, <=, >=
const godine = 18

console.log(godine > 18) //false
console.log(godine >= 18) //true

// logički operatori -> rade na logičkom tipu podataka: boolean


const ispunjenUvjet = godine >= 18
console.log('ispunjenUvjet', typeof ispunjenUvjet, ispunjenUvjet)



// AND, OR i NOT (I, ILI i NE)
// &&, || (Alt Gr + W) i ! U JS se ne smije koristi & na boolean, rezerviran je za operacije nad bitovima

const imaNovaca = true

console.log('Može u disko', ispunjenUvjet && imaNovaca) // true

// vrijede pravila boolean tablica:
// https://introcs.cs.princeton.edu/java/71boolean/images/truth-table.png


console.log(!imaNovaca)


//ternarni operator ?:
console.log(godine >= 18 ? 'Punoljetan' : 'Maloljetan')

// operator spajanja  - nadoljeplivanja (concatination)
// +
// + je operator zbrajanja kada se radi o dva broj
// u svim ostalim situacijama + spaja
console.log('Marko ima' + godine + 'godina') // ovo nije baš najbolje

console.log(`Marko ima ${godine} godina`)

const x = '7', y = 5
console.log(x + y) //75

//spread operator - operator proširivanja(...)

const niz = [2, 1] // konstanta koja se ne može mijenjati

console.table(niz)

const noviNiz =[0, ...niz, 3]

console.table(noviNiz)

const osoba ={
    ime: 'Pero',
    prezime: 'Perić'
}

const polaznik ={
    ...osoba,
    edukacia: 'FD'
}

// suprotno od proširivanja (...) je destructing operator

const[prvi, drugi] = [1,2] // dobijemo varijable prvi i drugi koje imaju vrijednost 1 i 2

console.log(prvi, drugi)

const{prezime, ...meniBitno} = polaznik
// prezime je ovdje otpadak - ne treba nama, ali mi je naćin da iz polaznika maknem prezime

console.log(meniBitno) // imam ime i edukacija, bez prezimena


let sifra
console.log(sifra ?? 'Šifra nije postavljena')

// optional chaining operater ?.

// idemo vidjeti što radi točca (.)


const korisnik = {
    adresa: {
        grad: 'Osijek',
        ulica: 'Trg'
    }
}

console.log(korisnik.adresa.grad) // Osijek
console.log(korisnik?.adresa?.ulica?.toUpperCase() ?? 'Nije postavljeno')







