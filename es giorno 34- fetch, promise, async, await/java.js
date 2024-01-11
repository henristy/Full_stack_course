
let page=1;
let per_page=9;
let query1= 'baseball';
let query2= 'football';
let images=[];


getImages = async (pg, pp, qry) => {
    if (qry) {
        await fetch(`https://api.pexels.com/v1/search/?page=${pg}&per_page=${pp}&query=${qry}`, {method: 'GET', headers: {Authorization: 'xGYIr6sRPrS480Ubv0q9cAilNvBmvKdFdNTiBccBj0ydK1blcAYiCDme'}})
        .then(response =>response.json())
        .then(json => {
            console.log(json);
            images = json.photos;
            document.querySelector('.album .row').innerHTML='';
            images.forEach(photo => {
                let card = ` 
                <div class="col-md-4">
                    <div class="card mb-4 shadow-sm" id ="${photo.id}">
                        <img src="${photo.src.portrait}" alt="${photo.alt}">
                        <div class="card-body">
                            <h5 class="card-title">${photo.alt}</h5>
                            <p class="card-text"> taken by: ${photo.photographer} </p>
                            <div class="d-flex justify-content-between align-items-center">
                            <div class="btn-group">
                                <button type="button" class="btn btn-sm btn-outline-secondary"  data-bs-toggle="modal" data-bs-target="#viewModal">
                                View
                                </button>
                                <button type="button" class="btn btn-sm btn-outline-secondary">
                                Hide
                                </button>
                            </div>
                            <small class="text-muted">${photo.id}</small>
                            </div>
                        </div>
                    </div>
                </div>`;
                document.querySelector('.album .row').innerHTML += card; 
            });
        })
        .catch(console.error());  
    }  
}

document.addEventListener('DOMContentLoaded', () => {

    document.querySelector('main').addEventListener( 'click', (e) => {
        if (e.target.innerText == 'Load Images') {
            getImages(page, per_page, query1);
        } 
        if(e.target.innerText == 'Load Secondary Images') {
            
            getImages(page, per_page, query2);
        }
        if(e.target.innerText == 'Hide') {
            e.target.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('d-none');
        }
        if(e.target.nodeName == 'IMG') {
            // sessionStorage.setItem('imgDetail', JSON.stringify(images.filter(obj => obj.src.port == e.target.src || obj.alt == e.target.innerText)));
            window.location.href= `detailed.html?imgId=${e.target.parentNode.id}`;
        }
        if(e.target.innerText == 'View') {
            document.querySelector('#viewModalLabel').innerText= e.target.parentNode.parentNode.parentNode.children[0].innerText;
            document.querySelector('.modal-body img').alt= e.target.parentNode.parentNode.parentNode.children[0].innerText;
            document.querySelector('.modal-body img').src = e.target.parentNode.parentNode.parentNode.parentNode.children[0].src;
        }
        document.querySelector('section .container').appendChild(createSeachBar());

        document.querySelector('section .container form input').addEventListener('input', () => {
            getImages(page, per_page, document.querySelector('section .container form input').value);
        })
    })
   
})

createSeachBar = () => {
    let div = document.createElement('div');
    div.innerHTML = `
    <form id='searchbar' class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
    </form>
    `
    return div;
}

if(location.pathname.split('/').pop() == 'detailed.html') {
    const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('imgId');
        fetch(`https://api.pexels.com/v1/photos/${id}`, {method: 'GET', headers: {Authorization: 'xGYIr6sRPrS480Ubv0q9cAilNvBmvKdFdNTiBccBj0ydK1blcAYiCDme'}})
        .then(response =>response.json())
        .then(json => {
                console.log(json);
                document.querySelector('figure img').src = json.src.original;
                document.querySelector('figure img').alt = json.alt;
                document.querySelector('figcaption').innerText = json.alt;
                document.querySelector('main a').innerText = json.photographer;
                document.querySelector('main a').href = json.photographer_url;
                document.querySelector('body').style.backgroundColor = json.avg_color;
            })
        .catch(console.error());
    }