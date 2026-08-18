//funkcionalne
//
const korisnici=[
    {
        id: 1,
        ime: 'Ana',
        prezime: 'Kartek',
        godine: 25,
        admin: false
    },
    {
         id: 2,
        ime: 'Karlo',
        prezime: 'Totig',
        godine: 29,
        admin: false
    },
    {
         id: 3,
        ime: 'Marko',
        prezime: 'Ćutić',
        godine: 45,
        admin: true
    },
    {
         id: 4,
        ime: 'Nikola',
        prezime: 'Ćutić',
        godine: 49,
        admin: true
    },
    {
         id: 5,
        ime: 'Žana',
        prezime: 'Ðitko',
        godine: 18,
        admin: false
    }

]
console.table(korisnici)

// forEach() - 
for(let i = 0; i < korisnici.length; i++){
    console.log(korisnici[i].ime)
}

console.log('*********************************')
korisnici.forEach(korisnik => console.log(korisnik.ime))

console.log('*********************************')
korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))
console.log('*********************************')
korisnici.forEach(o =>{
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('a')){
        oslovi +='a gospoďo'
    }else{
        oslovi += 'i gospodine'
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
})
console.log('*********************************')
//
korisnici.forEach(o => console.log(`Poštovan${o.ime.endsWith('a') ? 'a gospoďo' : 'i gospodine'} ${o.ime} ${o.prezime}`))
console.log('*********************************')
//
//
const samoImena = korisnici.map( o => o.ime)
console.table(samoImena)
korisnici.map(o => o.ime).forEach(ime => console.log(ime))

console.log('*********************************')
const ip = korisnici.map(o => o.ime + ' ' + o.prezime )
console.table(ip)

console.log('*********************************')
const maliNiz = korisnici.map(({id, ime, prezime}) =>({sifra: id, osoba: ime + ' ' + prezime}))
console.table(maliNiz)

console.log('*********************************')
//
console.log(korisnici.find(o => o.id === 13)?? '')
//
console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek').id)
//findIndex
console.log(maliNiz.findIndex(o => o.sifra === 100))

//filter()
console.table(korisnici.filter(o => o.godine > 40))

//reduce()
console.log(korisnici.reduce((suma, o) => suma + o.godine, 0)) //

// some
console.log(korisnici.some(o => o.admin) ? 'Ima admina' : 'Nema admina')

//every()
console.log(korisnici.every(o => o.godine >= 18) ? 'Svi su punoljetni' : 'Nisu svi punoljetni')