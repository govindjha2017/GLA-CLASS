var a=10;

function outer(){
    var x=50;
    
    function inner(){
        console.log(y);
        var y=20;
         console.log(y);
    }
    console.log(x);
    inner();
}
console.log(p);
var p ="hello coder";
outer();