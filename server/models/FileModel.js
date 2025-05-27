const mongoose = require("mongoose");

const fileSchema = new mongoose.Schema(
  {
    fileName: {
      type: String,
    },
    filePath: {
      type: String,
    },
    mimeType: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    senderId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    chatId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "messageModel",
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("File", fileSchema);
