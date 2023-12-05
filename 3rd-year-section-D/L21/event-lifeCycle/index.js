const grand = document.querySelector('#grand-parent');
const parent=document.querySelector('#parent');
const child = document.querySelector('#child');

grand.addEventListener('click',(e)=>{
    console.log('grand-parent div is clicked!')
},true)
parent.addEventListener('click',(e)=>{
    console.log('parent div is clicked!')
   
},false)
child.addEventListener('click',(e)=>{
    console.log('child div is clicked!')
    // e.stopPropagation();
},false)