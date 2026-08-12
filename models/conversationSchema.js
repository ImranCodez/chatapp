const mongoose = require("mongoose");
const convschema = new mongoose.Schema(
  {
    creator: {
      tyep: mongoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    participent: {
      tyep: mogoose.Types.ObjectId,
      ref: "user",
      required: true,
    },
    lastmessage: {
      type: String,
      default: Null,
    },
  },
  { timestamps: true },
);

module.exports = mongoose.models("convschema", convschema);
