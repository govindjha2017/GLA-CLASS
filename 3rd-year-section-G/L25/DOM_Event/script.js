const btn = document.querySelector('button');

// btn.onclick= function (){
//     console.log('clicked');
// }
const para = document.querySelectorAll('p')[1];

para.addEventListener('click',(e)=>{
        //    console.log(e.target);
           e.target.style.color='red';
           e.target.style.border='5px solid green'
})

const spcl = document.querySelector('#spcl');
spcl.addEventListener('mouseenter',(e)=>{
      e.target.style.color='blue';
      e.target.style.fontSize='3rem';
})
spcl.addEventListener('mouseleave',(e)=>{
    e.target.style.color='black';
    e.target.style.fontSize='1rem';
})

const h1 = document.querySelector('h1');
h1.addEventListener('copy',(e)=>{
    e.target.innerText=''
    window.alert('cheating karta hai')
})