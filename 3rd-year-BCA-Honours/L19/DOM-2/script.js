const para = document.querySelector('#spcl');

// para.setAttribute('class','one two')

//classList add remove contains toogle

para.classList.add('one');
para.classList.add('two');
para.classList.remove('two');

console.log(para.classList.contains('two'));

// para.classList.toggle('one');

// para.classList.toggle('two');

// if(para.classList.contains('one')){
//     para.classList.remove(one);
// }
// else{
//     para.classList.add(one);
// }

const movie = document.querySelectorAll('li')[3];

// console.log(movie);

const nextelm = movie.nextElementSibling;

nextelm.style.color='blue';

const prev = movie.previousElementSibling;
prev.style.color='green';

const parent = movie.parentElement;

parent.style.border ='2px solid red';

console.log(parent.children[1]);

const omg = document.querySelectorAll('li')[3];
parent.removeChild(omg);

const elem = document.createElement('p');

elem.innerHTML= 'this is my first element through js';
console.log(elem);

const div = document.querySelector('div');
div.style.border='2px solid green';
div.appendChild(elem);

// div.appendChild('hello')

div.children[2].remove();