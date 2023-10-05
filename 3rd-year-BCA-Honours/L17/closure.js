function fun (){
   var money =50;
    function inner(){
        var x=9;

        console.log(x);
        console.log(money);
         
    }
    return inner;
}

var b=20;

let y= fun();

y();