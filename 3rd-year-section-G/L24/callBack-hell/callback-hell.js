function downloadFile(path, downloaded){
    console.log('file started to download from',path);
    setTimeout(()=>{
        let file = path.split('/')[1];
        downloaded(file);
    },3000)
}
function compresseFile(file,compressed){
    console.log('file started to compress');
    setTimeout(()=>{
        let compFile = file.split('.')[0]+'.zip';
        compressed(compFile)
    },2000)

}

function uploadFile(compFile,uploaded){
    console.log('file started to upload');
    setTimeout(()=>{
        uploaded()
    },3000);
}

//callback-hell

downloadFile('facebook.com/profile.jpg',(file)=>{
    console.log('downloaded sucesfully as ',file)
    compresseFile(file,(compFile)=>{
        console.log('compressed sucessfully as',compFile);
        uploadFile(compFile,()=>{
           console.log('file uploaded sucessfully');
        })
    })
})