const skupPitanja = [

    {
        pitanje: 'Kojom ključnom rječju definiramo varijablu čiju vrijednost možemo mijenjati?',
        tocno: 'let',
        odgovori: ['const', 'let', 'function']
    },

    {
        pitanje: 'Kojom ključnom rječju definiramo konstantu?',
        tocno: 'const',
        odgovori: ['let', 'const', 'var']
    },

    {
        pitanje: 'Koji je index prvog elementa u nizu?',
        tocno: '0',
        odgovori: ['0', '1', '-1']
    },

    {
        pitanje: 'Kako provjeravamo duljinu niza?',
        tocno: 'length',
        odgovori: ['size', 'count', 'length']
    },

    {
        pitanje: 'Koji operator koristimo za strogu jednakost?',
        tocno: '===',
        odgovori: ['=', '==', '===']
    },

    {
        pitanje: 'Koji operator koristimo za strogu nejednakost?',
        tocno: '!==',
        odgovori: ['!=', '!==', '==']
    },

    {
        pitanje: 'Što vraća typeof 10?',
        tocno: 'number',
        odgovori: ['string', 'number', 'boolean']
    },

    {
        pitanje: 'Što vraća typeof "Hello"?',
        tocno: 'string',
        odgovori: ['text', 'string', 'char']
    },

    {
        pitanje: 'Što vraća typeof true?',
        tocno: 'boolean',
        odgovori: ['true', 'boolean', 'logical']
    },

    {
        pitanje: 'Koja vrijednost predstavlja "ništa" u JavaScriptu?',
        tocno: 'null',
        odgovori: ['empty', 'null', 'nothing']
    },

    {
        pitanje: 'Koja vrijednost označava da vrijednost nije definirana?',
        tocno: 'undefined',
        odgovori: ['null', 'undefined', 'empty']
    },

    {
        pitanje: 'Koji operator znači logičko I?',
        tocno: '&&',
        odgovori: ['||', '&&', '!']
    },

    {
        pitanje: 'Koji operator znači logičko ILI?',
        tocno: '||',
        odgovori: ['&&', '||', '!']
    },

    {
        pitanje: 'Koji operator znači logičko NE?',
        tocno: '!',
        odgovori: ['?', '!', '&&']
    },

    {
        pitanje: 'Što je rezultat izraza !true?',
        tocno: 'false',
        odgovori: ['true', 'false', 'null']
    },

    {
        pitanje: 'Što je rezultat izraza !false?',
        tocno: 'true',
        odgovori: ['true', 'false', 'undefined']
    },

    {
        pitanje: 'Što ispisuje console.log(5 + 5)?',
        tocno: '10',
        odgovori: ['55', '10', 'Error']
    },

    {
        pitanje: 'Što ispisuje console.log(5 + "5")?',
        tocno: '55',
        odgovori: ['10', '55', 'Error']
    },

    {
        pitanje: 'Što je rezultat izraza 10 - 3?',
        tocno: '7',
        odgovori: ['7', '13', '3']
    },

    {
        pitanje: 'Što je rezultat izraza 4 * 3?',
        tocno: '12',
        odgovori: ['7', '12', '1']
    },

    {
        pitanje: 'Što je rezultat izraza 10 / 2?',
        tocno: '5',
        odgovori: ['5', '20', '8']
    },

    {
        pitanje: 'Što vraća operator %?',
        tocno: 'Ostatak dijeljenja',
        odgovori: ['Rezultat dijeljenja', 'Ostatak dijeljenja', 'Množenje']
    },

    {
        pitanje: 'Koliki je rezultat 10 % 3?',
        tocno: '1',
        odgovori: ['0', '1', '3']
    },

    {
        pitanje: 'Koji operator povećava vrijednost za 1?',
        tocno: '++',
        odgovori: ['++', '--', '**']
    },

    {
        pitanje: 'Koji operator smanjuje vrijednost za 1?',
        tocno: '--',
        odgovori: ['++', '--', '%%']
    },

    {
        pitanje: 'Koji operator koristimo za potenciranje?',
        tocno: '**',
        odgovori: ['^^', '**', '//']
    },

    {
        pitanje: 'Koliki je rezultat 2 ** 3?',
        tocno: '8',
        odgovori: ['6', '8', '9']
    },

    {
        pitanje: 'Kako pišemo komentar u jednom retku?',
        tocno: '// komentar',
        odgovori: ['<!-- komentar -->', '// komentar', '## komentar']
    },

    {
        pitanje: 'Kako pišemo višelinijski komentar?',
        tocno: '/* komentar */',
        odgovori: ['// komentar', '/* komentar */', '<!-- komentar -->']
    },

    {
        pitanje: 'Koja naredba ispisuje vrijednost u konzolu?',
        tocno: 'console.log()',
        odgovori: ['console.print()', 'console.log()', 'print.console()']
    },

    {
        pitanje: 'Kako pretvaramo string u broj?',
        tocno: 'Number()',
        odgovori: ['String()', 'Number()', 'Boolean()']
    },

    {
        pitanje: 'Što vraća Number("10")?',
        tocno: '10',
        odgovori: ['"10"', '10', 'true']
    },

    {
        pitanje: 'Kako pretvaramo vrijednost u string?',
        tocno: 'String()',
        odgovori: ['Text()', 'String()', 'toText()']
    },

    {
        pitanje: 'Kako pretvaramo vrijednost u boolean?',
        tocno: 'Boolean()',
        odgovori: ['Boolean()', 'Bool()', 'Logic()']
    },

    {
        pitanje: 'Koja je vrijednost falsy?',
        tocno: 'false',
        odgovori: ['true', 'false', '"hello"']
    },

    {
        pitanje: 'Koja je vrijednost truthy?',
        tocno: 'true',
        odgovori: ['false', 'null', 'true']
    },

    {
        pitanje: 'Što radi operator ||?',
        tocno: 'Vraća prvu truthy vrijednost',
        odgovori: [
            'Vraća prvu truthy vrijednost',
            'Pretvara broj u string',
            'Uspoređuje tipove'
        ]
    },

    {
        pitanje: 'Što radi operator ??',
        tocno: 'Provjerava null i undefined',
        odgovori: [
            'Provjerava null i undefined',
            'Provjerava samo false',
            'Množi vrijednosti'
        ]
    },

    {
        pitanje: 'Koji operator koristimo za uvjetni izraz?',
        tocno: '?:',
        odgovori: ['&&', '?:', '=>']
    },

    {
        pitanje: 'Kako započinjemo if naredbu?',
        tocno: 'if',
        odgovori: ['if', 'check', 'condition']
    },

    {
        pitanje: 'Koja riječ označava alternativu u if naredbi?',
        tocno: 'else',
        odgovori: ['otherwise', 'else', 'default']
    },

    {
        pitanje: 'Koja riječ omogućuje dodatni uvjet nakon if?',
        tocno: 'else if',
        odgovori: ['else if', 'elseif()', 'another if']
    },

    {
        pitanje: 'Koja naredba prekida izvršavanje petlje?',
        tocno: 'break',
        odgovori: ['stop', 'break', 'exit']
    },

    {
        pitanje: 'Koja naredba preskače trenutnu iteraciju petlje?',
        tocno: 'continue',
        odgovori: ['skip', 'continue', 'next']
    },

    {
        pitanje: 'Koja petlja se najčešće koristi kada znamo broj ponavljanja?',
        tocno: 'for',
        odgovori: ['while', 'for', 'if']
    },

    {
        pitanje: 'Koja petlja se izvršava dok je uvjet true?',
        tocno: 'while',
        odgovori: ['for', 'while', 'switch']
    },

    {
        pitanje: 'Koja petlja se izvršava barem jednom?',
        tocno: 'do while',
        odgovori: ['while', 'for', 'do while']
    },

    {
        pitanje: 'Koja riječ koristimo za definiranje funkcije?',
        tocno: 'function',
        odgovori: ['func', 'function', 'define']
    },

    {
        pitanje: 'Kako pozivamo funkciju izracunaj?',
        tocno: 'izracunaj()',
        odgovori: ['call izracunaj', 'izracunaj()', 'function izracunaj']
    },

    {
        pitanje: 'Kako funkcija vraća vrijednost?',
        tocno: 'return',
        odgovori: ['send', 'return', 'back']
    },

    {
        pitanje: 'Kako se zovu vrijednosti koje šaljemo funkciji?',
        tocno: 'argumenti',
        odgovori: ['operatori', 'argumenti', 'petlje']
    },

    {
        pitanje: 'Kako se zovu varijable navedene u definiciji funkcije?',
        tocno: 'parametri',
        odgovori: ['parametri', 'argumenti', 'elementi']
    },

    {
        pitanje: 'Koji simbol koristimo za arrow funkciju?',
        tocno: '=>',
        odgovori: ['->', '=>', '==>']
    },

    {
        pitanje: 'Kako izgleda jednostavna arrow funkcija?',
        tocno: '() => {}',
        odgovori: ['() -> {}', '() => {}', 'function => {}']
    },

    {
        pitanje: 'Kako dodajemo element na kraj niza?',
        tocno: 'push()',
        odgovori: ['add()', 'push()', 'append()']
    },

    {
        pitanje: 'Kako uklanjamo zadnji element iz niza?',
        tocno: 'pop()',
        odgovori: ['remove()', 'pop()', 'delete()']
    },

    {
        pitanje: 'Kako uklanjamo prvi element iz niza?',
        tocno: 'shift()',
        odgovori: ['shift()', 'removeFirst()', 'deleteFirst()']
    },

    {
        pitanje: 'Kako dodajemo element na početak niza?',
        tocno: 'unshift()',
        odgovori: ['push()', 'unshift()', 'addFirst()']
    },

    {
        pitanje: 'Koja metoda provjerava postoji li element u nizu?',
        tocno: 'includes()',
        odgovori: ['contains()', 'includes()', 'exists()']
    },

    {
        pitanje: 'Koja metoda pronalazi index elementa u nizu?',
        tocno: 'indexOf()',
        odgovori: ['findIndexOf()', 'indexOf()', 'position()']
    },

    {
        pitanje: 'Koja metoda pretvara niz u string?',
        tocno: 'join()',
        odgovori: ['join()', 'arrayToString()', 'combine()']
    },

    {
        pitanje: 'Koja metoda dijeli string u niz?',
        tocno: 'split()',
        odgovori: ['divide()', 'split()', 'separate()']
    },

    {
        pitanje: 'Koja metoda mijenja elemente niza i stvara novi niz?',
        tocno: 'map()',
        odgovori: ['map()', 'change()', 'modify()']
    },

    {
        pitanje: 'Koja metoda filtrira elemente niza?',
        tocno: 'filter()',
        odgovori: ['filter()', 'select()', 'choose()']
    },

    {
        pitanje: 'Koja metoda pronalazi prvi element koji zadovoljava uvjet?',
        tocno: 'find()',
        odgovori: ['search()', 'find()', 'first()']
    },

    {
        pitanje: 'Koja metoda provjerava zadovoljavaju li svi elementi uvjet?',
        tocno: 'every()',
        odgovori: ['all()', 'every()', 'checkAll()']
    },

    {
        pitanje: 'Koja metoda provjerava zadovoljava li barem jedan element uvjet?',
        tocno: 'some()',
        odgovori: ['some()', 'one()', 'anyElement()']
    },

    {
        pitanje: 'Koja metoda sortira elemente niza?',
        tocno: 'sort()',
        odgovori: ['order()', 'sort()', 'arrange()']
    },

    {
        pitanje: 'Koja metoda obrće redoslijed elemenata niza?',
        tocno: 'reverse()',
        odgovori: ['reverse()', 'back()', 'invert()']
    },

    {
        pitanje: 'Kako pristupamo prvom elementu niza niz?',
        tocno: 'niz[0]',
        odgovori: ['niz[1]', 'niz[0]', 'niz.first']
    },

    {
        pitanje: 'Kako pristupamo trećem elementu niza?',
        tocno: 'niz[2]',
        odgovori: ['niz[3]', 'niz[2]', 'niz[1]']
    },

    {
        pitanje: 'Kako pristupamo zadnjem elementu niza?',
        tocno: 'niz[niz.length - 1]',
        odgovori: [
            'niz[niz.length]',
            'niz[niz.length - 1]',
            'niz[last]'
        ]
    },

    {
        pitanje: 'Kako stvaramo prazan niz?',
        tocno: '[]',
        odgovori: ['{}', '[]', '()']
    },

    {
        pitanje: 'Kako stvaramo prazan objekt?',
        tocno: '{}',
        odgovori: ['[]', '{}', '()']
    },

    {
        pitanje: 'Kako pristupamo svojstvu objekta osoba koje se zove ime?',
        tocno: 'osoba.ime',
        odgovori: ['osoba->ime', 'osoba.ime', 'osoba[ime]']
    },

    {
        pitanje: 'Kako pristupamo svojstvu objekta pomoću uglatih zagrada?',
        tocno: 'osoba["ime"]',
        odgovori: ['osoba("ime")', 'osoba["ime"]', 'osoba.["ime"]']
    },

    {
        pitanje: 'Kako dodajemo novo svojstvo objektu?',
        tocno: 'objekt.novo = vrijednost',
        odgovori: [
            'objekt.novo = vrijednost',
            'objekt.add(novo)',
            'objekt.push(novo)'
        ]
    },

    {
        pitanje: 'Što je objekt u JavaScriptu?',
        tocno: 'Kolekcija svojstava i vrijednosti',
        odgovori: [
            'Samo broj',
            'Kolekcija svojstava i vrijednosti',
            'Samo string'
        ]
    },

    {
        pitanje: 'Što je niz (array)?',
        tocno: 'Kolekcija elemenata',
        odgovori: [
            'Kolekcija elemenata',
            'Samo jedna vrijednost',
            'Funkcija'
        ]
    },

    {
        pitanje: 'Koji tip podatka predstavlja tekst?',
        tocno: 'string',
        odgovori: ['number', 'string', 'object']
    },

    {
        pitanje: 'Koji tip podatka predstavlja broj?',
        tocno: 'number',
        odgovori: ['number', 'integer', 'digit']
    },

    {
        pitanje: 'Koji tip podatka može imati samo true ili false?',
        tocno: 'boolean',
        odgovori: ['string', 'boolean', 'number']
    },

    {
        pitanje: 'Koji tip podatka predstavlja veliki cijeli broj?',
        tocno: 'bigint',
        odgovori: ['bigint', 'largeNumber', 'integer']
    },

    {
        pitanje: 'Kako pišemo BigInt vrijednost 100?',
        tocno: '100n',
        odgovori: ['100b', '100n', 'BigInt.100']
    },

    {
        pitanje: 'Koji tip podatka koristimo za jedinstvene vrijednosti?',
        tocno: 'symbol',
        odgovori: ['unique', 'symbol', 'uniqueValue']
    },

    {
        pitanje: 'Što vraća typeof null?',
        tocno: 'object',
        odgovori: ['null', 'object', 'undefined']
    },

    {
        pitanje: 'Što vraća typeof undefined?',
        tocno: 'undefined',
        odgovori: ['null', 'undefined', 'empty']
    },

    {
        pitanje: 'Koja metoda zaokružuje broj na najbliži cijeli broj?',
        tocno: 'Math.round()',
        odgovori: ['Math.round()', 'Math.floor()', 'Math.ceil()']
    },

    {
        pitanje: 'Koja metoda zaokružuje broj prema dolje?',
        tocno: 'Math.floor()',
        odgovori: ['Math.floor()', 'Math.round()', 'Math.ceil()']
    },

    {
        pitanje: 'Koja metoda zaokružuje broj prema gore?',
        tocno: 'Math.ceil()',
        odgovori: ['Math.floor()', 'Math.round()', 'Math.ceil()']
    },

    {
        pitanje: 'Koja funkcija vraća slučajan broj?',
        tocno: 'Math.random()',
        odgovori: ['Math.random()', 'Math.number()', 'Math.rand()']
    },

    {
        pitanje: 'Koja funkcija vraća apsolutnu vrijednost broja?',
        tocno: 'Math.abs()',
        odgovori: ['Math.absolute()', 'Math.abs()', 'Math.value()']
    },

    {
        pitanje: 'Što radi parseInt()?',
        tocno: 'Pretvara vrijednost u cijeli broj',
        odgovori: [
            'Pretvara vrijednost u string',
            'Pretvara vrijednost u cijeli broj',
            'Pretvara vrijednost u boolean'
        ]
    },

    {
        pitanje: 'Što radi parseFloat()?',
        tocno: 'Pretvara vrijednost u decimalni broj',
        odgovori: [
            'Pretvara vrijednost u cijeli broj',
            'Pretvara vrijednost u decimalni broj',
            'Pretvara broj u string'
        ]
    },

    {
        pitanje: 'Koji znak koristimo za template literal?',
        tocno: '`',
        odgovori: ['"', "'", '`']
    },

    {
        pitanje: 'Kako ubacujemo varijablu u template literal?',
        tocno: '${varijabla}',
        odgovori: ['{varijabla}', '${varijabla}', '#varijabla']
    },

    {
        pitanje: 'Koja metoda vraća duljinu stringa?',
        tocno: 'length',
        odgovori: ['size', 'length', 'count']
    },

    {
        pitanje: 'Koja metoda pretvara string u velika slova?',
        tocno: 'toUpperCase()',
        odgovori: ['upper()', 'toUpperCase()', 'uppercase()']
    },

    {
        pitanje: 'Koja metoda pretvara string u mala slova?',
        tocno: 'toLowerCase()',
        odgovori: ['lower()', 'toLowerCase()', 'lowerCase()']
    },

    {
        pitanje: 'Koja metoda uklanja razmake s početka i kraja stringa?',
        tocno: 'trim()',
        odgovori: ['clean()', 'trim()', 'removeSpaces()']
    },

    {
        pitanje: 'Koja metoda provjerava počinje li string određenim tekstom?',
        tocno: 'startsWith()',
        odgovori: ['startsWith()', 'beginWith()', 'start()']
    },

    {
        pitanje: 'Koja metoda provjerava završava li string određenim tekstom?',
        tocno: 'endsWith()',
        odgovori: ['finishWith()', 'endsWith()', 'end()']
    },

    {
        pitanje: 'Koja metoda provjerava sadrži li string određeni tekst?',
        tocno: 'includes()',
        odgovori: ['contains()', 'includes()', 'hasText()']
    },

    {
        pitanje: 'Koja naredba se koristi za više mogućih slučajeva?',
        tocno: 'switch',
        odgovori: ['select', 'switch', 'cases']
    },

    {
        pitanje: 'Koja riječ označava slučaj u switch naredbi?',
        tocno: 'case',
        odgovori: ['case', 'option', 'when']
    },

    {
        pitanje: 'Koja je zadana grana u switch naredbi?',
        tocno: 'default',
        odgovori: ['else', 'default', 'otherwise']
    },

    {
        pitanje: 'Što radi break u switch naredbi?',
        tocno: 'Prekida switch',
        odgovori: [
            'Ponovno pokreće switch',
            'Prekida switch',
            'Preskače case'
        ]
    },

    {
        pitanje: 'Što znači NaN?',
        tocno: 'Not a Number',
        odgovori: ['New a Number', 'Not a Number', 'No any Number']
    },

    {
        pitanje: 'Koja funkcija provjerava je li vrijednost NaN?',
        tocno: 'Number.isNaN()',
        odgovori: ['Number.isNaN()', 'isNumber()', 'checkNaN()']
    },

    {
        pitanje: 'Što vraća Number("abc")?',
        tocno: 'NaN',
        odgovori: ['0', 'NaN', 'undefined']
    },

    {
        pitanje: 'Što vraća Array.isArray([])?',
        tocno: 'true',
        odgovori: ['true', 'false', 'array']
    },

    {
        pitanje: 'Koji operator koristimo za dodjelu vrijednosti?',
        tocno: '=',
        odgovori: ['==', '=', '===']
    },

    {
        pitanje: 'Koji operator provjerava jednakost vrijednosti bez provjere tipa?',
        tocno: '==',
        odgovori: ['=', '==', '===']
    },

    {
        pitanje: 'Koji operator koristimo za veće od?',
        tocno: '>',
        odgovori: ['<', '>', '=']
    },

    {
        pitanje: 'Koji operator koristimo za manje od?',
        tocno: '<',
        odgovori: ['<', '>', '==']
    },

    {
        pitanje: 'Koji operator znači veće ili jednako?',
        tocno: '>=',
        odgovori: ['=>', '>=', '>>']
    },

    {
        pitanje: 'Koji operator znači manje ili jednako?',
        tocno: '<=',
        odgovori: ['=<', '<=', '<<']
    },

    {
        pitanje: 'Što radi spread operator ...?',
        tocno: 'Raspakirava elemente',
        odgovori: [
            'Spaja samo stringove',
            'Raspakirava elemente',
            'Briše elemente'
        ]
    },

    {
        pitanje: 'Koji operator koristimo za destrukturiranje objekta ili niza?',
        tocno: '{} ili []',
        odgovori: ['() ili <>', '{} ili []', '&& ili ||']
    },

    {
        pitanje: 'Kako kopiramo elemente niza pomoću spread operatora?',
        tocno: '[...niz]',
        odgovori: ['(niz)', '[...niz]', '{niz}']
    },

    {
        pitanje: 'Što znači let?',
        tocno: 'Deklaracija promjenjive varijable',
        odgovori: [
            'Deklaracija promjenjive varijable',
            'Deklaracija funkcije',
            'Deklaracija objekta'
        ]
    },

    {
        pitanje: 'Možemo li promijeniti vrijednost varijable definirane s let?',
        tocno: 'Da',
        odgovori: ['Da', 'Ne', 'Samo jednom']
    },

    {
        pitanje: 'Možemo li ponovno dodijeliti vrijednost varijabli definiranoj s const?',
        tocno: 'Ne',
        odgovori: ['Da', 'Ne', 'Samo dva puta']
    },

    {
        pitanje: 'Koja ključna riječ ima blokovski scope?',
        tocno: 'let',
        odgovori: ['let', 'var', 'function']
    },

    {
        pitanje: 'Koja ključna riječ također ima blokovski scope?',
        tocno: 'const',
        odgovori: ['var', 'const', 'print']
    }

];