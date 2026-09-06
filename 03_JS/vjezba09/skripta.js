// ponavljanje (iteracije) petlje (loops)

// u konzolu ispisati 10 puta Edunova jedno ispod drugog

console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')
console.log('Edunova')

// ima 5 varianta ponavljanja

// for ( inicialna vrijednost brojača; uvjet izlazka iz petlje; uvećaje / umanjenje)

console.log('===============')
// rješenje gornjeg zadatka:
for (let i = 0; i < 10; i++) {
    console.log('Edunova') // 10 Edunova
}
console.log('===============')

// unutar petlje -> i <- mijenja vrijednost
for (let i = 0; i < 10; i++) {
    console.log(`i=${i + 1}`) // i=1.....i=10
}
console.log('===============')
//  unutar petlje 
let suma = 0
// odradio je 100 iteracija
for (let i = 0; i < 100; i++) {
    suma += i + 1
    // debugger
}
console.log(suma) // 5050

console.log((100 * (100 + 1)) / 2) // 5050
console.log('===============')

// nekoliko primjera šetanja s pomoću for petlje:
for (let i = 10; i > 0; i--) { // ОТ БОЛЬШЕГО К МЕНЬШЕМУ
    console.log(i)
}
console.log('===============')

// manji prema većem za 2
for (let i = 7; i < 20; i += 2) { // от 7 +2 до 20
    console.log(i)
}
console.log('===============')

// simuliramo unos korisnika
const pocetak = 7
const kraj = 20
const uvecanje = 2

for (let i = pocetak; i < kraj; i += uvecanje) {
    console.log(i)
}
console.log('===============')

// ugnježďivanje petlje
document.write('<table>') //делаем таблицу в HTML
// rudimentarna tablica množenja -> элементарная таблица умножения
for (let i = 1; i <= 10; i++) {
    document.write('<tr>')
    for (let j = 1; j <= 10; j++) {
        document.write(`<td>${i * j}</td>`)
    }
    document.write('</tr>')
}
document.write('</table>')

// petlju (svaku) možemo preskočiti i nasilno prekinuti
for (let i = 0; i < 10; i++) {
    if (i === 3) {
        continue // nastavlja (preskače petlji) od pocetka
    }
    if (i === 7) {
        break // nasilno prekida izvoďenje petlje
    }
    console.log(i)
}

console.log('===============')

const niz = [1, 2, 3, 4, 5, 6, 7]
// ispisati sve elemente niza:
for (let i = 0; i < niz.length; i++) {
    console.log(niz[i])
}
console.log('===============')

// ispisati od zadnjeg prema prvom
for (let i = niz.length - 1; i >= 0; i--) {
    console.log(niz[i])
}
console.log('===============')

// string je niz znakova
const ime = 'Nina'
for (let i = 0; i < ime.length; i++) {
    console.log(ime[i])
}

console.log('===============')

//beskonacna petlja
const spavaj = (ms) => new Promise(r => setTimeout(r, ms))

async function odradi() {

    for (; ;) {
        // console.log('U beskonačnoj petlji sam')
        // break
        document.getElementById('lista').innerHTML = '<li>' + (Math.floor(Math.random() * 1000) + 1) + '</li>'
            + document.getElementById('lista').innerHTML

        break
        await spavaj(1500)
    }
}
odradi()