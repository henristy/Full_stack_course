
let objBooks = new XMLHttpRequest();
objBooks.open("GET", "https://striveschool-api.herokuapp.com/books", true);
objBooks.send();

let books;

objBooks.onreadystatechange = function() {
    if (this.status == 200 && this.readyState == 4) {
        console.log("tutto ok");
        books = JSON.parse(this.responseText);
        createbookCards(books);
    }
    
  
}


createbookCards = (libri) => {
    libri.forEach(obj => {
        let col =document.createElement('div');
        col.className="col";
        col.innerHTML = 
        `<div class="card h-100">
            <img src="${obj.img}" class="card-img-top h-50" alt="movie image">
            <div class="card-body">
                <h5 class="card-title h3">${obj.title}</h5>
                <p class="card-text">Category: ${obj.category}</p>
                <p class="card-text">Asin: ${obj.asin}</p>
                <p class="w-50 text-center text-white lead border rounded-pill bg-black fs-5"> $${obj.price}</p>
            </div>
            <div id="${obj.asin}" class="card-footer">
                <button type="button" class="btn btn-info">Add to Cart</button>
                <button type="button" class="btn btn-outline-warning">Scarta</button>
            </div>
            </div>
        </div>`;
        document.querySelector('#booksArea').appendChild(col);
    });
}



let cartItems=[];
let bouncer;

if((localStorage.getItem('InCart'))) {
    cartItems = JSON.parse(localStorage.getItem('InCart'));
} else {
    localStorage.setItem('InCart', JSON.stringify(cartItems));
}



document.addEventListener('DOMContentLoaded', () => {
    updateCartList(JSON.parse(localStorage.getItem('InCart'))); 
    document.querySelector('#booksArea').addEventListener('click', (e) => {
        AddToCart(e.target);
        hideBook(e.target);
    })

    document.querySelector('div > a').addEventListener('click', listenOnRemove());
    document.querySelector('#showHidden').addEventListener('click', () => document.querySelectorAll('#booksArea .col').forEach( ele => ele.classList.remove('d-none')));
})


updateCartList = (cartArray) => {
    document.querySelector('#cartArea').replaceChildren();
    document.querySelectorAll('.h-100').forEach(card => card.classList.remove('border-danger'));

    bouncer = (cartArray).map(obj => obj.asin) ;

    document.querySelector('#carrelloNum').innerText = (cartArray).length;

    if(cartArray.length > 0) {
        
        cartArray.forEach(obj => {
            
            let div = document.createElement('div');
            div.className = "card";
            div.innerHTML =
                `<div class="row g-2 p-3">
                    <div class="col-3">
                        <img src="${obj.img}" class="img-fluid rounded" alt="book img">
                    </div>
                    <div class="col">
                        <div id="${obj.asin}" class=" card-body p-0">
                            <h5 class="card-title mt-0">${obj.title}</h5>
                            <p class="card-text w-25 text-center text-white lead border rounded-pill bg-black fs-6">$ ${obj.price}</p>
                            <button class="remove btn btn-sm btn-outline-danger float-end">Remove</button>
                        </div>
                    </div>
                </div>`;
            document.querySelector('#cartArea').appendChild(div);
            document.querySelector('#' +  CSS.escape(obj.asin)).parentNode.classList.add('border-danger', 'border-5');
            
        });
    } else {
        document.querySelector('#cartArea').append(document.createElement('h4').innerText= 'Your cart is empty. Items added to cart will be displayed here');
    }
}

AddToCart = (target) => {
    if (target.innerText == "Add to Cart") {
        if (bouncer.includes(target.parentNode.id)) {
            alert('Already in cart');
        } else{ 
            cartItems.push(...books.filter(obj => obj.asin == target.parentNode.id));
            localStorage.setItem('InCart', JSON.stringify(cartItems));
            updateCartList(JSON.parse(localStorage.getItem('InCart')));

        }
    }
}

hideBook = (target) => {
    if (target.innerText == "Scarta") {
        target.parentNode.parentNode.parentNode.classList.add('d-none');
    } 
}

listenOnRemove = () => {
    document.querySelector('#carrellocanvas').addEventListener('click', (e) => {
        if (e.target.classList.contains('remove')) {
            removeFromCart(e.target);
        }
        if (e.target.innerText == "Remove All") {
            removeAll();
        }
    });
}


removeFromCart =(button) => {
    cartItems = JSON.parse(localStorage.getItem('InCart')).filter(obj => obj.asin != button.parentNode.id);
    localStorage.setItem('InCart', JSON.stringify(cartItems));
    updateCartList(JSON.parse(localStorage.getItem('InCart')));
}

removeAll = () => {
    cartItems.splice(0);
    localStorage.setItem('InCart', JSON.stringify(cartItems));
    updateCartList(JSON.parse(localStorage.getItem('InCart')));
}