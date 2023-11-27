let arr =[34,65,78,18,8,92];

let reduceVal = arr.reduce((acc,item,ind)=>{

    console.log(acc);
         return acc+5;
},4)