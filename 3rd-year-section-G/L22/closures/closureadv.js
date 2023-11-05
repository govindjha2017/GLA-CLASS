function outer(){
    var p=50;
    function inner(){
        var a=10;
        p++;
        function innermost(){
            p++;
            a++;
            console.log('p=',p,'a=',a);
        }
       return innermost;
    }
    return inner;
}

var fun = outer();
var fun1 = fun();
var fun2 = fun();

fun1();
fun1();
fun2();
fun1();