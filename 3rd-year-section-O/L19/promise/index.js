let pr =new Promise((resolve, reject) => {
    setTimeout(()=>{
        //  let data = "promise resolve data";
        //  resolve(data);
        let err = "new error";
        reject(err);
    },5000)
})

// console.log(pr);

pr
    .then((x)=>{
        console.log(x);
    })
    .catch((a)=>{
        console.log(a);
    })