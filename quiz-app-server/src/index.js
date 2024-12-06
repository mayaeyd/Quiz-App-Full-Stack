import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectToDB from "./db/connection.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
  connectToDB();
});
