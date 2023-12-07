const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    const str = `<div class="A">
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
    if(inp.value!=''){
        tasklist.appendChild(task);
    }
    inp.value=''
})

const tasklist = document.querySelector('.task-list');
tasklist.addEventListener('click',(e)=>{
      console.log(e.target.getAttribute('class'));
      if(e.target.getAttribute('class')=='checkbox'){
        e.target.nextElementSibling.classList.toggle('check');
      }
      else if(e.target.getAttribute('class')=='bin'){
        e.target.parentElement.parentElement.remove();
      }
      else if(e.target.getAttribute('class')=='up-arrow'){
        let currtask = e.target.parentElement.parentElement;
        let prevtask = currtask.previousElementSibling;
        currtask.after(prevtask);
      }
      else if(e.target.getAttribute('class')=='down-arrow'){
        let currtask = e.target.parentElement.parentElement;
        let nexttask = currtask.nextElementSibling;
        currtask.before(nexttask);
      }
})