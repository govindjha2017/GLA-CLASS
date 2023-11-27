let arr =[34,65,78,18,8,92];

let reduceArr = arr.reduce((acc,item,ind,arr)=>{
    // console.log(acc,',',item);

    return acc+3
    // console.log(arr);
})

console.log(reduceArr);