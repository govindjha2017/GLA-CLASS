function outer(){
    let p=50;
    function inner(){
        let a=30;
        console.log(p); // 
        console.log(a);
    }

    return inner;
}

let x = outer();

x();