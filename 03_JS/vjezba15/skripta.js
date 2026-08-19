// OOP - Objektno orijentirano programiranje

// naučiti na pamet klasa i objekti

// I1: Klasa
class Osoba {
    // OOP princip  učahurivanja -коконы ( encasulation )
    // 1. Klasa će sakriti
    #ime // # - skrivene privatno svojstvo

    // 2. Klasa će učiniti 
    get ime() { return this.#ime }
    set ime(s) { this.#ime = s }

    // konstruktor
    constructor(ime = '') {
        this.#ime = ime
    }
}

// I2: Objekt je pojavnost (instanca - пример) klase
// varijabla
const osoba = new Osoba()
osoba.ime = 'Pero' // ovdje se poziva set

console.log(osoba.ime) // ovdje se poziva get

const o = new Osoba('Marko')
console.log(o.ime)

//
//
class Polaznik extends Osoba {
    #odradioObaveze
    get odradiOboveze() { return this.#odradioObaveze }
    set odradiOboveze(b) { this.#odradioObaveze = b }
    constructor(ime = '', oo = false) {
        super(ime) //
        this.#odradioObaveze = oo
    }
}
//
//

const p = new Polaznik('Karlo', false)
console.log(`${p.ime} ${p.odradiOboveze ? 'je' : 'nie'} odradio obaveze`)
console.log(p)

class Predavac extends Osoba {
    #vrsta
    get vrsta() { return this.#vrsta }
    set vrsta(s) { this.#vrsta = s }

    toString() {
        return `${this.vrsta} ${super.ime}`
    }
}

const pr = new Predavac()
pr.ime = 'Gordana'
pr.vrsta = 'Vanjska suradnica'
console.log(pr)
console.log(`${pr}`)

// metode u klasi
//
console.log(Math.random())

class Pomocno {
    static slucajniBroj() {
        return Math.random()
    }
}
console.log(Pomocno.slucajniBroj())

