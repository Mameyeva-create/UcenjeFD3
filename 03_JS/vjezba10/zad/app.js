
const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;

  switch (zadatak) {
    case '1':
      // rješavanje 1. zadatak
      //1. Za uneseni cijeli broj u polje A veći od 2 i manji od 10M ispiši da li je prim (prosti) broj ili ne.

      const broj = parseInt(a)
      if (!broj) {
        rezultat.innerHTML = 'Nije unesen broj!'
        return
      }
      if (broj < 2 || broj > 10000000) {
        rezultat.innerHTML = 'Broj nije u rasponu 2 do 10M'
        return
      }

      let prim = true // predpostavka je takva da je dani broj prim
      // kod će iči u smjru da dokažem kako nije prim
      // dokaz je taj da kada naďem prvi broj koji je cjelobrojno djeliv (ostatak 0) -> prekidam izvoďenje i mijenjam prim na false
      for (let i = 2; i < broj; i++) {
        if (i % 10000 === 0) {
          console.log('Obraďujem', i, '/', broj, parseInt((i / broj) * 100))
        }
        if (broj % i === 0) {
          prim = false
          break
        }
      }
      if (prim) {
        rezultat.innerHTML = 'PRIM'
      } else {
        rezultat.innerHTML = 'NIJE prim'
      }
      /*
      6 % 2 = 0
      6 % 3 = 0
      6 % 4 = 2
      6 % 5 = 1

      6 nije prim broj

      7 % 2 = 1
      7 % 3 = 1
      7 % 4 = 3
      7 % 5 = 2
      7 % 6 = 1

      7 je prim broj
      */
      // kraj rješavanje 1. zadatak
      break;

    case '2':
      // rješavanje 2. zadatak
      // Za uneseni cijeli broj u polje B veći od 2 i manji od 1000 ispiši da li je savršen broj ili ne.
      // Совершенное_Число -> Число, которое равно сумме всех своих положительных делителей, кроме самого себя.
      const brojb = Number(b)

      if (brojb > 2 && brojb < 1000) {
        let suma = 0

        for (let i = 1; i < brojb; i++) {
          if (brojb % i === 0) {
            suma += i
          }
        }
        if (suma === brojb) {
          rezultat.innerHTML = 'Broj je savršen'
        } else {
          rezultat.innerHTML = 'Broj nije savršen'
        }
      } else {
        rezultat.innerHTML = 'Broj mora biti veći od 2 i manji od 1000'
      }
      /*
      6 % 1 = 0 + 1
      6 % 2 = 0 + 2
      6 % 3 = 0 + 3
      6 % 4 = 2
      6 % 5 = 1
      1 + 2 + 3 = 6 -zato je 6 savršen broj

      5 % 1 = 0 + 1
      5 % 2 = 1
      5 % 3 = 2
      5 % 4 = 1
      1 != 5 -zato 5 nije savršen broj
      */
      // kraj rješavanje 2. zadatak
      break;

    case '3':
/* 3. Za uneseni cijeli broj u polje B veći od 2 i manji od 100 ispiši da li je Armstrongov broj ili ne. */

/* Число_Армстронга:
 Число Армстронга — это натуральное число, которое равно сумме своих цифр, каждая из которых возведена в степень, равную общему количеству цифр в этом числе. Другое название — са́мовлюблённое число:

153 — трёхзначное число (N = 3):1³ + 5³ + 3³ = 1 + 125 + 27 = 153 -> Число_Армстронга
13 = 1² + 3² = 1 + 9 = 10 -> не Армстронг
Однозначные (от 1 до 9): 1, 2, 3, 4, 5, 6, 7, 8, 9 (каждая цифра в степени 1 равна самой себе) */

// rješavanje 3. zadatak
const Brojb = Number(b)

if (Brojb > 2 && Brojb < 100){

  const cifre = String(Brojb)
  const BrojCifara = cifre.length

  let suma = 0
  for (let i =0; i < cifre.length; i++) {
    suma += Number(cifre[i]) ** BrojCifara
  }

  if (suma === Brojb) {
    rezultat.innerHTML = 'Broj je Armstrongov'
  } else {
    rezultat.innerHTML = 'Broj nije Armstrongov'
  }
} else {
  rezultat.innerHTML = 'Broj mora biti veći od 2 i manji od 100'
}
// kraj rješavanje 3. zadatak
break;

case '4':
// rješavanje 4. zadatak

// 4. Za unesenu riječ u polje A provjerite da li je palindrom ili ne
// Ružan Edo ode na žur
// ružanedoodenažur

let p = ''
//prvo ćistim razmake i sve svodim na mala slova
for (let i = 0; i < a.length; i++) {
  if (a[i] !== '') {
    p += a[i].toLocaleLowerCase()
  }
}
let palindrom = true
for (let i = 0; i < p.length / 2; i++) {
  if (p[i] !== p[p.length - 1 - i]) {
    palindrom = false
    break;
  }
}
rezultat.innerHTML = palindrom ? 'Je palindrom' : 'Nije palindrom'
// kraj rješavanje 4. zadatak
break;

case '5':
  /*5. Provjeri da li u nizu stopRijeci postoji riječ pronađena u polju B */
// rješavanje 5. zadatak
if (stopRijeci.includes(b)) {
    rezultat.innerHTML = 'Riječ postoji u nizu stopRijeci'
  } else {
    rezultat.innerHTML = 'Riječ ne postoji u nizu stopRijeci'
  }
// kraj rješavanje 5. zadatak
break;

case '6':
  /* 6. Za unesenu riječ u polju A ispiši koliko ima samoglasnika i koliko suglasnika */
// rješavanje 6. zadatak
const samoglasnici = 'aeiou'
let brojSamoglasnika = 0
let brojSuglasnika = 0

for ( let i = 0; i < a.length; i++) {
  if (samoglasnici.includes(a[i].toLocaleLowerCase())) {
    brojSamoglasnika++
  } else {
    brojSuglasnika++
  }
}
rezultat.innerHTML = 'Samoglasnika: ' + brojSamoglasnika + '<br>' + 'Suglasnika: ' + brojSuglasnika
// kraj rješavanje 6. zadatak
break;

case '7':
  /* 7. Ispiši sve brojeve odvojeno znakom tab (\t) između A i B ili B i A. */
// rješavanje 7. zadatak
const brojA = Number(a)
const brojB = Number(b)

let rezultatBrojevi = ''

if (brojA <= brojB) {
for (let i = brojA; i <= brojB; i++) {
  rezultatBrojevi += i + '\t'
}
} else {
  for (let i = brojA; i >= brojB; i--){
    rezultatBrojevi += i + '\t'
  }
}
rezultat.innerHTML = rezultatBrojevi
// kraj rješavanje 7. zadatak
break;

default:
rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
}

});
const poveznica = document.getElementById('poveznica');
poveznica.href = 'https://enciklopedija.hr/clanak/primbrojevi';
document.getElementById('zadatak').addEventListener('change', (event) => {
switch (event.target.value) {
case '1':
poveznica.href = 'https://enciklopedija.hr/clanak/primbrojevi';
break;
case '2':
poveznica.href = 'https://www.enciklopedija.hr/clanak/savrseni-broj';
break;
case '3':
poveznica.href = 'https://hafura.wordpress.com/2017/09/13/armstrongov-broj-ispitni-zadatak/';
break;
case '4':
poveznica.href = 'https://www.enciklopedija.hr/clanak/palindrom';
break;
case '5':
poveznica.href = 'https://www.coursera.org/articles/what-are-stop-words';
break;
case '6':
poveznica.href = 'https://enciklopedija.hr/clanak/samoglasnik';
break;
case '7':
poveznica.href = 'https://hjp.znanje.hr/index.php?show=search_by_id&id=d1ZlWhU%3D';
break;
default:
poveznica.href = '#';
}
});



