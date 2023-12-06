const btn = document.querySelector('button');
//  btn.onclick=function(){
//     console.log('clicked')
//  }

btn.addEventListener('click',(e)=>{
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    if(e.target.innerText=='Darkmode'){
        e.target.innerText='lightmode'
    }
    else{
        e.target.innerText='Darkmode'
    }
});

const h1 = document.querySelector('h1');
h1.addEventListener('copy',(e)=>{
     e.target.innerText='';
     window.alert('cheating karta hai');
})

const p = document.querySelector('p');
p.addEventListener('mouseleave',(e)=>{
    e.target.style.color='green';
    e.target.style.fontSize='1.5rem';
    e.target.style.border='2px solid red'
})