// var x =  (a)=>{
//     a();
// }

// x(function fun(){
//     console.log('inside fun');
// } );

 

var data= [{l:10,b:4},{l:6,b:4},{l:3,b:2},{l:5,b:7}];

var area = (l,b)=>{
    return l*b;
}
var parameter = (l,b)=>{
    return 2*(l+b);
}

function calculate(x,logic){
     var result =[];
     for(var i of x){
        result.push(logic(i.l,i.b));
     }
     return result
}

var areaData=calculate(data,area);
var parameterData = calculate(data,parameter);

console.log(areaData);
console.log(parameterData);