const express=require("express");
const { addFriend } = require("../controllers/convController");
const { authMiddleware } = require("../middleware/authmidleware");
const route=express.Router()
 route.post("/addfriend",authMiddleware,addFriend)



module.exports=route