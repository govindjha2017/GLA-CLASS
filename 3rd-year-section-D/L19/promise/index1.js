function check(kalMinlneaayega){
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(kalMinlneaayega){
                let data = "to main tujhe party dunga !!"
                resolve(data);
            }
            else{
                let err = "nhi milne aaya to party kis dunga!!"
                reject(err);
            }
        },5000)
    })
    return pr;
}

check(!true)
    .then((data)=>{
        console.log(data);
    })
    .catch((data)=>{
        console.log(data);
    })