const express = require("express");
const path = require("path");

// App variables
const app = express();
const port = process.env.PORT || "8000";

// Route definitions
app.get("/", (req, res) => {
  res.status(200).json("Nice");
});

// Server activation
app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});