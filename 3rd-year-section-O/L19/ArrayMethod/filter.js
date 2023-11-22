let arr =[34,65,78,18,8,92];

let filterArr=arr.filter((item)=>{
    if(item<40){
        return true;
    }
})

console.log(filterArr);