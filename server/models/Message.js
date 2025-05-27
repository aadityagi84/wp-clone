const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
  {
    conversationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "conversationModel",
      required: true,
    },
    senderId: {
      type: String, // Changed from ObjectId
      ref: "userData",
      required: true,
    },
    receiverId: {
      type: String, // Changed from ObjectId
      ref: "userData",
      required: true,
    },
    type: {
      type: String,
      enum: ["text", "image", "file"],
      default: "text",
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const messageModel = mongoose.model("messageModel", messageSchema);
module.exports = messageModel;
