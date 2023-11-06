let arr = [13,5,65,56,76,17];

let filterArr = arr.filter((item,ind,arr)=>{
     if(item%2==0){
        return false;
     }
     else{
        return true;
     }

})
console.log(filterArr);