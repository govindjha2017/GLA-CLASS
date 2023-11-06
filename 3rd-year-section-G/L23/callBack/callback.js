// function outer(cb){
//     return fun
// }

let data = [{l:4,b:2},{l:6,b:2},{l:4,b:9},{l:3,b:8}];

let area= (l,b)=>{
    return l*b;
}

let p= (l,b)=>{
    return 2*(l+b);
}

function calculate(x,logic){
    let p =[];
    for(let i of x){
        p.push(logic(i.l,i.b));
    }
    return p;
}

let areaData = calculate(data,area);
let paramiterData = calculate(data,p);
console.log(areaData);
console.log(paramiterData);