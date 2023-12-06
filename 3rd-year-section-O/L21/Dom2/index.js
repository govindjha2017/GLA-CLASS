// const city = document.querySelectorAll('li')[2];
// console.log(city);
// city.style.color='red';

// let x = city.previousElementSibling;
// x.style.color='green';

// let y = city.nextElementSibling;
// y.style.color='teal';

// const ul = city.parentElement;
// console.log(ul);

// const div = city.parentElement.parentElement;
// console.log(div);
// div.style.border ='5px solid green';

// const child = div.children[1].children[4];
// console.log(child);
// child.style.color='blue';

const div = document.createElement('div');
// console.log(div);
const h1 = document.createElement('h1');
h1.innerText='CITY';
div.appendChild(h1);
const body = document.querySelector('body');
body.appendChild(div);
const ul = document.createElement('ul');
div.appendChild(ul);

const arr = ['delhi','kolkata','noida','bhopal','indore'];
for(i of arr){
   const li =  document.createElement('li');
     li.innerText=i;
     ul.appendChild(li);
}