
// let d = new Date();
let d = new Date().getTime();

let end = d;
console.log('start');
while(d<end+10000){
   d= new Date().getTime();
}

console.log('end');