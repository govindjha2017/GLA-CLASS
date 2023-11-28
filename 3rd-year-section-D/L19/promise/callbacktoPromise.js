function downloadFile(path){
    console.log('file start to donload from ',path);
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let file = path.split('/')[1];
            resolve(file);
        },3000)
    })
   return pr;
}

function compressFile(file){
    console.log('file start to compress');
    let pr = new Promise((resolve, reject) => {
        setTimeout(()=>{
            let compFile = file.split('.')[0]+'.zip';
            resolve(compFile);
        },2000);
    })
    
    return pr;
}
function upload(compFile,uploaded){
     console.log('file started to upload');

     setTimeout(()=>{
        uploaded();
     },3000);
}

// promise

downloadFile('facebook.com/profile.jpg')
    .then((file)=>{
        compressFile(file)
            .then(()=>{
                
            })
    })