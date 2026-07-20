// uvjetno grananje if

// if

const uvjet = !true

// minimalna if sintaksa
if (uvjet) { // u if se ulazi ako je uvjet true
    console.log('Uvjet je true')

}

//

if (uvjet) {
    console.log('Uvjet je ispunjen')
    console.log('Ušao sam u if granu')
} else {
    console.log('uvjet je false')
    console.log('Ušao sam u else granu')
}

//korištenje {}
// 
console.log(uvjet)
if (!uvjet)
    console.log('if bez {} !uvjet')
else
console.log('else bez {} !uvjet')
// console.log('Ispisati kada je false')

//puna

const ocjena = 3 //

if(ocjena===3){
    console.log('Dobar')
} else if(ocjena===1){
    console.log('Nedovoljan')
} else if(ocjena === 2){
    console.log('Dovoljan')
} else if(ocjena<=0 || ocjena>5){
    console.log('Nje ocjena')
}
//
else{
    console.log('veće od 3')
}

if(ocjena>=1 && ocjena<=5){
    console.log('Ocjena je valjana')
} else{
    console.log('Nje ocjena')
}

//
//
console.log(ocjena>=1 && ocjena<=5 ?'Ocjena je valjana' : 'Nije ocjena')

//


const ime = ''
if (ime){ //ime
    console.log('Varijabla ime ima vrijednost')
} else{
    // falsy
    console.log('Varijabla ime NEMA vrijdnost, prazna je -> \' \'') //
} 

//
const b = Number('aaaa')

// parseInt('15a2') ->

console.log(b)
// 
if(!b){
console.log('Nisi unio broj')
} else{
    console.log(b*10)
}