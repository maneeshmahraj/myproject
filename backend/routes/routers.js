const express=require("express");

const router=express.Router();
const regController=require("../regController.js/registrationController")
router.post("/registration",regController.regData)
router.post("/login",regController.logData)

module.exports=router