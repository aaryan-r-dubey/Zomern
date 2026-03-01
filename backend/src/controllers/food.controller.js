const express=require('express');
const foodModel=require('../models/food.model');
const storageService=require('../services/storage.service');
const {v4:uuid}=require('uuid');




async function createFood(req,res){

   console.log(req.foodPartner);

   console.log(req.body);
   console.log(req.file);
   console.log("BODY:", req.body);
    console.log("DESCRIPTION:", req.body.description);

   const fileUploadResult=await storageService.uploadFile(req.file.buffer,uuid());

   console.log(fileUploadResult);

//    return res.json({
//   name: req.body.name,
//   description: req.body.description
// });



   const fooditem=await foodModel.create({
    name:req.body.name,
    description:req.body.description,
    video:fileUploadResult.url,
    foodPartner:req.foodPartner._id,
   })

   res.status(201).json({
    message:"food item created successfully",
    foodItem:fooditem,
   })


}

module.exports={
    createFood,
}