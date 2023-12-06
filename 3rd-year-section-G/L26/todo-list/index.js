const inp = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click',()=>{
    const str = ` <div class="section-A">
                    <input type="checkbox" class="checkbox">
                    <p>${inp.value}</p>
                </div>
                <div class="section-B">
                    <span class="up-arrow">⬆</span>
                    <span class="bin">🗑</span>
                    <span class="down-arrow">↓</span>
                </div>`
    
    const temp = document.createElement('div');
    temp.innerHTML=str;
    temp.classList.add('task')
    const taskList = document.querySelector('.task-list')
    taskList.append(temp);
    inp.value='';
})

const taskList = document.querySelector('.task-list');

taskList.addEventListener('click',(e)=>{
      console.log(e.target);
      if(e.target.getAttribute('class')=='checkbox'){
        // console.log(e.target.nextElementSibling)
        e.target.nextElementSibling.classList.toggle('check');
      }
      else if(e.target.getAttribute('class')=='bin'){
        e.target.parentElement.parentElement.remove();
      }
      else if(e.target.getAttribute('class')=='up-arrow'){
        const currElem =   e.target.parentElement.parentElement;
        const prevelem = currElem.previousElementSibling;
        currElem.after(prevelem);
      }
      else if(e.target.getAttribute('class')=='down-arrow'){
        const currElem =   e.target.parentElement.parentElement;
        const nextElem = currElem.nextElementSibling;
         nextElem.after(currElem);
      }
})