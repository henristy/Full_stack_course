// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let con = giveMeRandom(n2);
function checkArray(gMR) {
    let sum=0;
    for (i=0; i<gMR.length ; i++) {
        if(gMR[i] > 5) {
            console.log(gMR[i] + " è maggiore di 5")
            sum +=gMR[i];
        }
    }
    return sum;
}

checkArray(con);

console.log("fine es 1");

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function shoppingCartTotal(price, quantity) {
    for(i=0; i < shoppingCart.length; i++) {
        obj =  shoppingCart[i];
        let total = 0;
        total += (price*quantity);
    }
    console.log("il totale dovuto è " + total);
}

shoppingCartTotal(shoppingCart.price, shoppingCart.quantity);



/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function addToShoppingCart(obj) {
    shoppingCart.push(obj);
    console.log("hai " + shoppingCart.length + " elementi nel tuo carello");
    return shoppingCart.length;
}

shoppingCart(oggetto);


/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function maxShoppingCart(arrayCart) {
    let controllo =arrayCart[0].price;
    let ogg = 0;
    for(i=1; i < arrayCart.length; i++) {
        obj =  arrayCart[i];
        if(obj.price > controllo) {
            controllo = obj.price;
            ogg = Object.assign(obj);
        }
    }
    return ogg;
}

maxShoppingCart(shoppingCart);



/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function latestShoppingCart(arrayCart) {
    return arrayCart[arrayCart.length-1];
}

latestShoppingCart(shoppingCart);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function loopUntil(rand) {
    let c=0
    let c1 =0;
    let x= 6;
    while (c<3)  {
        c1++;
        if( c1>1000000 || x>=9){
            console.log("not enough or error inserting number");
            break;
        }
        if(rand > x) {
            console.log("Streak", rand) 
            c++;
        } else{ 
            console.log(rand);
            c=0;
        }
        rand = Math.round(Math.random()*10);
        

    } 
}
let loop=Math.round(Math.random());
loopUntil(loop);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function average (arr) {
    let sum, c = 0;
    for(i=0; i < arr.length; i++) {
        if(typeof arr[i]== "number"){
            sum += arr[i];
            c++
        }
    }
    return sum / c;
}

average(array1);
/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function longest(arr) {
    let controllo = arr[0];
    for(i=1; i < arr.length; i++) {

        if(arr[i].length > controllo.length) {
            controllo=arr[i];
        }
    }
    console.log(controllo + " è la stringa più lunga");
} 

longest(array2);

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function filtro(EC) {
    if(x.indexOf("SCAM")== -1 || x.indexOf("SCAM")== -1) {
        return true;
    }else{
        return false;
        }
}

filtro(emailContent);

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function daysGone(D) {
    let now = new Date;
    let y =(now.getFullYear()-D.getFullYear())*365;
    let m = ((now.getMonth()-1)+ (D.getMonth()-1))*30;
    let d = ((31-now.getDay)+(31-D.getDay));
    console.log ("Sono passati "+ (y+m+d) + " giorni");
}

daysGone(Data);
/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function matrixGenerator(a , b) {
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


 matrixGenerator(x, y);