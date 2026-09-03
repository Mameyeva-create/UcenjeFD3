

/* =================================================
   ZADATAK 1 — Prvi i zadnji element
   - niz se gradi od A i B (plus dva fiksna elementa radi smisla)
   Ulaz primjer: [A, 20, 30, B]
   Izlaz: Prvi: A, Zadnji: B
================================================= */
document.getElementById('zad01').addEventListener('click', () => {
   console.log("ZADATAK 1 — Prvi i zadnji element")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   // ne možemo mijenjati konstantu
   // if(!a){
   //    a = 'Prazno'
   // }

   // if(!b){
   //    b = 'Prazno'
   // } 

   const av = !a ? 'Prazno' : a
   const bv = !b ? 'Prazno' : b
   const niz = [av, 20, 30, bv]

   console.log(`Prvi: ${niz[0]}, Zadnji: ${niz[niz.length - 1]}`)

})

/* =================================================
   ZADATAK 2 — Siguran pristup elementu
   U danom nizu [1,2,3,4,5,6,7]
   - Ako je A broj postavi vrijednost B na taj index
   - Ako je A string u niz dodaj novi element i postavi B na taj index
================================================= */
document.getElementById('zad02').addEventListener('click', () => {
   console.log("ZADATAK 2 — Siguran pristup elementu")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [1, 2, 3, 4, 5, 6, 7]
   const brojA = Number(a) // определили а в Число
   if (!brojA) { // если а -> противоположно Числу  то есть (String)
      niz.length = niz.length + 1 // добавили новый элемент в массив
      niz[niz.length - 1] = b  // и поставили b на этот (последний) индекс
   } else {
      niz[brojA] = b // (если а -> Число) -> Ako je A broj postavi vrijednost B na taj index
   }
   console.log(niz)
})
/* =================================================
   ZADATAK 3 — Zamjena prva dva elementa
   Unesi podatke A i B u niz [A, B, 3]
   - ispiši niz
   - zamijeni prva dva elemente
   - ispiši niz
================================================= */
document.getElementById('zad03').addEventListener('click', () => {
   console.log("ZADATAK 3 — Zamjena prva dva elementa")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [a, b, 3]
   console.log(niz) //  -> ispiši niz
   const manta = niz[0]
   niz[0] = niz[1] // -> zamijeni prva dva elemente
   niz[1] = manta // поменяли значение a на b, b на a
   console.log(niz)
})
/* =================================================
   ZADATAK 4 — Dodavanje elementa prema duljini
   - niz: [A, B]
   - ako je A string i duljina(A) < 3 → dodaj "X" na kraj
     inače → dodaj "Y" na početak
================================================= */
document.getElementById('zad04').addEventListener('click', () => {
   console.log("ZADATAK 4 — Dodavanje elementa prema duljini")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [a, b]

   // if (typeof a ==='string' && a.length < 3) {
   // niz[niz.length] = 'x'
   // } else {
   // niz[2] = niz[1]
   // niz[1] = niz[0]
   // niz[0] = 'y'
   // }
   typeof a === 'string' && a.length < 3 ? niz.push('x') : niz.unshift('y')
   console.log(niz)
})
// niz.push() -> ставит значение в конец
// niz.unshift() -> в начало
/* =================================================
   ZADATAK 5 — Provjera tipa prvog elementa
   - ako je A broj 7 na prvi elementi niza podatvi true, inače 0
   - ako je B tekst Osijek na drugi element postavi B, inače 2,5
   - koristeći elemente niza ispiši kojeg su tipa
================================================= */
document.getElementById('zad05').addEventListener('click', () => {
   console.log("ZADATAK 5 — Provjera tipa elemenata")

   const a = Number(document.getElementById('inA').value) // добавили Number
   const b = document.getElementById('inB').value

   const niz = [
      typeof a === 'number' && Number(a) === 7 ? true : 0,
      typeof b === 'string' && b === 'Osijek' ? b : 2.5
   ]
   console.log(niz)
   console.log(typeof niz[0])
   console.log(typeof niz[1])
})
/* =================================================
   ZADATAK 6 — Ukloni zadnji element 
  Vrijednosti A i B se unose u niz [A, B, 'KRAJ']
================================================= */
document.getElementById('zad06').addEventListener('click', () => {
   console.log("ZADATAK 6 — Ukloni zadnji element")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [a, b, 'KRAJ']
   // pop() -> Удалить элемент в Конце 
   // shift() -> Удалить элемент в Начале
   // splice() -> Удалить элемент по индексу
   // niz.splice(2, 1) // 2 -> индекс, 1 -> кол-во элементов
   niz.pop()
   console.log(niz)
})
/* =================================================
   ZADATAK 7 — Spoji dva niza
   - niz1: [A, 2]
   - niz2: [B, 4]
   - spajanje spreadom
================================================= */
document.getElementById('zad07').addEventListener('click', () => {
   console.log("ZADATAK 7 — Spoji dva niza")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz1 = [a, 2]
   const niz2 = [b, 4]
   // const noviNiz = niz1.concat(niz2) // concat()
   const noviNiz = [...niz1, ...niz2]
   console.log(noviNiz)
})
/* =================================================
   ZADATAK 8 — Provjera rupe u nizu
   - napravimo niz sa "rupom" na indeksu 1:
     niz[0]=A, niz[2]=B
   - provjerimo indeks 1
================================================= */
document.getElementById('zad08').addEventListener('click', () => {
   console.log("ZADATAK 8 — Provjera rupe u nizu")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [a, , b]
   console.log(niz[1]) // undefined

   // console.log(1 in niz) // 1 in niz ->  in -> дает значение по индексу 1 // false // true
   // in -> спрашивает есть ли индекс в массиве
})
/* =================================================
   ZADATAK 9 — Razdvajanje prvog i ostatka
   - niz: [A, B, 7, 6]
   - destructuring [prvi, ...ostatak]
================================================= */
document.getElementById('zad09').addEventListener('click', () => {
   console.log("ZADATAK 9 — Razdvajanje prvog i ostatka")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   const niz = [a, b, 7, 6]
   const [prvi, ...ostatak] = niz
   console.log(prvi, ostatak, niz) // a (3) [b, 7, 6] // вывел(показал) 1элемент a из массива
   // Destructuring (деструктуризация) -> Достаем Значение из Массива -> переменные получают значения по позиции
})
/* =================================================
   ZADATAK 10 — prema duljini niza
   - duljinu određujemo prema A i B:
     Ako je A prazan string ili B prazan string → niz = []
     Inače ako A === B → niz = [A]
     Inače ako je B broj i B === 2 → niz = [A, B]
     Inače → niz = [A, B, "x"]
================================================= */
document.getElementById('zad10').addEventListener('click', () => {
   console.log("ZADATAK 10 — prema duljini niza")

   const a = document.getElementById('inA').value
   const b = document.getElementById('inB').value

   let niz = [a, b]
   if (a === '' || b === '') {
      niz = []
   } else if (a === b) {
      niz = [a]
   } else if (Number(b) === 2) {
      niz = [a, b]
   } else {
      niz = [a, b, "x"]
   }
   console.log(niz.length, niz)
})


