function downloadFile(path,downloaded){
    console.log('file start to donload from ',path);
    setTimeout(()=>{
        let file = path.split('/')[1]
        // downloaded(file);
    },3000)
}

function compressFile(file,compressed){
    console.log('file start to compress');
    setTimeout(()=>{
        let compFile = file.split('.')[0]+'.zip';
        compressed(compFile);
    },2000);

}
function upload(compFile,uploaded){
     console.log('file started to upload');

     setTimeout(()=>{
        uploaded();
     },3000);
}

// call-back hell

downloadFile('facebook.com/profile.jpg',(file)=>{
    console.log('file sucessfully donloaded as',file);
    compressFile(file,(compFile)=>{
        console.log('compressed sucesfully as',compFile);
        upload(compFile,()=>{
            console.log('uploaded sucessfully');
        });
    })
})