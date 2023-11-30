function check(kalminleAaoge){
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(kalminleAaoge){
                let data ="to main tujhe party dunga"
                resolve(data);
            }
            else{
               let err = "koi hai hi nhi to main kise party du";
               reject(err); 
            }
        },6000)
    })
    return pr;
}

check(!true)
    .then((x)=>{
          console.log(x);
    })
    .catch((y)=>{
        console.log(y);
    })


console.log('end');