const mongoose = require("mongoose");
require("dotenv").config();

const db = async () => {
  console.log("Attempting to connect to MongoDB...");
  try {
    const success = await mongoose.connect(process.env.MONGO_URI);
    if (success) return console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("DB connection failed:", error.message);
  }
};

module.exports = db;
