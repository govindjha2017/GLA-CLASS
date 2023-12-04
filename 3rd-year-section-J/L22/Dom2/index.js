// // const head = document.getElementsByTagName('h1')[0];

// // // console.log(head);

// // // head.style.color='red';
// // // head.style.border='4px solid green'

// // const para = document.getElementById('para');
// // para.style.color='blue';
// // para.style.border='3px solid red';
// // para.style.padding='30px'

// const head = document.querySelector('h1');
// head.style.color='red';

// const check = document.querySelectorAll('h1')[1]
// check.style.backgroundColor='yellow'

const img = document.querySelector('img');
// // img.style.width='250px'
// img.setAttribute('class')

//// classList ;---- add  remove contains
img.classList.add('one');
img.classList.add('two');
img.classList.remove('two');

console.log(img.classList.contains('two'))

img.classList.toggle('two');
img.classList.toggle('two');
img.classList.toggle('two');

 
const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    const body = document.querySelector('body');
    body.classList.toggle('mode');

    body.classList.toggle('box');
    
})