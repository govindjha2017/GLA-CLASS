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
    name:'Depika padukone',
    age:37,
    email:'depika@gmail.com',
    contact:787654678
}).then(()=>console.log('document created!!'))

//read

// User.find({})
//     .then((data)=>{
//         console.log(data);
//     })

// async function fetchdata(){
//    let data = await User.findOne({name:'rahul',age:35});
//    console.log(data);
// }

// fetchdata();

//update

// User.updateOne({name:'rahul'},{age:67,email:'rahul@yahoo.com'})
//     .then((x)=>{
//         console.log(x);
//     })

// Delete

// User.deleteOne({name:'ajay'})
//     .then((x)=>{
//         console.log(x);
//     })
//     .catch((x)=>{
//         console.log(x);
//     })

// User.deleteMany({})
//     .then((x)=>{
//         console.log(x);
//     })
//     .catch((x)=>{
//         console.log(x);
//     })