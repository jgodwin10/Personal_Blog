import { Router } from "express";
import express from "express";
import { register, login } from "../controller/UserController.mjs";
import { Auth } from "../Middleware/UserMiddleware.mjs";

const app = express();
const router = Router();

app.use(Auth);

router.post("/register", register);

router.post("/login", login);

export default router;
