const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');
const users = require('./data/usersData');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// form se jo data aa rha hai wo req.body me aa jaye
app.use(express.urlencoded({extended:true}));
app.use(methodOverride('_method'));
app.get('/',(req,res)=>{
    // res.send('working fine')
    res.render('home')
})

app.get('/users',(req,res)=>{
    res.render('user',{users});
})

app.get('/user/new',(req,res)=>{
    res.render('new');
})
app.post('/users',(req,res)=>{
    //   console.log(req.body);
    let {username,password,age,address}=req.body;
    let user={
        id:users.length+1,
        username,password,age,address
    }
    users.push(user);
    res.redirect('/users');
})

app.get('/user/:id',(req,res)=>{

    const {id}= req.params;
    let user = users.find((user)=> user.id==id);
    res.render('show',{user});
})
app.get('/user/:id/edit',(req,res)=>{
    const {id}= req.params;
    let user = users.find((user)=> user.id==id);
    res.render('edit',{user});
})

app.patch('/users/:id',(req,res)=>{
    const {id}=req.params;
    let user = users.find((user)=> user.id==id);
    let {username,password,age,address}=req.body;
    user.username = username;
    user.age= age;
    user.address=address;
    user.password=password;
    res.redirect('/users');
})
const PORT=5000;
app.listen(PORT,()=>{
    console.log('server up at port ',PORT);
})