const mongoose = require("mongoose");
const messages = new mongoose.Schema({
  contentype: {
    type: String,
    requred: true,
    default: "text",
    enum: ["text", "image", "video", "voice"],
  },
  content: {
    type: String,
    required: true,
  },
  sender: {
    type: mogoose.Types.ObjectId,
    ref: "user",
    required: true,
  },
  conversation: {
    type: mogoose.Types.ObjectId,
    ref: "convschema",
    required: true,
  },
});
module.exports=mongoose.model("messages",messages)