const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.get('/',(req,res)=>{
    res.send('working fine')
})

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
    .then(()=>console.log('db conected'))
    .catch(()=>console.log('db not conected'));


////== routes

const productRoutes = require('./routes/product');
const userRoutes = require('./routes/user');
app.use(productRoutes);
app.use(userRoutes);

const port = 4000;
app.listen(port,()=>{
    console.log('server up at port',port);
})