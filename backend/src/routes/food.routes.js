const express=require('express');
const router=express.Router();
const foodController=require("../controllers/food.controller");
const authMiddleware=require("../middlewares/auth.middleware");
const multer=require('multer');
const upload=multer({
    storage:multer.memoryStorage(),
});



//api of food should be protected and only food partner can create food item
router.post('/',authMiddleware.authFooodPartnerMiddleware,upload.single("video"),foodController.createFood);

module.exports=router;



