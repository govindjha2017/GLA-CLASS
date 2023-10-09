var arr = [5,7,6,9,"hello"];

// console.log(arr[2]);

// for(var i=0;i<5;i++){
//     console.log(arr[i]);
// }
// console.log(arr);
// arr.push(67);
// arr.pop();
// arr.pop();

// console.log(arr);

var arr = [5,7,6,9,"hello"];
console.log(arr);
// arr.shift();

// arr.unshift(105);

arr.splice(3,2,46,56,76,67);
console.log(arr);

//for of loop
for(var item of arr){
    console.log(item);
}

//lenght of array
console.log(arr.length);


var arr = [34,76,768,213,8];

var y =[];
for(var item of arr){
    y.push(item*2);
}

