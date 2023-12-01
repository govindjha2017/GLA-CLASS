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
