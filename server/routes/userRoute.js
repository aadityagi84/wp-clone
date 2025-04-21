const express = require("express");
const { handleAddUser } = require("../controllers/handleAddUser");
const { handleGetuser } = require("../controllers/handleGetuser");
const router = express.Router();

router.post("/addUser", handleAddUser);
router.get("/getUser", handleGetuser);

module.exports = router;
