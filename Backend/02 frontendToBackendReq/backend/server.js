// module js
import express from "express";

// common js
// const express=require("fs")

const app = express();
const PORT = 4000;
app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/jokes", (req, res) => {
  const data = [
    { id: "1", username: "Sonu", salary: 1000 },
    { id: "2", username: "Rohit", salary: 500 },
    { id: "3", username: "Bipin", salary: 100 },
    { id: "4", username: "Mota", salary: 100 },
    { id: "5", username: "Bhim", salary: 1000 },
  ];
  res.send(data);
});

app.listen(PORT, () => {
  console.log("Server is running at localhost:", PORT);
});
