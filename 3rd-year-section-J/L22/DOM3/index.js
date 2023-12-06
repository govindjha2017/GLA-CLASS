// const city = document.querySelectorAll('li')[2];
// city.style.color='red';

// let x = city.previousElementSibling
// x.style.color='blue'

// let y = city.nextElementSibling
// y.style.color='yellow';

// const ul = city.parentElement;
// console.log(ul);

// const div = city.parentElement.parentElement;
// div.style.border='5px solid red';
// console.log(div);

// const check=div.children[1].children[4]
// console.log(check);
// check.style.color='green';
// city.remove();
// ul.removeChild(ul.children[1]);

const div = document.createElement('div');
console.log(div);

const h1 = document.createElement('h1');
h1.innerText='CITY';
div.appendChild(h1);

const body = document.querySelector('body');
body.appendChild(div);

const ul = document.createElement('ul');

const arr= ['delhi','kolkata','noida','mumbai','bhopal'];
for(let i of arr){
    console.log(i);
    const li = document.createElement('li');
    li.innerText=i;
    ul.append(li);
}

div.append(ul);