// function fun(cb){


//     return x
// }

let data = [{l:4,b:3},{l:2,b:3},{l:4,b:5},{l:6,b:7}];
let area = (l,b)=>{
     return l*b;
}
let parameter = (l,b)=>{
    return 2*(l+b);
}
function calculate(x,logic){
    let result = [];
    for(let i of x){
        result.push(logic(i.l,i.b));
    }
    return result;
}

let areaData = calculate(data,area);
let parameterData = calculate(data,parameter);
console.log(areaData);
console.log(parameterData);