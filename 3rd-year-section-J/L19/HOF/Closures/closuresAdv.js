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
var fun = outer();
var x= fun();
let y = fun();
x();
x();
x();
y();
y();
x();