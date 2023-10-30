/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
/* I principali datatype in javascript sono String, Number, Boolean, Null, e Undefined.
-String un datatype che serve per racogliere le stringe (lettere/ caratteri) che devono sta fra le virgolette ("") o doppi apici ('')
-Number serve per raccogliere numeri di diversi tipi (naturali, decimali ecc...)
-Boolean è un datatype che raccoglie le risposta (true oppure false) di una condizione. In alcuni casi "0" indica la condizione che risulta false e "1" per la
 condizione che risulta true
-Null invece rappresenta un datatype che non ha un valore assegnato cioè il valore è nullo
-Undefined indica che una variabile o non e indentificato il suo tipo o non ha un valore assegnato


/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name="Henry";
console.log("Mio nome è "+ name);
/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let somma= 12 + 20;
console.log("la somma tra 12 e 20 è " + somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x=12;
console.log("x= " + x)
/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
name="Boakye Yiadom";
console.log("Mio cognome è " + name);

const yer=34;
/*yer="body"; <== Se scommentiamo questo codice (codice che assegna un valore '"body"' alla constante 'yer' gia assegnata) il console del browser rileverà un errore perchè 
non è posibile riassegnare una costante.*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x-=4;

console.log('sottrazione tra i numeri 4 e la variable "x" è ' + x);
/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 let name1, name2;
 name1="john";
name2="John";

let verifica=(name1===name2)? 'Uguaglianza vera perciò, i nomi sono uguali':'Uguaglianza falsa perciò, i nomi sono diversi';
let name2Lowercase= name2.toLowerCase();
let ExtraVerifica=(name1===name2Lowercase);

console.log(verifica);
console.log(ExtraVerifica);
