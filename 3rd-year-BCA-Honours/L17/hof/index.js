function fun (){

    function inner(){
        var x=9;
        return x;
    }
    return inner;
}

let y = fun();
let p=y();
// console.log(y);

console.log(p);