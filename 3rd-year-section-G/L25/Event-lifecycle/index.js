const grand = document.querySelector('#grand-parent');
const parent =document.querySelector('#parent');
const child = document.querySelector('#child');
// console.log(grand)
grand.addEventListener('click',(e)=>{
      console.log('grand-parent div clicked!')
},false)
parent.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('parent div clicked!')
},false)
child.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('child div clicked!')
},false)