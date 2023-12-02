const city = document.querySelectorAll('li')[2];
console.log(city);
city.style.color='red';

let x = city.previousElementSibling;
x.style.color='green';

let y = city.nextElementSibling;
y.style.color='teal';

const ul = city.parentElement;
console.log(ul);

const div = city.parentElement.parentElement;
console.log(div);
div.style.border ='5px solid green';

const child = div.children[1].children[4];
console.log(child);
child.style.color='blue';