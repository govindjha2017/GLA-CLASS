let person = {
     'first name':'pankaj',
    'age':18,
    city:'delhi',
    'email':'pankaj@gmail.com',
    x:16
}

// let x = person.age
// console.log(x);

// let a = person['first name']
// let x = person.city;
// let y = person['city'];

for(let x in person){
    // console.log(x);
    console.log(person[x]);
}