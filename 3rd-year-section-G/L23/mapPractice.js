let arr = [
    {firstName:'nishant',lastName:'Jha',age:25},
    {firstName:'Donald',lastName:'trump',age:75},
    {firstName:'Narendra',lastName:'Modi',age:66},
    {firstName:'Depika',lastName:'padukone',age:25}
];

// // op//  [nishant jha, donald trup ,narendra modi, depika padukone]

 let op = arr.map((item)=>{
     return item.firstName+" "+item.lastName
 })
 console.log(op);