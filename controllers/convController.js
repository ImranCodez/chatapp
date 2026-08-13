const sendResponse = require("../helpers/responsehandler");
const conversationSchema = require("../models/conversationSchema");
const userSchema = require("../models/userSchema");

const addFriend = async (req, res) => {
  try {
    const { email } = req.body;
    console.log("myemail",email);
    
    if (email == req.user?.email)
      return sendResponse(res, 400, "tyr with another email");
    const friend = await userSchema.findOne({ email });
    if (!friend)
      return sendResponse(res, 400, "user with this email not exist");
    const existparticipent = await conversationSchema.findOne({
      $or: [
        { creator: req.user.id, participent: friend._id },
        { participent: req.user._id, creator: friend._id },
      ],
    });
    if (existparticipent)
      return sendResponse(res, 400, "already in frind list");
    console.log("user=>",req.user);
    const createconv = await conversationSchema.create({
      creator: req.user.id,
      participent: friend._id,
    });
    return sendResponse(res, 400, "added friend sauccessfully");
  } catch (error) {
    sendResponse(res, 500, "Internal server error");
    console.log(error);
  }
};
module.exports={addFriend}