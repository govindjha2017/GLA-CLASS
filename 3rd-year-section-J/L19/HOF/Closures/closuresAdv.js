function outer(){
    var money =50;
    function inner(){
        money++;
        var a=10;
        function innermost(){
            money++;
            a++;
            console.log('money=',money,'a=',a);
        }
      return innermost
    }
    return inner;
}
var fun1 = outer();
var fun2 = outer();
var x= fun1();
let y = fun2();
x();
x();
x();
y();
y();