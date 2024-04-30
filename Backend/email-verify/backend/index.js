import express from "express";
import cors from "cors";
import dotenv from "dotenv"

const app = express();

dotenv.config({
  path: "./.env",
});

app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

// Middleware to parse JSON bodies
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

// Route to send verification email
import userRouter from "./route.js"
app.use("/", userRouter)

app.listen(5000, () => {
  console.log(`server is running at http://localhost:5000`);
});
