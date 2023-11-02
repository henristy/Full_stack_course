/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let num1 = parseInt(prompt("inserisci primo numero"));
let num2 = parseInt(prompt("inserisci secondo numero"));
if(num1>num2) {
  console.log("il numero più grande tra "+ num1 + " e " + num2 + " è " + num1);
} else if(num1 == num2) {
  console.log("I numeri inseriti sono gli stessi");
} else {
  console.log("il numero più grande tra "+ num1 + " e " + num2 + " è " + num2);
}
console.log("Fine es 1");

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n=5;
let equal = prompt("inserisci un numero per vedere se è diverso da 5 oppure se è divisibile per 5");
console.log("input: " + equal);

if(equal != n) {
  console.log("not equal");
}
console.log("Fine es 2");

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("input: " + equal);
if(+equal % n == 0) {
  console.log("divisibile per 5");
}
console.log("Fine es 3");


/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.

*/

/* SCRIVI QUI LA TUA RISPOSTA */
let conf1 = parseInt(prompt("inserisci un numero"));
let conf2 = parseInt(prompt("inserisci un numero"));
let nu=8;
console.log("input: " + conf1);
console.log("input: " + conf2);
if(conf1 == nu || conf2 == nu){
  console.log("uno dei numeri inseriti è " + nu);
}
if(conf1 + conf2 == nu || conf1 - conf2 == nu || conf2 - conf1 == nu){
  console.log ("la somma o la sottrazione dei due numeri fa " + nu);
}
console.log("Fine es 4");


/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totalShoppingCart = +prompt("Quantita di articoli presenti nel carrello", "0");
let Spesa= +prompt("Costo della spesa", "0");
const costoSpedizione = 10;
const promo = 50;
console.log("input: " + totalShoppingCart);
console.log("input: " + Spesa);

if(totalShoppingCart > promo) {
  console.log("la tua tua spesa totale risulta: " + Spesa);
} else if (totalShoppingCart == 0) {
  console.log("Non sono presenti articoli");
}else {
  console.log("la tua tua spesa totale risulta: " + (Spesa + costoSpedizione));
} 
console.log("Fine es 5");



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Sconto= 20;
let totaleScontato = Spesa - (Spesa * Sconto / 100);
if(totalShoppingCart > promo) {
  console.log("la tua tua spesa totale risulta: " + totaleScontato);
} else if (totalShoppingCart == 0) {
  console.log("Non sono presenti articoli");
}else {
  console.log("la tua tua spesa totale risulta: " + (totaleScontato + costoSpedizione));
} 
console.log("Fine es 6");

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1= 9;
let n2= 0;
let n3= 7;
let a = [];
if (n1 >= n2) {
  if (n2 >= n3) {
    console.log(n1 + ", " + n2 + ", " + n3);
  }else if(n1 >= n3) {
    console.log(n1 + ", " + n3 + ", " + n2);
  } else {
    console.log(n3 + ", " + n1 + ", " + n2)
  }
}else if (n2 >= n3) {
  if(n3 >= n1) {
    console.log(n2 + ", " + n3 + ", " + n1);
  }else {
    console.log(n2 + ", " + n1 + ", " + n3);
  }
}else {
  console.log(n3 + ", " + n2 + ", " + n1);
}


let arry= [n1, n2, n3];

if (arry[2]>=arry[0] && arry[0]>=arry[1]){
  arry=[n3, n1, n2];
} else if (arry[2]>=arry[0] && arry[1]>=arry[0]){
  arry=[n3, n2, n1];
} else if (arry[1]>=arry[0] && arry[0]>=arry[2]){
  arry=[n2, n1, n3];
} else if (arry[1]>=arry[0] && arry[2]>=arry[0]){
  arry=[n2, n3, n1];
} else {
  arry=[n1, n3, n2];
}
console.log(arry);
console.log("fine es 7");

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let any= "ciao";//let any = +prompt("Scrivi qualsiasi cosa");
console.log("input: " + any);
console.log()
if (typeof any != "number"  ) {
  console.log("non hai inserito un numero");
}else {
  console.log("Hai inserito un numero");;
}
console.log("Fine es 8");
/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let paridispari = prompt("Inserisci un numero pari o dispari");
console.log("input: " + paridispari);
if (paridispari % 2 == 0){
  console.log("hai inserito un numero pari");
} else {
  console.log("hai inserito un numero dispari");
}
console.log("Fine es 9");
/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let val = 10
console.log(val);
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else if(val >= 10) {
      console.log("Uguale a 10 o maggiore");
    }
    console.log("Fine es 10");
 /* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

/* SCRIVI QUI LA TUA RISPOSTA */
me.city = "Toronto";

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
me.skills.pop();
console.log(me)
console.log("Fine es 11, 12 e 13");
/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let arr = [];
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log("Fine es 14");

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
arr.splice(9, 1, 100);
console.log(arr);
console.log("Fine es 15");