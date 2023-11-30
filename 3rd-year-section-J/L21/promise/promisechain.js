
function fetchData(){
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let data = [
                {name:'laptop',price:200},
                {name:'phone',price:100},
                {name:'book',price:120},
                {name:'pen',price:10},
            ]
            resolve(data);
        },5000);
    })
    return pr;
}

fetchData()
    .then((x)=>{
        //  console.log(x);
        let y = x.filter((item)=>{
            if(item.price>=100){
                return true
            }
        })

        return y;
    })
    .then((a)=>{
        console.log(a);
    })