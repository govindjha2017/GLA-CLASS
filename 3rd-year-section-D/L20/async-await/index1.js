let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let data ="promise resolve data"
        resolve(data);
    },5000);
});

// pr
//     .then((x)=>{
//            console.log(x);
//     })

async function fetchData(){
    console.log('start');
    let x= await pr;
    console.log(x);

    console.log('hello');
}

fetchData();

console.log('end');