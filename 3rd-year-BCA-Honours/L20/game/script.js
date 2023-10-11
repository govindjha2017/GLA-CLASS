const parent = document.createElement('div');

const body = document.querySelector('body');
body.appendChild(parent);

for(let i=0;i<10;i++){
    const row= document.createElement('div');
    for(let j=0;j<10;j++){
        const div = document.createElement('div');
        div.innerText=`${i*10+j+1}`
        div.classList.add('one');
        div.setAttribute('id',`${i*10+j+1}`)
        row.appendChild(div);
   
        var temp =i*10+j+1+i;

        if(temp%2==0){
            div.classList.add('four');
        }
        else{
            div.classList.add('three');
        }
    }
    row.classList.add('row');

    parent.appendChild(row);
}

const btn = document.createElement('button');
btn.innerText='DICE';
btn.classList.add('btn');
parent.appendChild(btn);

const el = document.createElement('div');
el.classList.add('el');
const first = document.getElementById('1');
first.appendChild(el);
var y=1;
btn.addEventListener('click',()=>{
     var dice = Math.floor(Math.random()*6)+1;
     if(y+dice<=100){
        y=y+dice;
     }
    
     if(y==100){
        window.alert('YOU WON!!')
     }
      const res =  document.getElementById(`${y}`);

      res.appendChild(el);
     console.log(dice);
})

const reset = document.createElement('button');
// console.log(reset);

reset.innerText='reset';
reset.classList.add('reset');
parent.appendChild(reset);

reset.addEventListener('click',()=>{
    y=1;
    first.appendChild(el);
})