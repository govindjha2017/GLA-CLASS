function outer(){
    var a=10;   ///
    function inner(){
        var p=30;
        console.log(p);///
    }
  inner();
}
outer();
var x=25;
console.log(x);///
outer();