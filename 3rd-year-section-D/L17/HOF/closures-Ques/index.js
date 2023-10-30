function outer(){
    var p=50;
    var x= 15;

    function inner(){
        var a =10;
        p++;
        console.log('p=',p,'a=',a);
    }

    return inner
}

var fun = outer();
var fun1 = outer();

fun();
fun();
fun1();