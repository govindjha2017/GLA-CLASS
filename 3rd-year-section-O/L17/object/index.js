var student = {
   'full Name': 'Hemant',
   email:'hemant@gmail.com',
   city:'Delhi',
   'contact':'34567654567',
   age:25,
   'marks': [7,8,6,8],
  k:56
}
// console.log(student['full Name']);
// console.log(student['city'])


var a = student.city;
// console.log(student.age);

for(var k in student){
    console.log(student[k]);
}