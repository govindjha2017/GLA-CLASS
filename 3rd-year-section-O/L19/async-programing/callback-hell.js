function downloadFile(path,compressFile){
    console.log('file start to download from',path);
    setTimeout(()=>{
        let donlddFile = path.split('/')[1];
      compressFile(donlddFile);
    },3000)
}

function compressedFile(file,uploadFile){
    console.log('file started to compress');

    setTimeout(()=>{
        let  comFile = file.split('.')[0]+'.zip';
        uploadFile(comFile)
    },2000);
}

//  callback-hell
downloadFile('facebook.com/profile.jpg',(file)=>{
    console.log('file downloaded sucessfully as',file);
    compressedFile(file,(comFile)=>{
        console.log('file compressed sucessfully as',comFile);
        
    })
})