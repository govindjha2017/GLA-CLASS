const btn = document.querySelector('button');

// btn.onclick = function(){
//     console.log('clicked!')
// }

btn.addEventListener('click',(e)=>{
    // console.log(e.target);
    e.target.style.color='red'
});

const para = document.querySelectorAll('p')[1];
para.addEventListener('click',(e)=>{
    e.target.style.color='blue';
    e.target.style.border='2px solid green'
})

const spcl = document.querySelector('#spcl');
spcl.addEventListener('mouseenter',(e)=>{
     e.target.style.color='teal' 
     e.target.style.fontSize = '1.5rem'  
})
spcl.addEventListener('mouseleave',(e)=>{
    e.target.style.color='black';
    e.target.style.fontSize = '1rem'  
})

const h1 = document.querySelector('h1');
h1.addEventListener('copy',(e)=>{
     e.target.innerText='';
     window.alert('Chaeting karta hai');
})

const inp = document.querySelector('input');

inp.addEventListener('paste',(e)=>{
    //   e.target.innerText=' ';
    e.target.value=""
      window.alert('cheating karta hai')
})
