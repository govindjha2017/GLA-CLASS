// var x=30;

// function fun(){
//     var a=10;
//     console.log(a);
//     console.log(x);
// }
// fun();

// console.log(a);

var a=10;
function outer(){
    var x=12;
    function inner(){
       var p=25;
       console.log(x);
       console.log(a);
    }
    console.log(x);
    console.log(a);
   console.log(p);
    inner();
    console.log(p);
}
outer();