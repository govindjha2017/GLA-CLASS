const heading = document.querySelectorAll('h1')[0];

// heading.onclick = function(){
//     console.log('clicked');

//     heading.style.color='red';
//     heading.innerText='nhi sikhna hai'
// }

// heading.addEventListener('click',(e)=>{
//    console.log(e.target);
//   //alert('dont click this');

//    e.target.style.border ='2px solid red';
//   //x= prompt('enter your age')
//   alert('dont click this');
   
// })

// heading.addEventListener('click',(e)=>{
//     e.target.style.color='blue';
// })

const para = document.querySelector('p');

para.addEventListener('copy',(e)=>{

    e.target.style.display='none';
    window.alert('Cheating karta hai')
})

heading.addEventListener('dbclick',(e)=>{
    e.target.style.backgroundColor='grey';


    // console.dir(e.target);
})
heading.addEventListener('mouseleave',(e)=>{
    e.target.style.border='2px solid green'
    e.target.style.padding='20px'
})