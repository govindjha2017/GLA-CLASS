let arr = [
    {firstName:'narendra',lastName:'Modi',age:68},
    {firstName:'Donald',lastName:'Trump',age:76},
    {firstName:'Prshant',lastName:'Tambu',age:24},
    {firstName:'animesh',lastName:'raj',age:68}
];

// op = {68:2,76:1,24:1}

let op = arr.reduce((acc,item)=>{
  if(acc[item.age]){
       acc[item.age]=acc[item.age]+1;
  }
  else{
    acc[item.age]=1
  }
   return acc;  
},{})

console.log(op);