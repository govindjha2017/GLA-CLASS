// const city = document.querySelectorAll('li')[2];
// city.style.color='red';

// const x = city.previousElementSibling;
// x.style.color='blue';
// const y = city.nextElementSibling;
// y.style.color='teal';

// const ul = city.parentElement;
// console.log(ul);

// const div = city.parentElement.parentElement
// console.log(div);
// div.style.border='5px solid red';

// const check = div.children[1].children[4];
// console.log(check);
// check.style.color='pink'

const div = document.createElement('div');

const body = document.querySelector('body');
body.appendChild(div);

const h1 = document.createElement('h1');
h1.innerText='CITY';
div.appendChild(h1);
const ul = document.createElement('ul');

const arr = ['delhi','kolkata','noida','bhopal','indore'];
for(let item of arr){
    const li = document.createElement('li');
    li.innerText= item;
    ul.appendChild(li);
}
div.appendChild(ul);

const x = document.querySelectorAll('li')[2];
x.remove();
ul.removeChild(ul.children[3]);