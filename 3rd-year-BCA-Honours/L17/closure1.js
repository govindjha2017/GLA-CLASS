function outer(){
    let money =60;
    function inner(){
        money++;
        let a=20;
        function innermost(){
            money++;
            a++;
            console.log('money=',money ,"a=",a);
        }
        return innermost
    }
    return inner
}

let y= outer();
let x= outer();
let y1=y();
let x1=x();

y1();
y1();
y1();
x1();
x1();