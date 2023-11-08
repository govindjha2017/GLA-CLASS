function outer(){
    var a=30;
    function inner(){
        console.log(a);   //// 
    }

    return inner;
}

var x = outer();

x();