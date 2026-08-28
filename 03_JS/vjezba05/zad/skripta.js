const rezultat = document.getElementById('rezultat')
document.getElementById('izvedi').addEventListener('click', () => {
    /* ovaj kod će se izvoditi svaki puta kada korisnik klikne na
    gumb Izvedi */
    // resetirati ću rezultat -> Обновляю результат
    rezultat.innerHTML = ''
    rezultat.style.color = 'black'

    // varijable u kojima je tekst koje je korisnik unio
    const aString = document.getElementById('a').value
    const bString = document.getElementById('b').value
    const cString = document.getElementById('c').value
    const dString = document.getElementById('d').value

    // koji je odabrani zadatak
    const zadatak = document.getElementById('zadatak').value

    if (zadatak === '1') {
        //početak 1. zadatka
        const a = Number(aString)

        // osiguravam da korisnik mora unijeti brojeve

        if (!a) { // ako nisi broj (ili si 0, NAN, null ili undefined)
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return // prekida izvoďenje click funkcije - short curcuiting
        }

        const b = Number(bString)
        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }
        // ja kao programer sam ovdje 100% siguran da su a i b brojevi
        rezultat.innerHTML = a > b ? a : b
        rezultat.style.color = 'green'

        // kraj 1. zadatka
    }
    if (zadatak === '2') {
        // početak 2. zadatka
        //  Превращаем текстовые строки в реальные числа
        const a = Number(aString)
        const b = Number(bString)
        const c = Number(cString)
        //  Проверяем по очереди, все ли они являются числами
        if (!a) {
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return // Если А брак - останавливаемся
        }
        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return // Если В брак - останавливаеемся
        }
        if (!c) {
            rezultat.innerHTML = 'C nije broj'
            rezultat.style.color = 'red'
            return
        }
        //  Вычисляем самое большое число с помощью встроенной функции Math.max
        const najveci = Math.max(a, b, c)

        //  Показываем результат пользователю красивым зеленым цветом
        rezultat.innerHTML = najveci
        rezultat.style.color = 'green'

        //kraj 2. zadatka
    }

    if (zadatak === '3') {
        // početak 3. zadatka
        const a = Number(aString)
        if (!a) {
            rezultat.innerHTML = 'A nije broj'
            rezultat.style.color = 'red'
            return
        }

        const b = Number(bString)
        if (!b) {
            rezultat.innerHTML = 'B nije broj'
            rezultat.style.color = 'red'
            return
        }

        const c = Number(cString)
        if (!c) {
            rezultat.innerHTML = 'C nije broj'
            rezultat.style.color = 'red'
            return
        }

        const d = Number(dString)
        if (!d) {
            rezultat.innerHTML = 'D nije broj'
            rezultat.style.color = 'red'
            return
        }

// Тернарные операторы
        const manjiAB = a <= b ? a : b
        const manjiCD = c <= d ? c : d
        rezultat.innerHTML = manjiAB <= manjiCD ? manjiAB : manjiCD
        rezultat.style.color = 'green'

        //kraj 3. zadatka
    }

})