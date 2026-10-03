import dns from "node:dns";
import express from "express";
import mongoose from "mongoose";
import dotenv from "@dotenvx/dotenvx";
import UserModel from "./models/user.js";
import authRouter from "./routes/auth.js";
import postRouter from "./routes/post.js";
dotenv.config();

// Node on Windows may use a local DNS (127.0.0.1) that refuses SRV lookups needed by mongodb+srv://
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const app = express();

const MONGO_CONNECTION_URL = process.env.MONGO_CONNECTION_URL;
const DB_NAME = process.env.DATABASE_NAME;

mongoose
  .connect(MONGO_CONNECTION_URL, { dbName: DB_NAME })
  .then(() => console.log("connected to MongoDB"))
  .catch((err) => console.error("MongoDB connection error:", err.message));

app.get("/", (req, res) => {
  res.send("Hello");
});
app.use(express.json(), authRouter, postRouter);

app.listen(4500, () => {
  console.log("server running on 4500");
});
