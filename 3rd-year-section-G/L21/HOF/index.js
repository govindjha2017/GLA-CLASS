function fun(y){

    let x=40;

    return x;
}

function xyz(cb){
    console.log('inside xyz');

    function inner(){
        console.log('inside inner')
    }
   var a={}
    return inner
}

var p = xyz();

p()