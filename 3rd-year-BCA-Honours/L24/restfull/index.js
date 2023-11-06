const express = require('express');
const app = express();
const path = require('path');


const users = require('./data/data');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.set(express.urlencoded({ extended: false }));
app.get('/',(req,res)=>{
    res.render('home');
})

app.get('/user',(req,res)=>{
    res.render('user',{users});
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/user',(req,res)=>{
    console.log(req.body);
})

const port =5000;
app.listen(port);