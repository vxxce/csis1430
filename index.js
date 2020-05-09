const express = require("express");
const path = require("path");

// App variables
const app = express();
const port = process.env.PORT || "8000";

// Config / Middlewares
app.use(express.static(path.join(__dirname, "public"))); // Serve static assets/resources

// Route definitions
app.get("/", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.get("/tables", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'tables/index.html'))
});

app.get("/pizza-1", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pizza-1/index.html'))
});

app.get("/pizza-2", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'pizza-2/index.html'))
});

app.get("/image-map", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'image-map/index.html'))
});

app.get("/superheroes", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'superheroes/index.html'))
});

app.get("/little-boxes", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'little-boxes/index.html'))
});

app.get("/horizontal-menu", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'horizontal-menu/index.html'))
});

app.get("/js-birthday", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'js-birthday/index.html'))
});

app.get("/mad-lib", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'mad-lib/index.html'))
});

app.get("/guess", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'guess/index.html'))
});

app.get("/lottery", (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'lottery/index.html'))
});

// Server activation
app.listen(port, () => {
  console.log(`Listening http://localhost:${port}`);
});
