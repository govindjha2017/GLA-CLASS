function downloadFile(path,downloaded){
    console.log('file start to download from ',path);
    setTimeout(()=>{
        let file = path.split('/')[1];
        downloaded(file);
    },3000)
}
function compressFile(file,compressed){
    console.log('file start to compress');
    setTimeout(()=>{
        let compFile = file.split('.')[0]+'.zip';
        compressed(compFile);
    },2000)
}
function upload(compFile,uploaded){
    console.log('file start to uplod');
    setTimeout(()=>{
        uploaded();
    },3000)
}
 
//-- callback-hell
downloadFile('facebook.com/profile.jpg',(file)=>{
    console.log('file downloaded sucessfully as',file);
    compressFile(file,(compFile)=>{
        console.log('compressed suceeesfully as',compFile);
        upload(compFile,()=>{
            console.log('uploaded sucessfully');
        })
    })
})