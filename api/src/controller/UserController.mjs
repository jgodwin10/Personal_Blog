import { userModel } from "../User/Users.mjs";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../../utils/ErrorHandler.mjs";
import validator from "validator";
import dotenv from "dotenv";

dotenv.config();

const salt = bcrypt.genSaltSync(10);

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

//Register Controller

export const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  if (!validator.isEmail(email)) {
    return next(errorHandler(400, "E-mail is invalid"));
  }

  if (!validator.isStrongPassword(password)) {
    return next(errorHandler(400, "Password is not strong enough"));
  }

  const emailExist = await userModel.findOne({ email });
  const usernameExist = await userModel.findOne({ username });

  if (emailExist && usernameExist) {
    return next(errorHandler(400, "Username and E-mail are taken"));
  }

  if (emailExist) {
    return next(errorHandler(400, "E-mail is already used"));
  }
  if (usernameExist) {
    return next(errorHandler(400, "Username is already taken"));
  }

  const hashedPassword = bcrypt.hashSync(password, salt);

  const User = await userModel.create({
    username,
    email,
    password: hashedPassword,
  });
  const token = createToken(User._id);

  res.status(200).json({ User, token });
};

//Login Controller

export const login = async (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return next(errorHandler(400, "All fields are required"));
  }

  const User = await userModel.findOne({ username });

  if (!User) {
    return next(errorHandler(404, "User not found"));
  }

  const comparePassword = bcrypt.compareSync(password, User.password);

  if (!comparePassword) {
    return next(errorHandler(400, "Invalid Credentials"));
  }
  const token = createToken(User._id);

  res.status(200).json({ User, token });
};
