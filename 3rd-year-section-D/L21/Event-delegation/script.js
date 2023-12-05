
const container = document.querySelector('.container');

container.addEventListener('click',(e)=>{
    console.log(e.target);
    e.target.innerText='hello ji'
})