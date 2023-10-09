function fun(){
     console.log('inside fun function');
}

fun();


function iseven(x){
    if(x%2==0){
        console.log('even');
    }
    else{
        console.log("odd");
    }
}

// iseven(50);

var y = iseven;

console.log(y);