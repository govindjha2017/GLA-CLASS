const h1 = document.getElementsByTagName('h1')[0];

console.log(h1);
// how to add style on html element using js
h1.style.color='red'
h1.style.backgroundColor='teal';
h1.style.border ='12px solid blue';
h1.style.width='300px'

const para = document.getElementsByTagName('p')[1];
para.style.color='blue';
para.style.padding='50px'

const spcl = document.getElementById('spcl');

spcl.style.backgroundColor='yellow'
spcl.style.color='blue';

let favmovies = document.getElementsByClassName('fav-movie');

for(let movie of favmovies){
    movie.style.color='green';
}

let x = document.querySelector('h1');

x.style.color='yellow';

x.innerText='nhi sikhna hai'

const pargraph = document.querySelectorAll('p')[1];
pargraph.style.padding='0px'

let y = document.querySelector('#spcl');
y.style.backgroundColor='green';

let a = document.querySelectorAll('.fav-movie');

for(let i of a){
    i.style.color='red';
}

document.querySelectorAll('li')[2].innerText="kgf"

///////////////////////////////////////////
//// setAttriute getAttribute removeAttribute
// const img = document.querySelector('img');
// // img.style.width='300px'
// img.setAttribute('class','one')
// img.setAttribute('class','two one')
// // console.log(img.getAttribute('class'));
// let xyz = document.querySelectorAll('p')[0];
// xyz.setAttribute('id','para')

// xyz.removeAttribute('id');


// classlist  : add(),remove(),contains(),toggle();
const img = document.querySelector('img');

img.classList.add('one');
img.classList.add('two');
img.classList.remove('two');
console.log(img.classList.contains('two'));

img.classList.toggle('two');
img.classList.toggle('two');
img.classList.toggle('two');
img.classList.toggle('two');