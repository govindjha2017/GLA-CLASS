console.log('start');
setTimeout(()=>{
    console.log('from setTimeout');
},4000)
function check(){
    let pr = new Promise((resolve,reject)=>{
        // setTimeout(()=>{
        //     let data = "promise resolve data jygwdj"
        //     resolve(data);
        // },7000)

        let d = new Date().getTime();
        let end =d;
        while(d<end+7000){
            d= new Date().getTime()
        }
              let data = "promise resolve data jygwdj"
            resolve(data);
    })
    return pr;
}

check()
    .then((x)=>{
        console.log(x);
    })
 
let d = new Date().getTime();
let end =d;
while(d<end+6000){
    d= new Date().getTime()
}
console.log('end');