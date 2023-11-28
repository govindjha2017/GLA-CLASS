console.log('start');
setTimeout(()=>{
    console.log('from setTimeout');
},4000)
function check(){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = "promise resolve data jygwdj"
            resolve(data);
        },7000)
    })
    return pr;
}

check()
    .then((x)=>{
        console.log(x);
    })
 
let d = new Date().getTime();
let end =d;
while(d<end+10000){
    d= new Date().getTime()
}
console.log('end');