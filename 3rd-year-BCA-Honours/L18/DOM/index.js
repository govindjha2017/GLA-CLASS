const para = document.getElementById('spcl');

console.log(para);

const p = document.getElementsByClassName('pargraph');

console.log(p);

const heading = document.getElementsByTagName('h1')[0];
console.log(heading);

heading.style.color='red';
heading.style.backgroundColor = "lightblue"
heading.style.border='2px solid black';

const fav = document.getElementsByClassName('fav-movies');

console.log(fav);

for(var movie of fav){
    movie.style.color='blue';
}

// para.innerText="jai ho"
para.innerHTML="gfchwjkuhfxdszfkugl";

const head2 = document.querySelector('h1');

head2.style.padding='20px';

const favMovies = document.querySelectorAll('.fav-movies');

const newpara = document.querySelector('#spcl');


// setAttribute removeAttribute getAttribute

newpara.setAttribute('class','one');

newpara.setAttribute('kuchh',"657");
console.log(newpara);

newpara.removeAttribute('kuchh');
console.log(newpara.getAttribute('id'));
const image = document.querySelector('img');
image.setAttribute('src','https://images.unsplash.com/photo-1691732618725-c0a7aa03b6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80')