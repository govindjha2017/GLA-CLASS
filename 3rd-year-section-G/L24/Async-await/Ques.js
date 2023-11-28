function fun(){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('hello from fun!');
        },7000);
    })
    return pr
}

async function fetchData(){
    let data = await fun();
    console.log(data);

    console.log('from fetchdata');
}
fetchData();
let d = new Date().getTime();
let end = d;
console.log('strat');
while(d<end+20000){
   d= new Date().getTime();
}
console.log('end');