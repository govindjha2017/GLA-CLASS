// var pr = new Promise((resolve,reject)=>{

// })

// console.log(pr);


function check(kalAaoge){
    let pr = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(kalAaoge){
            var x="aa jaao main party dunga";
            resolve(x);
        }
        else{
            let err = 'nhi aaya';
            reject(err);
        }
       },5000);
    })

    return pr;
}

let x= check(true)
console.log(x);

check(!true)
    .then((data)=>{
        console.log(data);
    })
    .catch((e)=>{
        console.log(e);
    })