const cookieParser=require("cookie-parser");
const express=require('express');
const authRoutes=require("./routes/auth.routes");

const app=express();

app.use(express.json());
app.use(cookieParser());


app.get("/",(req,res)=>{
    res.status(200).json({
        message:"successfully runnning"
    })
});

app.use("/api/auth",authRoutes);

module.exports=app;



