
function check(kalMilneAyega){
    let pr = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(kalMilneAyega){
                let data = "to main tujhe party dunga";
                resolve(data);
            }
            else{
                let data = "nhi aaya to kise party dunga party canceled!";
                reject(data);
            }
        },5000);
    })

    return pr;
}

check(false)
    .then((data)=>{
        console.log(data);
    })
    .catch((err)=>{
        console.log(err);
    })