let arr = [34,67,5,13,43,9];

let sum = arr.reduce((acc,item)=>{
    let x = acc+item;
    return x;
});
console.log(sum);