import { Router } from "express";
import { userModel } from "../User/Users.mjs";
import bcrypt from "bcryptjs";

const salt = bcrypt.genSaltSync(10);

const router = Router();

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;

  try {
    const userDoc = await userModel.create({
      username,
      password: bcrypt.hashSync(password, salt),
      email,
    });
    res.json(userDoc);
  } catch (error) {
    res.status(400).json(error);
  }
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const User = await userModel.findOne({ username });
  const Passwordvalid = bcrypt.compareSync(password, User.password);

  if (!Passwordvalid) {
    return res.status(401).json("Unauthorized user");
  }
  res.json(User);
});

export default router;
