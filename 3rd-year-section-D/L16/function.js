function fun(){
    var c=20;
    console.log('inside fun function')
    return  c;
}

// var p =fun();
// console.log(p);

function outer(){
    var x=20;
    function inner(){
        var y="hello";
        console.log(y);
    }

    inner();
}

var x= outer;

// // x()
// outer();

var a = function (){
    var p=20;
    console.log(p);
}

// a();

// arrow function
var a = ()=>{
    var p=20;
    console.log(p);
}

var t = ()=>{
    console.log('inside arrow function');
}
t();