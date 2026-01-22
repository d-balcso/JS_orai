// -------------------------------------------------------------

let asd = prompt('Kérek egy számot: ');
// -------------------------------------------------------------

let egyikoldal = Number(prompt('Add meg a téglalap egyik oldalát: ')),   masikoldal = Number(prompt('Add meg a téglalap másik oldalát: '));

let teglalap_terulet = egyikoldal * masikoldal, teglalap_kerulet = 2 * (egyikoldal + masikoldal);

console.log(`A téglalap területe: ${teglalap_terulet}`);
console.log(`A téglalap kerülete: ${teglalap_kerulet}`);

// -------------------------------------------------------------
let kor_sugar = Number(prompt('Add meg a kör sugarát: '));

let kor_terulet = Math.PI * kor_sugar * kor_sugar;
let kor_kerulet = 2 * Math.PI * kor_sugar;

console.log(`A kör területe: ${kor_terulet}, és a kör kerülete: ${kor_kerulet}`);
// -------------------------------------------------------------
let dobas = Math.floor(Math.random() * 6) + 1;
console.log(`A dobott szám: ${dobas}`);
// -------------------------------------------------------------

let lottoszam = Math.floor(Math.random() * 90) + 1;
console.log(`A lottószám: ${lottoszam}`);

// -------------------------------------------------------------

let inch = Number(prompt('Add meg a hosszúságot inch-ben: '));
let cm = inch * 2.54;

console.log(`${inch} inch = ${cm} cm`);
// -------------------------------------------------------------
let masodperc = Number(prompt('Add meg az időt másodpercben: '));
let perc = Number(prompt('Add meg az időt percben: '));
let ora = Number(prompt('Add meg az időt órában: '));

let ossz_masodperc = masodperc + (perc * 60) + (ora * 3600);

console.log(`Összesen ennyi másodperc: ${ossz_masodperc}`);
// -------------------------------------------------------------

let nap = Number(prompt('Add meg a napok számát: '));
let ora2 = Number(prompt('Add meg az órák számát: '));

let honap = Math.floor(nap / 30);

console.log(`Ez ${honap} hónap és ${ora2} óra.`);

// -------------------------------------------------------------
let a = Number(prompt('Adj meg egy számot: '));
let b = Number(prompt('Adj meg egy másik számot: '));    
let c = Number(prompt('Adj meg egy harmadik számot: '));

let szamtani_kozep = (a + b + c) / 3;

console.log(`A három szám számtani közepe: ${szamtani_kozep}`);
// -------------------------------------------------------------
