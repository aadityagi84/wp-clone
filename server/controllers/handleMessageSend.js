const messageModel = require("../models/Message");
const conversation = require("../models/ConversationModel");

const newMessageSend = async (req, res) => {
  try {
    const { conversationId, senderId, receiverId, type, text } = req.body;
    console.log(req.body, "new message data");

    const newMessage = new messageModel({
      conversationId,
      senderId,
      receiverId,
      type,
      text,
    });

    await newMessage.save();
    await conversation.findByIdAndUpdate(conversationId, {
      message: text,
    });
    res
      .status(200)
      .json({ message: "Message sent successfully", newMessage: newMessage });
  } catch (error) {
    console.log("Error while new message api work", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await messageModel.find({
      conversationId: req.params.conversationId,
    });
    console.log(messages, "messages data");
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error while getting messages", error);
    res.status(500).json({ message: "Internal server error", error: error });
  }
};
// const uploadFile = async (req, res) => {
//   try {
//     res.status(200).json({ message: "File uploaded successfully" });
//   } catch (error) {
//     console.log("Error while uploading file", error);
//     res.status(500).json({ message: "Internal server error", error: error });
//   }
// };
module.exports = { newMessageSend, getMessages };
