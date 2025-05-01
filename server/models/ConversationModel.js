const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    members: {
      type: Array,
    },
    message: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const conversation = mongoose.model("conversation", messageSchema);

module.exports = conversation;
