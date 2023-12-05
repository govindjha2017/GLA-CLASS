const express = require('express');
const app = express();
const path = require('path')
const mongoose = require('mongoose');
const session = require('express-session');
const User = require('./model/user');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));
app.use(express.static('public'))


app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
  }))

mongoose.connect('mongodb://127.0.0.1:27017/auth-demo')
  .then(() => console.log('Db Connected!'));

app.get('/',(req,res,next)=>{
    if(req.session.user_id){
        next();
    }
    else{
        res.redirect('/login');
    }
},(req,res)=>{
    res.render('home');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.post('/signup',(req,res)=>{
        const {username,email,password}=req.body;
        User.create( {username,email,password});
        // res.send('signup sucessfully')
        res.redirect('/login')
})

app.get('/login',(req,res)=>{
        res.render('login');
})
app.post('/login', async (req,res)=>{
    const {username,password}= req.body;
    const user = await User.findOne({username});
    if(user){
        if(user.password==password){
            
            req.session.user_id=user._id;
            console.log(req.session);
            res.send('login sucessfully');
        }
        else{
            res.send('password incoorect');
        }
    }
    else{
        res.send('username invalid')
    }
})


const port = 4000;
app.listen(port,()=>{
    console.log('server up at port',port);
})