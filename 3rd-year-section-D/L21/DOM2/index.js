// const city = document.querySelectorAll('li')[2];
// console.log(city);
// city.style.color='red'

// // let ul = city.parentElement;
// // console.log(ul);

// let x = city.previousElementSibling;
// console.log(x);
// x.style.color='blue';

// let y = city.nextElementSibling
// y.style.color='teal'

// let div = city.parentElement.parentElement;
// div.style.border='2px solid green'

// let check = div.children[1].children[4];
// console.log(check);

// check.style.color='orange'

let newDiv = document.createElement('div');
// newDiv.innerText= 'hello world'

let body = document.querySelector('body');
body.append(newDiv);

let newh1= document.createElement('h1');
newh1.innerText='city';
newDiv.append(newh1);

let newul = document.createElement('ul');

let li1 = document.createElement('li');
li1.innerText='delhi';
let li2 = document.createElement('li');
li2.innerText='kolkata';
let li3 = document.createElement('li');
li3.innerText='moida';
let li4 = document.createElement('li');
li4.innerText='patna';
let li5 = document.createElement('li');
li5.innerText='bhopal';

// newul.append(li1);
// newul.append(li2);
// newul.append(li3);
// newul.append(li4);
// newul.append(li5);
newul.append(li1,li2,li3,li4,li5)
newDiv.append(newul);

const x = document.querySelectorAll('li')[2];
x.style.color='red';
x.remove();

const y = document.querySelector('ul');
console.log(y);

let z= y.children[3];
y.removeChild(z);