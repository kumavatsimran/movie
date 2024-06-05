
const express=require('express')
const router  = require('./router/router');
const { database } = require('./config/database');
const path = require("path")
const app=express()

app.use(router)
app.use(express.urlencoded({ extended: true }))
app.use("/uploads/images",express.static(path.join(__dirname,"/uploads/images")))
// app.post('/stats',)
app.set('view engine','ejs')
app.use(express.static('public'));




app.listen(8081,(err)=>{
    if(!err){
        console.log("server strat http://localhost:8081")
    }
})
