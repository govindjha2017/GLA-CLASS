

const btn = document.querySelector('#btn');

btn.addEventListener('click',()=>{
    let x= $('#inp').val();

    let arr =x.split('/');

    return arr[2]+arr[0]+arr[1];
})