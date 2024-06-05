const userAuth=(req,res,next)=>{
    let{name,email,password,phone }=req.body;
    if(name && email && password && phone){
        next();

    }else{
        console.log("invalid Data");
    }
}
module.exports={userAuth}