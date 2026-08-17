// Try Catch - mehanizm
// console.log('Početak')

// const i = 7
// const rezultat = i + varijabla
// console.log(rezultat)
// console.log('Kraj')

try{
    // ulaz
console.log('Početak')
const i = 7
const rezultat = i + varijabla
console.log(rezultat)
}catch(e){
    // kraj
console.log('Greška',e.name, e.massage, e )
}
console.log('Kraj')

//
console.log('2. primjer')
const i = 7
let rezultat = 0

try{
rezultat = i + varijabla
}catch{
rezultat = i + 1
}finally{
console.log(rezultat)
}
console.log('Kraj 2. primjer')

//
function korijen(broj){
    if(broj<-1){
        throw new Error('Ne mogu izvaditi 2.korijen')
    }
    return Math.sqrt(broj)
}
// 
try{
    console.log(korijen(-9))   
}catch (e){
    console.log(e.massage)
}

// zgodan 
function rekurzija(){
    // let a = 1
    brojac++
    rekurzija()
}
let brojac = 0
console.time('rekurzija')
try{
    rekurzija()
}catch (error){
console.log('Stog napunjen na:', brojac)
}
console.timeEnd('rekurzija')

