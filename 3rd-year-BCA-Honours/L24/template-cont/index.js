const express = require('express');
const app = express();

const products = require('./data/product');

app.set('view engine','ejs');

app.get('/',(req,res)=>{
    // res.send('working fine');
    res.render('home',{});
})

app.get('/login',(req,res)=>{
    res.send('login page');
})

app.get('/product',(req,res)=>{
    res.render('product',{products});
})


const port = 4000;
app.listen(port,()=>{
    console.log('server up at port',port);
})