const express=require("express");

const router=express.Router();
const regController=require("../regController/registrationController")
const furniController=require("../regController/furnitureController")
router.post("/registration",regController.regData)
router.post("/login",regController.logData)
router.post("/email",regController.passwordReset);
router.get("/forgatepassword/:id/:token",regController.varifyData)
router.post("/newpassword/:id/:token",regController.passwordChange)
router.post("/cloudinaryurl",furniController.furnitureData)
router.get("/displaydata",furniController.displayData);
router.post("/deleteData",furniController.delData);
router.post("/editData",furniController.editData);
router.post("/updateData",furniController.udateData);
router.get("/doulbebeddata",furniController.doubleBedData)
router.post("/stardata",furniController.starData)
router.get("/singlebeddata",furniController.singleBedData)
router.get("/bardrobedata",furniController.bardrobedataData)
router.get("/dresserdata",furniController.dresserData)
router.get("/studytabledata",furniController.studytableData)
router.post("/addcard",furniController.addCardData)

module.exports=router