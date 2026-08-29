// switch je višestruko grananje
// switch radi s swim tipovima podatka i provjerava s ===
// sve što se može switch može i if

const ocjena = 5 // ovdje je korisnik unio vrijednost

switch (ocjena) {
    case 1:
        console.log('Nedovoljan')
        break
    case 2:
        console.log('Dovoljan')
        break
    case 3:
        console.log('Dobar')
        break
    case 4:
        console.log('Vrlo dobar')
        break
    case 5:
        console.log('Izvrstan')
        break
    default: // по умолчанию -> если ничего из перечисленного не подошло, сделай вот это:
        console.log('Nije ocjena')
}


const dan = 'Utorak'

switch (dan) {
    case 'Ponedjeljak':
    case 'Utorak':
    case 'Srijeda':
    case 'Četvrtak':
    case 'Petak':
        console.log('Radni dan')
        break
    case 'Subota':
    case 'Nedjelja':
        console.log('Vikend')
        break
    default:
        console.log('Neispravan dan')
}