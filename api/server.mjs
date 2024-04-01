import express from "express";
import router from "./src/Router/router.mjs";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import { UserMiddleware } from "./src/Middleware/UserMiddleware.mjs";

dotenv.config();

const app = express();

app.use(express.json());

mongoose
  .connect(process.env.MONGO)
  .then(() => console.log("Connected!"))
  .catch((error) => console.error("Error connecting:", error));

app.use(router);

app.use(UserMiddleware);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("heello");
});
