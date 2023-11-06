function outer(){
    var money =50;
    function inner(){
        var a=10;
        money++;
        console.log(money);
    }
   return inner;
}


var fun= outer();
var fun1= outer();

fun();
fun();
fun1();