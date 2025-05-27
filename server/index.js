const express = require("express");
const db = require("./config/db");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv").config();
const authRoutes = require("./routes/userRoute");

const PORT = process.env.PORT || 3000;

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// db connection
require("events").EventEmitter.defaultMaxListeners = 20;
db();

// routes
app.use("/api", authRoutes);

app.get("/", (req, res) => {
  res.send("<h1>hello from Server");
});

app.listen(PORT, () => {
  console.log(`Server will be worked on http://localhost:${PORT}`);
});
