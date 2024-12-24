const mongoose=require('mongoose')
 const userSchema= new mongoose.Schema({
    image:String,
    name:String,
    discribtion:String,
    Rate:String,
    Genre:String,

    
 })

 const userDB=mongoose.model("userTbl",userSchema)

module.exports= userDB;

