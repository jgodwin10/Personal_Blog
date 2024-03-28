import express from "express";
import router from "./src/Router/router.mjs";
import cors from "cors";
import mongoose from "mongoose";

const app = express();



app.use(cors());
app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://Unrighteous:lS7fnvgMQmsmqeZu@cluster0.heo3txq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => console.log("Connected!"))
  .catch((error) => console.error("Error connecting:", error));

app.use(router);

const PORT = process.env.PORT || 3000;



app.listen(PORT, () => {
  console.log("heello");
});
