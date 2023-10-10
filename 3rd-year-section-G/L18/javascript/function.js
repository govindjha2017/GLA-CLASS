function fun(){
    console.log('inside fuction');
}


fun();

function multy(a,b){
    // console.log(a*b);
    return a*b;
}

var y = multy;
console.log(multy(4,5))

// console.log(y(4,6));


var x=function outer(){
    console.log('inside outer function');
}

x();

//anonymus function
var y = function (){
    console.log('inside hero function');
}