import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import UserModel from "../models/user.js";
const middleWare = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "you must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }
    const { _id } = payload;

    UserModel.findOne({ email: _id }).then((result) => {
      req.user = result;
      next();
    });
  });
};
export default middleWare;
