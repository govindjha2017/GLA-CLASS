console.log('start');

let a = new Promise((resolve,reject)=>{
     setTimeout(()=>{
        resolve('promise resolved!!')
     },5000)
})

async  function handleFun(){
      let c = await a;
      console.log('hello');
      console.log(c);
    }
handleFun();

console.log('end');