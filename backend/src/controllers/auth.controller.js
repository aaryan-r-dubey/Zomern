const userModel=require("../models/user.model");
const foodPartnerModel=require("../models/foodpartner.model");
const bcrypt=require("bcryptjs");
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


async function loginUser(req,res){

    const {email,password}=req.body;

    const user = await userModel.findOne({
        email
    })

    if(!user){
        res.status(404).json({
            message:"email or password is incorrect"
        })
    }


    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        res.status(404).json({
            message:"email or password is incorrect"
        })
    }

    const token =jwt.sign({
        id:user._id,
    },process.env.JWT_SECRET);

    res.cookie("token1",token);

    res.status(200).json({
        message:"user logged in successfully",
        user:{
            id:user._id,
            fullName:user.fullName,
            email:user.email
        }
    })


}

function logoutUser(req,res){
    res.clearCookie("token1");
    res.status(200).json({
        message:"user logged out successfully"
    })
}

async function registerFoodPartner(req,res){

    const {name,email,password}=req.body;

    const isFoodPartnerAlreadyExists=await foodPartnerModel.findOne({
        email
    })

    if(isFoodPartnerAlreadyExists){
        res.status(400).json({
            message:"food partner already exists"
        })
    }

    const hash=await bcrypt.hash(password,10);

    const foodpartner=await foodPartnerModel.create({
        name,
        email,
        password:hash
    })

    const token=jwt.sign({
        id:foodpartner._id,
    },process.env.JWT_SECRET)

    res.cookie("token",token);

    res.status(201).json({
        message:"food partner registered successfully",
        foodPartner:{
            id:foodpartner._id,
            name:foodpartner.name,
            email:foodpartner.email
        }
    })
}

async function loginFoodPartner(req,res){

    const {email,password}=req.body;

    const isAlreadyExists=foodPartnerModel.findOne({
        email
    })

    if(!isAlreadyExists){
        res.status(400).json({
            message:"wrong login credentials"
        })
    }

 
    const isPasswordValid=await bcrypt.compare(password,user.password);

    if(!isPasswordValid){
        res.status(404).json({
            message:"email or password is incorrect"
        })
    }


    const token=jwt.sign({
        id:isAlreadyExists._id
    },process.env.JWT_SECRET);

    res.cookie("token",token);

    res.status(200).json({
        message:"foodpartner logged in successfully",
        partner:{
            id:isAlreadyExists._id,
            email:isAlreadyExists.email,
            password:isAlreadyExists.password,
        }
        
    })

}


function logoutFoodPartner(req,res){
    res.clearCookie("token");

    res.status(200).json({
        message:"foodpartner logged out succesfully"
    })
}



module.exports={
    registerUser,
    loginUser,
    logoutUser,
    registerFoodPartner,
    loginFoodPartner,
    logoutFoodPartner
}

