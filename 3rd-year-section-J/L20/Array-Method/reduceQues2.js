var arr = [
    {firstName:'govind',lastName:'Jha',age:24},
    {firstName:'Ankit',lastName:'sharma',age:35},
    {firstName:'Donald',lastName:'Trump',age:74},
    {firstName:'priyanka',lastName:'Chopra',age:24},
];

// op = {24:2,35:1,74:1}

var op = arr.reduce((acc,item)=>{
    if(acc[item.age]){
        acc[item.age]= acc[item.age]+1;
    }
    else{
        acc[item.age]=1;
    }
    return acc;
},{})

console.log(op);