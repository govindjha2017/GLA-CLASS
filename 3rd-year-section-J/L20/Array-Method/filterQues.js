var arr = [
    {firstName:'govind',lastName:'Jha',age:24},
    {firstName:'Ankit',lastName:'sharma',age:35},
    {firstName:'Donald',lastName:'Trump',age:74},
    {firstName:'priyanka',lastName:'Chopra',age:24},
];

// op// ['govind jha','Priyanka chopra'];

var op = arr.filter((item)=>{
    if(item.age==24){
        return true
    }
})

console.log(op);