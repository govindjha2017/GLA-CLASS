const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Products = require('../models/product');
router.use(express.urlencoded({extended:true}));
router.get('/products',async (req,res)=>{
    const products = await Products.find({});
    // console.log(products);
    res.render('products',{products})
    // res.send('workin theek')
})

router.get('/product/new',(req,res)=>{
    res.render('new');
})

router.post('/products',(req,res)=>{
    // console.log(req.body);
    const {name,price,image,desc}=req.body;
    Products.create({name,price,image,desc});
    res.redirect('/products');
})

module.exports = router;