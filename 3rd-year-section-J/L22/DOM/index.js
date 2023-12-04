const head =document.getElementsByTagName('h1')[0];
console.log(head);

head.style.color='red';
head.style.border='2px solid green';

// const para = document.getElementsByTagName('p')[1];
// para.style.color='green'

const para = document.getElementById('para');
para.style.backgroundColor='yellow';
para.style.padding='30px';

const movies = document.getElementsByClassName('fav-movie');
// movies.style.color='red'  // nhi kar sakte
for(let movie of movies){
    movie.style.color='teal';
}

const p = document.querySelectorAll('p')
console.log(p);

const h1 = document.querySelector('h1');

// h1.innerText='<a>nhi skihna hai</a>'
h1.innerHTML='<a>nhi skihna hai</a>'

const img = document.querySelector('img');
// img.style.width='300px'
img.setAttribute('src','https://images.unsplash.com/photo-1682687220975-7b2df674d3ce?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
img.setAttribute('class','one');

const spcl = document.querySelector('p');
spcl.setAttribute('id','spcl');
spcl.setAttribute('x',"hello");

const para1 = document.querySelector('#para');
para1.removeAttribute('id');

const div= document.querySelector('div');

div.setAttribute('class','spcl-div xyz');

console.log(div.getAttribute('class'));

div.removeAttribute('class');