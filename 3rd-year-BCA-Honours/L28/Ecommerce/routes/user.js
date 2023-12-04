const express = require('express');
const router = express.Router();
const User = require('../models/user');
const mongoose = require('mongoose');

router.use(express.urlencoded({extended:true}));
router.get('/signup',(req,res)=>{
    res.render('signup');
})
router.post('/signup',(req,res)=>{
     const {email,username,password,isSeller}= req.body;
    User.create( {email,username,password,isSeller});
    res.redirect('/login');
})

router.get('/login',(req,res)=>{
    res.render('login');
})

router.post('/login',(req,res)=>{
    
})


module.exports=router;