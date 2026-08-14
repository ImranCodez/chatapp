const express = require("express");
const { addFriend, conversation, Sendmessage } = require("../controllers/convController");
const { authMiddleware } = require("../middleware/authmidleware");
const route = express.Router();
route.post("/addfriend", addFriend);
route.get("/list", conversation);
route.post("/sendmessage", Sendmessage);

module.exports = route;
