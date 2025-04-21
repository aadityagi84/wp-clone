const { userData } = require("../models/userModel");

const handleGetuser = async (req, res) => {
  try {
    const users = await userData.find({});
    return res.status(200).json({
      success: true,
      userData: users,
    });
  } catch (error) {
    console.error("Error in handleGetuser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { handleGetuser };
