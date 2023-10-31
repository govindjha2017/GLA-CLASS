const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("home page hai");
})

app.get('/about',(req,res)=>{
    res.send('This is about page');
})

app.get('/project',(req,res)=>{
    res.send('this is project section');
})


const port = 4000;
app.listen(port,()=>{
    console.log('server up at port ',port);
})