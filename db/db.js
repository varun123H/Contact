const mongoose = require('mongoose');

   const dbConnect = mongoose.connect("mongodb://localhost:27017/contact" , {useNewUrlParser:true , useUnifiedTopology:true})
    .then(()=>{
        console.log('Database connected successfully')
    }).catch((err) =>{
        console.log(err)
    });
    var nameSchema = new mongoose.Schema({
        uName: String,
        uSex : String
       });
 module.exports = dbConnect
