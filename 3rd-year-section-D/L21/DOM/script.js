const head = document.getElementsByTagName('h1')[0];
console.log(head);

head.style.color='red';
head.style.backgroundColor='blue';

const para = document.getElementById('para');
para.style.color='teal';
para.style.border='4px solid green';
para.style.padding='20px';

const movies = document.getElementsByClassName('fav-movie');
console.log(movies);

for(let movie of movies){
    movie.style.color='green';
}

let x = document.querySelector('#para');
x.style.padding='0px';

let y = document.querySelectorAll('.fav-movie');
console.log(y);

let h = document.querySelectorAll('h1')[0];
h.style.color='black';
// innerText ineerHtml
h.innerText='nhi sikhna hai';


// setAttrinute getAttribute  removeAttribute
 const img = document.querySelector('img');
// img.setAttribute('class','one')
// img.setAttribute('class','one two')
// let ab = img.getAttribute('class');
// console.log(ab);

// img.removeAttribute('class');

img.classList.add('one')
img.classList.add('two');

img.classList.remove('two');

console.log(img.classList.contains('two'));

img.classList.toggle('two');
img.classList.toggle('two');
img.classList.toggle('two');

const spcl = document.querySelectorAll('p')[2];
spcl.setAttribute('id','spcl')