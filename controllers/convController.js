const sendResponse = require("../helpers/responsehandler");
const userSchema = require("../models/userSchema");

const addFriend = async (req, res) => {
  try {
    const { email } = r4eq.body;
  const friend = await userSchema.findOne({ email });
  if(!friend) return sendResponse(res,400,"user with this email not exist")
  } catch (error) {
    console.log(error);
    
  }
};
