import express from "express";
import mongoose from "mongoose";
const router = express.Router();
import bcrypt from "bcryptjs";
import UserModel from "../models/user.js";
import jwt from "jsonwebtoken";
import middleWare from "../middleware/requireLogin.js";

router.post("/signup", async (req, res) => {
  const { name, password, email } = req.body;
  if (!email || !password || !name) {
    return res.json({ error: "please send all the fields" });
  }
  UserModel.find({ email })
    .then((result) => {
      console.log("result=>", result);
      if (result.length > 0) {
        return res.json({ error: "user already exists!!" });
      }
      bcrypt.hash(password, 12).then((hashedPassword) => {
        const user = new UserModel({
          name,
          email,
          password: hashedPassword,
        });
        user
          .save()
          .then(() => {
            return res.json({ message: "save successfully", email });
          })
          .catch((err) => {
            console.error(err);
          });
      });
    })
    .catch((err) => console.log(error));
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(422).json({ error: "please add email or password" });
  }

  UserModel.findOne({ email }).then((result) => {
    if (!result) {
      return res.status(422).json({ error: "invalid email address" });
    }
    bcrypt
      .compare(password, result.password)
      .then((doMatch) => {
        if (doMatch) {
          const token = jwt.sign({ _id: result.email }, process.env.JWT_SECRET);
          return res.json({ token });
        }
        return res.status(422).json({ error: "invalid email or password" });
      })
      .catch((err) => console.log(err));
  });
});

export default router;
