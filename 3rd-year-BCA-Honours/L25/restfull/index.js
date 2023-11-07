const express = require('express');
const app = express();
const path = require('path');

const users = require('./data/usersData')

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
// form se jo data aa rha hai wo req.body me aa jaye
app.use(express.urlencoded({extended:true}));
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
const PORT=5000;
app.listen(PORT,()=>{
    console.log('server up at port ',PORT);
})