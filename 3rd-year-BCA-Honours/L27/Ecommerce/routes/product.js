const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const Products = require('../models/product');

router.get('/products',async (req,res)=>{
    const products = await Products.find({});
    console.log(products);
    res.render('products',{products})
    // res.send('workin theek')
})

module.exports = router;