var arr = [3,78,65,45,98,24];

var filterarr = arr.filter((item,ind,arr)=>{
     if(ind%2==0){
        return true;
     }
})

console.log(filterarr);