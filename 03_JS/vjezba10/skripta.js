// while petlja -> цикл, который повторяет код, пока условие true
// radi s boolean tipom podatka

// while beskonacna petlija
while (true) {
    console.log('Edunova')
    break
}
// continue i break rade isto kao u for

let brojac = 0
let suma = 0
console.time('while petlja')
while (brojac++ < 100) {
    // console.log(brojac) // 1,2,3 ....100
    // if(brojac % 10 === 0){
    // console.log(brojac)
    // }
    suma += brojac
}
console.timeEnd('while petlja')
console.log(suma)

let brojUnos = '1262' // kao unio korisnik
console.time('ZB1')

suma = 0

for (let i = 0; i < brojUnos.length; i++) {
    suma += Number(brojUnos[i]) // знаки '1262' в Число // ovo se izvede 4 puta
}
console.timeEnd('ZB1')
console.log(suma) // 11


console.time('ZB2')
let broj = Number(brojUnos) // ovo se izvodi jednom

suma = 0

while (broj > 0) {
    suma += broj % 10 // 1262 -> 2 | 126 -> 6 | 12 -> 2 | 1 -> 1
    // 1262 % 10 = 2
    // 1262 / 10 = 126 cjelobrojno, 126 * 10 =1260, 1262 - 1260 = 2
    broj = broj - (broj % 10) // 1262 - 2 = 1260 | 126 - 6 = 120 | 12 - 2 = 10 | 1 - 1 = 0
    broj /= 10 // 1260 / 10 = 126 | 120 / 10 = 12 | 10 / 10 = 1 | 0
}
// 126 % 10 = 6 -> 126 / 10 = 12 cjelobrojno, 12 * 10 = 120, 126 - 120 = 6

// 12 % 10 = 2

// 1 % 10 = 1
console.timeEnd('ZB2')
console.log(suma)

// čitati za optimizaciju
// Big O notacija


// činjenica -> факт : u petlje ( for, while) se ne mora ući
 

// 
const x = 5
for (let i = 0; i > x; i++) {
    console.log('Usao u petlju') // nije usao
}
const podaciApi = [
    {
        ime: 'Pero'
    },
    {
        ime: 'Marko'
    },
    {
        ime: 'Marija'
    }
]
while(podaciApi.length > 0) {
    console.log('Usao u petlju', podaciApi.pop()?.ime)
} // funkcija pop() -> uzima zadnji element iz niza i skraćuje niz za ovaj element(smanji length)