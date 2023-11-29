const mongoose = require('mongoose')

const Product = require('./models/product');

const dummy_data =[
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
    {
        name:'Laptop',
        price:200,
        image:'https://images.unsplash.com/photo-1602080858428-57174f9431cf?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        desc:'a battery- or AC-powered personal computer (PC) smaller than a briefcase.'
    },
];

mongoose.connect('mongodb://127.0.0.1:27017/Ecommerce')
    .then(()=>console.log('db conected'))
    .catch(()=>console.log('db not conected'));

Product.create(dummy_data)
    .then(()=>console.log('Db seeded'));