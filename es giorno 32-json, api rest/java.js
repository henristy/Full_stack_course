let tasks =  JSON.parse(localStorage.getItem('Todolist'));
updateList(tasks);

document.querySelectorAll('button')[1].addEventListener('click', () => {
    tasks.splice(0);
    localStorage.setItem('Todolist' , JSON.stringify(tasks));
    updateList(JSON.parse(localStorage.getItem('Todolist')));
});

document.querySelectorAll('button')[0].addEventListener('click', () =>  {
    if (document.querySelector('input').value.trim().length > 2) {
        tasks.push(document.querySelector('input').value);
        localStorage.setItem('Todolist' , JSON.stringify(tasks));
        updateList(JSON.parse(localStorage.getItem('Todolist')));
       
    }
});

function updateList(task) {
    document.querySelector('ul').replaceChildren();
    task.forEach( (ele, i) => {
        let li = document.createElement('li');
        li.className = 'row';

        let p =document.createElement('p');
        p.classList.add('col-10');
        p.innerText = ele;

        let checkButton = document.createElement('button');
        checkButton.type='button';
        checkButton.innerHTML = '<i class= "bi bi-check2"></i>';
        checkButton.className='col btn btn-sm btn-success';
        checkButton.addEventListener('click', () => p.classList.toggle('text-decoration-linethrough'));

        let taskdelete = document.createElement('button');
        taskdelete.className= 'col btn btn-sm btn-danger';
        taskdelete.innerHTML = '<i class= "bi bi-trash"></i>';
        taskdelete.type='button';
        taskdelete.addEventListener('click', () => {
            tasks = JSON.parse(localStorage.getItem('Todolist')).filter((element, ii) => i != ii);
            localStorage.setItem('Todolist', JSON.stringify(tasks));
            taskdelete.parentNode.remove();
        });
        li.appendChild(p);
        li.appendChild(checkButton)
        li.appendChild(taskdelete);
        document.querySelector('ul').appendChild(li);
    });
}


let timer=0;
console.log(timer);
setInterval(() => {
    timer++
    sessionStorage.setItem('stopwatch', timer);
    document.querySelector('h2').innerText= sessionStorage.getItem('stopwatch');
}, 1000);

console.log(timer);

