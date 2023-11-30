let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let data = "hello";
        resolve(data);
    },5000);
})

// console.log(pr);

pr  
    .then((x)=>{
        console.log(x);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log('end');