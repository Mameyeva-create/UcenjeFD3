// Generator funkcije
// 
function* primjerGenerator(){
    console.log('Pocetak rada generatora')
    yield true // 1. pauza
    yield 2.7 // 2. pauza
    yield 'Edunova'
    return 'Gotov'
}


const generator = primjerGenerator()
console.log(generator.next().value) // next je poziv do 1 yilda

//poziv na 2.pauzu
console.log(generator.next())

console.log(generator.next())

console.log(generator.next())

console.log('********************************')

const g2 = primjerGenerator()
let g
do{
    g = g2.next()
    console.log(g.value)
}while(!g.done)

    function* sljedeciID(){
        let id = 1
        while(true){
            yield `ID_${id++}`
        }
    }

    const id = sljedeciID()
    console.log(id.next().value)
    console.log(id.next().value)

    console.log('Nesto radim')

    for(let i=0;i<10;i++){
console.log(id.next().value)
    }
    function* razgovor(){
        let odgovor
        while(true){
            odgovor = yield 'Kako se zoves'
            console.log(`Generator kaze: Drago mi je, ${odgovor}`)
        }
    }
    const chat = razgovor()
    let pitanje = chat.next().value//
    console.log(pitanje)
    pitanje = chat.next('Marko').value
    console.log(pitanje)
    console.log(chat.next('Marija').value)