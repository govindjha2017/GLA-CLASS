const city = document.querySelectorAll('li')[2];
city.style.color='red';

const x = city.previousElementSibling;
x.style.color='blue';
const y = city.nextElementSibling;
y.style.color='teal';

const ul = city.parentElement;
console.log(ul);

const div = city.parentElement.parentElement
console.log(div);
div.style.border='5px solid red';

const check = div.children[1].children[4];
console.log(check);
check.style.color='pink'