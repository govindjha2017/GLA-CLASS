let pr = new Promise((resolve, reject) => {
    setTimeout(()=>{
        let data = [
            {name:'laptop',price:200},
            {name:'mobile',price:100},
            {name:'tablet',price:120},
            {name:'pen',price:10},
        ]

        resolve(data);
    },4000)
});

pr
    .then((x)=>{
        // console.log(x);
        let arr =x.filter((item)=>{
             if(item.price>=100){
                return true;
             }
        });
        return(arr);
    })
    .then((arr)=>{
    //    console.log(arr);
      let x = arr.map((item)=>{
         return item.name;
      })
      return x;
    })

    .then((z)=>{
        console.log(z);
    })
    .catch((err)=>{
        console.log(err);
    })