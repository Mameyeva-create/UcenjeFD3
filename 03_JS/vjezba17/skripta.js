// stara funkcija
function primjer(prvi, drugi) {
    console.log(prvi, drugi)
}
primjer('Edunova', 'Osijek')
function dugiPoziv() {
    let i = 0
    console.log(new Date())
    setTimeout(() => {
        console.log(++i, new Date())
        setTimeout(() => {
            console.log(++i, new Date)
            setTimeout(() =>{
                console.log(++i, new Date())
            }, 1000);
        }, 2000);
    }, 5000);
}
dugiPoziv()

//
async function cekaj(ms) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Zavrsio za ${ms / 1000} sekundi`)
        }, ms)
    })
}
async function izvedi() {
    let odgovor = await cekaj(5000)
    console.log(odgovor)
    for (let i = 0; i < 10; i++) {
        const ms = (i + 1) * 1000
        console.log(await cekaj(ms))
    }
}
izvedi();

//
(async () => {
const url ='https://dog.ceo/api/breeds/image/random'
await fetch(url)
// .then(res => {
//     console.log(res)
//     console.log(res.json())
// })
.then(res => res.json())
.then(json =>{
    
    if(json.status === 'success'){
        console.log(json.message)
        document.getElementById('slika').src = json.message
    }else{
        console.error('Problem s API', json.message)
    }
})
}).catch(rejected =>{
    alert('Nažalost, imamo problema s dohvaćanjem sadržaja, molimo pokušajte kasnije')

})

fetch('https://jsonplaceholder.typicode.com/todos/1?'+new Date().getTime())
.then(response => response.json())
.then(json => console.log(json))