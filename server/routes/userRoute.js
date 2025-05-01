const express = require("express");
const { handleAddUser } = require("../controllers/handleAddUser");
const { handleGetuser } = require("../controllers/handleGetuser");
const {
  startMessage,
  checkMessage,
} = require("../controllers/handleConversatation");
const router = express.Router();

router.post("/addUser", handleAddUser);
router.get("/getUser", handleGetuser);
router.post("/startConversation", startMessage);
router.post("/getConversation", checkMessage);
module.exports = router;
