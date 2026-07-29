const isDev = true
odradi()


function odradi() {
    console.log('Poziv funkcije odradi 1.1')
}
// 1.2 poziv 
odradi()

document.getElementById('gumb2').addEventListener('click', odradi)

document.getElementById('gumb3').addEventListener('click', function () {
    console.log('Poziv iz bezimene funcije')
})

//
function parniBrojevi(odBroja, doBroja) {
    for (let i = odBroja; i <= doBroja; i++) {
        if (i % 2 === 0) {
            console.log(i)
        }
    }
}
parniBrojevi(2, 12)
parniBrojevi(127, 134)



//
function log(poruka) {
    if (!isDev) {
        return
    }
    console.log('\n') // 
    console.log('+----------+')
    console.log(poruka)
    console.log('+----------+')
}
log('Prva')
log('Osijek')

// 3.1
/**
 * 
 * 
 * @param {*} odBroja 
 * @param {*} doBroja 
 * @returns slucajni broj
 */
function slucajniBroj(odBroja = 0, doBroja = 0) {
    if (odBroja && doBroja) {
        return (Math.random() * (doBroja - odBroja) + odBroja).toFixed(0)
    }
    if (odBroja) {
        return (Math.random() * odBroja).toFixed(0)
    }

    return Math.random()
}

//3.2 poziv
slucajniBroj()
//
const sb = slucajniBroj()
log(sb)

//
log(slucajniBroj())
for (let i = 0; i < 6; i++) {
    log(slucajniBroj(1, 45))
}
log(slucajniBroj(20))

//4
//4.1
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

// 4.2 
log(zbrojPrimBrojeva(-2,10)) // 17
log(zbrojPrimBrojeva(100,120))

const ime = 'pero'
log(ime.charCodeAt(0))


log(ime.toUpperCase())

// slucaj 2
console.log('slucaj 2')

// slucaj 1

//rekurzija
//
function zbroj(broj){
    if(broj===1){ // 
        return 1
    }
    return broj + zbroj(broj -1)
}
log(zbroj(100))

//
const hello = () => log('Hello iz arrow')
hello()

const brojevi = (a,b) =>{
    return[a,3,b]
}
log(brojevi(1,2))

;(() =>{
    console.log('Kreirana funkcija i odmah izvedena')
})()