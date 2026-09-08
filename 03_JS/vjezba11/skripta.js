const isDev = true

// funkcija je skup naredbi s odreďenom svrhom(с конкретной целью), s ciljem višestrukog poziva
// DRY - don`t repeat yourselfe - не повторяйтесь

//klasične funkcije

// 2 koraka rada s funkcija: definicija i pozivavanje (определение и вызов)

// redosljed definicije i pozivanja nije bitan
odradi() // Poziv funkcije odradi 1.1

// 1. ne prima vrijednost i ne vraća vrijednost

// 1.1 definiranje
// u () se nalaze parametri, ova ne prima parametre
// u tijelu nema return nekog tipa, ova je tipa void (пустота)




function odradi() {
    console.log('Poziv funkcije odradi 1.1')
}
// 1.2 poziv funkcije odradi
odradi() // Poziv funkcije odradi 1.1

document.getElementById('gumb2').addEventListener('click', odradi)

// korištenje bezimene funkcije
document.getElementById('gumb3').addEventListener('click', function() {
    console.log('Poziv iz bezimene funcije')
})

// 2. Prima parametre, ne vraća vrijednost (nema return)
// 2.1 definicija
function parniBrojevi(odBroja, doBroja) { // odBroja, doBroja su parametri, odvajaju se zarezom(,)
    for (let i = odBroja; i <= doBroja; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
// 2.2 poziv
parniBrojevi(2, 12) // 2 4 6 8 10 12
parniBrojevi(127, 134) // 128 130 132 134

// korisni primjer 2. vrste funkcije
function log(poruka) {
    if (!isDev) {
        return // ako nije Dev izaći iz funkcije van - short curcuiting
    }
    console.log('\n') // prelazi u novi red
    console.log('+----------+')
    console.log(poruka)
    console.log('+----------+')
}
log('Prva poruka, testiranje')

log('Osijek')

// 3. ne prima parametre, vraća vrijednost
// 3.1 definicija
/*
 * Funkcija daje slucajni broj. Ako su dva parametra poslana, daje slučajni broj izmeďu njih
 * Ako je jedan parametar poslan daje slučajni broj od 0 do tog parametra
 * Ako nije poslani niti jedanparametar daje slučajni broj od 0 do 1
 * @param {*} odBroja 
 * @param {*} doBroja 
 * @returns slucajni broj
 */
function slucajniBroj(odBroja = 0, doBroja = 0) {  
    /* () znači da ne prima parametre, daje zadanu vrijednost, to su opcoinalni perametri */
    if (odBroja && doBroja) {
        return (Math.random() * (doBroja - odBroja) + odBroja).toFixed(0) // matematicka formula
    }
    // od nula do odBroja
    if (odBroja) {
        return (Math.random() * odBroja).toFixed(0)
    }
    // () -> prazna zagrada -> ne prima parametre
    return Math.random()
}
//3.2 poziv
slucajniBroj()
// funkcije koje vraćaju vrijednost kod poziva čiji se rezultat ne koristi se izvedu i 'bace u vjetar'

// varijabli sb dodjeljujem izvoďenja funkcije  slucajniBroj
const sb = slucajniBroj()
log(sb)

// korištenjebfunkcije unutar parametra druge funkcije
log(slucajniBroj())

for (let i = 0; i < 6; i++) {
    log(slucajniBroj(1, 45)) // zovem funkcije slucajniBroj a dva parametra
}
log(slucajniBroj(20))

// 4. prima parametre, vraća vrijednost
//4.1 definicija
function zbrojPrimBrojeva(odBroja, doBroja) {
    let suma = 0, prim = true
    for (let i = odBroja; i <= doBroja; i++) {
        if (i < 2) {
            continue
        }
        prim = true
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prim = false
                break
            }
        }
        if (prim) {
            console.log(i)
            suma += i
        }
    }
    return suma
}

// 4.2 poziv
log(zbrojPrimBrojeva(-2,10)) // 17
log(zbrojPrimBrojeva(100,120))

const ime = 'pero' // PERO

// slučaj 4
log(ime.charCodeAt(0)) // ASCII https://ctf.xfer.hr/images/osint/ascii.png

// slučaj 3
log(ime.toUpperCase())

// slucaj 2
console.log('slucaj 2') // 

// slucaj 1
// OBRADA DOGAÐAJA NA STRANICI

// rekurzija
// rekurzija je kada funkcija zove sama sebe uz uvijet prekida rekurzije
// u rekurziji moramo paziti na stackowerflow
function zbroj(broj) {
    if (broj === 1) { // ovo je uvjet prekida rekurzije
        return 1
    }
    return broj + zbroj(broj - 1)
}
log(zbroj(100))

// hello() - arrow funkcijama ne mozemo pristupiti prije inicializiranja

// 'moderne funkcije' -> arrow function
const hello = () => log('Hello iz arrow') // Hello iz arrow
hello()

const brojevi = (a, b) => {
    return [a, 3, b]
}
log(brojevi(1, 2)) // 1, 3, 2


// IIFE - Immediately Invoked Funcion Expression -> функциональное выражение, которое немедленно вызывается:
    ; (() => {
        console.log('Kreirana funkcija i odmah izvedena')
    })()