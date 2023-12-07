const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    const str=`<div class="A">
                    <input type="checkbox" class="checkbox">
                    <p>${inp.value}</p>
                </div>
                <div class="B">
                    <span class="up-arrow">⬆</span>
                    <span class="bin">🗑</span>
                    <span class="down-arrow">⬇</span>
                </div>`

    const task = document.createElement('div');
    task.classList.add('task');
    task.innerHTML=str;
    const tasklist = document.querySelector('.task-list');
    tasklist.append(task);
    inp.value=''
})