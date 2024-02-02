// Import express
const express = require("express");

// Create instance of express
const app = express();

// Define hostname and port
const hostname = "localhost";
const port = 3000;

// creating route
app.get("/", (req, res) => {
  res.send("Hello Sonu Mondal!");
});

// Output
app.listen(port, () => {
  console.log(`Server running at ${hostname}:${port}`);
});
