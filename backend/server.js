import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { userRouter } from "./routes/userRoute.js";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(userRouter);

mongoose
  .connect(process.env.URI)
  .then(() => {
    console.log("App connected to database");
    app.listen(process.env.PORT, (err) => {
      err && console.log(err);
      console.log(`Servers active on port ${process.env.PORT}`);
    });
  })
  .catch((error) => {
    console.log(error.message);
  });
