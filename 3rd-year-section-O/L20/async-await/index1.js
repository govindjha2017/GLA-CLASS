let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let data = [45,13,26];
        resolve(data);
    },4000);
})
// console.log('start');
// pr
//     .then((a)=>{
//         console.log(a);
//     })

// console.log('end');

async function fetchdata(){
    console.log('start');
    let x= await pr;
    console.log(x);

    console.log('hello');
}
fetchdata();
console.log('end');
