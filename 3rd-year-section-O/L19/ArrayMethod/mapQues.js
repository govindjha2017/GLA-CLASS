let arr = [
    {firstName:'narendra',lastName:'Modi',age:68},
    {firstName:'Donald',lastName:'Trump',age:76},
    {firstName:'Prshant',lastName:'Tambu',age:24},
    {firstName:'animesh',lastName:'raj',age:68}
];

// op= [' narendra Modi', 'Donald Trump','Prshant Tambu','animesh raj']

let op = arr.map((item)=>{
   return item.firstName +" " +item.lastName;
})

console.log(op);