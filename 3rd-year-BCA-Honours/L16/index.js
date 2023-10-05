var x = prompt('Enter year');

// console.log(x);
// var temp=0;

if(x%100==0){
    if(x%400==0){
        console.log('leap year')
    }
    else{
        console.log('not a leap year');
    }
}
else {
    if(x%4==0){
   
        console.log('leap yaer');
    }
    else{
        console.log('not a leap year')
    }
}
