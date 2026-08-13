const express=require("express");
const authRoute=require("../routes/authRoute")
const comvRoute= require("./comvRoute")
const route=express.Router()

route.use("/auth",authRoute)
route.use("/conv",comvRoute)


module.exports=route