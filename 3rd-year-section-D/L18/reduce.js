let arr = [13,5,65,56,76,17];

// let reduceVal = arr.reduce((acc,item,ind,arr)=>{
//     // console.log(acc);
//     return ind*5;
// })

let reduceVal = arr.reduce((acc,item,ind)=>{
   console.log(acc);
   return ind+10;
},"vipul")

// console.log(reduceVal);