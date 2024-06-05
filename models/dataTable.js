const mongoose=require('mongoose')
 const userSchema= new mongoose.Schema({
    image:String,
    name:String,
    discribtion:String,
    Rate:String,
    Genre:String,

    // image:{
    //     type:String,
    //     require:true
    // },
    // name:{
    //     type:String,
    //     require:true
    // },
    // discribtion:{
    //     type:String,
    //     require:true
    // },
    // Rate:{
    //     type:String,
    //     require:true
    // },
    // Genre:{
    //     type:String,
    //     require:true
    // }
 })

 const userDB=mongoose.model("userTbl",userSchema)

module.exports= userDB;