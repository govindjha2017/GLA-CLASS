//  async function fun(){
//     return "hello";
// }
 
// let x= fun();
// console.log(x);

// async function xyz(){
//     let pr = new Promise((resolve,reject)=>{
//         resolve('hello ji');
//     })
//     return pr;
// }

// let y = xyz();
// console.log(y);

function fun(){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('hello from fun!');
        },7000);
    })
    return pr
}

// fun()
//     .then((data)=>{
//         console.log(data);
//     })

async function fetchData(){
    let data = await fun();
    console.log(data);

    console.log('from fetchdata');
}
fetchData();
console.log('end');