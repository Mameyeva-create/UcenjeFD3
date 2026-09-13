document.getElementById('kreiraj').addEventListener('click', () => {
    kreirajMatricu()
})
// =====================================================
// GLAVNA FUNKCIJA
// =====================================================
function kreirajMatricu() {

    const redovi = Number(document.getElementById('redovi').value)
    const stupci = Number(document.getElementById('stupci').value)
    const smjer = Number(document.getElementById('smjer').value)

    const rezultat = document.getElementById('rezultat')

    rezultat.innerHTML = ''

    // =====================================
    // PROVJERA UNOSA
    // =====================================
    if (redovi < 2 || redovi > 50 || stupci < 2 || stupci > 50) {
        rezultat.innerHTML = '<div class="error">Broj redaka i stupaca mora biti između 2 i 50.</div>'
        return
    }
    // =====================================
    // VARIJANTE 1 - 8
    // =====================================
    let putanja = []
    if (smjer >= 1 && smjer <= 8) {
        let kut, kazaljka;
        if (smjer === 1) { kut = 'dolje-desno'; kazaljka = true }
        else if (smjer === 2) { kut = 'dolje-lijevo'; kazaljka = true }
        else if (smjer === 3) { kut = 'gore-lijevo'; kazaljka = true }
        else if (smjer === 4) { kut = 'gore-desno'; kazaljka = true }
        else if (smjer === 5) { kut = 'dolje-desno'; kazaljka = false }
        else if (smjer === 6) { kut = 'dolje-lijevo'; kazaljka = false }
        else if (smjer === 7) { kut = 'gore-lijevo'; kazaljka = false }
        else { kut = 'gore-desno'; kazaljka = false }
        putanja = spiralnaPutanjaIzKuta(redovi, stupci, kut, kazaljka)
        // =====================================
        // VARIJANTE 9 - 16
        // =====================================
    } else {
        let pocetniSmjer, kazaljka;
        // if (smjer >= 9 && smjer <= 16) {
        if (smjer === 9) { pocetniSmjer = 'lijevo'; kazaljka = true }
        else if (smjer === 10) { pocetniSmjer = 'desno'; kazaljka = true }
        else if (smjer === 11) { pocetniSmjer = 'gore'; kazaljka = true }
        else if (smjer === 12) { pocetniSmjer = 'dolje'; kazaljka = true }
        else if (smjer === 13) { pocetniSmjer = 'lijevo'; kazaljka = false }
        else if (smjer === 14) { pocetniSmjer = 'desno'; kazaljka = false }
        else if (smjer === 15) { pocetniSmjer = 'gore'; kazaljka = false }
        else { pocetniSmjer = 'dolje'; kazaljka = false }
        putanja = spiralnaPutanjaIzSredine(redovi, stupci, pocetniSmjer, kazaljka)
    }
    // =====================================
    // ISPIS PRAZNE TABLICE
    // =====================================
    let html = '<table>'
    for (let i = 0; i < redovi; i++) {
        html += '<tr>'
        for (let j = 0; j < stupci; j++) {
            html += `<td id="cell-${i}-${j}"data-red="${i}" data-stupac="${j}"></td>`
        }
        html += '</tr>'
    }
    html += '</table>'
    rezultat.innerHTML = html
    // =====================================
    // ANIMACIJA
    // =====================================
    let korak = 0
    function animacija() {
        if (korak >= putanja.length) {
            const zadnja = putanja[putanja.length - 1]
            if (zadnja) {
                const zadnjaCelija =
                 document.getElementById(`cell-${zadnja[0]}-${zadnja[1]}`)
                    zadnjaCelija.classList.add('center-cell')
            }
    // =====================================
    // PITANJE ZA NOVU MATRICU
    // =====================================
let ponovno = prompt(
    'Želite li napraviti još jednu matricu? Unesite DA ili NE.'
)
if (ponovno === null) {ponovno = 'NE'}
else {ponovno = ponovno.trim().toUpperCase() }
while (ponovno !== 'DA' && ponovno !== 'NE') {
ponovno = prompt('Molimo unesite samo DA ili NE.')
if (ponovno === null) {ponovno = 'NE'}
else {ponovno = ponovno.trim().toUpperCase() }
}      
if (ponovno === 'DA') {kreirajMatricu() }
return
    }
        const [red, stupac] = putanja[korak]
        const celija = document.getElementById(`cell-${red}-${stupac}`)
        celija.innerHTML = `<span class="broj">${korak + 1}</span>`
        // =====================================
        // ZELENA VEZA
        // =====================================
        if (korak > 0) {
            const [predRed, predStupac] = putanja[korak - 1]
            const predCelija = document.getElementById(`cell-${predRed}-${predStupac}`)

            if (red === predRed && stupac === predStupac + 1) { predCelija.classList.add('connect-right') }
            if (red === predRed && stupac === predStupac - 1) { predCelija.classList.add('connect-left') }
            if (stupac === predStupac && red === predRed + 1) { predCelija.classList.add('connect-down') }
            if (stupac === predStupac && red === predRed - 1) { predCelija.classList.add('connect-up') }
        }
        korak++
        setTimeout(animacija, 200)
    }
    animacija()
}
// =====================================================
// SPIRALA IZ KUTA
// =====================================================
function spiralnaPutanjaIzKuta(redovi, stupci, kut, kazaljka) {
    const putanja = []
    const posjeceno = Array.from({ length: redovi }, () => Array(stupci).fill(false))
    let red, stupac
    // =====================================
    // POČETNA TOČKA
    // =====================================
    if (kut === 'dolje-desno') {
        red = redovi - 1; stupac = stupci - 1
    } else if (kut === 'dolje-lijevo') {
        red = redovi - 1; stupac = 0
    } else if (kut === 'gore-lijevo') {
        red = 0; stupac = 0
    } else {
        red = 0; stupac = stupci - 1
    }
    // =====================================
    // SMJERI
    // =====================================
    let smjer
    if (kut === 'dolje-desno') { smjer = kazaljka ? 'lijevo' : 'gore' }
    else if (kut === 'dolje-lijevo') { smjer = kazaljka ? 'gore' : 'desno' }
    else if (kut === 'gore-lijevo') { smjer = kazaljka ? 'desno' : 'dolje' }
    else { smjer = kazaljka ? 'dolje' : 'lijevo' }

    const smjerovi = { gore: [-1, 0], dolje: [1, 0], lijevo: [0, -1], desno: [0, 1] }

    const rotacijaKazaljka = { gore: 'desno', desno: 'dolje', dolje: 'lijevo', lijevo: 'gore' }

    const rotacijaKontra = { gore: 'lijevo', lijevo: 'dolje', dolje: 'desno', desno: 'gore' }

    // =====================================
    // PRVA ĆELIJA
    // =====================================
    putanja.push([red, stupac])
    posjeceno[red][stupac] = true
    // =====================================
    // SPIRALA
    // =====================================
    while (putanja.length < redovi * stupci) {

        let [dr, dc] = smjerovi[smjer]

        let noviRed = red + dr
        let noviStupac = stupac + dc

        if (noviRed >= 0 && noviRed < redovi && noviStupac >= 0 && noviStupac < stupci && !posjeceno[noviRed][noviStupac]) {
            red = noviRed
            stupac = noviStupac
        }
        else {
            smjer = kazaljka ? rotacijaKazaljka[smjer] : rotacijaKontra[smjer]
            const [novoDr, novoDc] = smjerovi[smjer]

            red += novoDr
            stupac += novoDc
        }
        if (red >= 0 && red < redovi && stupac >= 0 && stupac < stupci && !posjeceno[red][stupac])
            putanja.push([red, stupac])
        posjeceno[red][stupac] = true
}
return putanja
}
// =====================================================
// SPIRALA IZ SREDINE
// =====================================================
function spiralnaPutanjaIzSredine(redovi, stupci, pocetniSmjer, kazaljka) {
    const putanja = []
    const posjeceno = Array.from({ length: redovi }, () => Array(stupci).fill(false))
    // =====================================
    // SREDINA
    // =====================================
    let red = Math.floor((redovi - 1) / 2)
    let stupac = Math.floor((stupci - 1) / 2)

    // =====================================
    // PRVI SMJER
    // =====================================
    let smjer = pocetniSmjer

    const smjerovi = { gore: [-1, 0], dolje: [1, 0], lijevo: [0, -1], desno: [0, 1] }
    const rotacijaKazaljka = { gore: 'desno', desno: 'dolje', dolje: 'lijevo', lijevo: 'gore' }

    const rotacijaKontra = { gore: 'lijevo', lijevo: 'dolje', dolje: 'desno', desno: 'gore' }
    // =====================================
    // PRVA ĆELIJA
    // =====================================
    putanja.push([red, stupac])
    posjeceno[red][stupac] = true

    // =====================================
    // RASTUĆA SPIRALA
    // =====================================
    let duljina = 1
    while (putanja.length < redovi * stupci) {
        for (let ponavljanje = 0; ponavljanje < 2; ponavljanje++) {
            const [dr, dc] = smjerovi[smjer]
            for (let i = 0; i < duljina; i++) {
                red += dr
                stupac += dc

                if (red >= 0 && red < redovi && stupac >= 0 && stupac < stupci && !posjeceno[red][stupac]) {
                    putanja.push([red, stupac])
                    posjeceno[red][stupac] = true
                }
                if (putanja.length >= redovi * stupci) { break
            }
        }
            if (putanja.length >= redovi * stupci) { break
            }
           smjer = kazaljka ? rotacijaKazaljka[smjer] : rotacijaKontra[smjer]
        }
        duljina++
    }
    return putanja
}










