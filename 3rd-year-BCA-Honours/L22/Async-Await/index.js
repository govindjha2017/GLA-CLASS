// async function fun(){
//     let x="hello";
//     return x;
// }

// let x = fun();

// console.log(x);

// async function xyz(){
//     let pr = new Promise((resolve, reject) => {
//         resolve('hello from promise');
//     })

//     return pr;
// }
// let y = xyz();
// console.log(y);

let a = new Promise((resolve,reject)=>{
    resolve('promise resolved!')
})

async  function handleFun(){
      let c = await a
      console.log(c);
      
    }

handleFun();