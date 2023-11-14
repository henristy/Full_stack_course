const taskArea= document.createElement('div');
const ul= document.createElement('ul');
taskArea.id ='taskArea';
let bigBtn = document.querySelector('form > button');


bigBtn.addEventListener('click', () => {
    if (document.querySelector('input').value.trim().length) {
        const taskline= document.createElement('div');
        taskline.className = 'taskline';

        let li = document.createElement('li');
        li.className = 'task' ;
        li.innerText = document.querySelector('input').value.toUpperCase();
        li.addEventListener('click', () => li.classList.toggle('completed'));

        let delLi = document.createElement('button');
        delLi.innerText = 'Delete';
        delLi.className = 'sBtn';
        delLi.addEventListener('click', () => delLi.parentNode.remove());
        
        taskline.appendChild(li);
        taskline.appendChild(delLi);
        ul.appendChild(taskline);
        taskArea.appendChild(ul);
        document.querySelector('body').appendChild(taskArea);

        document.querySelector('input').value='';
        document.querySelector('input').placeholder = "inserici un'altro task";
    }else {
        document.querySelector('input').value='';
        document.querySelector('input').placeholder = "Devi prima scrivere un task";
    }
})


