const express=require("express");
const { signupuser, signinuser } = require("../controllers/AuthControlller");
const route=express.Router()

route.post("/signup",signupuser)
route.post("/signin",signinuser)


module.exports=route