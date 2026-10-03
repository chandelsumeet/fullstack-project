import express from "express";
import mongoose from "mongoose";
import PostModel from "../models/post.js";
import middleWare from "../middleware/requireLogin.js";
const router = express.Router();

router.post("/createpost", middleWare, (req, res) => {
  const { title, body } = req.body;

  if (!title || !body) {
    return res.status(422).json({ error: "title or body missing" });
  }
  console.log("user", req.user);

  const post = new PostModel({
    title,
    body,
    postedBy: req.user,
  });
  post
    .save()
    .then((result) => {
      res.json({ post: result });
    })
    .catch((err) => console.log(err));
});

export default router;
