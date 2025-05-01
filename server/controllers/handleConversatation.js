const conversation = require("../models/ConversationModel");

const startMessage = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });
    if (exist) {
      return res.status(200).json({
        success: true,
        message: "Conversation already exist",
        data: exist,
      });
    }

    const newConversation = new conversation({
      members: [senderId, receiverId],
    });
    newConversation.save();
    return res.status(201).json({
      success: true,
      message: "message saved successfully",
    });
  } catch (error) {
    console.log("Error while start conversation api work", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

const checkMessage = async (req, res) => {};
module.exports = { startMessage, checkMessage };
