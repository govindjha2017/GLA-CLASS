// var pr = new Promise((resolve,reject)=>{

// })

// console.log(pr);


function check(kalAaoge){
    let pr = new Promise((resolve,reject)=>{
       setTimeout(()=>{
        if(kalAaoge){
            // var x="aa jaao main party dunga";
            x=[1,3,4,6,8,9];
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
        data.pop();
        return data
    })
    .then((x)=>{
       console.log(x);
    })
    .catch((e)=>{
        console.log(e);
    })