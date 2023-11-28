const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=>console.log('db conected!'));

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number
})

const User = mongoose.model('User',userSchema);

app.get('/',(req,res)=>{
    // res.send('working fine');
    res.render('home');
})

app.get('/users',async (req,res)=>{
        let users = await User.find({});
      res.render('users',{users})
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})

app.post('/users',async (req,res)=>{
    const {name,age,email,contact} = req.body
    await User.create({name,age,email,contact});

    res.redirect('/users');
})

const port = 4000;
app.listen(port,()=>{
    console.log('server up at port ',port);
})