const express=require("express");

const router=express.Router();
const regController=require("../regController/registrationController")
const furniController=require("../regController/registrationController")
router.post("/registration",regController.regData)
router.post("/login",regController.logData)
router.post("/email",regController.passwordReset);
router.get("/forgatepassword/:id/:token",regController.varifyData)
router.post("/newpassword/:id/:token",regController.passwordChange)
module.exports=router