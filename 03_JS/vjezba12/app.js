

const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    /* 1. Ispiši apsolutnu vrijednost razlike brojeva A i B. */
    // početak 1
 rezultat.innerHTML = ''// Проверяем внесены ли данные в А и В
    if(!a.trim()){ // trim -> убирает пробелы слева и справа
      rezultat.innerHTML = 'prazno polje a'
      return
    }
    if(!b.trim()){
      rezultat.innerHTML = 'prazno polje b'
      return
    }
    const broja = Number(a)
    const brojb = Number(b)
    if(!broja){
      rezultat.innerHTML= 'a nije broj'
      return
    }
    if(!brojb){
      rezultat.innerHTML= 'b nije broj'
      return
    }
//   const razlika = broja- brojb
//   if(razlika<0){
//     rezultat.innerHTML =  razlika * -1
//   } else { 
//     rezultat.innerHTML = razlika
//   }
// console.log(razlika)
rezultat.innerHTML = Math.abs(broja -brojb)
    // kraj 1
  },
  z2: (a, b) => {
    console.log('Zadatak 2');
   /* 2. Ispiši veći broj od dva unesena cijela broja A i B. */
    // početak 2
    // Проверяем внесены ли данные:
rezultat.innerHTML = ''
if(!a.trim()){
rezultat.innerHTML = 'prazno polje a'
return
}
if(!b.trim()){
  rezultat.innerHTML = 'prazno polje b'
  return
}
/* Аналогичное решение внесены ли данные:
if (a.trim() =='' || b.trim() == '') {
rezultat.innerHTML = 'Unesi brojeve'
return
} */

// Проверяем А и В -> Числа?:
const broja = Number(a)
const brojb = Number(b)
// console.log(broja, brojb)
if(!broja){
  rezultat.innerHTML = 'nisi unio broj a'
  return
}
if(!brojb){
  rezultat.innerHTML = 'nisi unio broj b'
  return
}
if(broja === brojb) {
  rezultat.innerHTML = 'Broj a i broj b su jednaki'
} else if(broja > brojb){
    rezultat.innerHTML = broja
  } else {
    rezultat.innerHTML = brojb
  }
    // kraj 2
  },
  z3: (a, b) => {
    console.log('Zadatak 3');
    /* 3. U rezultatu napravi onoliko div elemenata koliko je uneseno u polje A te svaki drugi div ima boju pozadine definiranu u polju B. */
    // početak 3 
if(a.trim()=== '' || b.trim()=== ''){
  rezultat.innerHTML = 'Unesite vrijednosti'
  return
} 
const broja = Number(a)
if(!broja){
  rezultat.innerHTML = 'a nije broj'
  return
}
console.log(broja, b)

if(broja < 1 || broja >100){
  rezultat.innerHTML ='Broj ne smije biti negativan i veci od 100'
  return
}
let divovi = ''
for(let i=0; i < broja; i++){
  if(i % 2 === 0){ // Проверяем парные ли Числа
    divovi +=` 
    <div style="background-color: ${b}">&nbsp;</div>
    `
  }else{
    divovi+='<div>&nbsp;</div>'
  }
}
rezultat.innerHTML = divovi

console.log(broja, b)
    // kraj 3
  },
  z4: (a, b) => {
    console.log('Zadatak 4');
    /* 4. Ako ostane polje A i B prazno u rezultat upišite dva emojia po vlastitom izboru */
    // početak 4

    // kraj 4
  },
  z5: (a, b) => {
    console.log('Zadatak 5');
    /* 5. Osmislite zadatak sami i realizirajte ga */
    // početak 5

    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
