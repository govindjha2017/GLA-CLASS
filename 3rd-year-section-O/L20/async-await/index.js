// async function fun(){
//     let x= "hello coder!";
//     return x;
// }

// let a= fun();
// console.log(a);

async function fun(){
     let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = "promise resolve data";
            resolve(data);
        },5000)
     })

     return pr;
}

// let x = fun();
// console.log(x);