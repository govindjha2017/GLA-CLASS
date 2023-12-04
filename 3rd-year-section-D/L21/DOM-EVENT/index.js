const btn = document.querySelector('#btn');
btn.onclick = function(){
    
     const body = document.querySelector('body');
     body.classList.toggle('dark');
     console.log(btn.textContent)
     if(btn.innerText=='Dark mode'){
          btn.innerText='light Mode';
     }
     else{
        btn.innerText='Dark mode';
     }
}

const para = document.querySelectorAll('p')[1];
para.addEventListener('click',(e)=>{
   console.log(e.target);
   e.target.style.border='5px solid green';
   e.target.innerText="hello"

})

const p3 = document.querySelectorAll('p')[2];
p3.addEventListener('mouseenter',(e)=>{
    // console.log('hello');
    e.target.style.color='blue';
})

p3.addEventListener('mouseleave',(e)=>{
    e.target.style.color='black'
})

const h1 = document.querySelector('h1');
h1.addEventListener('copy',(e)=>{
    e.target.innerText='';
    window.alert('cheating karta hai')
})