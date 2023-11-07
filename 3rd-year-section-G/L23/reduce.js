let arr = [34,67,5,13,43,9];

// let reduceArr = arr.reduce((acc,item,ind)=>{
//      console.log(acc);

//      return ind*5;
// })

let reduceArr = arr.reduce((acc,item,ind,arr)=>{
      let x=acc+item;
      return x;
})

console.log(reduceArr);