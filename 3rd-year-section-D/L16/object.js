var student = {
    'full name':'rahul',
    age:20,
    email: 'rahul@gmail.com',
    city: 'Delhi',
}

// console.log(student.age);
// console.log(student.email);
// console.log(student['full name'])
// console.log(student['city']);

for(var key in student){
     console.log(student[key]);
}

// var arr =[56,67,34];

// for(var x in arr){
//   console.log(arr[x]);
// }