const express=require("express");
const router=express.Router()
const userController=require("../controller/userController")


router.get('/',userController.homePage)
router.post('/faceboook',userController.insertNewPost)

module.exports=router