let arr = [
    {firstName:'nishant',lastName:'Jha',age:25},
    {firstName:'Donald',lastName:'trump',age:75},
    {firstName:'Narendra',lastName:'Modi',age:66},
    {firstName:'Depika',lastName:'padukone',age:25}
];

// op = {25:2,75:1,66:1}

let op = arr.reduce((acc,item)=>{
    if(acc[item.age]){
        acc[item.age]++;
    }
    else{
        acc[item.age]=1;
    }
    return acc;
},{})

console.log(op);