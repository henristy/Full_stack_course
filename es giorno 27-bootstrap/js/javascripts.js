alert('sono presenti ' + document.querySelectorAll('section img').length + ' viaggi');


addHot = (arr) => {
    arr.forEach(ele => {
        let div = document.createElement('div');
        div.className = 'card-img-overlay'
        let span = document.createElement('span');
        span.className='badge rounded-pill text-bg-danger float-end';
        span.innerText= 'HOT';
        div.appendChild(span);
        ele.appendChild(div);
    })
}
addHot(document.querySelectorAll('#summercollapse .card'));

removeALL= (arr) => {
    arr.forEach( ele => ele.classList.add('d-none'));
}

//removeALL(document.querySelectorAll('.card'));