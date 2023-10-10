var arr = [10,23,56,72,"hello"]

// console.log(arr[2]);

// normal for loop
// for(var i=0;i<5;i++){
//   console.log(arr[i]);
// }

// console.log(arr);

// arr.push(69);
// arr.pop();
// arr.pop();
// console.log(arr);

// var arr = [10,23,56,72,"hello"];
// console.log(arr);
// // arr.shift();
// arr.unshift(36);
// console.log(arr);

// var arr = [10,23,56,72,"hello"];
// console.log(arr);
// arr.splice(1,3,67,11,59,108);
// console.log(arr);

var arr1 = [10,23,46,87,65];

// var x= arr1.slice(1,4);

// console.log(x);

var arr2 = [56,'hello',76,89,76,3];

// console.log(arr2.indexOf(76))

var arr3 = arr2.concat(arr1); 
// console.log(arr3);

for(var x of arr2){
   console.log(x);
}