const express = require("express");
const path = require("path");
const helmet = require('helmet');
var compression = require('compression');

// App variables
const app = express();
const port = process.env.PORT || "8000";

// Config / Middlewares
app.use(compression()); //Compress all routes
app.use(helmet())
app.use(express.static(path.join(__dirname, "public"))); // Serve static assets/resources

// Route definitions
app.get("/", (_req, res) => {
  res.render("index.html");
});

app.get("/test", (_req, res) => {
  res.render("test.html");
});

// Server activation
app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});