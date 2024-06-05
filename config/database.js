const mongoose=require('mongoose')
mongoose.connect("mongodb+srv://simranKumavat:simran12345@cluster0.arrsyvy.mongodb.net/movieUser")

const db=mongoose.connection
db.on('connection',(err)=>{
    if (err) {
        console.log("database not connect");
        return false
    }
    else{
        console.log("database is connected");
        return true
    }
})
