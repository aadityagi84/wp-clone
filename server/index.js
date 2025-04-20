const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1>hello from Server");
});

app.listen(PORT, () => {
  console.log(`Server will be worked on http://localhost:${PORT}`);
});