const stopRijeci = [
'a', 'ako', 'ali', 'bi', 'bih', 'bila', 'bili', 'bilo', 'bio', 'bismo',
'biste', 'biti', 'bumo', 'da', 'do', 'duž', 'ga', 'hoće', 'hoćemo', 'hoćete',
'hoćeš', 'hoću', 'i', 'iako', 'idemo', 'ideš', 'ide', 'iz', 'iza', 'iznad',
'ja', 'jako', 'jer', 'jesmo', 'jeste', 'jesu', 'je', 'kad', 'kada', 'kao',
'kroz', 'li', 'me', 'mene', 'meni', 'mi', 'mimo', 'mene', 'moj', 'moja',
'moje', 'mu', 'na', 'nad', 'nakon', 'nam', 'nama', 'nas', 'naš', 'naša',
'naše', 'našu', 'ne', 'nego', 'neka', 'neki', 'nekog', 'neko', 'nema', 'netko',
'neće', 'nećemo', 'nećete', 'nećeš', 'neću', 'ni', 'nije', 'nijedan', 'nikad',
'nismo', 'niste', 'nisu', 'njega', 'njegov', 'njegova', 'njegovo', 'njemu', 'njen',
'njena', 'njeno', 'njih', 'njihov', 'njihova', 'njihovo', 'njim', 'njima', 'njoj',
'nju', 'o', 'od', 'odmah', 'on', 'ona', 'onaj', 'onam', 'onamo', 'one',
'oni', 'ono', 'onolika', 'onoliko', 'onoliki', 'onoliku', 'ova', 'ovaj', 'ovdje',
'ove', 'ovi', 'ovo', 'ovuda', 'pa', 'pak', 'po', 'pod', 'pored', 'poslije',
'povrh', 'preko', 'pri', 'pred', 'prema', 'sa', 'sam', 'samo', 'se', 'sebe',
'sebi', 'si', 'smo', 'ste', 'su', 'sve', 'svi', 'svog', 'svoj', 'svoja',
'svoje', 'ta', 'taj', 'tako', 'tamo', 'te', 'tebe', 'tebi', 'ti', 'to',
'točno', 'u', 'uz', 'vam', 'vama', 'vas', 'vaš', 'vaša', 'vaše', 'već',
'vi', 'vrlo', 'za', 'zar', 'će', 'ćemo', 'ćete', 'ćeš', 'ću', 'što', 'the',
'and', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has',
'had', 'do', 'does', 'did', 'but', 'if', 'or', 'because', 'as', 'until',
'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against', 'between',
'into', 'through', 'during', 'before', 'after', 'above', 'below', 'to',
'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
'further', 'then', 'once'
];