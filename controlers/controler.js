const userDB=require("../models/dataTable");
const multer=require('multer')
// 
const fs = require("fs");


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads/images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const uploadImage = multer({ storage }).single("image");

let movieid;

// 

const indexPage=(req,res)=>{  
 
    return res.render('./pages/index')
}
const editPage=(req,res)=>{
    return res.render('./pages/edit')
}
const formPage=(req,res)=>{
    return res.render('./pages/form')
}
const formFill =async(req,res)=>{
    const image = req.file.path;
    // console.log(image )
    try {
        let data=await userDB.create({...req.body, image});
        // res.send(data)
        res.redirect('/view')

    } catch (error) {
        console.log(error);
    }
}
const showPage = async(req,res)=>{

    try {
        let data = await userDB.find({});
        // console.log(data);
        return res.render('./pages/view',{data});
    } catch (error) {
        console.log(error);
    }
}

const deletedata = async (req, res) => {
    let { id } = req.query;
    try {
      let data = await userDB
        .findByIdAndDelete(id)
        .then((singleRecode) => {
          fs.unlinkSync(singleRecode.image);
          return res.redirect("/view");
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

const editData= async(req, res) => {
    let id = req.query.id;
    movieid=id
    userDB.findById(id).then((data) => {
        // console.log(data,"update");
        return res.render('./pages/edit', { data });
    }).catch((err) => {
        console.log(err);
        return false;
    })
}



const update= async (req, res) => {
  let data = req.body;
  console.log("/////////////////////////",data);
  if (req.file) {
    data.image = req.file.path;
  }
  console.log("/////////////////////////",data);
  try {
    let result = await userDB.findByIdAndUpdate(movieid, data);
   console.log("/////////////////////////",result);

    return res.redirect("/view");
  } catch (error) {
    console.log(error);
  }
};


module.exports = {uploadImage,indexPage,editPage,formPage,formFill,editData,update,deletedata,showPage};
// module.exports = {indexPage,formPage,editPage,showPage};