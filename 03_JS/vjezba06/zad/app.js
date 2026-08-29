const rez = document.getElementById('rezultat')

document.getElementById('izvedi').addEventListener('click', () => {
    rez.innerHTML = ''
    const aString = document.getElementById('inputA').value
    const zad = Number(document.getElementById('zadatak').value)

    switch (zad) {
        case 1:
            // Početak 1 zadatka
            if (!aString) {
                rez.innerHTML = 'Obavezan unos'
                rez.style.color = 'red'
                return // prekida if, switch i function ()=>{}
            }
            switch (aString.toLowerCase().trim()) {
                case 'start':
                    rez.innerHTML = 'Pokretanje programa'
                    rez.style.color = 'green'
                    break
                case 'stop':
                    rez.innerHTML = 'Zaustavljanje programa'
                    rez.style.color = 'yellow'
                    break
                case 'pauza':
                    rez.innerHTML = 'Pauziranje programa'
                    rez.style.color = 'orange'
                    break
                default:
                    rez.innerHTML = 'Neodgovarajuća komanda'
                    rez.style.color = 'red'
            }
            // Završio 1. zadatak
            break
        case 2:
            // Počinje 2. zadatak 
            if (!aString) {
                rez.innerHTML = 'Obavezan unos'
                rez.style.color = 'red'
                return
            }
            if (aString.length > 1) {
                rez.innerHTML = 'Unesi jedno slovo'
                rez.style.color = 'red'
                return
            }
            switch (aString.toLowerCase()) {
                case 'a':
                case 'b':
                case 'c':
                    rez.innerHTML = 'Položio'
                    rez.style.color = 'green'
                    break
                case 'd':
                case 'f':
                    rez.innerHTML = 'Nije položio'
                    rez.style.color = 'yellow'
                    break
                default:
                    rez.innerHTML = 'Unesi A, B, C, D ili F'
                    rez.style.color = 'red'
            }
            // Završio 2. zadatak
            break
        case 3:
            // Počinje 3. zadatak 
            const ocjena = Number(aString)

            if (aString === '' || Number.isNaN(ocjena)) {
                rez.innerHTML = 'Unesi broj'
                rez.style.color = 'black'
                return
            }

            switch (true) {
                case ocjena < 50: {
                    rez.innerHTML = 'Nedovolian'
                    rez.style.color = 'red'
                    break
                }
                case ocjena >= 50 && ocjena <= 64: {
                    rez.innerHTML = 'Dovoljan'
                    rez.style.color = 'orange'
                    break
                }
                case ocjena >= 65 && ocjena <= 79: {
                    rez.innerHTML = 'Dobar'
                    rez.style.color = 'pink'
                    break
                }
                case ocjena >= 80 && ocjena <= 89: {
                    rez.innerHTML = 'Vrlo dobar'
                    rez.style.color = 'blue'
                    break
                }
                case ocjena >= 90 && ocjena <= 100: {
                    rez.innerHTML = 'Odlican'
                    rez.style.color = 'green'
                    break
                }
                default:
                    rez.innerHTML = 'Untsi broj od 0 do 100'
                    rez.style.color = 'red'

                    // Završio 3. zadatak
                    break
            }
        case 4:
            // Počinje 4. zadatak
            const ime = aString.toLowerCase()
/* toLowerCase() приведет введенный текст к одному регистру, и :
janjetina
Janjetina
JANJETINA
 все варианты будут работать */
            switch (ime) {
                case 'janjetina':
                case 'svinjetina':
                case 'teletina':
                    rez.innerHTML = '🥩 Meso'
rez.style.color = 'pink'
                    break
                case 'jabuka':
                case 'kruška':
                case 'šljiva':
                case 'jagoda':
                    rez.innerHTML = '🍎 Voće'
rez.style.color = 'green'
                    break
                default:
                    rez.innerHTML = ' ⚠️ Ne može se odrediti'
                    rez.style.color = 'black'
                    break
            }
        // Završio 4. zadatak

    }
})

// Zadaci

// 1. zadatak
// Napiši program koji prima string komandu ("start", "stop", "pauza") i ispisuje odgovarajuću poruku.
// Primjer ulaza: "pauza"
// Ispis: "Pauza programa"

// 2. zadatak
// Napiši program koji prima ocjenu ("A", "B", "C", "D", "F") i ispisuje:
// "Položio" za "A", "B", "C"
// "Nije položio" za "D" i "F"

// 3. zadatak
// Napiši program koji prima broj bodova (0–100) i ispisuje ocjenu:
// < 50 → "Nedovoljan"
// 50–64 → "Dovoljan"
// 65–79 → "Dobar"
// 80–89 → "Vrlo dobar"
// 90–100 → "Odličan"
// Napomena: koristi switch(true).


// 4. zadatak
// Za uneseno ime namirnice ispisi dali je voće ili meso ili nemozes odrediti
// npr. ulaz janjetina, svinjetina, teletina ispis Meso
// npr. ulaz jabuka, kruška, šljiva, jagoda ispis Voće
// npr. žablji kraci ispis Ne može se odrediti 



