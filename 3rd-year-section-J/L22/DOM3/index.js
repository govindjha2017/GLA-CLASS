const city = document.querySelectorAll('li')[2];
city.style.color='red';

let x = city.previousElementSibling
x.style.color='blue'

let y = city.nextElementSibling
y.style.color='yellow';

const ul = city.parentElement;
console.log(ul);

const div = city.parentElement.parentElement;
div.style.border='5px solid red';
console.log(div);

const check=div.children[1].children[4]
console.log(check);
check.style.color='green'