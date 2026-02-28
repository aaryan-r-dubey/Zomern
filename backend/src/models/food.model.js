const mongoose=require('mongoose')

const foodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    video:{
        type:String,//database will store url of the video
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    foodPartner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Foodpartner',
        required:true,
    }
    
})

const foodModel=mongoose.model('Food',foodSchema);

module.exports=foodModel;