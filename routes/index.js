const express=require("express");
const authRoute=require("../routes/authRoute")
const route=express.Router()

route.use("/auth",authRoute)


module.exports=route