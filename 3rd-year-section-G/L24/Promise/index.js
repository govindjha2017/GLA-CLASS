

// console.log(pr);

function fun(a){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data = "promise resolved data";
            if(a){
                resolve(data);
            }
            else{
                let err = "new err";
                reject(err);
            }
            
        },5000);
    })
    return pr;
}

fun(0)
    .then((x)=>{
        console.log(x);
    })
    .catch((err)=>{
        console.log(err);
    })