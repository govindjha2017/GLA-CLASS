let arr = [13,5,65,56,76,17];

let sum = arr.reduce((acc,item)=>{
    let x = acc+item;
    return x
});

console.log(sum);