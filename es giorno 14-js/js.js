//get form button, con il numero di tabelline da creare, dal DOM
let giocaBtn=document.querySelector('form button');

//Add event listener sul bottone, e nascondere il form al click del bottone;
giocaBtn.addEventListener('click', () => {
    giocaBtn.parentNode.style.display = 'none';
    // ciclo per creare le tabelline
    for(i=0; i < document.querySelector('form input').value; i++) {
        let dup=[];
        let tabellina = document.createElement('div');
        tabellina.className = 'tabellina';
        //ciclo per creare le celle di ogni tabellina con numeri random non ripetenti
        for(j=0; j< 24 ; j++) {
            let cella = document.createElement('div');
            cella.className = 'cell';
            let randNum = Math.round((Math.random()*75)+1);
            //controllo sulla ripetizione del numero generato
            if(dup.includes(randNum)) {
                j--;
            } else{
                dup.push(randNum);
                cella.innerText = randNum;
                tabellina.appendChild(cella);
            }
        }
        document.querySelector('#container').appendChild(tabellina);
    }

    //Creazione di un'altro bottone per generare un numero casuale
    let genRN = document.createElement('p');
    genRN.className = 'genRN';
    genRN.innerText = "Click to a generate a random number";
    genRN.style.display = 'block';
    document.querySelector('#container').appendChild(genRN);

    //Creazione area dell tabellone
    let tabellone=document.createElement('div');
    tabellone.className = 'tabellone';
    //ciclo per creare le celle del tabellone
    for(i=0; i< 76 ; i++) {
        let cellaT = document.createElement('div');
        cellaT.className = 'cellT';
        cellaT.innerText = i+1;
        tabellone.appendChild(cellaT);
    }

    document.querySelector('#container').appendChild(tabellone);



    //Event listener per generare il num random non ripetente, evidenziarlo sul tabellone e sulle tabelline se sono presenti
    genRN.addEventListener('click', () => {
        let dup=[];
        let randNum = Math.round((Math.random()*75)+1);
        if(dup.includes(randNum)) {
            genRN.innerText= randNum + " already registered, generate another";
        } else {
            genRN.innerText="Click to a generate a random number";
            dup.push(randNum);
            document.querySelectorAll('.cell, .cellT').forEach(ele => {
                if (+ele.innerText == randNum) {
                    ele.className = 'selected';
                }
            })
        }
    })
    
})

