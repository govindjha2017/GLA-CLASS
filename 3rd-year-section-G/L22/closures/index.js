function outer(){
    var p=50;

    function inner(){
        var a=15;
        p++; /// ===
        console.log('p=',p,'a=',a);
    }
    return inner
}

var fun1 = outer();
var fun2 = outer();

fun1();
fun1();
fun2();
fun1();