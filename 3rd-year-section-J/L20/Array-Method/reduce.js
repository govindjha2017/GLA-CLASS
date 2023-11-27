var arr = [3,78,65,45,98,24];

var x =arr.reduce((acc,item,ind,arr)=>{
    // console.log(acc ,item);

    // console.log(acc);
    return ind*5;
})

console.log(x);