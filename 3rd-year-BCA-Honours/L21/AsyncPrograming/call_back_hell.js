
function downloadFile(path){
    console.log('file downloading start');
    setTimeout(()=>{
       file= path.split('/')[1];
       function compressFile(file){
        console.log('file compress start');
        setTimeout(()=>{
            var compressedFile = file.split('.')[0]+'.zip';
            function uploadFile(compressedFile){
                 console.log('upload started');
                 setTimeout(()=>{
                    console.log('Uplod completed');
                 },2000);
            }
            uploadFile(compressedFile);
        },5000);
         
       }
       compressFile(file);
    },5000);
}


downloadFile('facebookcloud.com/profile.jpg')