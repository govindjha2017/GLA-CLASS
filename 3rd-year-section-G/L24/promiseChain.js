function fetchData(){
   let pr = new Promise((resolve, reject) => {
    let data = [{name:'laptop',price:200},{name:'mobile',price:100},{name:'pen',price:20}];

    setTimeout(()=>{
        resolve(data);
    },5000);
   })

   return pr;
}

//  async function fun(){
//    let data = await fetchData();
//    console.log(data);
// }
// fun();

fetchData()
    .then((data)=>{
       let finalData=  data.filter((item)=>{
           if(item.price>=100){
            return true;
           }
        })
        return finalData;
    })
    .then((x)=>{
         
    })
    .catch((err)=>{
        console.log(err);
    })