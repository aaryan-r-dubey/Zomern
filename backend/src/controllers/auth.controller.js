const userModel=require("../models/user.model");
const bcrypt=require("bcryptsjs");
const jwt=require("jsonwebtoken");


async function registerUser(req,res){
    
    const{fullName,email,password}=req.body;

    const isUserAlreadyExists=await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        res.status(400).json({
            message:"user already exists", 
        })
    }

    const hashedPassword = await bcrypt.hash(password,10);

    const user=await userModel.create({
        fullName,
        email,
        password:hashedPassword
    })

    const token=jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"user registered successfully",
        user:{
            id:user._id,
            fullName:user.fullName,
            email:user.email
        }
    })
}

