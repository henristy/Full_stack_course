const taskArea= document.createElement('div');
taskArea.id ='taskArea';
const ul= document.createElement('ul');
let bigBtn = document.querySelector('form > button');

bigBtn.addEventListener('click', () => {
    if (document.querySelector('input').value) {
        const taskline= document.createElement('div');
        taskline.className = 'taskline';
        let li = document.createElement('li');
        li.className = 'task' ;
        li.innerText = document.querySelector('input').value;

        li.addEventListener('click', () => li.style.textDecoration = 'line-through');

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
        document.querySelector('input').placeholder = "Devi prima inserire un task";
    }
})


