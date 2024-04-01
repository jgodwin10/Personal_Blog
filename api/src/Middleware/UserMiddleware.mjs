import { userModel } from "../User/Users.mjs";
import jwt from "jsonwebtoken";

export const UserMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
};

export const Auth = async (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json("Unauthorized User");
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET);

    const user = await userModel.findOne({ _id }).select("_id");

    req.user = user;

    next();
  } catch (err) {
    res.status(401).json("Unauthorized Token");
  }
};
