var x=8;
function outer(){
    var money = 50;
   
    function inner(){
        console.log(y);
        var y=20;

        console.log(x);

        console.log(money);
        console.log(y);
    }

    inner();
}

outer();