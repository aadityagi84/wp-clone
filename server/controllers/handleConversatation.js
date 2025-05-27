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

const checkMessage = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    // if (!senderId || !receiverId) {
    //   return res.status(400).json({
    //     success: false,
    //     message: "Both senderId and receiverId are required.",
    //   });
    // }

    console.log("Checking conversation between:", senderId, receiverId);

    const chatMessage = await conversation.findOne({
      members: { $all: [senderId, receiverId] },
    });

    if (!chatMessage) {
      return res.status(200).json({
        success: true,
        message: "No conversation found",
        data: null,
      });
    }

    return res.status(200).json({
      success: true,
      message: "Conversation fetched successfully",
      data: chatMessage,
    });
  } catch (error) {
    console.error("Error fetching conversation:", error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};
module.exports = { startMessage, checkMessage };
