// let n1 = +prompt("Inserisci primo num");
// let n2 = +prompt("Inserisci secondo num");

let n1 = Math.round(Math.random()* 100);
let n2 = Math.round(Math.random()* 100);

let CP = prompt("Scrivi una frase");

console.log("Dati inseriti: ", n1, n2, CP );


/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let Arect =area = (l1, l2) => console.log("Area del rectangolo è " + l1*l2);
area(n1, n2);

console.log("fine es 1");
/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(x,y) {
    let sum=0;
    if(x==y) {
        sum = (x+y)*3;
        console.log("la somma per 3 è " + sum);
        } else {
            sum = x+y;
            console.log("la somma è "+ sum);
        }
}
crazySum(n1,n2);

console.log("fine es 2");
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazyDiff(x,y=19) {
    let diff = Math.abs(x-y);
    console.log("la differenza assoluta è " + diff);
    if(x>y) {
        let cDiff = Math.abs((x-y))*3;
        console.log("la differenza assoluta per 3 è " + cDiff);
        }
}
crazyDiff(n1);
console.log("fine es 3");

/* ESERCIZIO 420
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function boundary(x) {200
    if(100<= x && x<= 20 || x==400) {
        return true;
    } else{
        return false;
    }
}
console.log(boundary(n2));

console.log("fine es 4");

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function epify(x) {
    if(x.indexOf("EPICODE") == 0) {
        return x;
    } else {
        return x='EPICODE ' + x;
    }
}

console.log(epify(CP));

console.log("fine es 5");
/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/


/* SCRIVI QUI LA TUA RISPOSTA */
function check3and7(x) {
    if(Math.abs(x) % 3== 0 || Math.abs(x) % 7 == 0) {
        console.log(x + " è un multiplo di 7" )
    }
}
check3and7(n1);

console.log("fine es 6");

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

function reverseString(x) {
    let Arr= x.split('');
    let reverseArr= [];
    for(i=Arr.length - 1; i>=0; i--) {
        reverseArr.push(Arr[i]);
    }
    console.log(reverseArr.join(""));
}
reverseString(CP)

console.log("fine es 7");

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function upperFirst(x) {
    let Arr = x.split(' ');
    let newArr= [];
    for(i=0; i< Arr.length; i++){
        let s = Arr[i].split('');
        s[0]= s[0].toUpperCase();
        newArr.push(s.join(''));
    }
    console.log(newArr.join(' '));
}
upperFirst(CP);

console.log("fine es 8");

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
+/



/* SCRIVI QUI LA TUA RISPOSTA */
let taglia = cutString = (x) => console.log(x.slice(1,(x.length-1)));

cutString(CP);

console.log("fine es 9");

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
 function giveMeRandom(x) {
    let RandomNumbers=[];
    let c=0;
    while (c < x) {
        RandomNumbers.push(Math.round(Math.random()*10));
        c++;
    }
    return RandomNumbers;
 }
 console.log(giveMeRandom(n2));

 console.log("fine es 10");



 function matrixGenerator(x , y) {
    let mtx= [];
    let fd = 0, sd = 0, el = 0;
    for (let i = 0; i < (x*y); i++) { 
        if (sd >= x) {
            fd++;
            sd = 0; 
            el = fd+ "" + sd;
            mtx.push(el);
        }else {   
            el = fd + "" + sd;
            mtx.push(el);
        }
        sd++;    
    }
    console.log(mtx);
 }


 matrixGenerator(6, 6);

