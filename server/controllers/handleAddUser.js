const { userData } = require("../models/userModel");

const handleAddUser = async (req, res) => {
  try {
    let exist = await userData.findOne({ sub: req.body.sub });
    if (exist) {
      res.status(200).json({
        success: false,
        msg: "User already exists",
      });
      return;
    }
    const newUser = new userData(req.body);
    await newUser.save();
    return res.status(201).json({
      success: true,
      msg: "User added successfully",
      user: newUser,
    });
  } catch (error) {
    console.error("Error in handleAddUser:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
module.exports = { handleAddUser };
