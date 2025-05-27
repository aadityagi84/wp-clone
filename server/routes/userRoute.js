const express = require("express");
const { handleAddUser } = require("../controllers/handleAddUser");
const { handleGetuser } = require("../controllers/handleGetuser");
const {
  startMessage,
  checkMessage,
} = require("../controllers/handleConversatation");
const {
  newMessageSend,
  getMessages,
} = require("../controllers/handleMessageSend");
const { upload, uploadFile } = require("../middleware/Upload");
const router = express.Router();

router.post("/addUser", handleAddUser);
router.get("/getUser", handleGetuser);
router.post("/startConversation", startMessage);
router.post("/getConversation", checkMessage);

router.post("/newMessage", newMessageSend);
router.get("/getMessages/:conversationId", getMessages);
router.post("/uploadFile", upload.single("file"), uploadFile);

module.exports = router;
