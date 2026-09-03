// nizovi, polja, Arrays(англ.)
// nizovi su struktura podataka
// niz omogućuje pohranjivanje više vrijednosti u jednoj varijabli

const t1 = 4 // u varijabli t1 imam prosječnu temperaturu za siječanj

// prazan niz
const prazanNiz = []
console.log('prazanNiz', prazanNiz)

// svaki niz ima dužinu
console.log('prazanNiz.length', prazanNiz.length)

// pohranjujem 12 prosječnih temperatura za siječanj -prosinac
const temp = [4, 1, 9, 15, 17, 27, 30, 33, 26, 18, 14, 8] // zadnji, može i ne mora postojati

console.log('temp', temp)
console.table(temp) // в виде таблицы

// prvi element niza na indexu 0
console.log('Prvi element niza', temp[0])

// zadnji element niza
console.log('Zadnji element niza', temp[temp.length - 1]) // ne moram znati konkretan broj indexa

// Ispisati 27 iz niza temp
console.log('27 iz niza temp', temp[5])

// temp=[] skripta.js:29 Uncaught TypeError: Assignment to constant variable.

// vrijednosti elemenata niza se mogu mijenjati!!!
// u lipnju nije bilo 27, već 28
temp[5] = 28
console.table(temp)

// skratiti niz
temp.length = 10 // skrati niz na 10 elemenata
console.table(temp)

// uvećaj niz temp za jedan element
temp.length = temp.length + 1
temp[temp.length - 1] = 77
console.table(temp)
temp[110] = -1
console.table(temp)
console.log(temp[11]) // undefined
console.log(temp.length)
/******************************************* */
const mjesta = [
    'Osijek',
    'Zagreb',
    'Split',
    'Rijeka',
    'Dubrovnik',
    'Zadar'
]
console.table(mjesta)

// u ozbiljno dev svjetu najnje se da nizovi imaju elemente istog tip

// niz može imati bilo koji tip podataka za element i mogu biti mješani
// ponavljanje tipova podataka

const ptp = [
    'Edunova', // string 
    7, // numder
    18n, // bigint
    true, // boolean
    [], // array
    undefined,
    null,
    { ime: 'pero' }, // objekt
    Symbol('e')
]

// ispiši pero
console.log(ptp) // (9) ['Edunova', 7, 18n, true, Array(0), undefined, null, {…}, Symbol(e)]
console.log(ptp[7]) // {ime: 'pero'} ime: "pero" [[Prototype]]: Object
console.log(ptp[7].ime) // pero
console.log(ptp[7]['ime']) // pero // nećemo ovo koristiti
/* asociativni nizovi ( ассоциативные массивы ):
Например:
Обычный массив: Обращаемся по индексу:
const person = ['Оля', 50, 'Хорватия']
console.log(person[0]) // Оля
console.log(person[1]) // 50

Ассоциативный массив:
const person = {
name: 'Оля',
age: 50,
country: 'Хорватия'
}
console.log(person.name) // Оля
console.log(person.age) // 50
console.log(person.country) // Хорватия
Здесь:
name -> ключ
'Оля' -> значение
age -> ключ
50 -> значение  */

const osobe = [
    {
        ime: 'Olga',
        prezime: 'Ðerek',
        godine: 51
    },
    {
        ime: 'Ivan',
        prezime: 'Uglik',
        godine: 66
    },
    {
        ime: 'Alla',
        prezime: 'Brestlavceva',
        godine: 34
    },
    {
        ime: 'Aljeksandr',
        prezime: 'Mamjejev',
        godine: 32
    },
]
console.table(osobe) // backend -> то, что происходит за кулисами

// zbrajamo vrijednosti svojstva objekta koji se nalaze y nizu osobe

const sumaGodina = osobe[0].godine + osobe[1].godine + osobe[2].godine + osobe[3].godine + (osobe[4]?.godine ?? 0)

console.log(sumaGodina) // 183

// destrukcija / destructuring -> способ достать значения мз массива или объекта и записать их в отд переменные

/* {} - > деструктуризация объекта по ключам(свойствам)
[] -> массива по порядку(индексам) */

const niz = [10, 20, 30] // tri elementa

const [e1, e2] = niz // destrukcija na način da je 1.element niza završio u varijabli e1, 2. u e2, niz je ostao kakav je bio

console.log(e1, e2, niz)

const [ , , e3] = niz
console.log(e3)

// npr. backend vrati prazan niz
niz.length = 0 // na ovaj način sam očistio niz 
const [x1 = 1, x2 = 20] = niz // kod deatrukcije, varijablama se može dodjeliti zadana vrijednost ako tog elementa niza nema
console.log(x1, x2)

// spread operator ...
const n1 = [1, 2, 3]

const novi = n1 // ovo nije kopiranje, ovo je kreipanje reference niz n1

novi[0] = 7
console.log(n1)

// spread operator ... zapravo kopira
const kopija = [...n1] // u nizu kopija se nalaze svi elementi kopirani za niza n1
kopija[0] = 9
console.log(kopija, n1)

// spajanje nizova
const gradovi = ['Osijek', 'Zagreb']
const sela = ['Habjanovci', 'Tenja']
const hr = [...gradovi, ...sela]
console.log(hr)

document.getElementById('naslov').innerHTML = hr[0] // h1 в HTML // Osijek

// document.getElementById('naslov').innerHTML=osobe[1].ime // Ivan

// ovo gore sve je jednodimenzionalni niz - lista 
//Одномерные массивы -> где элементы расположены в одну линию и каждый имеет один индекс

// nizovi mogu biti višedimenzionalni:
// 2D - matrix
const tablica = [
    [1, 2, 3], // ovo je red s indexom 0
    [4, 5, 6], // red index 1
    [7, 8, 9] // red index 2
]

// ispiši 6
console.log(tablica[1][2]) // [1]-> red, [2]-> индекс цифры 6

console.table(tablica)

// 3D je kocka
const arr = [
[
[1, 2, 3],
[4, 5, 6]
],
[
    [7, 8, 9],
    [10, 11, 12]
]
]
console.log(arr[1][1][0]) // 10

// 4D je tenzor

 // 1D -> Линия
 // 2D -> Таблица
 // 3D -> Стопка таблиц (Куб)
 // 4D -> Куб из кубов
