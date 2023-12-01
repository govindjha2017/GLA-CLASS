// async function fun(){
//     let str = "hello";
//     return str;
// }

// let x= fun();
// console.log(x);

async function xyz(){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve('promise resolve data');
        },4000);
    })
    return pr;
}

// let y = xyz();
// console.log(y);

