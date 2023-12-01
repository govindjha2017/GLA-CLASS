let pr = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let arr =[45,13,76];
        resolve(arr);
    },5000)
})

// pr
//     .then((x)=>{
//          console.log(x);
//     })

async function fetchData(){
    console.log('coder!')
    let x= await pr;
    console.log(x);

    console.log('hello');
}
fetchData();

console.log('end')