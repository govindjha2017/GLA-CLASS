const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/test')
    .then(()=>{
        console.log('Test datbase conected!');
    })
    .catch((err)=>{
        console.log(err);
    })

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String,
    contact:Number
})

const User = mongoose.model('User',userSchema);

// create

User.create({
    name:'rahul',
    age:45,
    email:'rahul@gmail.com',
    contact:432657687
}).then(()=>console.log('document created!!'))