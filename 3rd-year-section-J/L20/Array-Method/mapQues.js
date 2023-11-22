var arr = [
    {firstName:'govind',lastName:'Jha',age:24},
    {firstName:'Ankit',lastName:'sharma',age:35},
    {firstName:'Donald',lastName:'Trump',age:74},
    {firstName:'priyanka',lastName:'Chopra',age:24},
];

// op// ['govind jha','Ankit sharma','Donald trump','Priyanka chopra'];

var op = arr.map((item)=>{
     return item.firstName+' '+item.lastName;
})
console.log(op);