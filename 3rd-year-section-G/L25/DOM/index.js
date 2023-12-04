const head = document.getElementsByTagName('h1')[0];
console.log(head);

head.innerText='Nhi sikhna hai'
head.style.color='red';
head.style.border ='5px solid black'
head.style.backgroundColor='blue';

const para = document.getElementById('para');
para.style.color='teal';
para.style.padding='50px';

const movies = document.getElementsByClassName('fav-movie');

for(movie of movies){
    movie.style.color='green';
}

let x= movies[2];
x.innerText ="avanger";

let heading = document.querySelectorAll('h1')[0];
heading.style.color='black';

let p = document.querySelector('#para');
para.style.padding='0px'

const img = document.querySelector('img');
// setAttribute getAttribute removeAtrribute
// // img.style.width='250px';
// img.setAttribute('class','one');
// img.setAttribute('src','https://images.unsplash.com/photo-1682685794761-c8e7b2347702?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D');
// // img.removeAttribute('class');
// img.setAttribute('class','one two');
// console.log(img.getAttribute('class'));
// img.removeAttribute('class');

//classList

img.classList.add('one');
img.classList.add('two');
img.classList.remove('two');
console.log(img.classList.contains('one'));
img.classList.toggle('two');
img.classList.toggle('two');
img.classList.toggle('two');

const btn = document.querySelector('#btn');
btn.addEventListener('click',()=>{
    const body = document.querySelector('body');
    body.classList.toggle('dark');
    if(btn.innerText=='Dark mode'){
        btn.innerText='light mode'
    }
    else{
        btn.innerText='Dark mode'
    }
   
})