
const {Router}= require('express');
const{indexPage,formPage, formFill, editData,deletedata,update,editPage,uploadImage,showPage} = require('../controlers/controler');
// const{indexPage,formPage,editPage,showPage} = require('../controlers/controler');
const userAuth=require('../middleware/auth');
var app = require('express')();
var bodyParser = require('body-parser');
app.use(bodyParser());
const router=Router();

router.get('/',indexPage);
router.get('/form',formPage);
router.get('/edit',editPage);

router.get('/view',showPage);
router.get('/editData',editData);
router.get('/deleteData',deletedata);

router.post('/updateData',uploadImage,update);
router.post('/insertData',uploadImage,formFill);


module.exports=router