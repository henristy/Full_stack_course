

class User {
    constructor(name, surname, age, location) {
        this.firstName= name;
        this.lastName= surname;
        this.eta= age;
        this.citta= location;
    }
    older = (y) => {
        if (this.eta > y.eta) {
            return this.firstName + ' ' + this.lastName + ' is older than ' + y.firstName + ' ' + y.lastName;
        } else if(this.eta == y.eta) {
            return 'they are the same age'; 
        } else {
            return y.firstName + ' ' + y.lastName + ' is older than ' + this.firstName + ' ' + this.lastName;
        }
    }
}

let Utente1 =new User('petro', 'lasagna', '22', 'tema');
let Utente2 =new User('sumo', 'trase', '2', 'france');

console.log(Utente1, Utente2);

console.log(Utente1.older(Utente2));

class Pets {
    static count=0;
    constructor(petName, ownerName, species, breed) {
        this.petName = petName;
        this.ownerName = ownerName;
        this.species = species;
        this.breed = breed;
        Pets.count++;
    }
    sameOwner(pet) {
        if (this.ownerName = pet.ownerName) {
            return 'They have the same owner called' + this.ownerName;
        }
        return 'different owners';
    }
    info() {
        return this.petName + ' is a '+ this.breed + ' ' + this.species + ' and owned by ' + this.ownerName;
    }
}

let form= document.createElement('form');
form.innerHTML= 
`
<input class="pet" type="text" placeholder="Insert Pet name...">
<input class="owner" type="text" placeholder="Insert Owner name...">
<select name="species">
    <option value="cat">Cat</option>
    <option value="dog">dog</option>
    <option value="giraffe">giraffe</option>
    <option value="bull">bull</option>
    <option value="scorpion">scorpion</option>
</select>
<input class="breed" type="text" placeholder="breed">
<button type="button">Insert</button>`;

document.body.appendChild(form);
let ul = document.createElement('ul');
let footer = document.createElement('footer');


let i=0;
let allPets=[];
pet1= document.querySelector('button').addEventListener('click',() => {
    let pet = new Pets(document.querySelector('.pet').value , document.querySelector('.owner').value, document.querySelector('select').value , document.querySelector('.breed').value);
    let li = document.createElement('li')
    footer.innerText ='totale: ' + Pets.count;
    allPets.push(pet);
    console.log(allPets);
    if (Pets.count = 2) {
        let pet1 = allPets[0];
        let pet2 = allPets[1];
        console.log(pet1.sameOwner(pet2));
    }
    li.innerText = pet.info();
    ul.appendChild(li);
})
document.body.append(ul, footer);

