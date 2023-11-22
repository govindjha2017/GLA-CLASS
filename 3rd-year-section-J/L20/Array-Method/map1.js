var arr = [3,78,65,45,98,24];

var mapArr = arr.map((item,ind,arr)=>{
        arr[ind]=8;
})
console.log(arr);
console.log(mapArr);