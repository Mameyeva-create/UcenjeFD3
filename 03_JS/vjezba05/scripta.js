// uvjetno grananje if

// if radi s boolean tipom podatka

const uvjet = !true // true

// minimalna if sintaksa
if (uvjet) { // u if  granu se ulazi ako je uvjet true
    console.log('Uvjet je true')
}
// OVO NIKADA NE RADITI:
if (uvjet == true) {
    console.log('NE, NE I NE')
}

// kako je if binarno grananje tako postoji i else grana
if (uvjet) { // (!uvjet)
    console.log('Uvjet je ispunjen')
    console.log('Ušao sam u if granu') // ovaj drugi red je opravdanje {}
} else {
    console.log('uvjet je false')
    console.log('Ušao sam u else granu')
}

//korištenje {}
// kada se if ili else odnosi samo na jednu liniju, tada ne treba {}
console.log(uvjet)
if (uvjet) // (!uvjet) -> 'if bez {} !uvjet'
    console.log('if bez {} !uvjet')
else
    console.log('else bez {} !uvjet')
// console.log('Ispisati kada je false') -> ovo bi se uvijek izvodilo

//puna ( sve mogućnosti ) if sintaksa
const ocjena = 3 // 

if (ocjena === 3) {
    console.log('Dobar')
} else if (ocjena === 1) {
    console.log('Nedovoljan')
} else if (ocjena === 2) {
    console.log('Dovoljan')
} else if (ocjena <= 0 || ocjena > 5) { // logićki ILI operator ||
    console.log('Nje ocjena')
}
// možtmo imati koliko god želim else if
else {
    console.log('veće od 3')
}
// ovaj izraz u obje grane ima poziv iste funkcije -> console.log
if (ocjena >= 1 && ocjena <= 5) { // logićki operator -> I -> &&
    console.log('Ocjena je valjana')
} else {
    console.log('Nje ocjena')
}

// ternarni operator ?:
// inline if
console.log(ocjena >= 1 && ocjena <= 5 ? 'Ocjena je valjana' : 'Nije ocjena')

// JS specifićnosti
// falsy i truly

// if radi s booleun tipom podatka ( true ili false)
const ime = ''
if (ime) { // ime bi trebao biti booleun ALI NIJE jer je string ALI je prazan i zbog toga što je prazan on je falsy
    // truly
    console.log('Varijabla ime ima vrijednost')
} else {
    // falsy
    console.log('Varijabla ime NEMA vrijednost, prazna je -> \' \'') //
}
// -> \\ -> bakslash ( обратный слэш ) - служит для экранирования символов: console.log("Он сказал: \"Привет!\"")

// falsy broj: 0
// falsy objekt = null
// falsy za varijablu: undefined
// falsy NaN ( Not a Number )

const b = Number('aaaa')

// parseInt('15a2') -> 15
// Number ('15a') -> NaN

console.log(b)
// b je NaN -> falsy, !falsy = truly, a truly ulazi u if granu 
if (!b) {
    console.log('Nisi unio broj')
} else {
    console.log(b * 10)
}